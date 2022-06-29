import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { addContact, deleteContact, filterContact } from './contactsActions';

// createReducer(почат. state-напр.[], (завжди обєкт cases)) -обробляєм акшини
const items = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  {
    // [addComtact](state, action) - вичисляємі властивості обєкта, теж саме що і 'contact/addContact'
    [addContact]: (state, { payload }) => {
      if (state.find(({ name }) => name === payload.name)) {
        alert(`Contact ${payload.name} is already exist`);
        return state;
      }
      return [...state, payload]; //повертаєм всі контаки + новий контакт
    },

    [deleteContact]: (state, { payload }) =>
      // state.filter(({ id }) => id !== payload),
      state.filter(item => item.id !== payload),
  }
);

const filter = createReducer('', {
  // _(нижнє підкреслення - коли не потрібен state)
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
