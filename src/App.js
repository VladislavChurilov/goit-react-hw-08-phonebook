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
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

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
            <PrivateRoute
              exact
              path={routes.contacts}
              redirectTo="/login"
              component={Form}
            />
            <PublicRoute
              exact
              path={routes.register}
              redirectTo="/contacts"
              restricted
              component={Register}
            />
            <PublicRoute
              exact
              path={routes.login}
              redirectTo="/contacts"
              restricted
              component={Login}
            />

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
