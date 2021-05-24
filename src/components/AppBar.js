import { connect } from 'react-redux';
import Navigation from './Navigation';
import styles from '../Phonebook.module.css';
import AuthNav from './AuthNav';
import { authSelectors } from '../redux/auth';
import UserMenu from './UserMenu';

const style = {
  header: {
    display: 'flex',
  },
};

const AppBar = ({ isAuthenticated }) => (
  <header style={style.header}>
    <Navigation />
    <h1 className={styles.titleHead}>Phonebook</h1>
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
