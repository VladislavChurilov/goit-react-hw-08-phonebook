import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import style from './Register.module.css';
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
class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <form
        className={style.form}
        onSubmit={this.handleSubmit}
        autoComplete="off"
      >
        <FormControl style={styles.FormControl}>
          <InputLabel>Name</InputLabel>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </FormControl>
        <FormControl style={styles.FormControl}>
          <InputLabel>Enter email</InputLabel>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </FormControl>
        <FormControl style={styles.FormControl}>
          <InputLabel>Password</InputLabel>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </FormControl>
        <Button
          className={style.LoginButton}
          type="submit"
          variant="outlined"
          color="primary"
        >
          Register
        </Button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(Register);
