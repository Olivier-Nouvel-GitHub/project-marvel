import { getDatabase, ref, get } from "firebase/database";

export async function fetchUserDetails(uid: string) {
  const db = getDatabase();
  try {
    const snapshot = await get(ref(db, `users/${uid}`));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
}
