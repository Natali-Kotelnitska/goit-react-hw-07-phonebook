import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { ADD, DELETE, FILTER } from './contactsTypes';

// createAction(type, prepareAction?), повертає ф-ю action creator(), let action=addContact() або addContact(3)-type..., payload: 3
export const addContact = createAction(ADD, contact => ({
  payload: {
    id: nanoid(),
    ...contact,
  },
}));

export const deleteContact = createAction(DELETE);
// export const filterContact = createAction(FILTER, event => ({
//   payload: event.currentTarget.value,
// }));
export const filterContact = createAction(FILTER);
