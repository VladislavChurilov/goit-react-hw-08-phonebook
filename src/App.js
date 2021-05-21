import { Component } from 'react';
import styles from './Phonebook.module.css';
import Conteiner from './components/Conteiner';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <Conteiner>
        <h1 className={styles.titleHead}>Phonebook</h1>
        <Form />
        <h2 className={styles.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </Conteiner>
    );
  }
}

export default App;
