import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";
import { StoredUserInfo } from "@/context/AuthContext";
import { SiteData } from "components/AddSiteModal";
import type { FeedbackProps } from "components/Feedback";

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

export function createSite(siteData: SiteData) {
  const site = addDoc(collection(db, "sites"), siteData);

  return site;
}

export function createFeedback(feedbackData: FeedbackProps) {
  const feedback = addDoc(collection(db, "feedback"), feedbackData);

  return feedback;
}
