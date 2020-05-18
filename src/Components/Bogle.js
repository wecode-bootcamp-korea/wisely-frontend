import React, { Component } from "react";
import styled, { css } from "styled-components";

class Bogle extends Component {
  constructor() {
    super();

    this.state = {
      scrollyy: "0",
    };
  }

  componentDidMount() {
    const yy = window.scrollY;
    if (yy >= 0)
      window.addEventListener(
        "scroll",
        (e) => {
          this.Updownbubble(e);
        }
        //true
      );
  }

  Updownbubble = (e) => {
    const yy = window.scrollY;
    const xx = (yy - 487) / 10; // ((yy-487) * (1024/10000)); 이건 소수점4자리
    const popPop = 100 - xx; //버블이미지 height %
    this.setState({
      scrollyy: popPop,
    });
  };

  render() {
    //console.log(window.scrollY);
    return (
      <Secti>
        <BogleWrapper>
          <Leftimg>
            <Line></Line>
            <Buble isHeight={`${this.state.scrollyy}`}></Buble>
            <Shaverimg></Shaverimg>
          </Leftimg>
          <Righttext>
            <Top>
              <p>거품을 덜어내고,</p>
              <p>품질에 투자하다</p>
            </Top>
            <Bottom>
              <p>
                폭리와 가격거품은 모두 덜어내고, 품질에 과감하게 투자했습니다.
              </p>
              <p>
                시중 업체들이 따라올 수 없는 품질과 가격에는 이유가 있습니다.
              </p>
              <br />
              <p>* 면도 구독서비스 1위 (2020년 2월, 오픈서베이)</p>
            </Bottom>
          </Righttext>
        </BogleWrapper>
      </Secti>
    );
  }
}

export default Bogle;

const Secti = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BogleWrapper = styled.div`
  padding: 120px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Leftimg = styled.div`
  width: 420px;
  height: 420px;
  margin: 0 130px 0 0;
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

const Line = styled.div`
  height: 4px;
  z-index: 1;
  background-color: #0055b8;
  border-radius: 50px;
  width: 50%;
  margin: 0 auto;
`;

const Buble = styled.div`
  background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/bubblePrice/bubble_500x500.png");
  height: ${(props) => props.isHeight}%;
  transform: rotate(180deg);
  background-size: cover;
  background-position-x: center;
  background-repeat: no-repeat;
  width: 100%;
  /* z-index: 1;  text 이렇게 옵션줘도 제대로작동할지*/
`;

const Shaverimg = styled.div`
  background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/bubblePrice/razor_500x500.png");
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-size: cover;
  background-position-x: center;
  background-repeat: no-repeat;
  width: 100%;
`;

const Righttext = styled.div`
  color: #1e314a;
  text-align: left;
`;

const Top = styled.div`
  margin-bottom: 25px;
  font-size: 40px;
  color: #1e314a;
  line-height: 140%;
  letter-spacing: -0.06em;
`;

const Bottom = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 160%;
  letter-spacing: -0.06em;
  color: #1e314a;
`;
