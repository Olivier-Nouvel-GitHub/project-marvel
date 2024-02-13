import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HeroType } from "../../types/heroType";

// Initial state type
type HeroState = {
  selectedHero: HeroType | null;
};

// État initial
const initialState: HeroState = {
  selectedHero: null,
};

const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    setHeroes: (state, action: PayloadAction<HeroType>) => {
      state.selectedHero = action.payload;
    },
  },
});

// Exportation des actions
export const { setHeroes } = heroesSlice.actions;

// Exportation du reducer
export default heroesSlice.reducer;
