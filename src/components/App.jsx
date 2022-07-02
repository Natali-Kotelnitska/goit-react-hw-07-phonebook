import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 700,
        color: '#010101',
        padding: '20px 45px',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
