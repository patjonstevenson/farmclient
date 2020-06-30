import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";

import farms from './farm-data';
import Dashboard from './components/Dashboard';
import Login from "./components/Login";
// import Register from "./components/Register";

function App() {
  console.log("In APP.JS farms: ", farms);
  return (
    <div className="App">
      <h1>Farm App</h1>
      {/* NEED A LANDING PAGE */}

      {/* SET UP ROUTES */}
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <Route path="/login" render={props => <Login props={props} />} />
      {/* <Route path="/register" component={Register} /> */}

      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
