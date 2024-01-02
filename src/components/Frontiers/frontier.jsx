import React from "react";
import graph1 from '../Frontiers/Images/graph1.png';
import graph2 from '../Frontiers/Images/graph2.png';
import '../Frontiers/frontier.css';
function Frontiers(){
    return(
        <div className="frontier-container">
            <div className="frontier-text">
                <h1><span id="unlock">Unlock </span>New Frontiers.</h1>
                <p>Are you a stock trader looking for new opportunities to make<br></br> money? We got you covered!</p>
            </div>
            <div className="sections">
                <div className="frontier-box">
                    <h3>Same Strategies</h3>
                </div>
                <div className="frontier-box">
                <h3>Same Indicators</h3>
                </div>
                <div className="frontier-box">
                <h3>Better Leverage</h3>
                </div>
                <div className="frontier-box">
                <h3>24x7 Trading</h3>
                </div>
            </div>
            <div className="charts1">
                <img src={graph1} alt="graph1"/>
                <img src={graph2} alt="graph2"/>
            </div>
        </div>
    )
}
export default Frontiers;