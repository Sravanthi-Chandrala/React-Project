import React from "react";
import Header from "../header";

import "../Background/background.css";

import Hero from "../Hero/hero";

import Specifications from "../specifications/specifications";
import Group from "../Group/group";
import PayLess from "../payLess/payLess";
import ExploreMarket from "../ExploreMarkets/explore";
import Frontiers from "../Frontiers/frontier";
import Earnbig from "../EarnBig/earnbig";
import Derivatives from "../Derivatives/derivatives";
import BackEndBest from "../BackendBest/backendbest";
import Review from "../Reviews/reviews";
import Earnmoney from "../EarnMoney/earnmoney";
import TradeTogether from "../Trade-Together/tradetogether";
import Visionaries from "../visionaries/visionaries";
import GetStartedNow from "../GetStartedNow/getStarted";
import Footer from "../Footer/footer";




class BackGround extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="main-container">
                    <Header />
                    <Hero />
                    <Specifications />
                    <Group />
                    <PayLess />
                    <ExploreMarket />
                    <Frontiers />
                    <Earnbig />
                    <Derivatives />
                    <BackEndBest />
                    <Review />
                    <Earnmoney />
                    <TradeTogether />
                    <Visionaries />
                    <GetStartedNow />
                    <Footer />
            </div>
        )

    }
}
export default BackGround;