import {
  collection,
  query,
  where,
  getDocs,
  QuerySnapshot,
} from "firebase/firestore";

import { db } from "./firebase";

interface Feedback {
  id: string;
  author: string;
  authorId: string;
  createdAt: string;
  provider: string;
  rating: number;
  siteId: string;
  status: string;
  text: string;
}

export async function getAllFeedback(siteId: string) {
  const q = query(collection(db, "feedback"), where("siteId", "==", siteId));

  const snapshot = await getDocs(q);
  const feedback = [];

  snapshot.forEach((doc) => {
    feedback.push({ id: doc.id, ...doc.data() });
  });

  return { feedback };
}

export async function getAllSites() {
  const snapshot = await getDocs(collection(db, "sites"));
  const sites = [];

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  return sites;
}
