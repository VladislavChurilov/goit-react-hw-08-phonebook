import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { selectors } from '../../redux';
import style from './Filter.module.css';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const Filter = ({ value, onChangeFilter }) => (
  <form className={style.form}>
    <FormControl className={style.FormControl}>
      <InputLabel>Find contacts by name </InputLabel>
      <Input
        className={style.inputFilter}
        type="text"
        value={value}
        onChange={onChangeFilter}
      />
    </FormControl>
  </form>
);

const mapStateToProps = state => ({
  value: selectors.getFilter(state),
});
const mapDispatchToProps = dispatch => ({
  onChangeFilter: e => dispatch(actions.changeFilter(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
