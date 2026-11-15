import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "sonner";

export const useSignout = () => {
  const signoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("See you soon")
      })
      .catch((error) => {
        toast.error("Try later")
      });
  };

  return {signoutUser}
};
