import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './constants';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
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
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
