import { combineReducers } from "@reduxjs/toolkit";
import heroesReducer from "./heroesSlice";

// Définir l'état global en combinant les reducers
const rootReducer = combineReducers({
  heroes: heroesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
