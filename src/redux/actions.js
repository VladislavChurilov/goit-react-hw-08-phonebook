import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/add', ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));
const changeFilter = createAction('phonebook/changeFilter');
const deleteContacts = createAction('phonebook/delete');

export default { addContact, deleteContacts, changeFilter };
