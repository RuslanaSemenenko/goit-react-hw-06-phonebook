// import './Contact.module.jsx';
// import PropTypes from 'prop-types';

// export const Contact = ({ contact }) => {
//   return (
//     <div className="List_item">
//       <span>
//         {contact.name}: <span className="List_span">{contact.number}</span>
//       </span>
//     </div>
//   );
// };

// Contact.propTypes = {
//   contact: PropTypes.object,
// };

import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className="List_item">
      <span>
        {contact.name}: <span className="List_span">{contact.number}</span>
      </span>
      <button className="List_button" onClick={handleDelete}>
        delete
      </button>
    </div>
  );
};