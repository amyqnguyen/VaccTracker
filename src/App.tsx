import React from 'react';
import './App.css';
import LoginPage from './pages/loginpage';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Covid-19 Vaccine Finder</h1>
      </header>
      <LoginPage />
    </div>
  );
}

export default App;
