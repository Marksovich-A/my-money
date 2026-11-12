//firebase
import { auth } from "../firebase/firebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth";


export const useSignup = () => {
   const signUp = (userName, email, password) => {
   createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
   console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
   }

  return {signUp}
}