import { createSlice } from "@reduxjs/toolkit";

const initialUser = {
  firstName: "",
  LastName: "",
  avatar: "",
  email: "",
};

const initialState = {
  isLoggedIn: false,
  user: initialUser,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    updateAuth(state, action) {
      state.user = {...state.user, ...action.payload};
    },
    removeAuth(state, action) {
      state.user = initialUser;
      state.isLoggedIn = false;
      state = { ...state };
      window.location.href = '/';
    },
  },
});

export default auth.reducer;

export const {
  setAuth,
  updateAuth,
  removeAuth
} = auth.actions;
