import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import style from './Login.module.css';
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

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <form
        className={style.form}
        onSubmit={this.handleSubmit}
        autoComplete="off"
      >
        <FormControl style={styles.FormControl}>
          <InputLabel>Enter email</InputLabel>
          <Input
            className={style.input}
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
          Log In
        </Button>
      </form>
    );
  }
}
const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};
export default connect(null, mapDispatchToProps)(Login);
