import React from "react";
import'../Hero/hero.css';
import imageLeft from '../Hero/images/iphone-left.jpg';
import imageMiddle from '../Hero/images/iphone-middle.jpg';
import imageRight from '../Hero/images/iphone-right.jpg';


class Hero extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div className="hero-container">
                <div className="text-con">
                    <h1>It's time to trade,<br></br>the <span className="future">future.</span></h1>
                    <p>Trade BTC,ETH Futures with 125x Leverage And Earn Rewards</p>
                </div>
                <div className="mobile-con">
                <img src={imageLeft} alt="image1" className="image1 img-left"/>
                <img src={imageMiddle} alt="image1" className="img"/>
                <img src={imageRight} alt="image1" className="image1 img-right"/>



                </div>
            </div>
        )
    }
}
export default Hero;