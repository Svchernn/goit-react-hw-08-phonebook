import { createSlice } from '@reduxjs/toolkit';
import {
  userSingup,
  userLogin,
  currentUser,
  userLogout,
} from './auth-operations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(userSingup.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userSingup.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(userSingup.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(userLogin.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(currentUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        const { mail, name } = payload;
        state.loading = false;
        state.user.name = name;
        state.user.email = mail;
        state.isLogin = true;
      })
      .addCase(currentUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.token = '';
        state.error = payload;
      })
      .addCase(userLogout.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogout.fulfilled, state => {
        state.loading = false;
        state.user = {};
        state.token = '';
        state.isLogin = false;
      })
      .addCase(userLogout.rejected, (state, { payload }) => {
        state.loading = false;
        state.token = '';
        state.error = payload;
      });
  },
});

export default authSlice.reducer;
