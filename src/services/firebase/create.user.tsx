import { auth } from "../../config/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

export const createNewUser = async (
  email: string,
  password: string,
  avatar: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    console.log("Nouvel utilisateur créé avec UID :", user.uid);

    // On sauvegarde les détails du profil utilisateur dans la BDD
    await saveUserDetailsToDatabase(user.uid, avatar);

    return user;
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur :", error);
    throw error;
  }
};

export const saveUserDetailsToDatabase = async (
  userId: string,
  avatar: string
) => {
  const db = getDatabase();
  const userRef = ref(db, "users/" + userId);

  try {
    // On enregistre les détails supp du profil dans la BDD
    await set(userRef, { avatar });
    console.log(
      "Détails du profil enregistrés avec succès dans la base de données."
    );
  } catch (error) {
    console.error(
      "Erreur lors de l'enregistrement des détails du profil dans la base de données :",
      error
    );
    throw error;
  }
};
