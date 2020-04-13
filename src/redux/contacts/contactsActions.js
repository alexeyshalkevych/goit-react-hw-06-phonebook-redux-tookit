import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const getAllContacts = createAction('GET_ALL_CONTACTS');

const addContact = createAction('ADD_CONTACT', contact => ({
  payload: {
    ...contact,
    id: uuidv4(),
  },
}));

const deleteContact = createAction('DELETE_CONTACT');

export default {
  getAllContacts,
  addContact,
  deleteContact,
};
