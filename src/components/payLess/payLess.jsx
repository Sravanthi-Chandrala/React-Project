import React from 'react';
import '../payLess/payless.css';
import icon1 from '../payLess/Images/icon1.png';
import icon2 from '../payLess/Images/icon2.png';
import icon3 from '../payLess/Images/icon3.png';




class payLess extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <div className='payLess-container'>
                <div className='box1'>
                    <h1>Trade More. <span  className='yellow-text'>PayLess.</span></h1>
                    <p>Our low Fees Supercharge Your Profits</p>
                </div>
                <div className='box21'>
                    <div className='card1'>
                        <img src={icon1} alt='Icon1' id='icon1'/>
                        <div className='makersfee'>
                            <h1>0.025</h1>
                            <p>Maker Fees</p>
                        </div>
                        <div className='takerfee'>
                            <h1>0.07</h1>
                            <p>Taker Fees</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={icon2} alt='icon2'  id='icon2'/>
                        <div className='makerfee'>
                            <h1>0.04</h1>
                            <p>Makers Fees</p>
                        </div>
                        <div className='takersfee'>
                            <h1>0.02</h1>
                            <p>Takers Fees</p>
                        </div>
                    </div>
                    <div className='card1'>
                        <img src={icon3} alt='icon3'/>
                        <div className='makersfee'>
                            <h1>0.02</h1>
                            <p>Maker Fees</p>
                        </div>
                        <div className='takerfee'>
                            <h1>0.05</h1>
                            <p>Taker Fees</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default payLess;