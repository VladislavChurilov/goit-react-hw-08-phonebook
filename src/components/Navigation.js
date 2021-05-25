import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../redux/auth';
import styles from '../Phonebook.module.css';

const Navigation = ({ isAuthenticated }) => (
  <nav className={styles.Navigation}>
    <NavLink
      to="/"
      exact
      className={styles.titleHead}
      activeClassName={styles.activeLink}
    >
      Phonebook
    </NavLink>
    {isAuthenticated && (
      <NavLink
        className={styles.Contacts}
        activeClassName={styles.activeLink}
        to="/contacts"
        exact
      >
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToProps)(Navigation);
