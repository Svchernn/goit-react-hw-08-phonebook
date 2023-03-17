import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/services/contacts';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetch/all',
  async (_, thunkAPI) => {
    try {
      const data = await api.getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contact/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  },
  {
    condition: ({ name }, { getState }) => {
      const { contacts } = getState();
      const normalizedName = name.toLowerCase();
      const dublicateName = contacts.items.find(({ name }) => {
        return name.toLowerCase() === normalizedName;
      });
      if (dublicateName) {
        alert(`${name} is already in contacts`);
        return false;
      }
    },
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contact/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
