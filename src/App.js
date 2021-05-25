import { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import Conteiner from './components/Conteiner';
import routes from './routes';
import AppBar from './components/AppBar';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HeadPage = lazy(() =>
  import('./components/HeadPage' /* webpackChunkName: "HeadPage" */),
);
const Form = lazy(() =>
  import('./components/Form' /* webpackChunkName: "Form" */),
);
const Register = lazy(() =>
  import('./components/Register' /* webpackChunkName: "Register" */),
);
const Login = lazy(() =>
  import('./components/Login' /* webpackChunkName: "Login" */),
);
const NotFound = lazy(() =>
  import('./components/NotFound' /* webpackChunkName: "NotFound" */),
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
            <PublicRoute exact path={routes.home} component={HeadPage} />
            <PublicRoute component={NotFound} />
          </Switch>
        </Suspense>
      </Conteiner>
    );
  }
}
const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
