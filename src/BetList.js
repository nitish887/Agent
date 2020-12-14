import React from 'react'

export default function BetList() {
    return (
        <React.Fragment>
            <div class="full-wrap" style={{height: 'calc(100% - 105px)'}}>
   {/* <!-- Center Column --> */}
   <div class="over-wrap">
      {/* <!-- Loading Wrap --> */}
      <div id="loading" class="loading-wrap" style={{display:'none'}}>
         <ul class="loading">
            <li><img src="/images/loading40.gif"/></li>
            <li>Loading...</li>
         </ul>
      </div>
      {/* <!-- Message --> */}
      <div id="message" class="message-wrap success">
         <a class="btn-close">Close</a>
         <p></p>
      </div>
     
      <h2>Bet List</h2>
      <ul class="input-list">
         <li id="eventRadioBtnList">
            <input type="radio" name="events" id="events_1" data-eventtype="1" value="1"/>
            Soccer
            <input type="radio" name="SOCCER_ow" id="SOCCER_ow" data-eventtype="1" value="true"/>
            S/B Soccer
            <input type="radio" name="SOCCER_BOOK" id="SOCCER_BOOK" data-eventtype="1" data-categorytype="5"/>
            BOOK Soccer
            <input type="radio" name="events" id="events_2" data-eventtype="2" value="2"/>
            Tennis
            <input type="radio" name="TENNIS_ow" id="TENNIS_ow" data-eventtype="2" value="true"/>
            S/B Tennis
            <input type="radio" name="events" id="events_4" data-eventtype="4" value="4"/>
            Cricket
            <input type="radio" name="CRICKET_fancy" id="CRICKET_fancy" data-eventtype="4" value="true"/>
            Cricket/Fancy Bet
            <input type="radio" name="CRICKET_sportsbook" id="CRICKET_sportsbook" data-eventtype="4" value="true"/>
            S/R Cricket
            <input type="radio" name="CRICKET_ow" id="CRICKET_ow" data-eventtype="4" value="true"/>
            S/B Cricket
            <input type="radio" name="CRICKET_BOOK" id="CRICKET_BOOK" data-eventtype="4" data-categorytype="5"/>
            BOOK Cricket
            <input type="radio" name="ELECTION_fancy" id="ELECTION_fancy" data-eventtype="2378962" value="true"/>
            Election/Fancy Bet
            <input type="radio" name="events" id="events_9999999" data-eventtype="9999999" value="9999999"/>
            FancyBet
            <input type="radio" name="events" id="events_2378961" data-eventtype="2378961" value="2378961"/>
            Politics
            <input type="radio" id="TS_BINARY" data-categorytype="6"/>BINARY
         </li>
      </ul>
      {/* <!-- function --> */}
      <div class="function-wrap">
         <ul class="input-list">
            <div id="statusCondition" >
               <li><label>Bet Status:</label></li>
               <li>
                  <select name="betStatus" id="betStatus">
                     <option value="0">Unmatched</option>
                     <option value="1">Matched</option>
                     <option value="2">Settled</option>
                     <option value="3">Cancelled</option>
                     <option value="4">Voided</option>
                     <option value="5">Pending</option>
                  </select>
               </li>
            </div>
            <li><label>Period</label></li>
            <li>
               <input id="startDate" class="cal-input" type="text" placeholder="YYYY-MM-DD" min="2020-11-21" max="2020-12-06" onclick="calendarObj.show(event,'startDate');"/>
               <input id="startTime" class="time-input " type="text" placeholder="09:00" maxlength="5"/>
               to
               <input id="endDate" class="cal-input" type="text" placeholder="YYYY-MM-DD" min="2020-11-21" max="2020-12-06" onclick="calendarObj.show(event,'endDate');"/>
               <input id="endTime" class="time-input " type="text" placeholder="08:59" maxlength="5"/>
            </li>
            <li style={{display:'none'}}>(TimeZone:IST)</li>
         </ul>
         <ul class="input-list">
            <li><a id="today"  class="btn">Just For Today</a></li>
            <li style={{display:'none'}}><a id="yesterday"  class="btn">From Yesterday</a></li>
            <li style={{display:'none'}}><a id="last7days"  class="btn">Last 7 days</a></li>
            <li style={{display:'none'}}><a id="last30days"  class="btn">Last 30 days</a></li>
            <li style={{display:'none'}}><a id="last2months"  class="btn">Last 2 Months</a></li>
            <li style={{display:'none'}}><a id="last3months"  class="btn">Last 3 Months</a></li>
            <li><a id="getPL"  class="btn-send">Get History</a></li>
         </ul>
      </div>
      {/* <!-- No Report Message --> */}
      <div id="noReportMessage">
         <p>Bet List enables you to review the bets you have placed. <br/>Specify the time period during which your bets were placed, the type of markets on which the bets were placed, and the sport.</p>
         <p>Bet List is available online for the past 30 days.</p>
      </div>
      
      {/* <!-- function end-->
      <!-- Report Table -->
      <!-- Report Table --> */}
      <div id="report" style={{display:'none'}}>
         <a id="downloadFile" class="btn-send middle_with" href="javascript: void(0)" style={{display:'none'}}>Download</a>
         <div id="downloadDiv" style={{display:'none'}}>
            <input type="hidden" id="tempFilter" name="filter[]"/>
            <form id="downloadForm" method="post" target="_blank" action="">
               <input type="hidden" id="startDate" name="startDate"/>
               <input type="hidden" id="endDate" name="endDate"/>
               <input type="hidden" id="isQueryFancyBet" name="isQueryFancyBet"/>
               <input type="hidden" id="isQuerySbSportRadar" name="isQuerySbSportRadar"/>
               <input type="hidden" id="isQuerySbOw" name="isQuerySbOw"/>
               <input type="hidden" id="isQueryBinary" name="isQueryBinary"/>
               <input type="hidden" id="eventType" name="eventType"/>
               <input type="hidden" id="isQueryDetail" name="isQueryDetail"/>
               <input type="hidden" id="isQueryOnePT" name="isQueryOnePT"/>
               <input type="hidden" id="categoryType" name="categoryType"/>
               <div id="filterDiv">
               </div>
            </form>
         </div>
         <table id="matchTableTemplate" class="table-s" style={{display:'none'}}>
            <tbody>
               <tr>
                  <th width="8%" class="align-L">SUP ID</th>
                  <th width="8%" class="align-L">MA ID</th>
                  <th width="8%" class="align-L">PL ID</th>
                  <th width="5%" class="align-L">Bet ID
                  </th>
                  <th id="betTime" width="6%" class="align-L">Bet placed
                  </th>
                  <th width="7%" class="align-L">IP Address</th>
                  <th width="" class="align-L">Market
                  </th>
                  <th width="7%" class="align-L">Selection
                  </th>
                  <th width="4%" class="align-C">Type
                  </th>
                  <th width="4%">Odds req.
                  </th>
                  <th width="8%">Stake
                  </th>
                  <th width="5%">Liability
                  </th>
                  <th width="5%" name="profitOrLossTh">Profit/Loss
                  </th>
                  <th width="3%" id="currencyType_title" style={{display:'none'}}>Currency
                  </th>
                  <th width="5%" id="site_title" style={{display:'none'}}>Site
                  </th>
                  <th width="5%" id="onePT_title" style={{display:'none'}}>Percentage PT</th>
                  <th width="5%" id="afterPT_title" style={{display:'none'}}>PSB After PT</th>
                  <th width="5%" id="afterPTInEUR_title" style={{display:'none'}}>H.PT in EURO</th>
               </tr>
               <tr id="matchRowTemplate" style={{display:'none'}}>
                  <td id="agentUserId1" class="align-L" style={{display:'none'}}></td>
                  <td id="agentUserId2" class="align-L" ></td>
                  <td id="agentUserId3" class="align-L" ></td>
                  <td id="agentUserId4" class="align-L" style={{display:'none'}}></td>
                  <td id="agentUserId5" class="align-L" style={{display:'none'}}></td>
                  <td id="playerId" class="align-L"></td>
                  <td class="align-L"><a id="betID" href="javascript: void(0);"></a></td>
                  <td class="align-L"><span id="betPlaced" class="small-date"></span></td>
                  <td id="ip" class="align-L"></td>
                  <td id="matchTitle" class="align-L"></td>
                  <td id="matchSelection" class="align-L"></td>
                  <td class="align-C"><span id="matchType"></span></td>
                  <td id="matchOddsReq"></td>
                  <td id="matchStake"></td>
                  <td id="liability"></td>
                  <td><span id="pol" class="small-date"></span></td>
                  <td id="currencyType" style={{display:'none'}}></td>
                  <td id="site" style={{display:'none'}}></td>
                  <td id="onePT" style={{display:'none'}}></td>
                  <td id="afterPT" style={{display:'none'}}></td>
                  <td id="afterPTInEUR" style={{display:'none'}}></td>
               </tr>
            </tbody>
         </table>
         <p class="table-other" style={{marginTop:'5px'}}>Bet List is shown net of commission.
         </p>
         <script type="text/javascript" src="/js/util/PageUtil.js?v=20201202_1606876800000"></script>
         <div>
            <ul style={{display:'none'}}>
               <li id="prev"><a href="javascript:void(0);">Prev</a></li>
               <li id="next"><a href="javascript:void(0);">Next</a></li>
               <li id="pageNumber"><a href="javascript:void(0);"></a></li>
               <li id="more"><a href="javascript:void(0);">...</a></li>
               <input type="text" id="goToPageNumber" onkeyup="return PageHandler.validatePageNumber(this)" maxlength="6" size="4"/>
               <li><a id="goPageBtn">GO</a></li>
            </ul>
            <ul id="pageNumberContent" class="pages">
            </ul>
         </div>
      </div>
   </div>
</div>
        </React.Fragment>
    )
}
