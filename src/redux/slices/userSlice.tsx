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
      const newUser = {
        ...action.payload,
        favHeroes: action.payload.favHeroes || [],
      };
      state.authenticatedUser = newUser;
    },
    addFavHeroToUser: (state, action: PayloadAction<HeroType>) => {
      if (state.authenticatedUser) {
        const heroId = action.payload.id.toString(); // Assurez-vous que l'ID est une chaîne pour la clé d'objet
        // Vérifie si le héros est déjà dans les favoris pour éviter les doublons
        if (!state.authenticatedUser.favHeroes[heroId]) {
          state.authenticatedUser.favHeroes[heroId] = action.payload;
        }
      }
    },
    removeFavHeroFromUser: (state, action: PayloadAction<number>) => {
      if (state.authenticatedUser) {
        // Convertit l'ID en string pour l'utiliser comme clé
        const heroId = action.payload.toString();
        if (state.authenticatedUser.favHeroes[heroId]) {
          delete state.authenticatedUser.favHeroes[heroId];
        }
      }
    },
    clearAuthenticatedUser(state) {
      state.authenticatedUser = null;
    },
  },
});

// Exportation des actions
export const {
  setAuthenticatedUser,
  clearAuthenticatedUser,
  addFavHeroToUser,
  removeFavHeroFromUser,
} = userSlice.actions;

// Exportation du reducer
export default userSlice.reducer;
