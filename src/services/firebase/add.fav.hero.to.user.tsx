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
      return { success: true, message: "Héro ajouté aux favoris." };
    } else {
      return {
        success: false,
        message: "Le héro existe déjà dans les favoris.",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Erreur lors de l'ajout d'un héro aux favoris.",
    };
    throw error;
  }
};
