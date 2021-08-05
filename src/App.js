import React, { createContext,  useState } from "react";
import UserLogin from './components/Login/UserLogin';
import './App.css';
import { Toaster } from 'react-hot-toast';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import MyOrder from "./components/MyOrder/MyOrder";
import PrivateRouter from "./components/Login/PrivateRoute";
import SingleService from "./components/SingleService/SingleService";
import BookingService from "./components/BookingService/BookingService";

export const UserContext = createContext()

function App() {
  const [loggedUser, setLoggedUser] = useState('')
  const [singleService, setSingleService] = useState({})
 
  return (
    <UserContext.Provider value={{ loggedUser, setLoggedUser, singleService, setSingleService }}>
      <Router>
        <Toaster />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <UserLogin />
          </Route>
          <PrivateRouter path="/dashboard" exact>
            {
              loggedUser.email === 'test@test.com' ? <Dashboard /> : <Redirect to="/" />
            }

          </PrivateRouter>
          <PrivateRouter path="/myorder" exact>
            <MyOrder />
          </PrivateRouter>
          <Route path="/singleService/:id" exact>
            <SingleService />
          </Route>
          <PrivateRouter path="/bookingService" exact>
            <BookingService />
          </PrivateRouter>
          <Redirect to="/" />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
