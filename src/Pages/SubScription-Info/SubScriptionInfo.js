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
  // constructor(props) {
  //     super(props);
  //     this.stopHere = React.createRef();
  //     this.state = {
  //         stopScrollOne: false
  //     }
  // }

  // componentDidMount = () => {
  //     window.addEventListener('scroll', this.whenScrolled);
  // }

  // whenScrolled = () => {
  //     console.log("hey");
  //     let scrollTop = window.scrollY;
  //     console.log(scrollTop);
  //     if (scrollTop <= 3400) {
  //         // window.addEventListener('scroll', this.haltScroll)
  //     }
  // }

  // haltScroll = () => {
  //     window.scrollTo(0, 3400);
  //     this.setState({
  //         stopScrollOne: true
  //     }, ()=> {console.log(this.state.stopScrollOne)})
  // }

  // whenDone = () => {
  //     window.removeEventListener('scroll',this.haltScroll)
  // }

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
