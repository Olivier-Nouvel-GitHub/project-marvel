import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types/userType";
import { HeroType } from "../../types/heroType";

// Initial state type
export type UserState = {
  authenticatedUser: UserType | null;
};

// État initial
const initialState: UserState = {
  authenticatedUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthenticatedUser: (state, action: PayloadAction<UserType>) => {
      state.authenticatedUser = action.payload;
    },
    addFavHeroToUser: (state, action: PayloadAction<HeroType>) => {
      const newHero = action.payload;
      if (state.authenticatedUser) {
        // Vérifie si le héros est déjà dans les favoris pour éviter les doublons
        const isHeroAlreadyFav = state.authenticatedUser.favHeroes.some(
          (hero) => hero.id === newHero.id
        );
        if (!isHeroAlreadyFav) {
          state.authenticatedUser.favHeroes.push(newHero);
        }
      }
    },
    removeFavHeroFromUser: (state, action: PayloadAction<number>) => {
      if (state.authenticatedUser) {
        state.authenticatedUser.favHeroes =
          state.authenticatedUser.favHeroes.filter(
            (hero) => hero.id !== action.payload
          );
      }
    },
    clearAuthenticatedUser(state) {
      state.authenticatedUser = null;
    },
  },
});

// Exportation des actions
export const { setAuthenticatedUser, clearAuthenticatedUser } =
  userSlice.actions;

// Exportation du reducer
export default userSlice.reducer;
