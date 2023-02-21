import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/user.type";
// import { User } from "firebase/auth";
// import { Login, UserData } from "../../types/user.type";
// import { AdditionInfo } from "../../utils/firebase/firebase.utils";

type UserState = {
  user: User | null;
  isLoading: boolean;
  error?: Error | null;
};

const INITIAL_STATE: UserState = {
  user: null,
  isLoading: false,
  error: null,
};

export const userReducer = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    getUserLoading: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    getUserFail: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUserFail, getUserLoading, getUserSuccess } =
  userReducer.actions;

export default userReducer.reducer;
