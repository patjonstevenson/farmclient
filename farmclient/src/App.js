import React from 'react';
import './App.css';
import farms from './farm-data';
import Dashboard from './components/Dashboard';

function App() {
  console.log("In APP.JS farms: ", farms);
  return (
    <div className="App">
      <h1>Farm App</h1>
      <Dashboard farms={farms} />
    </div>
  );
}

export default App;
