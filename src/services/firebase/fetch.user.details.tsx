import { getDatabase, ref, get } from "firebase/database";

export async function fetchUserDetails(uid: string) {
  const db = getDatabase();
  try {
    const snapshot = await get(ref(db, `users/${uid}`));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No user details found.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
}
