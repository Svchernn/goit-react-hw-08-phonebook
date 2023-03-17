import { useSelector, useDispatch } from 'react-redux';
import Loader from 'shared/components/Loader/Loader';
import { fetchDeleteContact } from 'redux/contacts/contacts-operations';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { isLoading } from 'redux/contacts/contacts-selectors';
import { FcBusinessContact } from 'react-icons/fc';
import css from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  const loadingContacts = useSelector(isLoading);

  if (loadingContacts) {
    return <Loader />;
  }

  return (
    <>
      {filteredContacts.length > 0 ? (
        <table className={css.table}>
          <tbody>
            {filteredContacts.map(({ id, name, number }, index) => {
              return (
                <tr key={id}>
                  <td>{index + 1}.</td>
                  <td valign="bottom">
                    <span role="img">{<FcBusinessContact />}</span>
                  </td>
                  <td>{name}</td>
                  <td>{number}</td>
                  <td>
                    <button
                      className={css.itemBtn}
                      onClick={() => handleDeleteContact(id)}
                      type="button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No contacts!</p>
      )}
    </>
  );
};

export default ContactList;
