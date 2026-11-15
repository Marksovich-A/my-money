import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

// custom hook
import { useGlobalContext } from "./useGlobalContext";

//toast
import { toast } from "sonner";

export const useLogin = () => {
    const {dispetch} = useGlobalContext()
    const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    const user = userCredential.user;
    dispetch({type: "LOGIN", payload: user})
    toast.success("You Welcome")
    console.log(user)
  })
  .catch((error) => {
    const errorMessage = error.message;
  });
    }

    return {login};
}