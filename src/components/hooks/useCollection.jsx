import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import {db} from "../firebase/firebaseConfig"

function useCollection(collectionName) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, collectionName), (querSnapshot) => {
        const dataFromCollection = []
        querSnapshot.forEach((doc) => {
            dataFromCollection.push({id:doc.id, ...doc.data()})
        })

        setData(dataFromCollection)
    });
    
    return () => unsubscribe();

  }, [collectionName]);

  return { data };
}

export default useCollection;
