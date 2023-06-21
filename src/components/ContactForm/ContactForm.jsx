import React from 'react';
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

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    form.reset();
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
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
