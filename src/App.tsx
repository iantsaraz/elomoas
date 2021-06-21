import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Index from './Component/index/Index'
import Profile from './Component/DEFAULTUSER_PROFILE/Profile'


function App() {
  return (
    <div >
       <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Index} />
              <Route exact path='/User_Profile' component={Profile} />
            

          </Switch>
       </BrowserRouter>   
    </div>
  );
}

export default App;
