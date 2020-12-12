import React from 'react'

export default function Accountstatement() {
    return (
        <React.Fragment>

<div class="main_wrap">
<div class="agent_path">
    <ul id="agentPath" class="agent_path-L">
        
        <li id="path6" class="" style={{display:'none'}}>
            <a href="javascript: void(0);">
                <span class="lv_0">
                    COM
                </span>
                <strong></strong>
            </a>
        </li>
        
        <li id="path5" class="last_li">
            <a href="javascript: void(0);">
                <span class="lv_1">
                    SS
                </span>
                <strong>dublinhkd043</strong>
            </a>
        </li>
        
        <li id="path4" class="" style={{display:'none'}}>
            <a href="javascript: void(0);">
                <span class="lv_2">
                    SUP
                </span>
                <strong></strong>
            </a>
        </li>
        
        <li id="path3" class="" style={{display:'none'}}>
            <a href="javascript: void(0);">
                <span class="lv_3">
                    MA
                </span>
                <strong></strong>
            </a>
        </li>
        
        <li id="path0" class="" style={{display:'none'}}>
            <a href="javascript: void(0);">
                <span class="lv_4">
                    PL
                </span>
                <strong></strong>
            </a>
        </li>
        
        <ul class="account_pop" id="accountPop">
            <li id="popTmp" style={{display:'none'}}>
                <a href=""></a>
            </li>
        </ul>
    </ul>
</div>



<div class="col-left">
{/* <!-- Sub Menu and Path --> */}
<div class="sub_path">
    {/* <!-- Sub Menu --> */}
    <ul class="menu-list">
            <li class="class">Position</li>
            <li><a id="accountStatement" href="#" class="select">Account Statement</a></li>
            <li><a id="accountSummary" href="/agent/myAccount/accountSummary.jsp">Account Summary</a></li>
            <li><a id="transferredLog" href="/agent/myAccount/transferredLog.jsp">Transferred Log</a></li>
            <li class="class">Account Details</li>
            <li><a id="profile" href="/agent/myAccount/profile.jsp">Profile</a></li>
            <li><a id="activityLog" href="/agent/myAccount/activityLog.jsp">Activity Log</a></li>
    </ul>
</div>
</div>

            <div class="col-center report">
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
        <h2>Account Statement
        </h2>
        <table style={{display:'none'}}>
            <tbody><tr id="tempTr">
                <td id="createDate" class="align-L"></td>
                <td id="deposit">-</td>
                <td id="withdraw">-</td>
                <td id="balance"></td>
                <td id="remark"></td>
                <td>
                    <spen id="from"></spen>
                    <img class="fromto" src="/images/transparent.gif"/>
                    <spen id="to"></spen>
                </td>
            </tr>
            <tr id="noDataTempTr">
                <td class="no-data" colspan="5">
                    <p>No Data</p>
                </td>
            </tr>
        </tbody></table>
        <table id="table_log" class="table01">
            <tbody><tr>
                <th width="15%" class="align-L">Date/Time</th>
                <th width="18%">Deposit</th>
                <th width="18%">Withdraw</th>
                <th width="18%">Balance</th>
                <th width="16%">Remark</th>
                <th width="">From/To</th>
            </tr>
            </tbody><tbody id="content"><tr id="tempTr">
                <td id="createDate" class="align-L">2020-09-15 19:58:31</td>
                <td id="deposit"> 22,500.00</td>
                <td id="withdraw">-</td>
                <td id="balance"> 22,750.00</td>
                <td id="remark"></td>
                <td>
                    <spen id="from">dublinhkd043</spen>
                    <img class="fromto" src="/images/transparent.gif"/>
                    <spen id="to">ptt2020</spen>
                </td>
            </tr><tr id="tempTr">
                <td id="createDate" class="align-L">2020-09-15 18:42:50</td>
                <td id="deposit"> 250.00</td>
                <td id="withdraw">-</td>
                <td id="balance"> 250.00</td>
                <td id="remark"></td>
                <td>
                    <spen id="from">dublinhkd043</spen>
                    <img class="fromto" src="/images/transparent.gif"/>
                    <spen id="to">ptt2020</spen>
                </td>
            </tr></tbody>
        </table>
    <div>
        <ul style={{display:'none'}}>
            <li id="prev"><a href="javascript:void(0);">Prev</a></li>
            <li id="next"><a href="javascript:void(0);">Next</a></li>
            <li id="pageNumber"><a href="javascript:void(0);"></a></li>
            <li id="more"><a href="javascript:void(0);">...</a></li>
            <input type="text" id="goToPageNumber" onkeyup="return PageHandler.validatePageNumber(this)" maxlength="6" size="4"/>
            <li><a id="goPageBtn">GO</a></li>			
        </ul>
        <ul id="pageNumberContent" class="pages"><li id="prev"><a href="javascript:void(0);">Prev</a></li><li id="pageNumber"><a href="javascript:void(0);">1</a></li><li id="next"><a href="javascript:void(0);">Next</a></li></ul>
    </div>
    </div>
    </div>
        </React.Fragment>
    )
}
