import React from "react";
import '../specifications/specifications.css';


class Specifications extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <div className="specifications">
                <div className="container">
                    <div className="spark">
                        <h1>00%</h1>
                        <p>conversion fee</p>
                    </div>
                    <div className="spark">
                        <h1>500Mn+</h1>
                        <p>Lifetime Volume Traded</p>
                    </div>
                    <div className="spark">
                        <h1>250+</h1>
                        <p>Total Tradable Pairs</p>
                    </div>
                    <div className="spark">
                        <h1>15,000+</h1>
                        <p>Traders</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Specifications;