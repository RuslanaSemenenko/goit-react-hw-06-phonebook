import React, { dispatch, deleteContact } from 'react';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

export default function App() {
  const onRemoveContact = contactId => {
    dispatch(deleteContact(contactId));
    // тут додасиш свій код для видалення
  };

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList onRemoveContact={onRemoveContact} />
    </div>
  );
}
