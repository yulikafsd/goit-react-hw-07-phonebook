import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addMessage,
  deleteMessage,
  errorMessage,
  loadMessage,
  emptyListMessage,
} from 'constants/notifications';

axios.defaults.baseURL = 'https://63c84bea075b3f3a91de67f7.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (signal, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts', { signal });
      response.data.length > 0
        ? loadMessage(response.data)
        : emptyListMessage();
      return response.data;
    } catch (e) {
      if (!e.message === 'canceled') {
        errorMessage(e.message);
      }
      return rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      addMessage(response.data.name);
      return response.data;
    } catch (e) {
      errorMessage(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      deleteMessage(response.data.name);
      return response.data.id;
    } catch (e) {
      errorMessage(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
