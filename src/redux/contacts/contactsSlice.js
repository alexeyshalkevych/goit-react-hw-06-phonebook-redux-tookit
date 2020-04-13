import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { isInvalidContact, hasStateContact } from '../../utils/helpers';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    GET_ALL_CONTACTS: (state, { payload }) => [...state, ...payload],

    ADD_CONTACT: (state, { payload }) =>
      hasStateContact(state, payload) || isInvalidContact(payload)
        ? state
        : [...state, { id: uuidv4(), ...payload }],

    DELETE_CONTACT: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
  },
});

export const {
  GET_ALL_CONTACTS: getAllContacts,
  ADD_CONTACT: addContact,
  DELETE_CONTACT: deleteContact,
} = contactSlice.actions;

export default contactSlice.reducer;
