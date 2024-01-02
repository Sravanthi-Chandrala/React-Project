import React from "react";
import '../ExploreMarkets/explore.css';

function ExploreMarket(){
    return(
        <div className="explore-container">
            <div className="explore-text">
                <h1>Explore the Markets <br></br>like it is your <span id="palyground">Playground.</span></h1>
                <p>Search for your favorite coins and stay ahead of the market</p>
            </div>
            <div className="chart">

            </div>
            <div className="rectangle"></div>
            <button type="button" id="button">EXPLORE MARKETS</button>
        </div>
    )
}
export default ExploreMarket;