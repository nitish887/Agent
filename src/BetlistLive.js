import React from 'react'

export default function BetlistLive() {
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



    <h2>Bet List Live
    </h2>

    <div id="limitCondition" class="function-wrap">
        <ul class="input-list">
            <li id="eventType_checkBox">
                <input type="checkbox" name="" id="events_all" value="0"/>All
                
                
                
                    <input type="checkbox" name="events" id="events_1" value="1"/>
                    Soccer
                

                

                
                

                
                    <input type="checkbox" name="SOCCER_ow" id="SOCCER_ow" value="true"/>
                    S/B Soccer
                
                
                            <input type="checkbox" name="SOCCER_BOOK" id="SOCCER_BOOK" value="1"/>
                            BOOK Soccer
                
                
                
                    <input type="checkbox" name="events" id="events_2" value="2"/>
                    Tennis
                

                

                
                

                
                    <input type="checkbox" name="TENNIS_ow" id="TENNIS_ow" value="true"/>
                    S/B Tennis
                
                
                
                
                    <input type="checkbox" name="events" id="events_4" value="4"/>
                    Cricket
                

                
                    <input type="checkbox" name="CRICKET_fancy" id="CRICKET_fancy" value="true"/>
                    Cricket/Fancy Bet
                

                
                
                    <input type="checkbox" name="CRICKET_sportsbook" id="CRICKET_sportsbook" value="true"/>
                    S/R Cricket
                

                
                    <input type="checkbox" name="CRICKET_ow" id="CRICKET_ow" value="true"/>
                    S/B Cricket
                
                
                            <input type="checkbox" name="CRICKET_BOOK" id="CRICKET_BOOK" value="4"/>
                            BOOK Cricket
                
                
                

                
                    <input type="checkbox" name="ELECTION_fancy" id="ELECTION_fancy" value="true"/>
                    Election/Fancy Bet
                

                
                

                
                
                
                
                    <input type="checkbox" name="events" id="events_9999999" value="9999999"/>
                    FancyBet
                

                

                
                

                
                
                
                
                    <input type="checkbox" name="events" id="events_2378961" value="2378961"/>
                    Politics
                

                

                
                

                
                
                <input type="checkbox" id="TS_BINARY" name="TS_BINARY" value="6"/>BINARY
            </li>
        </ul>

        
        




<ul class="input-list">

    <li>
        <label>Order of display:</label>
        <select name="sortCondition" id="sortCondition">
            
            <option value="stake" selected="">
                Stake
            </option>
            
            <option value="userid">
                Player ID
            </option>
            
            <option value="createdate">
                Time
            </option>
            
        </select>
        <label> of </label>
        <select name="orderByClause" id="orderByClause">
            <option value="asc" selected="">Ascending</option>
            <option value="desc">Descending</option>
        </select>
    </li>
    <li>&nbsp;&nbsp;</li>



    <li>
        <label>Last:</label>
        <select name="limit" id="limit">
            <option value="100">100 Txn</option>
            <option value="50">50 Txn</option>
            <option value="25" selected="">25 Txn</option>
        </select>
    </li>
    <li>&nbsp;&nbsp;</li>



    <li>
        <label>Auto Refresh (Seconds)</label>
        <select name="refreshTime" id="refreshTime">
            <option value="stop">Stop</option>
            <option value="60">60</option>
            <option value="30">30</option>
            <option value="15" selected="">15</option>
            <option value="5">5</option>
            <option value="2">2</option>
        </select>
    </li>
    <li>&nbsp;&nbsp;</li>




    <li>
        <label>Bet Status:</label>
        <select name="betStatus" id="betStatus"><option value="all">All</option><option value="0">Unmatched</option><option value="1">Matched</option></select>
    </li>
    <li>&nbsp;&nbsp;</li>








<li><a style={{width:'60px'}}  class="btn-send" id="betListLiveRefresh">Refresh</a></li>
</ul>
    </div>

    <table id="unMatchTable" class="table-s" style={{display:'table'}}><caption id="unMatchedTitle">UnMatched</caption><p class="no-data">You have no bets in this time period.</p></table>
    <table id="pendingTable" class="table-s" style={{display:'table'}}><caption id="pendingTitle">Pending</caption><p class="no-data">You have no bets in this time period.</p></table>
    <table id="matchTable" class="table-s" style={{display:'table'}}><caption id="matchedTitle">Matched</caption><table id="matchTable" class="table-s" style={{display:'table'}}>
    <tbody><tr>
        
        <th width="8%" class="align-L">SUP ID</th>
        
        <th width="8%" class="align-L">MA ID</th>
        
        <th width="8%" class="align-L">PL ID</th>
        <th width="5%" class="align-L">Bet ID
        </th>
        <th id="betTime" width="6%" class="align-L">Bet taken</th>
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
        
        <th width="5%" name="profitOrLossTh" style={{display:'none'}}>Profit/Loss
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

<tr id="matchRow0" style={{display: 'table-row'}}>
        
        <td id="agentUserId1" class="align-L" style={{display:'none'}}>dublinhkd043</td>
        
        <td id="agentUserId2" class="align-L" >ptt2020</td>
        
        <td id="agentUserId3" class="align-L" >krish456</td>
        
        <td id="agentUserId4" class="align-L" style={{display:'none'}}></td>
        
        <td id="agentUserId5" class="align-L" style={{display:'none'}}></td>
        
        <td id="playerId" class="align-L">monu061</td>
        <td class="align-L"><a id="betID" href="javascript: void(0);">278959423</a></td>
        <td class="align-L"><span id="betPlaced" class="small-date">2020-11-04 08:58:42</span></td>
        <td id="ip" class="align-L">157.42.96.88</td>
        <td id="matchTitle" class="align-L">POLITICS<img class="fromto" src="/images/transparent.gif"/><strong>USA - Presidential Election 2020</strong><img class="fromto" src="/images/transparent.gif"/>Next President</td>
        <td id="matchSelection" class="align-L"><a onclick="window.open(BetListLiveUtilHandler.marketDepthURL + '?eventId=28009878&amp;marketId=1.128151441&amp;selectionId=10874213&amp;currencyTypeId=16&amp;categoryType=1','_blank','location=no,resizable=no,width=920,height=600')">Donald Trump</a></td>
        
        <td class="align-C"><span id="matchType" class="lay">Lay</span></td>
        <td id="matchOddsReq">1.47</td>
        <td id="matchStake">10.00</td>
        <td id="liability"><span class="red">(4.70)</span></td>
        
        <td style={{display:'none'}}><span id="pol" class="small-date" style={{display:'none'}}></span></td>
        
        <td id="currencyType" style={{display:'none'}}>PTH</td>
        <td id="site" style={{display:'none'}}>SKYEXCHANGE</td>
        <td id="onePT" style={{display:'none'}}>0.30</td>
        <td id="afterPT" style={{display:'none'}}>3.00</td>
        <td id="afterPTInEUR" style={{display:'none'}}>0.24</td>
    </tr><tr id="matchRow1" style={{display: 'table-row'}}>
        
        <td id="agentUserId1" class="align-L" style={{display:'none'}}>dublinhkd043</td>
        
        <td id="agentUserId2" class="align-L" >ptt2020</td>
        
        <td id="agentUserId3" class="align-L" >krish456</td>
        
        <td id="agentUserId4" class="align-L" style={{display:'none'}}></td>
        
        <td id="agentUserId5" class="align-L" style={{display:'none'}}></td>
        
        <td id="playerId" class="align-L">monu061</td>
        <td class="align-L"><a id="betID" href="javascript: void(0);">278963103</a></td>
        <td class="align-L"><span id="betPlaced" class="small-date">2020-11-04 09:12:14</span></td>
        <td id="ip" class="align-L">157.42.96.88</td>
        <td id="matchTitle" class="align-L">POLITICS<img class="fromto" src="/images/transparent.gif"/><strong>USA - Presidential Election 2020</strong><img class="fromto" src="/images/transparent.gif"/>Next President</td>
        <td id="matchSelection" class="align-L"><a onclick="window.open(BetListLiveUtilHandler.marketDepthURL + '?eventId=28009878&amp;marketId=1.128151441&amp;selectionId=10874213&amp;currencyTypeId=16&amp;categoryType=1','_blank','location=no,resizable=no,width=920,height=600')">Donald Trump</a></td>
        
        <td class="align-C"><span id="matchType" class="back">Back</span></td>
        <td id="matchOddsReq">1.45</td>
        <td id="matchStake">11.00</td>
        <td id="liability">-</td>
        
        <td style={{display:'none'}}><span id="pol" class="small-date" style={{display:'none'}}></span></td>
        
        <td id="currencyType" style={{display:'none'}}>PTH</td>
        <td id="site" style={{display:'none'}}>SKYEXCHANGE</td>
        <td id="onePT" style={{display:'none'}}>0.30</td>
        <td id="afterPT" style={{display:'none'}}>3.30</td>
        <td id="afterPTInEUR" style={{display:'none'}}>0.26</td>
    </tr><tr id="matchRow2" style={{display: 'table-row'}}>
        
        <td id="agentUserId1" class="align-L" style={{display:'none'}}>dublinhkd043</td>
        
        <td id="agentUserId2" class="align-L" >ptt2020</td>
        
        <td id="agentUserId3" class="align-L" >krish456</td>
        
        <td id="agentUserId4" class="align-L" style={{display:'none'}}></td>
        
        <td id="agentUserId5" class="align-L" style={{display:'none'}}></td>
        
        <td id="playerId" class="align-L">monu061</td>
        <td class="align-L"><a id="betID" href="javascript: void(0);">279004475</a></td>
        <td class="align-L"><span id="betPlaced" class="small-date">2020-11-04 13:11:22</span></td>
        <td id="ip" class="align-L">157.42.96.88</td>
        <td id="matchTitle" class="align-L">POLITICS<img class="fromto" src="/images/transparent.gif"/><strong>USA - Presidential Election 2020</strong><img class="fromto" src="/images/transparent.gif"/>Next President</td>
        <td id="matchSelection" class="align-L"><a onclick="window.open(BetListLiveUtilHandler.marketDepthURL + '?eventId=28009878&amp;marketId=1.128151441&amp;selectionId=10874213&amp;currencyTypeId=16&amp;categoryType=1','_blank','location=no,resizable=no,width=920,height=600')">Donald Trump</a></td>
        
        <td class="align-C"><span id="matchType" class="back">Back</span></td>
        <td id="matchOddsReq">1.51</td>
        <td id="matchStake">24.00</td>
        <td id="liability">-</td>
        
        <td style={{display:'none'}}><span id="pol" class="small-date" style={{display:'none'}}></span></td>
        
        <td id="currencyType" style={{display:'none'}}>PTH</td>
        <td id="site" style={{display:'none'}}>SKYEXCHANGE</td>
        <td id="onePT" style={{display:'none'}}>0.30</td>
        <td id="afterPT" style={{display:'none'}}>7.20</td>
        <td id="afterPTInEUR" style={{display:'none'}}>0.57</td>
    </tr><tr id="matchRow3" style={{display: 'table-row'}}>
        
        <td id="agentUserId1" class="align-L" style={{display:'none'}}>dublinhkd043</td>
        
        <td id="agentUserId2" class="align-L" >ptt2020</td>
        
        <td id="agentUserId3" class="align-L" >krish456</td>
        
        <td id="agentUserId4" class="align-L" style={{display:'none'}}></td>
        
        <td id="agentUserId5" class="align-L" style={{display:'none'}}></td>
        
        <td id="playerId" class="align-L">monu061</td>
        <td class="align-L"><a id="betID" href="javascript: void(0);">277538538</a></td>
        <td class="align-L"><span id="betPlaced" class="small-date">2020-11-02 10:12:12</span></td>
        <td id="ip" class="align-L">157.42.218.95</td>
        <td id="matchTitle" class="align-L">POLITICS<img class="fromto" src="/images/transparent.gif"/><strong>USA - Presidential Election 2020</strong><img class="fromto" src="/images/transparent.gif"/>Next President</td>
        <td id="matchSelection" class="align-L"><a onclick="window.open(BetListLiveUtilHandler.marketDepthURL + '?eventId=28009878&amp;marketId=1.128151441&amp;selectionId=6816445&amp;currencyTypeId=16&amp;categoryType=1','_blank','location=no,resizable=no,width=920,height=600')">Joe Biden</a></td>
        
        <td class="align-C"><span id="matchType" class="back">Back</span></td>
        <td id="matchOddsReq">1.5</td>
        <td id="matchStake">25.00</td>
        <td id="liability">-</td>
        
        <td style={{display:'none'}}><span id="pol" class="small-date" style={{display:'none'}}></span></td>
        
        <td id="currencyType" style={{display:'none'}}>PTH</td>
        <td id="site" style={{display:'none'}}>SKYEXCHANGE</td>
        <td id="onePT" style={{display:'none'}}>0.30</td>
        <td id="afterPT" style={{display:'none'}}>7.50</td>
        <td id="afterPTInEUR" style={{display:'none'}}>0.60</td>
    </tr></tbody></table></table>
{/* 
    <!-- Report Table --> */}
    


{/* <!-- Report Table --> */}
<div id="report" stylestyle={{display:'block'}}>

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
    <tbody><tr>
        
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

</tbody></table>
<p class="table-other" style={{marginTop:' 5px', display:' none'}}>Bet List is shown net of commission.
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
