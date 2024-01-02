import React from "react";
import '../EarnMoney/earnmoney.css';
import mike from '../EarnMoney/Images/mike.png';
import link from '../EarnMoney/Images/link.png';
import invite from '../EarnMoney/Images/invite.png';
import  trade from '../EarnMoney/Images/trade-earn.png';
function Earnmoney(){
    return(
        <div className="earnmoney">
            <div className="earnmoney-caption">
                <img src={mike} alt="mike-img"/>
                <div className="money">
                    <h1>Earn Money. <span>The Easy Way.</span></h1>
                    <p>No Complexity of Trading Fee, generate volume and win</p>
                </div>
            </div>
            <div className="ways-to-earn">
                <div className="ways">
                    <img src={link} alt="link"/>
                    <h4>Share your your referral link</h4>
                </div>
                <div className="ways">
                    <img src={invite} alt="link"/>
                    <h4>Invite Friends to Trade on Density</h4>
                </div>
                <div className="ways">
                    <img src={trade} alt="link"/>
                    <h4>Trade <br/>and Earn</h4>
                </div>
            </div>
            <button type="button" className="button">START EARNING NOW</button>
        </div>
    )
}
export default Earnmoney;