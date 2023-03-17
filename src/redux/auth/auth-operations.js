import { createAsyncThunk } from '@reduxjs/toolkit';

import { singup, login, getCurrent, logout } from 'shared/services/auth';

export const userSingup = createAsyncThunk(
  'auth/singup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await singup(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await login(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await getCurrent(auth.token);

      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const userLogout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logout();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
