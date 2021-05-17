import { connect } from 'react-redux';
import actions from '../../redux/actions';

const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
        <button onClick={() => onDelete(id)}>Delete</button>
      </li>
    ))}
  </ul>
);
const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLocaleLowerCase();
  return contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { contacts, filter } }) => ({
  contacts: getVisibleContacts(contacts, filter),
  // contacts: getVisibleContacts(contacts, filter),
});
const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(actions.deleteContacts(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
