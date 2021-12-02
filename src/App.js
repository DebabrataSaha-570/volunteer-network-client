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
function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/adminAddEvent">
          <AdminAddEvent></AdminAddEvent>
        </Route>
        <Route path="/adminShowEvent">
          <AdminShowEvent></AdminShowEvent>
        </Route>
        <Route path="/registeredEvent">
          <RegisteredEvent></RegisteredEvent>
        </Route>
        <Route path="/registerVolunteer/:id">
          <RegisterVolunteer></RegisterVolunteer>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
