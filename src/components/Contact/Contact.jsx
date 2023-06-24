import './Contact.module.jsx';
import PropTypes from 'prop-types';

export const Contact = ({ contact }) => {
  return (
    <div className="List_item">
      <span>
        {contact.name}: <span className="List_span">{contact.number}</span>
      </span>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.object,
};
