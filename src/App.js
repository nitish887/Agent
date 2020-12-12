import React from 'react'
import Login from './Login';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MyAccount from './MyAccount';
import Banking from './Banking';
import BetlistLive from './BetlistLive'
import BetList from './BetList'
import RiskManagement from './RiskManagement'
import Downline from './Downline'
import Market from './Market'
import Accountstatement from './Accountstatement';
import Profile from './Profile'
import Transfrredlog from './Transfrredlog'
import ActivityLog from './ActivityLog'
import Combine from './Combine'



function App() { 
  
  return (
   <React.Fragment>
     <Router>
       <Switch>
        
        <Route exact path= '/' component={Combine}></Route>
        <Route exact path= '/myaccount' component={MyAccount}></Route>
        <Route exact path= '/Banking' component={Banking}></Route>
        <Route exact path= '/Betlist' component={BetList}></Route>
        <Route exact path= '/BetlistLive' component={BetlistLive}></Route>
        <Route exact path= '/RiskManagement' component={RiskManagement}></Route>
        <Route exact path= '/Downline' component={Downline}></Route>
        <Route exact path= '/Market' component={Market}></Route>
        <Route exact path= '/Accountstatement' component={Accountstatement}></Route>
        <Route exact path= '/Profile' component={Profile}></Route>
        <Route exact path= '/Transfrredlog' component={Transfrredlog}></Route>
        <Route exact path= '/ActivityLog' component={ActivityLog}></Route>
       </Switch>
     </Router>
   </React.Fragment>
  );
}

export default App;
