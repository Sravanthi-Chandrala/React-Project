import React from "react";
import '../visionaries/visionaries.css';
import Frame1 from '../visionaries/Images/Frame1.png';
import Frame2 from '../visionaries/Images/Frame2.png';
import Frame3 from '../visionaries/Images/Frame3.png';

function Visionaries(){
    return(
        <div className="visionary">
            <div className="vision-text">
                <h1>Meet the <span>Visionaries</span> behind Density.</h1>
            </div>
            <div className="vision">
                <img src={Frame1} alt="Frame"/>
                <img src={Frame2} alt="Frame"/>
                <img src={Frame3} alt="Frame"/>
            </div>
        </div>
    )
}
export default Visionaries;