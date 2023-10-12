import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state:any, action) => {
      state.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', '1');
    },
    logOut: (state:any, action) => {
      state.isLoggedIn = false;
      localStorage.setItem('isLoggedIn', '0');
    }
  }
});

export const { logIn, logOut } = authSlice.actions;
export const authReducer = authSlice.reducer;

export const selectIsLoggedIn = ((state:any) => state.auth.isLoggedIn);