import React from "react";
import '../EarnBig/earnbig.css';
import percentage from '../EarnBig/Images/percentage.png';
import Manager from '../EarnBig/Images/Manager.png';

function Earnbig(){
    return(
        <div className="earn-container">
        <div className="earn-text">
            <h1>Start Small. Earn Big.</h1>
            <p>Deposit a minimum of 1000 and get a Deposit bonus + dedicated relationship manager</p>
        </div>
        <div className="start-small">
            <div className="bonus">
                <img src={percentage} alt="Percentage"/>
                <h3>Deposit Bonus.</h3>
                <p>Our assets' liquidity is unmatched in the market, with a small bid-ask spread and a well-balanced order book.</p>
            </div>
            <div className="manager">
                <img src={Manager} alt="Percentage"/>
                <h3 id="relation">Dedicated<br/> Relationship Manager.</h3>
                <p>Our assets' liquidity is unmatched in the market, with a small<br/> bid-ask spread and a well-balanced order book.</p>
            </div>
        </div>
    </div>
    )
}
export  default Earnbig;