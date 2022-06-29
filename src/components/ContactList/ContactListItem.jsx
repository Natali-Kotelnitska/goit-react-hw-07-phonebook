import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/contactsActions';
import s from './ContactList.module.css';

export default function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <li className={s.contactsItem}>
      <p className={s.contactsText}>
        <span className={s.contactName}>{name}:</span>
        <span>
          <a href={`tel:${number}`} className={s.contactTel}>
            {number}
          </a>
        </span>
      </p>
      <button
        type="button"
        className={s.contactsBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
