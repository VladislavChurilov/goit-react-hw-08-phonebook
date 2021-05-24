import axios from 'axios';

import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './actions';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.massage));
  }
};
// const fetchContacts = () => dispatch => {
//   dispatch(fetchContactsRequest());
//   axios
//     .get('/phonebook')
//     .then(({ data }) => dispatch(fetchContactsSuccess(data)))
//     .catch(error => dispatch(fetchContactsError(error)));
// };
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const addContact =
  ({ name, number }) =>
  dispatch => {
    const contacts = { name, number };
    dispatch(addContactRequest());
    axios
      .post('/contacts', contacts)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch(error => dispatch(addContactError(error.massage)));
  };
const deleteContacts = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error.massage)));
};
export default {
  fetchContacts,
  addContact,
  deleteContacts,
};
