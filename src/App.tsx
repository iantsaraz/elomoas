
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Index from './Component/index/Index'
import Profile from './Component/DEFAULTUSER_PROFILE/Profile'
import UserProfile from './Component/USER_PROFILE/UserProfile'
import Setting from './Component/Settings/Setting'
import AcountInfo from './Component/Settings/ACOUNTINFO/AcountInfo'
import Address from './Component/Settings/SAVEDADDRESS/Address'
import SocialAcount from './Component/Settings/SOCIALACOUNT/SocialAcount'
import Payment from './Component/Settings/PAYMENTCARD/Payment'
import Password from './Component/Settings/PASSWORD/Password'
import Analytics from './Component/ANALYTICS/Analytics'
import Channel from './Component/CHANNEL/Channel'
function App() {
  return (
    <div >
       <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Index} />
              <Route exact path='/Default_User_Profile' component={Profile} />
              <Route exact path='/User_Profile' component={UserProfile} />
              <Route exact path='/Setting' component={Setting} />
              <Route exact path='/Acount_Info' component={AcountInfo} />
              <Route exact path='/Saved_Address' component={Address} />
              <Route exact path='/Social_Acount' component={SocialAcount} />
              <Route exact path='/Payment' component={Payment} />
              <Route exact path='/Password' component={Password} />
              <Route exact path='/Analytics' component={Analytics} />
              <Route exact path='/Channel' component={Channel} />

          </Switch>
       </BrowserRouter>   
    </div>
  );
}

export default App;
