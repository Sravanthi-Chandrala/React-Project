import React from "react";
import '../Derivatives/derivatives.css';
import profile from '../Derivatives/Images/profile.png';
import mobile1 from '../Derivatives/Images/mobile11.png';
import mobile2 from '../Derivatives/Images/mobile21.png';
import mobile3 from '../Derivatives/Images/mobile31.png';
import coin from '../Derivatives/Images/coin.png';
import raise from '../Derivatives/Images/raise.png';

function Derivatives(){
    return(
        <div className="derivatives-container">
            <div className="derivative-text">
              <h1>Derivatives Made Simple<br></br>In <span id="easy">3 Easy </span>Steps</h1>
            </div>
            <div className="derivatives-features">
                <div className="trade-now">
                    <img src={mobile1} alt="image1" id="mobile1"/>
                    <div className="create-account">
                        <img src={profile} alt="profile" id="profile"/>
                        <div className="account">
                            <div className="account-text">
                                <h2>Create An Account</h2>
                                <p>Register & Complete your<br></br> Verification in less than 2 minutes</p>
                            </div>
                            <button type="button">Trade Now</button>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="trade-now">
                <img src={mobile2} alt="image1" id="mobile1"/>
                    <div className="create-account">
                        <img src={coin} alt="profile" id="profile"/>
                        <div className="account">
                            <div className="account-text">
                                <h2>Deposit Funds</h2>
                                <p>Add funds quickly using a variety<br></br> of payment methods</p>
                            </div>
                            <button type="button">Trade Now</button>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="trade-now">
                <img src={mobile3} alt="image1" id="mobile1"/>
                    <div className="create-account">
                        <img src={raise} alt="profile" id="profile"/>
                        <div className="account">
                            <div className="account-text">
                                <h2>Become a Trader</h2>
                                <p>Choose Your Trading Pair & Trade<br></br> Seamlessly</p>
                            </div>
                            <button type="button">Trade Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Derivatives;