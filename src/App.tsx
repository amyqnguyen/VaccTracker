import React from 'react';
import './App.css';
import SignUpPage from './pages/signuppage';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import LoginPage from './pages/loginpage';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage'
import UserHomePage from './pages/UserHomePage';
import AdminHomePage from './pages/AdminHomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/signuppage" component={SignUpPage} />
            <Route path="/loginpage" component={LoginPage} />
            <Route component={NotFound} />
            <Route path="/userhomepage" component={UserHomePage} />
            <Route path="/adminhomepage" component={AdminHomePage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
