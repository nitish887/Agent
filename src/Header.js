import React from 'react'
import Transparent from './images/transparent.gif'

export default function Header() {
    return (
        <React.Fragment>
            <div class="top">
  <div class="header">
    <h1><a href="/agent/index.jsp">SKYEXCHANGE</a></h1>

    <ul class="account-wrap">
	  <li><span>SS</span><strong>dublinhkd043</strong></li>
	  {/* <!-- single balance 加 no-multi --> */}
      <li class="main-wallet no-multi">
      	{/* <!-- 加open打開--> */}
      	<a href="#multi-balance_pop" class="a-wallet">
      		<ul>
      			<li>
      				<span>Main</span>
      				<strong id="mainBalance">PTH 4,401.98</strong>
      			</li>
      		</ul>
      		<p class="loading-bar" id="menuRefreshLoading" style={{display: 'none'}}>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</p>
      	</a>

		<a id="topRefresh" class="a-refresh" style={{cursor:'pointer'}}><img src={Transparent}/></a>
      </li>
    </ul>
  </div>

  {/* <!-- Menu Wrap --> */}
  <div class="menu-wrap">
    <div class="main_wrap">
      <ul class="menu">
	      <li><a id="menu_downline_list" class="select" href="">Downline List
	      </a></li>
	      
	      <li>
		      <a id="menu_my_account" class="" href="">My Account
		      </a></li>
	      <li><a id="menu_my_report" class="menu-drop" href="#">My Report
	      </a>
		      <ul>
			      
			      <li><a href="">Profit/Loss Report by Downline
			      </a></li>
			      <li><a href="">Profit/Loss Report by Market
			      </a></li>
			      
			      
			      
		      </ul>
	      </li>
	      
	      
	      
	      <li><a id="menu_bet_list" class="" href="/agent/betList/betList.jsp">BetList
	      </a></li>
	      
	      
	      <li><a id="menu_bet_list_live" class="" href="/agent/betList/betListLive.jsp">BetListLive
	      </a></li>
	      
	      
	      <li><a id="menu_risk_management" class="" href="/agent/riskManagement/riskManagement.jsp">Risk Management
	      </a></li>
	      
	      
	      <li><a id="menu_banking" class="" href="/agent/banking/cashBanking.jsp">Banking
	      </a></li>
	      
		  
		  <li><a id="menu_dashboard" class="" href="#" onclick="MenuHandler.loginDashboard()">Dashboard
		  </a></li>
		  
        <li class="logout">
          <a id="logout">Logout<img src={Transparent}/></a>
        </li>
        <li class="time_zone"><span>Time Zone :</span> GMT+5:30</li>
      </ul>
    </div>
  </div>
</div>
        </React.Fragment>
    )
}
