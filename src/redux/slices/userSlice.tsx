import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types/userType";

// Initial state type
type UserState = {
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
  },
});

// Exportation des actions
export const { setAuthenticatedUser } = userSlice.actions;

// Exportation du reducer
export default userSlice.reducer;
