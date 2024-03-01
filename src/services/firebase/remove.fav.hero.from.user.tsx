import { getDatabase, ref, get, set } from "firebase/database";

export const removeFavHeroFromUserService = async (
  userId: string,
  heroId: number
) => {
  const db = getDatabase();
  const userFavHeroesRef = ref(db, `users/${userId}/favHeroes`);

  try {
    const snapshot = await get(userFavHeroesRef);
    if (snapshot.exists()) {
      let favHeroes = snapshot.val();
      // On trouve la clé du héro à supprimer
      const heroKey = Object.keys(favHeroes).find(
        (key) => favHeroes[key].id === heroId
      );
      if (heroKey) {
        // On assigne `null` à la clé pour supprimer le héro spécifique
        await set(ref(db, `users/${userId}/favHeroes/${heroKey}`), null);
      }
    }
  } catch (error) {
    throw error;
  }
};
