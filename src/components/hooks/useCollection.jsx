import { useEffect, useState } from "react";
import { onSnapshot, query, where, collection } from "firebase/firestore";
import {db} from "../firebase/firebaseConfig"

function useCollection(c, _q) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, c), (querSnapshot) => {
        const dataFromCollection = []
        querSnapshot.forEach((doc) => {
            dataFromCollection.push({id:doc.id, ...doc.data()})
        })

        setData(dataFromCollection)
    });
    
    return () => unsubscribe();

  }, [c]);

  return { data };
}

export default useCollection;
