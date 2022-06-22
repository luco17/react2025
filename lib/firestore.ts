import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";
import { StoredUserInfo } from "@/context/AuthContext";
import { FormInputs } from "components/AddSiteModal";

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

export function createSite(siteData: FormInputs) {
  const site = addDoc(collection(db, "sites"), siteData);

  return site;
}
