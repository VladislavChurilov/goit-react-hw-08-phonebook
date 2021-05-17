import styles from '../../Phonebook.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

const Filter = ({ value, onChangeFilter }) => (
  <label className={styles.labelFilter}>
    {' '}
    Find contacts by name
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={onChangeFilter}
    />
  </label>
);
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});
const mapDispatchToProps = dispatch => ({
  onChangeFilter: e => dispatch(actions.changeFilter(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
