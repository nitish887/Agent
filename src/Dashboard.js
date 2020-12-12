import React, { useState } from 'react'
import Transparent from './images/transparent.gif'

export default function Dashboard(props) {




    return (
        <React.Fragment>
            <table id="resultTable" class="table01 margin-table" style={{display:' table'}}>
            <tbody><tr>
                <th id="accountTh" width="" class="align-L" >Account</th>
                <th id="creditRefTh" width="10%" >Credit Ref.</th>
                <th id="creditLimitTh" width="10%" style={{display:'none'}}>Credit Limit</th>
                
                <th id="currentPLTh" width="10%" style={{display:'none'}}>Current P/L
                </th>
                <th id="transferablePLTh" width="10%" style={{display:'none'}}>Transferable P/L
                </th>
                <th id="balanceTh" width="10%" >Balance</th>
                <th id="exposureTh" width="10%" >Exposure</th>
                <th id="availableBalanceTh" width="10%" >Avail. bal.</th>
                <th id="creditPLTh" width="10%" style={{display:'none'}}>Balance</th>
                <th id="playerBalanceTh" width="10%" >Player Balance</th>
                <th id="exposureLimitTh" width="10%" style={{display:'none'}}>Exposure Limit</th>
            
                <th id="refPLTh" width="10%" >Ref. P/L</th>
                <th id="statusTh" width="10%" >Status</th>
                <th id="actionTh" width="15%" >Action</th>
            </tr>
            <tr id="dataTemplate" style={{display:'none'}}>
                <td id="accountCol"  class="align-L">
                    
                    <a id="account" class="ico_account" href="#"></a>
                </td>
                <td id="creditRef" class="credit-amount-member" ><a id="creditRefBtn" class="favor-set" href="javascript:void(0);"></a></td>
                <td id="creditLimit" style={{display:'none'}}></td>
                
                <td id="currentPL" style={{display:'none'}}></td>
                <td id="transferablePL" style={{display:'none'}}></td>
                <td id="balance" ></td>
                <td id="currentExposure" ></td>
                <td id="available" ></td>
                <td id="creditPL" style={{display:'none'}}></td>
                <td id="playerBalance" style={{display:'none'}}></td>
                <td id="exposureLimit" style={{display:'none'}}></td>
            
                <td id="refPL" ></td>
                <td id="statusCol" >
                    <ul id="tipsPopup" class="status-popup" style={{display:'none'}}>
                    </ul>
                    <span id="status"></span>
                </td>
                <td id="actionCol" >
                    <ul class="action">
                        <li>
                            <a id="banking" class="bank" href="#bank">Bank</a>
                        </li>
                        <li>
                            <a id="p_l" class="p_l" href="#">Betting Profit &amp; Loss</a>
                        </li>
                        <li>
                            <a id="betting_history" class="betting_history" href="#">Betting History</a>
                        </li>
                        <li>
                            <a id="change" class="status" href="#change">Change Status</a>
                        </li>
                        <li>
                            <a id="profile" class="profile" href="#">Profile</a>
                        </li>
                    </ul>
                </td>
            </tr>

        <tr id="14" style={{display: 'table-row'}} main_userid="wb77">
                <td id="accountCol"  class="align-L">
                    
                    <a id="account14" class="ico_account" href="javascript: void(0);"><span class="lv_2">SUP</span>wb77</a>
                </td>
                <td id="creditRef14" class="credit-amount-member" ><a id="creditRefBtn" class="favor-set" href="javascript:void(0);" onClick={()=>{props.HandlePopup(3,true)}}>0.00</a></td>
                <td id="creditLimit14" style={{display:'none'}}>0.00</td>
                
                <td id="currentPL14" style={{display:'none'}}>0.00</td>
                <td id="transferablePL14" style={{display:'none'}}>0.00</td>
                <td id="balance14" >0.00</td>
                <td id="currentExposure14" >0.00</td>
                <td id="available14" >0.00</td>
                <td id="creditPL14" style={{display:'none'}}>0.00</td>
                <td id="playerBalance14" style={{display: 'table-cell'}}>0.00</td>
                <td id="exposureLimit" style={{display:'none'}}></td>
            
                <td id="refPL14" >0.00</td>
                <td id="statusCol" >
                    <ul id="tipsPopup" class="status-popup" style={{display:'none'}}>
                    </ul>
                    <span id="status14" class="status-active"><img src={Transparent}/>Active</span>
                </td>
                <td id="actionCol" >
                    <ul class="action">
                        <li>
                            <a id="banking" class="bank" href="#bank" style={{display:'none'}}>Bank</a>
                        </li>
                        <li>
                            
                        </li>
                        <li>
                            
                        </li>
                        <li>
                            <a id="change14" class="status" href="#change" onClick={()=>{props.HandlePopup(1,true)}}>Change Status</a>
                        </li>
                        <li>
                            <a id="profile14" class="profile" href="/agent/memberList/accountSummary.jsp?uid=wb77">Profile</a>
                        </li>
                    </ul>
                </td>
            </tr>
            <tr id="5" style={{display: 'table-row'}} main_userid="imon">
                <td id="accountCol"  class="align-L">
                    
                    <a id="account5" class="ico_account" href="javascript: void(0);"><span class="lv_2">SUP</span>imon</a>
                </td>
                <td id="creditRef5" class="credit-amount-member" ><a id="creditRefBtn" class="favor-set" href="javascript:void(0);" onClick={()=>{props.HandlePopup(3,true)}}>0.00</a></td>
                <td id="creditLimit5" style={{display:'none'}}>763.00</td>
                
                <td id="currentPL5" style={{display:'none'}}>0.00</td>
                <td id="transferablePL5" style={{display:'none'}}><span class="red">(2,263.77)</span></td>
                <td id="balance5" >0.00</td>
                <td id="currentExposure5" >0.00</td>
                <td id="available5" >0.00</td>
                <td id="creditPL5" style={{display:'none'}}>763.00</td>
                <td id="playerBalance5" style={{display: 'table-cell'}}>0.00</td>
                <td id="exposureLimit" style={{display:'none'}}></td>
            
                <td id="refPL5" >0.00</td>
                <td id="statusCol" >
                    <ul id="tipsPopup" class="status-popup" style={{display:'none'}}>
                    </ul>
                    <span id="status5" class="status-suspend"><img src={Transparent}/>Suspended</span>
                </td>
                <td id="actionCol" >
                    <ul class="action">
                        <li>
                            <a id="banking" class="bank" href="#bank" style={{display:'none'}}>Bank</a>
                        </li>
                        <li>
                            
                        </li>
                        <li>
                            
                        </li>
                        <li>
                            <a id="change5" class="status" href="#change" onClick={()=>{props.HandlePopup(1,true)}}>Change Status</a>
                        </li>
                        <li>
                            <a id="profile5" class="profile" href="/agent/memberList/accountSummary.jsp?uid=imon">Profile</a>
                        </li>
                    </ul>
                </td>
            </tr>
            
            
            
            
            </tbody></table>
        </React.Fragment>
    )
}
