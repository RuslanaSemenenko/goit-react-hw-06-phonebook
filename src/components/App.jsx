import React, { useState } from 'react';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

export default function App() {
  const [filter, setFilter] = useState('');

  const changeFilter = filter => {
    setFilter(filter);
  };

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />
      <h2>Contacts</h2>
      <Filter value={filter} onChangeFilter={changeFilter} />
      <ContactList filter={filter} />
    </div>
  );
}
