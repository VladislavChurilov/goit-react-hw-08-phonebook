import { combineReducers } from 'redux';
// import types from './types';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const contacts = createReducer([], {
  // 'phonebook/add': (state, { payload }) => [...state, payload],
  [actions.addContact]: (state, { payload }) => {
    const duplication = state.find(
      ({ name }) => name.toLowerCase() === payload.name.toLowerCase(),
    );
    if (duplication) {
      alert(`${payload.name} is alredy in contacts`);
    }
    return duplication ? state : [...state, payload];
  },
  [actions.deleteContacts]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
// const contacts = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       const duplication = state.find(
//         ({ name }) => name.toLowerCase() === payload.name.toLowerCase(),
//       );
//       if (duplication) {
//         alert(`${payload.name} is alredy in contacts`);
//       }
//       return duplication ? state : [...state, payload];
//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };
const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});
// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };
export default combineReducers({
  contacts,
  filter,
});
