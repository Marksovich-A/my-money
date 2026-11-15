//firebase
import { auth } from "../firebase/firebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth";

//toast
import { toast } from "sonner";


export const useSignup = () => {
   const signUp = (userName, email, password) => {
   createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
   toast(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast(errorMessage)
  });
   }

  return {signUp}
}