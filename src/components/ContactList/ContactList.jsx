// import React from 'react';
// import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import { getContacts, getFilter } from 'redux/selectors';
// import { Contact } from 'components/Contact/Contact';
// import {
//   TaskList,
//   TaskListItem,
//   TaskListButton,
// } from './ContactList.module.jsx';

// const ContactList = ({ onRemoveContact }) => {
//   const contacts = useSelector(getContacts);
//   const filter = useSelector(getFilter);

//   if (!contacts || !Array.isArray(contacts)) {
//     return null;
//   }

//   const visibleContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <TaskList className="List_box">
//       {visibleContacts.map(contact => (
//         <TaskListItem className="List_item" key={contact.id}>
//           <Contact contact={contact} />
//           <TaskListButton
//             type="button"
//             name="delete"
//             onClick={() => onRemoveContact(contact.id)}
//           >
//             delete
//           </TaskListButton>
//         </TaskListItem>
//       ))}
//     </TaskList>
//   );
// };

// export default ContactList;

// ContactList.propTypes = {
//   onRemoveContact: PropTypes.func.isRequired,
// };

import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';
import { TaskList, TaskListItem } from './ContactList.module.jsx';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  if (!contacts || !Array.isArray(contacts)) {
    return null;
  }

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <TaskList className="List_box">
      {visibleContacts.map(contact => (
        <TaskListItem className="List_item" key={contact.id}>
          <Contact contact={contact} />
        </TaskListItem>
      ))}
    </TaskList>
  );
};

export default ContactList;