import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import {
  TaskEditor,
  TaskEditorLabel,
  TaskEditorInput,
  TaskEditorButton,
} from './ContactForm.module.jsx';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    if (name.trim() === '' || number.trim() === '') {
      alert('Fields must be filled!');
      return;
    }

    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <TaskEditor onSubmit={handleSubmit}>
      <TaskEditorLabel>
        Name
        <TaskEditorInput
          className="Form_input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </TaskEditorLabel>
      <TaskEditorLabel>
        Number
        <TaskEditorInput
          className="Form_input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </TaskEditorLabel>
      <TaskEditorButton type="submit">Add contact</TaskEditorButton>
    </TaskEditor>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.array,
};
