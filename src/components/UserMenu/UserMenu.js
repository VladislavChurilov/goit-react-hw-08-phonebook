import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { Button } from '@material-ui/core';
import styles from '../../Phonebook.module.css';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={styles.UserMenu}>
    <img src={avatar} alt="" width="32" height="32" />
    <span className={styles.UserText}>Welcome, {name}</span>
    <Button type="button" variant="outlined" color="primary" onClick={onLogout}>
      Logout
    </Button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  avatar:
    'https://cdn.pixabay.com/photo/2013/07/13/12/16/horse-159512_960_720.png',
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
