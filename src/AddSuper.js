import React from 'react'
import Transparent from './images/transparent.gif'

export default function AddSuper(props) {
    return (
        <React.Fragment>
            <div class="total_all">

<div class="search-wrap" id="userSearchUl" style={{display: 'none'}}>
    <div>
        <input class="search-input" type="text" name="userId" id="userId" placeholder="Find member..."/>
        <button class="search-but" id="searchUserId">Search</button>
    </div>
</div>


<div class="agent_path">
<ul id="agentPath" class="agent_path-L" style={{display: 'none'}}>

<li id="path6" class="" style={{display: 'none'}}>
    <a href="javascript: void(0);">
        <span class="lv_0">
            COM
        </span>
        <strong></strong>
    </a>
</li>

<li id="pathCurrency" class="currency_tag" style={{display: 'none'}}>
    <a href="javascript: void(0);">
        <span class=""></span>
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

<li id="path4" class="" style={{display: 'none'}}>
    <a href="javascript: void(0);">
        <span class="lv_2">
            SUP
        </span>
        <strong></strong>
    </a>
</li>

<li id="path3" class="" style={{display: 'none'}}>
    <a href="javascript: void(0);">
        <span class="lv_3">
            MA
        </span>
        <strong></strong>
    </a>
</li>

<li id="path0" class="" style={{display: 'none'}}>
    <a href="javascript: void(0);">
        <span class="lv_4">
            PL
        </span>
        <strong></strong>
    </a>
</li>

<ul class="account_pop" id="accountPop" >
    <li id="popTmp" style={{display: 'none'}}>
        <a href=""></a>
    </li>
</ul>
</ul>
</div>



<a id="refresh" class="btn_replay"><img src={Transparent}/></a>


<a class="add_member"  onClick={()=>{props.HandlePopup(2,true)}}><img src={Transparent}/>Add Super</a>

</div>
        </React.Fragment>
    )
}
