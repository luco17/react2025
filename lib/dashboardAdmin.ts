import { collection, query, where, getDocs } from "firebase/firestore";
import { compareDesc, parseISO } from "date-fns";

import { db } from "./firebase";

export async function getAllFeedback(siteId: string | string[]) {
  try {
    const q = query(collection(db, "feedback"), where("siteId", "==", siteId));

    const snapshot = await getDocs(q);
    const feedback = [];

    snapshot.forEach((doc) => {
      feedback.push({ id: doc.id, ...doc.data() });
    });

    feedback.sort((a, b) =>
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    );

    return { feedback };
  } catch (error) {
    return { error };
  }
}

export async function getAllSites() {
  const snapshot = await getDocs(collection(db, "sites"));
  const sites = [];

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  return sites;
}
