import React from "react";
import '../Reviews/reviews.css';
import client1 from '../Reviews/Images/client1.png';
import client2 from '../Reviews/Images/client2.png';
import client3 from '../Reviews/Images/client3.png';
function Review(){
    return(
        <div className="review-container">
            <div className="review-text">
                <h1>Don’t take our word for it.</h1>
                <p>Hear it from our expert community of traders who have made<br/> insane amounts in a short amount of time</p>
            </div>
            <div className="people-review">
                <div className="review-one">
                    <p>As someone who's always looking for the next big thing, I was really excited to try out Density’s crypto futures trading platform. And I have to say, it definitely lived up to my expectations.</p>
                    
                    <span ><h4>Prakash Jamatia.</h4>Founder, Tradeshala</span>
                    <img src={client1} alt="client1"/>
                </div>
                <div className="review-one">
                <p>I'm not a seasoned trader, but this website has made it easy for me to get started with crypto futures trading. Their KYC was very fast and the educational resources were really helpful.</p>
                    
                    <span><h4 id="com-trader">Shambhavi Nayak.</h4>Commodity Trader</span>
                    <img src={client2} alt="client1" id="client2"/>
                </div>
                <div className="review-one">
                <p>I've been using this platform for a few months now and it's been a great experience. I was delighted to see all the major crypto coins listed on Density Exchange.</p>
                    
                    <span><h4  id="equity-trader">Arjun Naik.  </h4>Equity Trader</span>
                    <img src={client3} alt="client1" id="client3"/>
                </div>
            </div>
        </div>
    )
}
export default Review;