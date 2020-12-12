import React from 'react'

export default function TotalBox() {
    return (
        <React.Fragment>
            <div id="totalBox" class="total_box" >

<dl id="creditLimitDL" class="total_dl" style={{display:'none'}}>
    <dt>Credit Limit</dt>
    <dd id="myCreditLimit">PTH 135,290.02</dd>
</dl>
<dl id="creditGivenOutDL" class="total_dl" style={{display:'none'}}>
    <dt>Total Credit Given Out</dt>
    <dd id="totalCreditGivenOut">PTH 131,371.04</dd>
</dl>
<dl id="creditAvailBalDL" class="total_dl" style={{display:'none'}}>
    <dt>Credit Avail Bal</dt>
    <dd id="myCreditAvailBal">PTH 3,918.98</dd>
</dl>
<dl id="totalBalanceDL" class="total_dl" >
    <dt>Total Balance</dt>
    <dd id="totalBalance">PTH 47,124.96</dd>
</dl>
<dl id="totalExposureDL" class="total_dl" >
    <dt>Total Exposure</dt>
    <dd id="totalExposure">PTH <span class="red">(50.00)</span></dd>
</dl>
<dl id="myCurrentPLDL" class="total_dl" style={{display:'none'}}>
    <dt>Today P/L with Upline
    </dt>
    <dd id="myCurrentPL">PTH 1,209.39</dd>
</dl>
<dl id="availableBalanceDL" class="total_dl" >
    <dt>Total Avail. bal.</dt>
    <dd id="totalAvailBal">PTH 47,074.96</dd>
</dl>
<dl id="masterBalanceDL" class="total_dl" >
    <dt>Balance</dt>
    <dd id="mastersBalance">PTH 4,401.98</dd>
</dl>
<dl id="masterAvailableBalanceDL" class="total_dl" >
    <dt>Available Balance</dt>
    <dd id="mastersAvailBal">PTH 51,476.94</dd>
</dl>
<dl id="transferablePLWithUplineDL" class="total_dl" >
    <dt>Transferable P/L with Upline
    </dt>
    <dd id="transferablePLWithUpline">PTH <span class="red">(86,422.09)</span></dd>
</dl>





</div>
        </React.Fragment>
    )
}
