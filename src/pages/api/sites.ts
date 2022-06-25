import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default async (req, res) => {
  const querySnapshot = await getDocs(collection(db, "sites"));
  const sites = [];

  querySnapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  res.status(200).json({ sites });
};
