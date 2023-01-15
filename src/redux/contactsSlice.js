import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './constants';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        // localStorage.setItem('contacts', JSON.stringify(state));
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
      const newState = state.filter(contact => contact.id !== action.payload);
      // localStorage.setItem('contacts', JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
