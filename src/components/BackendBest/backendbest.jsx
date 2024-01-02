import React from "react";
import '../BackendBest/backendbest.css';
import orios from '../BackendBest/Images/orios.png';
import inflexion from '../BackendBest/Images/inflexion.png';
import ventures from '../BackendBest/Images/ventures.png';
import partners from '../BackendBest/Images/partners.png';
import raise1 from '../BackendBest/Images/1947raise.png';
import capital from '../BackendBest/Images/capital.png';
import polygon from '../BackendBest/Images/polygon.png';
import ustav from '../BackendBest/Images/UtsavSomani.png';
import Aditya from '../BackendBest/Images/aditya.png';
import Gokul from '../BackendBest/Images/gokul.png';
import Sajid from '../BackendBest/Images/sajid.png';
import Arjun from '../BackendBest/Images/arjun.png';
import Kunal from '../BackendBest/Images/kunal.png';
import Sandeep from '../BackendBest/Images/sandeep.png';
import Vivek from '../BackendBest/Images/vivek.png';
function BackEndBest() {
    return (
        <div className="backend-container1">
            <div className="backend-text1">
                <h3>Backed by the Best.</h3>
            </div>
            <div className="icon-persons">
                <div className="iconss">
                    <img src={orios} alt="icon1" id="img11" />
                    <img src={inflexion} alt="icon1" id="img22" />
                    <img src={ventures} alt="icon1" id="img33" />
                    <img src={partners} alt="icon1" id="img44" /><br></br>
                    <div id="three-images">
                        <img src={raise1} alt="icon1" id="img55" />
                        <img src={capital} alt="icon1" id="img66" />
                        <img src={polygon} alt="icon1" id="img77" />
                    </div>
                </div>
                <div className="persons">
                    <div className="pers">
                        <img src={ustav} alt="person1"/>
                        <h3>Utsav Somani</h3>
                    </div>
                    <div className="pers">
                    <img src={Aditya} alt="person1" id="aditya"/>
                       <div className="name">
                        <h3>Aditya Nagarsheth</h3>
                            <p>Perpetual Value Partners</p>
                        </div> 
                    </div>
                    <div className="pers">
                    <img src={Gokul} alt="person1"/>
                        <h3>Gokul Rajaram</h3>
                    </div>
                    <div className="pers">
                    <img src={Sajid} alt="person1" id="sajid"/>
                        <h3>Sajid Rehman</h3>
                        <p>My Asia VC</p>
                    </div>
                    <div className="pers">
                    <img src={Aditya} alt="person1" id="arjun"/>
                        <h3>Arjun Sethi</h3>
                        <p>Tribe Capital</p>
                    </div><br></br>
                    <div className="pers">
                    <img src={Kunal} alt="person1"/>
                        <h3>Kunal Shah</h3>
                    </div>
                    <div className="pers">
                    <img src={Sandeep} alt="person1" id="sandeep"/>
                        <h3>Sandeep Nailawal</h3>
                        <p>Polygon Labs</p>
                    </div>
                    <div className="pers">
                    <img src={Vivek} alt="person1"/>
                        <h3>Karn Vivek Nagpal</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BackEndBest;