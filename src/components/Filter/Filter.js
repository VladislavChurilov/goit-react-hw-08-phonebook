import styles from '../../Phonebook.module.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { selectors } from '../../redux';

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

const mapStateToProps = state => ({
  value: selectors.getFilter(state),
});
const mapDispatchToProps = dispatch => ({
  onChangeFilter: e => dispatch(actions.changeFilter(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
