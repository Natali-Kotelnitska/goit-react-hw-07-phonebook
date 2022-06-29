// Selectors - це ф-ї які допомагають нам щось повертати з нашого стейта
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
