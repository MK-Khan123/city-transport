import { createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

export const UserContext = createContext();

function App() {
  return (
    <div className='container'>
      <UserContext.Provider>
        <Router>
          <Header />
          <Switch>
            <Route>
              <Home />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
