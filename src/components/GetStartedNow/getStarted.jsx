import React from "react";
import '../GetStartedNow/getstarted.css';
import hsr from '../GetStartedNow/Images/hsr.png'
function GetStartedNow(){
    return(
        <div className="getstated">
            <div className="getstarted-text">
                <h1>Get started now.</h1>
            </div>
            <div className="back">
                <img src={hsr} alt="image1"/>
                <div></div>
            </div>
            <button type="button" className="button-btn">Start Trading!</button>
        </div>
    )
}
export default GetStartedNow;