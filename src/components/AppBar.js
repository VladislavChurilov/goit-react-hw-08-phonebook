import { connect } from 'react-redux';
import Navigation from './Navigation';
import styles from '../Phonebook.module.css';
import AuthNav from './AuthNav';
import { authSelectors } from '../redux/auth';
import UserMenu from './UserMenu';
import Divider from '@material-ui/core/Divider';

const AppBar = ({ isAuthenticated }) => (
  <>
    <header className={styles.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
    <Divider />
  </>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
