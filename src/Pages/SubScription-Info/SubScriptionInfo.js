import React, { Component } from "react";
import SubScriptionMain from "./SubScription-Main/SubScriptionMain";
import SubScriptionFree from "./SubScription-Free/SubScriptionFree";
import Changecolor from "../../Components/Changecolor";
import Nav from "../../Components/Nav";
import Bogle from "../../Components/Bogle";
import SubScriptionStory from "./SubScription-story/SubScriptionStroy";
import ShaveHabit from "../../Components/ProductDetail/ShaveHabit";
import Footer from "../../Components/Footer";

class SubScriptionInfo extends Component {

  render() {
    return (
      <div>
        <Nav />
        <SubScriptionMain />
        <SubScriptionFree />
        <Changecolor />
        <Bogle />
        <SubScriptionStory />
        <ShaveHabit />
        <Footer />
      </div>
    );
  }
}

export default SubScriptionInfo;
