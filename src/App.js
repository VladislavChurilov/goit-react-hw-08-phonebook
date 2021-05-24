import { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
// import styles from './Phonebook.module.css';
import Conteiner from './components/Conteiner';
// import ContactList from './components/ContactList';
// import Filter from './components/Filter';
// import Form from './components/Form';
import routes from './routes';
import AppBar from './components/AppBar';
import { authOperations } from './redux/auth';

const Form = lazy(() =>
  import('./components/Form' /* webpackChunkName: "Form" */),
);
const Register = lazy(() =>
  import('./components/Register' /* webpackChunkName: "Register" */),
);
const Login = lazy(() =>
  import('./components/Login' /* webpackChunkName: "Login" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Conteiner>
        <AppBar />
        <Suspense fallback={<h1>Load...</h1>}>
          <Switch>
            <Route exact path={routes.contacts} component={Form} />
            <Route exact path={routes.register} component={Register} />
            <Route exact path={routes.login} component={Login} />

            {/* <h1 className={styles.titleHead}>Phonebook</h1> */}
            {/* <Form /> */}
            {/* <h2 className={styles.title}>Contacts</h2> */}
            {/* <Filter /> */}
            {/* <ContactList /> */}
          </Switch>
        </Suspense>
      </Conteiner>
    );
  }
}
const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};
// class App extends Component {
//   render() {
//     return (
//       <Conteiner>
//         {/* <AppBar /> */}
//         {/* <Switch> */}
//         <h1 className={styles.titleHead}>Phonebook</h1>
//         <Form />
//         <h2 className={styles.title}>Contacts</h2>
//         <Filter />
//         <ContactList />
//         {/* </Switch> */}
//       </Conteiner>
//     );
//   }
// }

export default connect(null, mapDispatchToProps)(App);
