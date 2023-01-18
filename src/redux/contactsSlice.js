import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items = [...state.items, action.payload];
      },
      prepare(contact) {
        return {
          payload: {
            id: contact.id,
            name: contact.name,
            number: contact.number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return {
        items: state.items.filter(contact => contact.id !== action.payload),
      };
    },
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.error = null;
      state.isLoading = false;
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const {
  addContact,
  deleteContact,
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} = contactsSlice.actions;

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
