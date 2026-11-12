//firebase
import { collection, addDoc, doc, deleteDoc } from "firebase/firestore"; 
import { db } from "../firebase/firebaseConfig";
import { toast, Toaster } from "sonner";


export const useFireStore = () => {

    const addDocument = (data) => {
    addDoc(collection(db, "tranzit"), data)
    .then(() => console.log("Succesfully"))
    .catch((error) => console.log(error.message))
    }

    const deleteDocument = (id) => {
        deleteDoc(doc(db, "tranzit", id))
        .then(() => toast.success("Deleted"))
        .catch((error) => toast.error(error))
    }

    return {addDocument, deleteDocument}
}