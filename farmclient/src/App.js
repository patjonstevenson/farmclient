import React from 'react';
import './App.css';
import farms from './farm-data';
import Dashboard from './components/Dashboard';

function App() {
  console.log("In APP.JS farms: ", farms);
  return (
    <div className="App">
      <h1>Farm App</h1>
      {/* NEED A LANDING PAGE */}

      {/* SET UP ROUTES */}


      <Dashboard />
    </div>
  );
}

export default App;
