import React, { useState,useEffect } from 'react'
import LoginAgent from './Login'
import Addmember from './Addmember';
import AddSuper from './AddSuper';
import BankingModel from './BankingModel';
import ChangeStatus from './ChangeStatus';
import CreditRef from './CreditRef';
import Dashboard from './Dashboard';
import FixedFooter from './FixedFooter';
import Header from './Header';
import Marqueebox from './Marqueebox';
import TotalBox from './TotalBox';
import {toast} from 'react-toastify'


var tt;
toast.configure()

  
export default function Combine(props) {

  var eventId = null;
  var marketId = null;
  var eventT = 3;
  if(props.match.params.eventT === '4' || props.match.params.eventT === '1' || props.match.params.eventT === '2'){
    eventId = props.match.params.eventId;
    marketId = props.match.params.marketId;
    eventT = 0;
   }
   if(props.match.params.eventType === 'sports'){
    eventT = 1;
   }
   else if(props.match.params.eventType === 'inplay'){
    eventT = 2;
   }
   else if(props.match.params.eventType === 'home'){
     eventT = 3;
   }
   else if(props.match.params.eventType === 'multimarket'){
     eventT = 4;
   }
   else if(props.match.params.eventType === 'myaccount'){
     eventT = 5;
   }


   const [isLoggedIn, setLoggedIn] = useState(null);
   const [Changestatus, setChangestatus] = useState(false);
   const [AddMember, setAddMember] = useState(false);
   const [Creditrefence, setCreditrefence] = useState(false)



   const checkShowLogin = (bool)=>{
     setLoggedIn(bool);
   }
   const HandlePopup = (val1,val2)=>{
    if(val1 === 1){
      setChangestatus(val2);
    }
    if(val1 === 2){
      setAddMember(val2);
    }
    if(val1 === 3){
      setCreditrefence(val2);
    }
   }

   return (
    <React.Fragment>
     {!isLoggedIn && <LoginAgent checkShowLogin={checkShowLogin}/>}
     {isLoggedIn && Changestatus && <ChangeStatus HandlePopup={HandlePopup}/>}
     {isLoggedIn && AddMember && <Addmember HandlePopup={HandlePopup}/>}
     {isLoggedIn && Creditrefence && <CreditRef HandlePopup={HandlePopup}/>}
     {isLoggedIn && <Header/>}
     {isLoggedIn && <div id="mainWrap" class="main_wrap">
          <Marqueebox/>
          <AddSuper HandlePopup={HandlePopup}/>
          <TotalBox/>
          <Dashboard HandlePopup={HandlePopup}/>
        </div>}
    {isLoggedIn && <BankingModel/>}
    {isLoggedIn && <FixedFooter/>}
      
      
    </React.Fragment>
  )
}
