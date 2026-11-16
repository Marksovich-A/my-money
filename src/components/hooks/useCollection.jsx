  import { useEffect, useRef, useState } from "react";
  import { onSnapshot, query, where, collection } from "firebase/firestore";
  import {db} from "../firebase/firebaseConfig"

  function useCollection(c, _q) {
    const [data, setData] = useState(null);
    const q = useRef(_q).current

    let ref = collection(db, c)
    if(q) {
      ref = query(collection(db, c), where(...q));
    }

    useEffect(() => {
      const unsubscribe = onSnapshot(ref, (querSnapshot) => {
          const dataFromCollection = []
          querSnapshot.forEach((doc) => {
              dataFromCollection.push({id:doc.id, ...doc.data()})
          })

          setData(dataFromCollection)
      });
      
      return () => unsubscribe();

    }, [c, q]);

    return { data };
  }

  export default useCollection;
