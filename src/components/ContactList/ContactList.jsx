import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'services/contactsApi';
import ContactListItem from './ContactListItem';
import { getFilter } from 'redux/contacts/contactsSelectors';

import s from './ContactList.module.css';

export default function ContactList() {
  const { data: contacts, isLoading, isError } = useGetContactsQuery();
  const filter = useSelector(getFilter);
  const normalizedData = filter && filter.toLowerCase();
  const normalizedContacts =
    contacts &&
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedData)
    );

  const isContacts = normalizedContacts && normalizedContacts.length > 0;

  return (
    <>
      {isLoading && <p>Loading ...</p>}
      {isError && <p>An error has occurred!</p>}
      {isContacts && (
        <ul className={s.contactsList}>
          {normalizedContacts.map(({ id, name, phone }) => (
            <ContactListItem name={name} number={phone} key={id} id={id} />
          ))}
        </ul>
      )}
    </>
  );
}
