import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

export default function App() {
  const dispatch = useDispatch();

  const onRemoveContact = contactId => {
    dispatch(deleteContact(contactId));
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
