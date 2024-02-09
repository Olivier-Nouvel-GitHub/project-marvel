import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types/userType";

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
