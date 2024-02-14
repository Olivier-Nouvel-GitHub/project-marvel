import { getDatabase, ref, get, update } from "firebase/database";
import { HeroType } from "../../types/heroType";

export const removeFavHeroFromUserService = async (
  userId: string,
  heroId: number
) => {
  const db = getDatabase();
  const userFavHeroesRef = ref(db, `users/${userId}/favHeroes`);

  try {
    const snapshot = await get(userFavHeroesRef);
    let favHeroes = snapshot.val() ? snapshot.val() : [];

    favHeroes = favHeroes.filter((h: HeroType) => h.id !== heroId);

    await update(userFavHeroesRef, favHeroes);
    console.log("Héro retiré des favoris.");
  } catch (error) {
    console.error(
      "Erreur lors de la suppression d'un héro des favoris :",
      error
    );
    throw error;
  }
};
