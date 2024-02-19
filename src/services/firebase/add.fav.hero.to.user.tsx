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

    let count = Object.keys(favHeroes).length;

    if (hero.id in favHeroes) {
      return {
        success: false,
        message: "Le héro existe déjà dans les favoris.",
      };
    }

    if (count >= 5) {
      return {
        success: false,
        message: "Vous possédez déjà 5 héros en favoris.",
      };
    }
    // On ajoute le héro en utilisant son ID comme clé
    favHeroes[hero.id] = hero;

    await update(userFavHeroesRef, favHeroes);
    return { success: true, message: "Héro ajouté aux favoris." };
  } catch (error) {
    return {
      success: false,
      message: "Erreur lors de l'ajout d'un héro aux favoris.",
    };
  }
};
