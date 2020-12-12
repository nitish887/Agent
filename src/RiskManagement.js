import React from 'react'

export default function RiskManagement() {
    return (
        <React.Fragment>
            <div class="main_wrap">
	

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
    
  
    
        {/* <!-- Report Table --> */}
        
    
    <div class="total_all">
        <h2>Risk Management Summary
        </h2>
        <a class="btn_replay" href="javascript:void(0);" id="refresh_Top_Racing"><img src="/images/transparent.gif"/></a>
    </div>
    
    <div class="play_race-wrap">
        <div class="top_player-wrap">
            <table style={{display:'none'}}>
                <tbody><tr id="tempTr_top">
                    <td class="align-L">
                        <span class="order" id="number"></span>
                        <a href="javascript:void(0);" id="userId"></a>
                    </td>
                    <td id="exposure"></td>
                    <td id="amount"></td>
                </tr>
    
                <tr id="tempTr_noData_top">
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
            </tbody></table>
    
            <h3>
                <ul class="tab-topplay">
                    <li id="top10MatchedAmountLi" class="select"><a href="#">Top 10 Matched Amount Player</a></li>
                    <li id="top10ExposureLi"><a href="#">Top 10 Exposure Player</a></li>
                </ul>
            </h3>
    
            <div class="col-2">
                <ul class="slip-head">
                    <li class="col-playID">UID</li>
                    <li class="col-exp">Exposure</li>
                    <li class="col-amount sort-this">Matched Amount</li>
                </ul>
    
                <table class="table01">
                    <tbody id="content_top_1_5"><tr id="tempTr_top">
                    <td class="align-L">
                        <span class="order" id="number">1.</span>
                        <a href="javascript:void(0);" id="userId">monu061</a>
                    </td>
                    <td id="exposure"><span class="red">(50.00)</span></td>
                    <td id="amount">70.00</td>
                </tr><tr id="tempTr_noData_top">
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr><tr id="tempTr_noData_top">
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr><tr id="tempTr_noData_top">
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr><tr id="tempTr_noData_top">
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr></tbody>
                </table>
            </div>
    
            <div class="col-2">
                <ul class="slip-head">
                    <li class="col-playID">UID</li>
                    <li class="col-exp">Exposure</li>
                    <li class="col-amount sort-this">Matched Amount</li>
                </ul>
    
                <table class="table01">
                    <tbody id="content_top_6_10"><tr id="tempTr_noData_top">
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr><tr id="tempTr_noData_top">
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr><tr id="tempTr_noData_top">
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr><tr id="tempTr_noData_top">
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr><tr id="tempTr_noData_top">
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr></tbody>
                </table>
            </div>
        </div>
    
        
    </div>
    
    <div class="match-wrap">
        <div class="total_all">
            <h2>Match Odds</h2>
            <a class="btn_replay" href="javascript:void(0);" id="refresh_Match_Odds"><img src="/images/transparent.gif"/></a>
            <a class="btn_replay" href="javascript:void(0);" id="downloadFile_Match_Odds" style={{display: 'none',width: "70px"}}>Download</a>
        </div>
    
        <table style={{display:'none'}}>
    
            <tbody><tr id="tempTr_MATCH_ODDS_DRAW">
                <td class="align-L" rowspan="1" ><a id="eventType" href="javascript:void(0);"></a></td>
                <td class="align-L border-l" rowspan="1" id="marketTime" ></td>
                <td class="align-L border-l">
                    <a href="javascript:void(0);" class="btn open-odds" id="showOddsBtn" >Open</a>
                    <a href="javascript:void(0);" id="marketPath">
                        <strong id="eventName"></strong>
                        <img class="fromto" src="/images/transparent.gif"/>
                        <span id="marketName"></span>
                    </a>
                </td>
                <td class="border-l"><a class="" href="javascript:void(0);" id="selection_exposure_1">-</a></td>
                <td><a class="" href="javascript:void(0);" id="selection_exposure_3">-</a></td>
                <td><a class="" href="javascript:void(0);" id="selection_exposure_2">-</a></td>
                <td class="border-l"><a href="javascript:void(0);" class="btn" id="view">View</a></td>
            </tr>
    
    
            <tr id="tempTr_MATCH_ODDS">
                <td class="align-L" rowspan="1" ><a id="eventType" href="javascript:void(0);"></a></td>
                <td class="align-L border-l" rowspan="1" id="marketTime" ></td>
                <td class="align-L border-l">
                    <a href="javascript:void(0);" class="btn open-odds" id="showOddsBtn" >Open</a>
                    <a href="javascript:void(0);" id="marketPath">
                        <strong id="eventName"></strong>
                        <img class="fromto" src="/images/transparent.gif"/>
                        <span id="marketName"></span>
                    </a>
                </td>
                <td class="border-l"><a class="" href="javascript:void(0);" id="selection_exposure_1">-</a></td>
                <td><a class="" href="javascript:void(0);" id="selection_exposure_2">-</a></td>
                <td class="border-l"><a href="javascript:void(0);" class="btn" id="view">View</a></td>
            </tr>
    
            <tr id="tempTr_expand_MATCH_ODDS_DRAW" class="expand" style={{display:'none'}}>
                <td class="border-l align-L" colspan="4">
                    <img class="expand-arrow" src="/images/transparent.gif"/>
                    <iframe src="" frameborder="0" height="197" scrolling="no"></iframe>
                    <div class="risk-message" id="risk_message" style={{display:'none'}}></div>
                </td>
                <td width="80" class="border-l"></td>
            </tr>
    
            <tr id="tempTr_expand_MATCH_ODDS" class="expand" style={{display:'none'}}>
                <td class="border-l align-L" colspan="3">
                    <img class="expand-arrow" src="/images/transparent.gif"/>
                    <iframe src="" frameborder="0" height="197" scrolling="no"></iframe>
                    <div class="risk-message" id="risk_message" style={{display:'none'}}></div>
                </td>
                <td width="80" class="border-l"></td>
            </tr>
    
            <tr id="tempTr_noData_MATCH_ODDS_DRAW">
                <td class="no-data" colspan="7">
                    <p>No Data
                    </p>
                </td>
            </tr>
    
            <tr id="tempTr_noData_MATCH_ODDS">
                <td class="no-data" colspan="6">
                    <p>No Data
                    </p>
                </td>
            </tr>
        </tbody></table>
    
        <table class="table01 risk_matchodd">
            <tbody><tr>
                <th width="10%" class="align-L" rowspan="2">Sports</th>
                <th width="7%" class="align-L" rowspan="2">Market Date</th>
                <th class="align-L" rowspan="2">Event/Market Name</th>
                <th width="21%" class="align-C border-l bg-yellow" colspan="3">Player P/L</th>
                <th width="6%" class="align-C border-l" rowspan="2">Downline P/L</th>
            </tr>
            <tr>
                <th width="7%" class="border-l bg-yellow">1</th>
                <th width="7%" class="bg-yellow">X</th>
                <th width="7%" class="bg-yellow">2</th>
            </tr>
    
            </tbody><tbody id="content_MATCH_ODDS_DRAW"><tr id="tempTr_noData_MATCH_ODDS_DRAW">
                <td class="no-data" colspan="7">
                    <p>No Data
                    </p>
                </td>
            </tr></tbody>
        </table>
    
        <table class="table01 risk_matchodd">
            <tbody><tr>
                <th width="10%" class="align-L" rowspan="2">Sports</th>
                <th width="8%" class="align-L" rowspan="2">Market Date</th>
                <th class="align-L" rowspan="2">Event/Market Name</th>
                <th width="18%" class="align-C border-l bg-yellow" colspan="2">Player P/L</th>
                <th width="6%" class="align-C border-l" rowspan="2">Downline P/L</th>
            </tr>
            <tr>
                <th width="9%" class="border-l bg-yellow">1</th>
                <th width="9%" class="bg-yellow">2</th>
            </tr>
    
            </tbody><tbody id="content_MATCH_ODDS"><tr id="tempTr_noData_MATCH_ODDS">
                <td class="no-data" colspan="6">
                    <p>No Data
                    </p>
                </td>
            </tr></tbody>
        </table>
    </div>
    
    
    <div class="match-wrap">
        <div class="total_all">
            <h2>Book Maker</h2>
            <a class="btn_replay" href="javascript:void(0);" id="refresh_BookMaker_MatchOdds"><img src="/images/transparent.gif"/></a>
            <a class="btn_replay" href="javascript:void(0);" id="downloadFile_BookMaker_MatchOdds" style={{display: 'none',width: "70px"}}>Download</a>
        </div>
    
        <table style={{display:'none'}}>
    
            <tbody><tr id="tempTr_BookMaker_MatchOdds_Draw">
                <td class="align-L" rowspan="1" ><a id="eventType" href="javascript:void(0);"></a></td>
                <td class="align-L border-l" rowspan="1" id="marketTime" ></td>
                <td class="align-L border-l">
                    <a href="javascript:void(0);" id="marketPath">
                        <strong id="eventName"></strong>
                        <img class="fromto" src="/images/transparent.gif"/>
                        <span id="marketName"></span>
                    </a>
                </td>
                <td class="border-l"><a class="" href="javascript:void(0);" id="selection_exposure_1">-</a></td>
                <td><a class="" href="javascript:void(0);" id="selection_exposure_3">-</a></td>
                <td><a class="" href="javascript:void(0);" id="selection_exposure_2">-</a></td>
                <td class="border-l"><a href="javascript:void(0);" class="btn" id="view">View</a></td>
            </tr>
    
    
            <tr id="tempTr_BookMaker_MatchOdds">
                <td class="align-L" rowspan="1" ><a id="eventType" href="javascript:void(0);"></a></td>
                <td class="align-L border-l" rowspan="1" id="marketTime" ></td>
                <td class="align-L border-l">
                    <a href="javascript:void(0);" id="marketPath">
                        <strong id="eventName"></strong>
                        <img class="fromto" src="/images/transparent.gif"/>
                        <span id="marketName"></span>
                    </a>
                </td>
                <td class="border-l"><a class="" href="javascript:void(0);" id="selection_exposure_1">-</a></td>
                <td><a class="" href="javascript:void(0);" id="selection_exposure_2">-</a></td>
                <td class="border-l"><a href="javascript:void(0);" class="btn" id="view">View</a></td>
            </tr>
    
            <tr id="tempTr_noData_BookMaker_MatchOdds_Draw">
                <td class="no-data" colspan="7">
                    <p>No Data
                    </p>
                </td>
            </tr>
    
            <tr id="tempTr_noData_BookMaker_MatchOdds">
                <td class="no-data" colspan="6">
                    <p>No Data
                    </p>
                </td>
            </tr>
        </tbody></table>
    
        <table class="table01 risk_matchodd">
            <tbody><tr>
                <th width="10%" class="align-L" rowspan="2">Sports</th>
                <th width="7%" class="align-L" rowspan="2">Market Date</th>
                <th class="align-L" rowspan="2">Event/Market Name</th>
                <th width="21%" class="align-C border-l bg-yellow" colspan="3">Player P/L</th>
                <th width="6%" class="align-C border-l" rowspan="2">Downline P/L</th>
            </tr>
            <tr>
                <th width="7%" class="border-l bg-yellow">1</th>
                <th width="7%" class="bg-yellow">X</th>
                <th width="7%" class="bg-yellow">2</th>
            </tr>
    
            </tbody><tbody id="content_BookMaker_MatchOdds_Draw"><tr id="tempTr_noData_BookMaker_MatchOdds_Draw">
                <td class="no-data" colspan="7">
                    <p>No Data
                    </p>
                </td>
            </tr></tbody>
        </table>
    
        <table class="table01 risk_matchodd">
            <tbody><tr>
                <th width="10%" class="align-L" rowspan="2">Sports</th>
                <th width="8%" class="align-L" rowspan="2">Market Date</th>
                <th class="align-L" rowspan="2">Event/Market Name</th>
                <th width="18%" class="align-C border-l bg-yellow" colspan="2">Player P/L</th>
                <th width="6%" class="align-C border-l" rowspan="2">Downline P/L</th>
            </tr>
            <tr>
                <th width="9%" class="border-l bg-yellow">1</th>
                <th width="9%" class="bg-yellow">2</th>
            </tr>
    
            </tbody><tbody id="content_BookMaker_MatchOdds"><tr id="tempTr_noData_BookMaker_MatchOdds">
                <td class="no-data" colspan="6">
                    <p>No Data
                    </p>
                </td>
            </tr></tbody>
        </table>
    </div>
    
    {/* <!-- Fancy Bet  --> */}
    <div class="match-wrap">
        <div class="total_all">
            <h2>Fancy Bet</h2>
            <a class="btn_replay" href="javascript:void(0);" id="refresh_Fancy_Bet"><img src="/images/transparent.gif"/></a>
            <a class="btn_replay" href="javascript:void(0);" id="downloadFile_Fancy_Bet" style={{display: 'none',width: "70px"}}>Download</a>
        </div>
    
        <table style={{display:'none'}}>
    
            <tbody><tr id="tempTr_FANCY_BET">
                <td class="align-L" rowspan="1" ><a id="eventType" href="javascript:void(0);"></a></td>
                <td class="align-L border-l" rowspan="1" id="marketTime" ></td>
                <td class="align-L border-l">
                    <a href="javascript:void(0);" class="btn open-odds" id="showOddsBtn" >Open</a>
                    <a href="javascript:void(0);" id="marketPath">
                        <strong id="eventName"></strong>
                        <img class="fromto" src="/images/transparent.gif"/>
                        <span id="marketName"></span>
                    </a>
                </td>
                <td class="border-l"><a class="" href="javascript:void(0);" id="min_exposure">-</a></td>
                <td><a class="" href="javascript:void(0);" id="max_exposure">-</a></td>
                <td class="border-l"><a href="javascript:void(0);" class="btn-book" id="books">Books</a></td>
            </tr>
    
            <tr id="tempTr_expand_FANCY_BET" class="expand" style={{display:'none'}}>
                <td class="border-l align-L" colspan="3">
                    <img class="expand-arrow" src="/images/transparent.gif"/>
                    <iframe src="" frameborder="0" height="197" scrolling="no"></iframe>
                    <div class="risk-message" id="risk_message" style={{display:'none'}}></div>
                </td>
                <td width="80" class="border-l"></td>
            </tr>
    
            <tr id="tempTr_noData_FANCY_BET">
                <td class="no-data" colspan="6">
                    <p>No Data
                    </p>
                </td>
            </tr>
        </tbody></table>
    
        {/* <!-- Fancy Bet --> */}
        <table class="table01 risk_matchodd">
            <tbody><tr>
                <th width="10%" class="align-L" rowspan="2">Sports</th>
                <th width="8%" class="align-L" rowspan="2">Market Date</th>
                <th class="align-L" rowspan="2">Event/Market Name</th>
                <th width="18%" class="align-C border-l bg-yellow" colspan="2">Player P/L</th>
                <th width="6%" class="align-C border-l" rowspan="2">Books</th>
            </tr>
            <tr>
                <th width="9%" class="border-l bg-yellow">MIN</th>
                <th width="9%" class="bg-yellow">MAX</th>
            </tr>
    
            </tbody><tbody id="content_FANCY_BET"><tr id="tempTr_noData_FANCY_BET">
                <td class="no-data" colspan="6">
                    <p>No Data
                    </p>
                </td>
            </tr></tbody>
        </table>
    </div>
    
    
    <div class="match-wrap">
        <div class="total_all">
            <h2>Sports Book</h2>
            <a class="btn_replay" href="javascript:void(0);" id="refresh_Ow"><img src="/images/transparent.gif"/></a>
            <a class="btn_replay" href="javascript:void(0);" id="downloadFile_Sportsbook" style={{display: 'none',width: "70px"}}>Download</a>
        </div>
    
        <table style={{display:'none'}}>
    
            <tbody><tr id="tempTr_Ow">
                <td class="align-L" rowspan="1" ><a id="eventType" href="javascript:void(0);"></a></td>
                <td class="align-L border-l" rowspan="1" id="marketTime" ></td>
                <td class="align-L border-l">
                    <a href="javascript:void(0);" id="marketPath">
                        <strong id="eventName"></strong>
                        <img class="fromto" src="/images/transparent.gif"/>
                        <span id="marketName"></span>
                    </a>
                </td>
                <td class="border-l" id="amount"></td>
            </tr>
    
            <tr id="tempTr_noData_Ow">
                <td class="no-data" colspan="4">
                    <p>No Data
                    </p>
                </td>
            </tr>
        </tbody></table>
    
        <table class="table01">
            <tbody><tr>
                <th width="10%" class="align-L">Sports</th>
                <th width="8%" class="align-L">Market Date</th>
                <th class="align-L">Event/Market Name</th>
                <th width="26%" class="">Matched Amount</th>
            </tr>
    
            </tbody><tbody id="content_Ow"><tr id="tempTr_noData_Ow">
                <td class="no-data" colspan="4">
                    <p>No Data
                    </p>
                </td>
            </tr></tbody>
        </table>
    </div>
    
    
    <div class="match-wrap">
        <div class="total_all">
            <h2>Premium Cricket</h2>
            <a class="btn_replay" href="javascript:void(0);" id="refresh_Sportradar"><img src="/images/transparent.gif"/></a>
            <a class="btn_replay" href="javascript:void(0);" id="downloadFile_Sportradar" style={{display: 'none',width: "70px"}}>Download</a>
        </div>
    
        <table style={{display:'none'}}>
    
            <tbody><tr id="tempTr_Sportradar">
                <td class="align-L" rowspan="1" ><a id="eventType" href="javascript:void(0);"></a></td>
                <td class="align-L border-l" rowspan="1" id="marketTime" ></td>
                <td class="align-L border-l">
                    <a href="javascript:void(0);" id="marketPath">
                        <strong id="eventName"></strong>
                        <img class="fromto" src="/images/transparent.gif"/>
                        <span id="marketName"></span>
                    </a>
                </td>
                <td class="border-l" id="amount"></td>
            </tr>
    
            <tr id="tempTr_noData_Sportradar">
                <td class="no-data" colspan="4">
                    <p>No Data
                    </p>
                </td>
            </tr>
        </tbody></table>
    
        <table class="table01">
            <tbody><tr>
                <th width="10%" class="align-L">Sports</th>
                <th width="8%" class="align-L">Market Date</th>
                <th class="align-L">Event/Market Name</th>
                <th width="26%" class="">Matched Amount</th>
            </tr>
    
            </tbody><tbody id="content_Sportradar"><tr id="tempTr_noData_Sportradar">
                <td class="no-data" colspan="4">
                    <p>No Data
                    </p>
                </td>
            </tr></tbody>
        </table>
    </div>
    
    {/* <!-- TS_BINARY  --> */}
    <div class="match-wrap">
        <div class="total_all">
            <h2>Binary</h2>
            <a class="btn_replay" href="javascript:void(0);" id="refresh_Binary"><img src="/images/transparent.gif"/></a>
            <a class="btn_replay" href="javascript:void(0);" id="downloadFile_Binary" style={{display: 'none',width: "70px"}}>Download</a>
        </div>
    
        <table style={{display:'none'}}>
    
            <tbody><tr id="tempTr_TS_BINARY">
                <td class="align-L" rowspan="1" ><a id="eventType" href="javascript:void(0);"></a></td>
                <td class="align-L border-l" rowspan="1" id="marketTime" ></td>
                <td class="align-L border-l">
                    <a href="javascript:void(0);" class="btn open-odds" id="showOddsBtn" >Open</a>
                    <a href="javascript:void(0);" id="marketPath">
                        <strong id="eventName"></strong>
                        <img class="fromto" src="/images/transparent.gif"/>
                        <span id="marketName"></span>
                    </a>
                </td>
                <td class="border-l"><a class="" href="javascript:void(0);" id="min_exposure">-</a></td>
                <td><a class="" href="javascript:void(0);" id="max_exposure">-</a></td>
                <td class="border-l"><a href="javascript:void(0);" class="btn-book" id="books">Books</a></td>
            </tr>
    
            <tr id="tempTr_expand_TS_BINARY" class="expand" style={{display:'none'}}>
                <td class="border-l align-L" colspan="3">
                    <img class="expand-arrow" src="/images/transparent.gif"/>
                    <iframe src="" frameborder="0" height="197" scrolling="no"></iframe>
                    <div class="risk-message" id="risk_message" style={{display:'none'}}></div>
                </td>
                <td width="80" class="border-l"></td>
            </tr>
    
            <tr id="tempTr_noData_TS_BINARY">
                <td class="no-data" colspan="6">
                    <p>No Data
                    </p>
                </td>
            </tr>
        </tbody></table>
    
        <table class="table01 risk_matchodd">
            <tbody><tr>
                <th width="10%" class="align-L" rowspan="2">Sports</th>
                <th width="8%" class="align-L" rowspan="2">Market Date</th>
                <th class="align-L" rowspan="2">Event/Market Name</th>
                <th width="18%" class="align-C border-l bg-yellow" colspan="2">Player P/L</th>
                <th width="6%" class="align-C border-l" rowspan="2">Books</th>
            </tr>
            <tr>
                <th width="9%" class="border-l bg-yellow">MIN</th>
                <th width="9%" class="bg-yellow">MAX</th>
            </tr>
    
            </tbody><tbody id="content_TS_BINARY"><tr id="tempTr_noData_TS_BINARY">
                <td class="no-data" colspan="6">
                    <p>No Data
                    </p>
                </td>
            </tr></tbody>
        </table>
    </div>
    
    <div class="match-wrap">
        <div class="total_all">
            <h2>Other Markets</h2>
            <a class="btn_replay" href="javascript:void(0);" id="refresh_Other_Market"><img src="/images/transparent.gif"/></a>
            <a class="btn_replay" href="javascript:void(0);" id="downloadFile_Other_Market" style={{width:' 70px'}}>Download</a>
        </div>
    
        <table style={{display:'none'}}>
    
            <tbody><tr id="tempTr_OTHER_MARKET">
                <td class="align-L" rowspan="1" ><a id="eventType" href="javascript:void(0);"></a></td>
                <td class="align-L border-l" rowspan="1" id="marketTime" ></td>
                <td class="align-L border-l">
                    <a href="javascript:void(0);" id="marketPath">
                        <strong id="eventName"></strong>
                        <img class="fromto" src="/images/transparent.gif"/>
                        <span id="marketName"></span>
                    </a>
                </td>
                <td class="border-l" id="amount"></td>
            </tr>
    
            <tr id="tempTr_noData_OTHER_MARKET">
                <td class="no-data" colspan="4">
                    <p>No Data
                    </p>
                </td>
            </tr>
        </tbody></table>
    
        <table class="table01">
            <tbody><tr>
                <th width="10%" class="align-L">Sports</th>
                <th width="8%" class="align-L">Market Date</th>
                <th class="align-L">Event/Market Name</th>
                <th width="26%" class="">Matched Amount</th>
            </tr>
    
            </tbody><tbody id="content_OTHER_MARKET"><tr id="tempTr_OTHER_MARKET" class="border-t">
                <td class="align-L" rowspan="1"  id="0_1"><a id="eventType" href="javascript:void(0);">Politics</a></td>
                <td class="align-L border-l" rowspan="1" id="1_1" >2020-11-03</td>
                <td class="align-L border-l">
                    <a href="javascript:void(0);" id="marketPath">
                        <strong id="eventName">USA - Presidential Election 2020</strong>
                        <img class="fromto" src="/images/transparent.gif"/>
                        <span id="marketName">Next President</span>
                    </a>
                </td>
                <td class="border-l" id="amount">70.00</td>
            </tr></tbody>
        </table>
    </div>
    
    
    </div>
        </React.Fragment>
    )
}
