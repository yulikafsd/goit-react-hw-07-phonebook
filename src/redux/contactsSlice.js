import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    isAdding: false,
    isDeleting: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,

    [fetchContacts.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      state.items = action.payload;
    },

    [deleteContact.pending](state) {
      state.isDeleting = true;
    },

    [deleteContact.rejected](state, action) {
      state.isDeleting = false;
      state.error = action.payload;
    },

    [deleteContact.fulfilled](state, action) {
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
      state.isDeleting = false;
    },

    [addContact.pending](state) {
      state.isAdding = true;
    },
    [addContact.fulfilled](state, action) {
      state.error = null;
      state.items = [...state.items, action.payload];
      state.isAdding = false;
    },
    [addContact.rejected](state, action) {
      state.isAdding = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
