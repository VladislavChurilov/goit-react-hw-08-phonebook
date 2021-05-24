import { Component } from 'react';
import { connect } from 'react-redux';
import { operations, selectors } from '../../redux';
import styles from '../../Phonebook.module.css';

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <>
        <h2 className={styles.title}>Contacts</h2>
        {this.props.isLoading && <h1>Loading...</h1>}
        <ul>
          {this.props.contacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
              <button onClick={() => this.props.onDelete(id)}>Delete</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: selectors.getVisibleContacts(state),
  isLoading: selectors.getLoading(state),
});
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
  onDelete: id => dispatch(operations.deleteContacts(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
