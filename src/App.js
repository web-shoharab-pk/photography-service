import React from "react";
import UserLogin from './components/Login/UserLogin'; 
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <UserLogin />
        </Route>
        <Route path="/dashboard" exact>
           
        </Route>
        <Route path="/myorder" exact>
           
           </Route>
            

        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
