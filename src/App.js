import { createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import DestinationDetails from './components/DestinationDetails/DestinationDetails';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch';

export const UserContext = createContext();

function App() {
  return (
    <div className='container'>
      <UserContext.Provider>
        <Router>
          <Header />
          <Switch>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/destination'>
              <DestinationDetails />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='*'>
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
