import { Component } from 'react';
import { connect } from 'react-redux';
import { operations, selectors } from '../../redux';
import style from './ContactList.module.css';
import { Button } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <div className={style.conteiner}>
        <h2 className={style.title}>Contacts</h2>
        {this.props.isLoading && <h1>Loading...</h1>}
        <Divider />
        <List>
          {this.props.contacts.map(({ id, name, number }) => (
            <ListItem className={style.ListItem} key={id}>
              {name}: {number}
              <ListItemText className={style.ListItem} />
              <Button
                variant="outlined"
                color="primary"
                onClick={() => this.props.onDelete(id)}
              >
                Delete
              </Button>
              <Divider />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: selectors.getVisibleContacts(state),
  isLoading: selectors.getLoading(state),
});
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
  onDelete: id => dispatch(operations.deleteContacts(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
