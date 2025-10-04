import { createSlice } from "@reduxjs/toolkit";

let parsedUser = null;
let storedToken = null;

if (typeof window !== "undefined") {
  try {
    const storedUser = localStorage.getItem("user");
    storedToken = localStorage.getItem("token");

    // ✅ Handle invalid or "undefined" strings safely
    if (storedUser && storedUser !== "undefined" && storedUser !== "null") {
      parsedUser = JSON.parse(storedUser);
    }
  } catch (error) {
    console.error("Error parsing user data from localStorage:", error);
    parsedUser = null;
  }
}

const initialState = {
  user: parsedUser,
  token: storedToken && storedToken !== "undefined" ? storedToken : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", action.payload.token);
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
