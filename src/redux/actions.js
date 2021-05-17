import { v4 as uuidv4 } from 'uuid';
import types from './types';

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});
const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});
const deleteContacts = nameId => ({
  type: types.DELETE,
  payload: nameId,
});

export default { addContact, deleteContacts, changeFilter };
