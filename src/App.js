import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound'
import Header from './pages/Header/Header';
import Login from './pages/Login/Login/Login';
import AdminAddEvent from './pages/AdminAddEvent/AdminAddEvent';
import AdminShowEvent from './pages/AdminShowEvent/AdminShowEvent';
import RegisteredEvent from './pages/RegisteredEvent/RegisteredEvent';
import RegisterVolunteer from './pages/RegisterVolunteer/RegisterVolunteer';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
function App() {
  return (
    <AuthProvider>


      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/adminAddEvent">
            <AdminAddEvent></AdminAddEvent>
          </PrivateRoute>
          <PrivateRoute path="/adminShowEvent">
            <AdminShowEvent></AdminShowEvent>
          </PrivateRoute>

          <PrivateRoute path="/registeredEvent">
            <RegisteredEvent></RegisteredEvent>
          </PrivateRoute>

          <PrivateRoute path="/registerVolunteer/:id">
            <RegisterVolunteer></RegisterVolunteer>
          </PrivateRoute>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
