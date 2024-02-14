import { useEffect, useState } from "react";
import { auth } from "../config/firebase.config";

export const getAuthId = () => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId("");
      }
    });

    return () => unsubscribe();
  }, []);

  return userId;
};
