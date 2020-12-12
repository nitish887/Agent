import React from 'react'
import Transparent from './images/transparent.gif'

export default function ChangeStatus(props) {
    return (
        <React.Fragment>
            <div id="changeStatusModal" class="pop_bg" style={{display: 'block'}}>
  <div class="pop_box">
    <a class="close_pop" href="javascript: void(0)" onClick={()=>{props.HandlePopup(1,false)}}>close_pop</a>
    <h3>Change Status</h3>
    <div class="status_id">
      <p id="changeAccount"><span class="lv_2">SUP</span>akshayddl</p>
      <p class="status-active" id="originalStatus"><img src={Transparent}/>Active</p>
    </div>

    <div class="white-wrap">

      <ul id="statusBtn" class="status_but">
        <li>
          <a id="activeBtn" class="but_active disable" href="#active" data-status="active">
            <img class="" src={Transparent}/>
            Active
          </a>
        </li>
        <li>
          <a id="suspendBtn" class="but_suspend" href="#suspend" data-status="suspend">
            <img class="" src={Transparent}/>
            Suspend
          </a>
        </li>
        <li>
          <a id="lockedBtn" class="but_locked" href="#locked" data-status="locked">
            <img class="" src={Transparent}/>
            Locked
          </a>
        </li>
      </ul>

    </div>

    <div class="suspend-wrap" id="maxWinLossSuspendDiv" style={{display: 'none'}}>
      <div class="status_id" id="maxWinLossSuspendStatus"></div>

      <div class="fix-content">
        <p id="maxLossSuspendInfo" style={{display: 'none'}}>Please change downline Max Loss Limit over the total loss or executed on Transferable P/L, before you unsuspend.</p>
        <p id="maxWinSuspendInfo" style={{display: 'none'}}>Please change downline Max Win Limit over the total win or executed on Transferable P/L, before you unsuspend.</p>

        <ul class="status_but">
          <li>
            <a class="but_suspend disable" id="maxLossUnSuspendBtn" href="javascript:void (0);">Unsuspend <strong>Loss</strong> Limit</a>
          </li>
          <li>
            <a class="but_suspend disable" id="maxWinUnSuspendBtn" href="javascript:void (0);">Unsuspend <strong>Win</strong> Limit</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="suspend-wrap" id="passLockDiv" style={{display: 'none'}}>
      <div class="sys-lock status_id">
        <p class="status-lock"><img src={Transparent}/>Passlocked</p>
      </div>

      <div class="fix-content">
        <ul class="status_but">
          <li>
            <a class="but_locked" id="unPassLockBtn" href="javascript:void (0);">Unlock</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="sys-suspend status_id" id="systemSuspendMessage" style={{display: 'none'}}>
      <p class="status-suspend"><img src={Transparent}/>System Suspend</p>
    </div>

    <div class="sys-lock status_id" id="systemLockedMessage" style={{display: 'none'}}>
      <p class="status-lock"><img src={Transparent}/>System Locked</p>
    </div>

    <div class="btn_box inline-form">
      <dl class="form_list">

        <dt>Password
        </dt>
        <dd>
          <input id="changeStatusPassword" type="password" placeholder="Enter"/>
        </dd>
      </dl>
      <div class="btn_box">
        <a id="changeStatusBtn" class="btn-send" href="javascript: void(0)">Change
        </a>
      </div>
    </div>
  </div>
</div>
        </React.Fragment>
    )
}
