import { useDeleteContactMutation } from 'services/contactsApi';
import PropTypes from 'prop-types';

import s from './ContactList.module.css';

export default function ContactListItem({ id, name, number }) {
  // const dispatch = useDispatch();
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

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
        // onClick={() => dispatch(deleteContact(id))}
        onClick={() => deleteContact(id)}
        disabled={isLoading}
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
