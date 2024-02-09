import { combineReducers } from "@reduxjs/toolkit";
import heroesReducer from "./slices/heroesSlice";
import userReducer from "./slices/userSlice";

// Définir l'état global en combinant les reducers
const rootReducer = combineReducers({
  heroes: heroesReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
