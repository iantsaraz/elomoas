import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Index from './Component/index/Index'
import Profile from './Component/DEFAULTUSER_PROFILE/Profile'
// import UserProfile from './Component/USER_PROFILE/UserProfile'


function App() {
  return (
    <div >
       <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Index} />
              <Route exact path='/Default_User_Profile' component={Profile} />
              {/* <Route exact path='/Default_User_Profile' component={UserProfile} /> */}
            

          </Switch>
       </BrowserRouter>   
    </div>
  );
}

export default App;
