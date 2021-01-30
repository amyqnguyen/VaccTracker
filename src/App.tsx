import React from 'react';
import './App.css';
import SignUpPage from './pages/signuppage';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import LoginPage from './pages/loginpage';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Covid-19 Vaccine Finder</h1>
        </header>
        <a href="/signuppage">Click here to get started! (placeholder)</a>
        <div>
          <Switch>
            <Route path="/signuppage" component={SignUpPage} />
            <Route path="/loginpage" component={LoginPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
