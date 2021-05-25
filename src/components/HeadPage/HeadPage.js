import { connect } from 'react-redux';
import style from './HeadPage.module.css';
import { authSelectors } from '../../redux/auth';

const HeadPage = ({ isAuthenticated, name }) => {
  return isAuthenticated ? (
    <h1 className={style.HeadPage}>Hi, {name}, good luck </h1>
  ) : (
    <div className={style.HeadPageConteiner}>
      <h1 className={style.HeadPage}>Welcome</h1>
      <p className={style.HeadingText}>
        Do you want to use the app? Please log in or register
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(HeadPage);
