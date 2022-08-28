import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("name")) ?? null,
  token: JSON.parse(localStorage.getItem("access_token")) ?? null,
  role: JSON.parse(localStorage.getItem("role")) ?? null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      const { name, role, access_token } = payload;
      localStorage.setItem("access_token", JSON.stringify(access_token));
      localStorage.setItem("name", JSON.stringify(name));
      localStorage.setItem("role", JSON.stringify(role));
      state.user = name;
      state.role = role;
      state.token = access_token;
    },
    logOut: (state, action) => {
      localStorage.clear();
      state.user = null;
      state.token = null;
      state.role = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
