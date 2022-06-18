import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import { StoredUserInfo } from "@/context/AuthContext";

export function createUser(user: StoredUserInfo) {
  const uid = user.uid;
  const data = {
    email: user.email,
    displayName: user.displayName,
    providerId: user.providerId,
    photoUrl: user.photoUrl,
  };

  return setDoc(doc(db, "users", uid), data);
}
