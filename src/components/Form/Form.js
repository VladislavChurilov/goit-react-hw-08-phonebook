import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { operations } from '../../redux';
import ContactList from '../ContactList';
import Filter from '../Filter';
import style from './Form.module.css';
import { Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = {
  FormControl: {
    display: 'flex',
    marginBottom: '20px',
  },
};

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = uuidv4();
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onHandleChange(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div className={style.formConteiner}>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <FormControl style={styles.FormControl}>
            <InputLabel htmlFor={this.nameId}>Name</InputLabel>
            <Input
              onChange={this.handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              id={this.nameId}
              value={name}
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </FormControl>
          <FormControl style={styles.FormControl}>
            <InputLabel htmlFor={this.nameId}>Number</InputLabel>
            <Input
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              onChange={this.handleChange}
              required
            />
          </FormControl>
          <Button
            className={style.LoginButton}
            type="submit"
            variant="outlined"
            color="primary"
            onSubmit={this.handleSubmit}
          >
            Add contact
          </Button>
        </form>
        <Filter />
        <ContactList />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  onHandleChange: contacts => dispatch(operations.addContact(contacts)),
});
export default connect(null, mapDispatchToProps)(Form);
