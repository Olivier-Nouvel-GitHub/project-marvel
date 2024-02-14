import { getDatabase, ref, get, update } from "firebase/database";
import { HeroType } from "../../types/heroType";

export const addFavHeroToUserService = async (
  userId: string,
  hero: HeroType
) => {
  const db = getDatabase();
  const userFavHeroesRef = ref(db, `users/${userId}/favHeroes`);

  try {
    const snapshot = await get(userFavHeroesRef);
    let favHeroes = snapshot.val() ? snapshot.val() : {};

    // On vérifie si le héro existe déjà pour éviter les doublons
    if (!(hero.id in favHeroes)) {
      // On ajoute le héro en utilisant son ID comme clé
      favHeroes[hero.id] = hero;

      await update(userFavHeroesRef, favHeroes);
      console.log("Héro ajouté aux favoris.");
    } else {
      console.log("Le héro existe déjà dans les favoris.");
    }
  } catch (error) {
    console.error("Erreur lors de l'ajout d'un héro aux favoris :", error);
    throw error;
  }
};
