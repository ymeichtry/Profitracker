import './App.css';
import { Link, Route, Switch } from "wouter";
import LoginPage from './components/login/LoginPage';

const App = () => (
  <>
    <Link href="/users/1">Profile</Link>

    <Route path="/about">About Us</Route>

    <Switch>
      <Route path="/login" component={LoginPage} />

      <Route path="/users/:name">
        {(params) => <>Hello, {params.name}!</>}
      </Route>

      <Route>404: No such page!</Route>
    </Switch>
  </>
);

export default App;
