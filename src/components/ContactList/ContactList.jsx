// import React from 'react';
// import PropTypes from 'prop-types';
// import {
//   TaskList,
//   TaskListItem,
//   TaskListButton,
// } from './ContactList.module.jsx';

// const ContactList = ({ contacts, onRemoveContact }) => (
//   <TaskList>
//     {contacts.map(contact => (
//       <TaskListItem key={contact.id}>
//         {contact.name + ':' + contact.number}
//         <TaskListButton
//           type="button"
//           name="delete"
//           onClick={() => onRemoveContact(contact.id)}
//         >
//           delete
//         </TaskListButton>
//       </TaskListItem>
//     ))}
//   </TaskList>
// );

// ContactList.propTypes = {
//   onRemoveContact: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default ContactList;


import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;

      const searchSameName = state.some(contact => contact.name === name);

      if (searchSameName) {
        alert(`${name} is already in contacts`);
      } else if (name.length === 0 || number.length === 0) {
        alert('Fields must be filled!');
      } else {
        const newContact = {
          id: uuidv4(),
          name,
          number,
        };
        state.push(newContact);
      }
    },
    removeContact: (state, action) => {
      const contactId = action.payload;
      const index = state.findIndex(contact => contact.id === contactId);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addContact, removeContact } = contactSlice.actions;
export default contactSlice.reducer;
