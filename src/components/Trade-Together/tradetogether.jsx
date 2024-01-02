import React from "react";
import '../Trade-Together/tradetogether.css';
function TradeTogether(){
    return(
        <div className="trade-background">
            <div className="trade-text">
                <h1>Trade Together. <span>Thrive Together.</span></h1>
                <p>Join the fun-filled community on our platform.</p>
            </div>
            <div className="trade">
           
                <div className="trade-box">
                    <h3>10,000+</h3>
                    <p>Traders</p>
                </div>
                <div className="trade-box">
                <h3>100Mn</h3>
                <p>Volume Traded</p>
                </div>
                <div className="trade-box">
                <h3>Daily</h3>
                <p>Trade Analysis</p>
                </div>
                <div className="trade-box">
                <h3>Live</h3>
                <p>Signals</p>
                </div>
            </div>
            <button type="submit" className="button">JION COMMUNITY</button>
        </div>
    )
}
export default TradeTogether;