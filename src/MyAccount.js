import React from 'react'

export default function MyAccount() {
    return (
        <React.Fragment>
            <div class="main_wrap">
	{/* <!-- agent path --> */}
	<div class="agent_path">
		<ul id="agentPath" class="agent_path-L">
			<li id="path6" class="" style={{display:'none'}}>
				<a href="javascript: void(0);"> <span class="lv_0">
                    COM
                </span> <strong></strong> </a>
			</li>
			<li id="path5" class="last_li" >
				<a href="javascript: void(0);"> <span class="lv_1">
                    SS
                </span> <strong>dublinhkd043</strong> </a>
			</li>
			<li id="path4" class="" style={{display:'none'}}>
				<a href="javascript: void(0);"> <span class="lv_2">
                    SUP
                </span> <strong></strong> </a>
			</li>
			<li id="path3" class="" style={{display:'none'}}>
				<a href="javascript: void(0);"> <span class="lv_3">
                    MA
                </span> <strong></strong> </a>
			</li>
			<li id="path0" class="" style={{display:'none'}}>
				<a href="javascript: void(0);"> <span class="lv_4">
                    PL
                </span> <strong></strong> </a>
			</li>
			<ul class="account_pop" id="accountPop" >
				<li id="popTmp" style={{display:'none'}}>
					<a href=""></a>
				</li>
			</ul>
		</ul>
	</div>
	
	{/* <!-- Agent Left Column --> */}
	<div class="col-left">
		{/* <!-- Sub Menu and Path --> */}
		<div class="sub_path">
			{/* <!-- Sub Menu --> */}
			<ul class="menu-list">
				<li class="class">Position</li>
				<li><a id="accountStatement" href="/agent/myAccount/accountCashStatement.jsp">Account Statement</a></li>
				<li><a id="accountSummary" href="#" class="select">Account Summary</a></li>
				<li><a id="transferredLog" href="/agent/myAccount/transferredLog.jsp">Transferred Log</a></li>
				<li class="class">Account Details</li>
				<li><a id="profile" href="/agent/myAccount/profile.jsp">Profile</a></li>
				<li><a id="activityLog" href="/agent/myAccount/activityLog.jsp">Activity Log</a></li>
			</ul>
		</div>
	</div>
	{/* <!-- Loading Wrap --> */}
	<div id="loading" class="loading-wrap" style={{display:'none'}}>
		<ul class="loading">
			<li><img src="/images/loading40.gif"/></li>
			<li>Loading...</li>
		</ul>
	</div>
	{/* <!-- Message --> */}
	<div id="message" class="message-wrap success"> <a class="btn-close">Close</a>
		<p></p>
	</div>
	
	{/* <!-- Center Column --> */}
	<div class="col-center report">
		<h2>Account Summary</h2>
		<div class="white-wrap">
			<dl class="head-balance"> <dt>Your Balances</dt>
				<dd id="yourBalance">4,401.98 <span>PTH</span></dd>
			</dl>
		</div>
	</div>
</div>
        </React.Fragment>
    )
}
