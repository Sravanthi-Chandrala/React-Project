import React from "react";
import '../Group/group.css';
import Graph from '../Group/image/bar-graph.png';
import elipse from '../Group/image/elicpse.png';
import plate from '../Group/image/plate.png';


class Group extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="container-box">
                <div className="box">
                    <div className="bar-graph">
                        <img src={Graph} alt="Graph" />
                    </div>
                    <div className="text-box">
                        One App. Endless Possibilities
                    </div>
                </div>
                <div className="box">
                    <div className="bar-elipse">
                        <img src={elipse} alt="Graph" />
                    </div>
                    <div className="elipse-text">
                        Future of Derivative Trading.
                    </div>
                </div>
                <div className="box">
                    <div className="bar-plate">
                        <img src={plate} alt="Graph" />
                    </div>
                    <div className="plate-text">
                        Is now here, for you
                    </div>
                </div>
            </div>
        )
    }
}
export default Group;