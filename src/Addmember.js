import React from 'react'

export default function Addmember(props) {
    return (
        <React.Fragment>
            <div id="createModal" class="pop_bg" style={{display:'block'}}>
  <div class="pop_box ">
    <a class="close_pop" href="#" onClick={()=>{props.HandlePopup(2,false)}}>close_pop</a>

    <h3>Add Master Agent
    </h3>
    <ul class="half_box add-member-box">
      <li class="add_account_box">
        <dl class="border_b">
          <dt>E-mail</dt>
          <dd>
            <input id="email" type="text" onclick="location.href='#stake'" placeholder="Enter" maxlength="50"/>
            <span class="must">＊</span>
          </dd>
          <dt>Username</dt>
          <dd>
            <input id="userName" type="text" onclick="location.href='#stake'" placeholder="Enter" maxlength="16"/>
            <span class="must">＊</span>
            <span id="userNameErrorText" class="error-text" style={{display:'none'}}></span>
          </dd>
          <dt>Password</dt>
          <dd>
            <input id="userPassword" type="password" onclick="location.href='#stake'" placeholder="Enter"/>
            <span class="must">＊</span>
            <span id="passwordErrorText" class="error-text" style={{display:'none'}}></span>
          </dd>
          <dt>Confirm Password</dt>
          <dd>
            <input id="repeatPassword" type="password" onclick="location.href='#stake'" placeholder="Enter"/>
            <span class="must">＊</span>
            <span id="repeatPasswordErrorText" class="error-text" style={{display:'none'}}></span>
          </dd>
        </dl>
        <dl class="">
          <dt>First Name</dt>
          <dd>
            <input id="firstName" type="text" onclick="location.href='#stake'" placeholder="Enter" maxlength="16"/>
          </dd>
          <dt>Last Name</dt>
          <dd>
            <input id="lastName" type="text" onclick="location.href='#stake'" placeholder="Enter" maxlength="16"/>
          </dd>
          <dt>Phone</dt>
          <dd>
            <input id="phone" type="text" onclick="location.href='#stake'" placeholder="Enter" maxlength="16"/>
          </dd>
          
          
          
          
          
          
          
          
          
          
          
          
          
          <dt>Commission(%)</dt>
          <dd>
            <input id="commission" type="text" onclick="location.href='#tax'" placeholder="Enter" value=""/>
            <span class="must">＊</span>
          </dd>


          

          <dt>Time Zone</dt>
          <dd>
            <select name="timezone" id="timezone">
              
              <option value="Pacific/Midway">Pacific/Midway(GMT-11:00)</option>
              
              <option value="Pacific/Honolulu">Pacific/Honolulu(GMT-10:00)</option>
              
              <option value="America/Juneau">America/Juneau(GMT-9:00)</option>
              
              <option value="America/Los_Angeles">America/Los_Angeles(GMT-8:00)</option>
              
              <option value="America/Phoenix">America/Phoenix(GMT-7:00)</option>
              
              <option value="America/Chicago">America/Chicago(GMT-6:00)</option>
              
              <option value="America/New_York">America/New_York(GMT-5:00)</option>
              
              <option value="America/Santiago">America/Santiago(GMT-4:00)</option>
              
              <option value="America/Sao_Paulo">America/Sao_Paulo(GMT-3:00)</option>
              
              <option value="Atlantic/South_Georgia">Atlantic/South_Georgia(GMT-2:00)</option>
              
              <option value="Atlantic/Azores">Atlantic/Azores(GMT-1:00)</option>
              
              <option value="Europe/London">Europe/London(GMT+0:00)</option>
              
              <option value="Europe/Paris">Europe/Paris(GMT+1:00)</option>
              
              <option value="Africa/Cairo">Africa/Cairo(GMT+2:00)</option>
              
              <option value="Asia/Qatar">Asia/Qatar(GMT+3:00)</option>
              
              <option value="Asia/Dubai">Asia/Dubai(GMT+4:00)</option>
              
              <option value="Asia/Karachi">Asia/Karachi(GMT+5:00)</option>
              
              <option value="IST" selected="selected">IST(Bangalore / Bombay / New Delhi) (GMT+5:30)</option>
              
              <option value="Asia/Kathmandu">Asia/Kathmandu(GMT+5:45)</option>
              
              <option value="Asia/Dhaka">Asia/Dhaka(GMT+6:00)</option>
              
              <option value="Asia/Bangkok">Asia/Bangkok(GMT+7:00)</option>
              
              <option value="Asia/Hong_Kong">Asia/Hong_Kong(GMT+8:00)</option>
              
              <option value="Asia/Tokyo">Asia/Tokyo(GMT+9:00)</option>
              
              <option value="Australia/Adelaide">Australia/Adelaide(GMT+9:30)</option>
              
              <option value="Australia/Melbourne">Australia/Melbourne(GMT+10:00)</option>
              
              <option value="Asia/Magadan">Asia/Magadan(GMT+11:00)</option>
              
              <option value="Pacific/Fiji">Pacific/Fiji(GMT+12:00)</option>
              
            </select>
            <span class="must">＊</span>
          </dd>
        </dl>
      </li>
	    <li class="pt_allowed_box" style={{display:'none'}}>
        




<div class="pt_allowed" style={{display:'none'}}>
    <dl>
		<dt class="dt_w50">PT Allowed To Master Agent(%)</dt>
		<dd><input id="memberMaxPT" type="text" onclick="location.href='#stake'" placeholder="Enter" value="0"/> </dd>
    </dl>
    
    
    
    
    
    
    
</div>
<div class="sports_box" style={{height: '350px',overflow: 'hidden',overflowY: 'auto'}}>
    <p>
        My Sports PT Setting
		<span id="settingNote" class="note" style={{display:'none'}}>PT setting % value must be multiplier of 5 : </span>
    </p>

    <ul class="half_box">
        <li>
            <div id="sportsSet" class="sports_set">
                <dl class="bg_head">
					<dt>All Sports Set</dt>
                    <dd>
						<input id="allowOneMaxPT" type="text" onclick="location.href='#stake'" placeholder="Enter" value="0"/>
                        <ul class="odd-add">
                            <li><a class="up" href="#" name="copy_one_up">up</a></li>
                            <li><a class="down" href="#" name="copy_one_down">down</a></li>
                        </ul>
						<div class="tips-popup" style={{display:'none'}}>multiplier of 5</div>
                    </dd>
                    
                    
                    
                    
                </dl>
                
                <dl class="">
                    <dt>Soccer</dt>
                   	
                   	<dd class="">
                        <input id="soccer_PT" type="text" name="normal" data-type="1" value="0"/>
                    </dd>
					<div class="tips-popup" style={{display:'none'}}>multiplier of 5</div>
                    
                    
                    
                </dl>
				
                <dl class="bg_dark">
                    <dt>Tennis</dt>
                   	
                   	<dd class="">
                        <input id="tennis_PT" type="text" name="normal" data-type="2" value="0"/>
                    </dd>
					<div class="tips-popup" style={{display:'none'}}>multiplier of 5</div>
                    
                    
                    
                </dl>
				
                <dl class="">
                    <dt>Cricket</dt>
                   	
                   	<dd class="">
                        <input id="cricket_PT" type="text" name="normal" data-type="4" value="0"/>
                    </dd>
					<div class="tips-popup" style={{display:'none'}}>multiplier of 5</div>
                    
                    
                    
                </dl>
				
                <dl class="bg_dark">
                    <dt>Rugby Union</dt>
                   	
                   	<dd class="">
                        <input id="rugby_union_PT" type="text" name="normal" data-type="5" value="0"/>
                    </dd>
					<div class="tips-popup" style={{display:'none'}}>multiplier of 5</div>
                    
                    
                    
                </dl>
				
                <dl class="">
                    <dt>Horse Racing</dt>
                   	
                   	<dd class="">
                        <input id="horse_racing_PT" type="text" name="normal" data-type="7" value="0"/>
                    </dd>
					<div class="tips-popup" style={{display:'none'}}>multiplier of 5</div>
                    
                    
                    
                </dl>
				
                <dl class="bg_dark">
                    <dt>Greyhound Racing</dt>
                   	
                   	<dd class="">
                        <input id="greyhound_racing_PT" type="text" name="normal" data-type="4339" value="0"/>
                    </dd>
					<div class="tips-popup" style={{display:'none'}}>multiplier of 5</div>
                    
                    
                    
                </dl>
				
                <dl class="">
                    <dt>American Football</dt>
                   	
                   	<dd class="">
                        <input id="american_football_PT" type="text" name="normal" data-type="6423" value="0"/>
                    </dd>
					<div class="tips-popup" style={{display:'none'}}>multiplier of 5</div>
                    
                    
                    
                </dl>
				
                <dl class="bg_dark">
                    <dt>Basketball</dt>
                   	
                   	<dd class="">
                        <input id="basketball_PT" type="text" name="normal" data-type="7522" value="0"/>
                    </dd>
					<div class="tips-popup" style={{display:'none'}}>multiplier of 5</div>
                    
                    
                    
                </dl>
				
                <dl class="">
                    <dt>Politics</dt>
                   	
                   	<dd class="">
                        <input id="politics_PT" type="text" name="normal" data-type="2378961" value="0"/>
                    </dd>
					<div class="tips-popup" style={{display:'none'}}>multiplier of 5</div>
                    
                    
                    
                </dl>
				
            </div>
			<p>My PT Allowed <strong id="yourPT">0</strong>%</p>
        </li>

        <li>
            
            <div id="fancyBetSet" class="sports_set" style={{display:'none', height:'150px'}}>
                <dl class="bg_head">
                    <dt>FancyBet Setting</dt>
                </dl>

                <dl class="">
					<dt>Super</dt>
                    <dd>
						<input id="company_fancy_bet_PT" type="text" onclick="location.href='#stake'" placeholder="Enter" data-type="company" value="0"/>
                        <ul class="odd-add">
                            <li><a class="up" href="#">up</a></li>
                            <li><a class="down" href="#">down</a></li>
                        </ul>
						<div class="tips-popup" style={{display:'none'}}>multiplier of 5</div>
                    </dd>
                </dl>

                <dl class="bg_dark" id="fancyBetSSSPt">
                    <dt>SSS</dt>
                    <dd>
                        <input id="sss_fancy_bet_PT" type="text" onclick="location.href='#stake'" placeholder="Enter" data-type="sss" value="0"/>
                        <ul class="odd-add">
                            <li><a class="up" href="#">up</a></li>
                            <li><a class="down" href="#">down</a></li>
                        </ul>
                        <div class="tips-popup" style={{display:'none'}}>multiplier of 5</div>
                    </dd>
                </dl>

                <dl class="" id="fancyBetDirectLevelPt">
					<dt>Master Agent</dt>
                    <dd>
						<input id="shareHolder_fancy_bet_PT" type="text" onclick="location.href='#stake'" placeholder="Enter" data-type="shareHolder" value="0"/>
                        <ul class="odd-add">
                            <li><a class="up" href="#">up</a></li>
                            <li><a class="down" href="#">down</a></li>
                        </ul>
						<div class="tips-popup" style={{display:'none'}}>multiplier of 5</div>
                    </dd>
                </dl>
            </div>
            <p id="fancyBetTotalPTCol" style={{display:'none'}}>
                FancyBet total PT allowed <strong id="fancyBetTotalPT">0</strong>%
            </p>
        </li>

        <li>
            <div id="bookMakerSet" class="sports_set" style={{display:'none', height:'115px'}}>
                <dl class="bg_head">
                    <dt>BookMaker Setting</dt>
                </dl>

                <dl class="">
                    <dt>Super</dt>
                    <dd>
                        <input id="company_book_maker_PT" type="text" onclick="location.href='#stake'" placeholder="Enter" data-type="company" value="0"/>
                        <ul class="odd-add">
                            <li><a class="up" href="#">up</a></li>
                            <li><a class="down" href="#">down</a></li>
                        </ul>
                        <div class="tips-popup" style={{display:'none'}}>multiplier of 5</div>
                    </dd>
                </dl>

                <dl class="bg_dark" id="bookMakerDirectLevelPt">
                    <dt>Master Agent</dt>
                    <dd>
                        <input id="shareHolder_book_maker_PT" type="text" onclick="location.href='#stake'" placeholder="Enter" data-type="shareHolder" value="0"/>
                        <ul class="odd-add">
                            <li><a class="up" href="#">up</a></li>
                            <li><a class="down" href="#">down</a></li>
                        </ul>
                        <div class="tips-popup" style={{display:'none'}}>multiplier of 5</div>
                    </dd>
                </dl>
            </div>
            <p id="bookMakerTotalPTCol" style={{display:'none'}}>
                BookMaker total PT allowed <strong id="bookMakerTotalPT">0</strong>%
            </p>
        </li>

        <li>
			<div id="sportsbookTennisSet" class="sports_set" style={{display:'none',height:'115px'}}>
                <dl class="bg_head">
                    <dt>SportsBook</dt>
                    <dd><a class="toggle_on" href="#" id="edit_allow_sportsbookTennis">ON</a></dd>
                </dl>

                <dl class="">
					<dt>Super</dt>
                    <dd>
						<input id="company_sportsbook_tennis_PT" type="text" onclick="location.href='#stake'" placeholder="Enter" data-type="company" value="0"/>
                        <ul class="odd-add">
                            <li><a class="up" href="#">up</a></li>
                            <li><a class="down" href="#">down</a></li>
                        </ul>
						<div class="tips-popup" style={{display:'none'}}>multiplier of 5</div>
                    </dd>
                </dl>

                <dl class="bg_dark">
					<dt>Master Agent</dt>
                    <dd>
						<input id="shareHolder_sportsbook_tennis_PT" type="text" onclick="location.href='#stake'" placeholder="Enter" data-type="shareHolder" value="0"/>
                        <ul class="odd-add">
                            <li><a class="up" href="#">up</a></li>
                            <li><a class="down" href="#">down</a></li>
                        </ul>
						<div class="tips-popup" style={{display:'none'}}>multiplier of 5</div>
                    </dd>
                </dl>
            </div>
            <p style={{display:'none'}}>
                Sportsbook total PT allowed <strong id="sportsbookTennisTotalPT">0</strong>%
            </p>
        </li>
        
        <li>
            <div id="sportsbookPremiumCricketSet" class="sports_set" style={{display:'none'}}>
                <dl class="bg_head">
                    <dt>SportsBook - Premium</dt>
                    <dd><a class="toggle_on" href="#" id="edit_allow_sportsbookPremiumCricket">ON</a></dd>
                </dl>

                <dl class="">
                    <dt>Super
                    </dt>
                    <dd>
                        <input id="company_sportsbookPremiumCricket_PT" type="text" onclick="location.href='#stake'" placeholder="Enter" data-type="company" value="0"/>
                        <ul class="odd-add">
                            <li><a class="up" href="#">up</a></li>
                            <li><a class="down" href="#">down</a></li>
                        </ul>
                        <div class="tips-popup" style={{display:'none'}}>
                            multiplier of 5
                        </div>
                    </dd>

                </dl>

                <dl class="bg_dark">
                    <dt>Master Agent
                    </dt>
                    <dd>
                        <input id="shareHolder_sportsbookPremiumCricket_PT" type="text" onclick="location.href='#stake'" placeholder="Enter" data-type="shareHolder" value="0"/>
                        <ul class="odd-add">
                            <li><a class="up" href="#">up</a></li>
                            <li><a class="down" href="#">down</a></li>
                        </ul>
                        <div class="tips-popup" style={{display:'none'}}>
                            multiplier of 5
                        </div>
                    </dd>
                </dl>
            </div>
            <p style={{display:'none'}}>
                Premium total PT allowed <strong id="sportsbookPremiumCricketTotalPT">0</strong>%
            </p>
        </li>

        
        <li>
            <div id="financialBinarySet" class="sports_set" style={{display:'none'}}>
                <dl class="bg_head">
                    <dt>Binary Setting</dt>
                </dl>

                <dl class="">
                    <dt>Super
                    </dt>
                    <dd>
                        <input id="company_financialBinary_PT" type="text" onclick="location.href='#stake'" placeholder="Enter" data-type="company" value="0"/>
                        <ul class="odd-add">
                            <li><a class="up" href="#">up</a></li>
                            <li><a class="down" href="#">down</a></li>
                        </ul>
                        <div class="tips-popup" style={{display:'none'}}>
                            multiplier of 5
                        </div>
                    </dd>

                </dl>

                <dl class="bg_dark">
                    <dt>Master Agent
                    </dt>
                    <dd>
                        <input id="shareHolder_financialBinary_PT" type="text" onclick="location.href='#stake'" placeholder="Enter" data-type="shareHolder" value="0"/>
                        <ul class="odd-add">
                            <li><a class="up" href="#">up</a></li>
                            <li><a class="down" href="#">down</a></li>
                        </ul>
                        <div class="tips-popup" style={{display:'none'}}>
                            multiplier of 5
                        </div>
                    </dd>
                </dl>
            </div>
            <p style={{display:'none'}}>
                Binary total PT allowed <strong id="financialBinaryTotalPT">0</strong>%
            </p>
        </li>

        <li>
            <div id="casinoSet" class="sports_set">
                <dl class="bg_head">
                    <dt>Casino Setting</dt>
                    <dd style={{display:'none'}}>
                   		<a class="toggle_on" href="#" id="new_allow_casino">ON</a>
                	</dd>
                </dl>
                
                <dl class="">
                    <dt>Live</dt><br/>
                    <dt>Super</dt>
                    
                    <dd>
						<input id="live_agent_casino_PT" type="text" onclick="location.href='#stake'" placeholder="Enter" data-type="agent" data-categorytype="live" value="100"/>
						<ul class="odd-add">
                            <li><a class="up" href="#">up</a></li>
                            <li><a class="down" href="#">down</a></li>
                        </ul>
						<div class="tips-popup" style={{display:'none'}}>multiplier of 5</div>
                    </dd>
                    
                    <dt>Master Agent</dt>
                    <dd>
						<input id="live_downline_casino_PT" type="text" onclick="location.href='#stake'" placeholder="Enter" data-type="downline" data-categorytype="live" value="0"/>
						<ul class="odd-add">
                            <li><a class="up" href="#">up</a></li>
                            <li><a class="down" href="#">down</a></li>
                        </ul>
						<div class="tips-popup" style={{display:'none'}}>multiplier of 5</div>
                    </dd>
                </dl>
                <p style={{display:'none'}}>
					LIVE total PT allowed <strong id="casino_live_TotalPT">0</strong>%
				</p>
				
                <dl class="bg_dark">
                    <dt>R&amp;G</dt><br/>
                    <dt>Super</dt>
                    
                    <dd>
						<input id="rng_agent_casino_PT" type="text" onclick="location.href='#stake'" placeholder="Enter" data-type="agent" data-categorytype="rng" value="100"/>
						<ul class="odd-add">
                            <li><a class="up" href="#">up</a></li>
                            <li><a class="down" href="#">down</a></li>
                        </ul>
						<div class="tips-popup" style={{display:'none'}}>multiplier of 5</div>
                    </dd>
                    
                    <dt>Master Agent</dt>
                    <dd>
						<input id="rng_downline_casino_PT" type="text" onclick="location.href='#stake'" placeholder="Enter" data-type="downline" data-categorytype="rng" value="0"/>
						<ul class="odd-add">
                            <li><a class="up" href="#">up</a></li>
                            <li><a class="down" href="#">down</a></li>
                        </ul>
						<div class="tips-popup" style={{display:'none'}}>multiplier of 5</div>
                    </dd>
                </dl>
                <p style={{display:'none'}}>
					RNG total PT allowed <strong id="casino_rng_TotalPT">0</strong>%
				</p>
				
                <dl class="">
                    <dt>SLOT</dt><br/>
                    <dt>Super</dt>
                    
                    <dd>
						<input id="slot_agent_casino_PT" type="text" onclick="location.href='#stake'" placeholder="Enter" data-type="agent" data-categorytype="slot" value="100"/>
						<ul class="odd-add">
                            <li><a class="up" href="#">up</a></li>
                            <li><a class="down" href="#">down</a></li>
                        </ul>
						<div class="tips-popup" style={{display:'none'}}>multiplier of 5</div>
                    </dd>
                    
                    <dt>Master Agent</dt>
                    <dd>
						<input id="slot_downline_casino_PT" type="text" onclick="location.href='#stake'" placeholder="Enter" data-type="downline" data-categorytype="slot" value="0"/>
						<ul class="odd-add">
                            <li><a class="up" href="#">up</a></li>
                            <li><a class="down" href="#">down</a></li>
                        </ul>
						<div class="tips-popup" style={{display:'none'}}>multiplier of 5</div>
                    </dd>
                </dl>
                <p style={{display:'none'}}>
					SLOT total PT allowed <strong id="casino_slot_TotalPT">0</strong>%
				</p>
				
                <dl class="bg_dark">
                    <dt>Virtual Sports</dt><br/>
                    <dt>Super</dt>
                    
                    <dd>
						<input id="virtual_agent_casino_PT" type="text" onclick="location.href='#stake'" placeholder="Enter" data-type="agent" data-categorytype="virtual" value="100"/>
						<ul class="odd-add">
                            <li><a class="up" href="#">up</a></li>
                            <li><a class="down" href="#">down</a></li>
                        </ul>
						<div class="tips-popup" style={{display:'none'}}>multiplier of 5</div>
                    </dd>
                    
                    <dt>Master Agent</dt>
                    <dd>
						<input id="virtual_downline_casino_PT" type="text" onclick="location.href='#stake'" placeholder="Enter" data-type="downline" data-categorytype="virtual" value="0"/>
						<ul class="odd-add">
                            <li><a class="up" href="#">up</a></li>
                            <li><a class="down" href="#">down</a></li>
                        </ul>
						<div class="tips-popup" style={{display:'none'}}>multiplier of 5</div>
                    </dd>
                </dl>
                <p style={{display:'none'}}>
					VIRTUAL total PT allowed <strong id="casino_virtual_TotalPT">0</strong>%
				</p>
				
            </div>
        </li>
    </ul>
</div>
      </li>
    </ul>
    <div class="btn_box">
      <a href="#" id="createBtn" class="btn-send">Create</a>
    </div>
  </div>
</div>
        </React.Fragment>
    )
}
