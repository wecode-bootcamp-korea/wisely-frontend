import React, { useState } from "react";
import ShaveHabitText1 from "./ShaveHabitText1";
import ShaveHabitText2 from "./ShaveHabitText2";
import ShaveHabitText3 from "./ShaveHabitText3.js";
import styled, { keyframes } from "styled-components";

const ShaveHabit = () => {
  const [clickedNum, setClickedNum] = useState(1);
  const habitTexts = {
    1: <ShaveHabitText1 />,
    2: <ShaveHabitText2 />,
    3: <ShaveHabitText3 />,
  };

  const clickStep = (num) => {
    setClickedNum(num);
  };
  return (
    <ShaveHabitContainer>
      <LeftDiv>
        <LeftDivdiv>
          <h2>
            함께 사용해보세요
            <br />
            <strong>3단계 현명한 습관</strong>
          </h2>
          <StepsContainer>
            <PositionDiv>
              <StepOne steps={clickedNum} onClick={() => clickStep(1)}>
                1.쉐이빙젤
              </StepOne>
              <Arrow>></Arrow>
              <StepTwo steps={clickedNum} onClick={() => clickStep(2)}>
                2.면도
              </StepTwo>
              <Arrow>></Arrow>
              <StepThree steps={clickedNum} onClick={() => clickStep(3)}>
                3.애프터쉐이브
              </StepThree>
            </PositionDiv>
            <BlueBackground steps={clickedNum} />
          </StepsContainer>
        </LeftDivdiv>
        <LeftDivdiv2>
          <section>
            {habitTexts[clickedNum]}
            <LearnMoreBtn>더 알아보기</LearnMoreBtn>
          </section>
        </LeftDivdiv2>
      </LeftDiv>
      <RightDiv>
        <RightImg
          src={`https://wiselyshave-cdn.s3.amazonaws.com/assets/images/razorHabit/razor_habit_${clickedNum}.png`}
          alt=''
        />
      </RightDiv>
    </ShaveHabitContainer>
  );
};

const ShaveHabitContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  max-width: 1920px;
  width: auto;
  min-height: 570px;
  height: 44.792vw;
  margin: 0 auto;
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 48px;
    padding-bottom: 80px;
    font-weight: 300;
    line-height: 130%;
    letter-spacing: -0.06em;
    color: #1e314a;
  }
  strong {
    font-weight: 400;
  }
`;

const LeftDivdiv = styled.div`
  width: 400px;
  margin-top: 80px;
`;

const LeftDivdiv2 = styled.div`
  width: 400px;
`;

const StepsContainer = styled.div`
  margin-bottom: 53px;
  height: 40px;
  position: relative;
  z-index: 10;
  /* &::before {
    content: "";
    position: absolute;
    width: 108px;
    top: 0;
    height: 100%;
    background: #0055b8;
    border-radius: 20px;
    z-index: 0;
  } */
`;

const PositionDiv = styled.div`
  position: relative;
  vertical-align: middle;
`;

const BlueBackground = styled.div`
  width: ${(props) => {
    if (props.steps === 1) return "110px";
    else if (props.steps === 2) return "80px";
    else return "130px";
  }};
  height: 100%;
  background: #0055b8;
  border-radius: 20px;
  z-index: -1;
  position: absolute;
  top: 0;
  left: ${(props) => {
    if (props.steps === 1) return "0";
    else if (props.steps === 2) return "137px";
    else return "247px";
  }};
  transition: left 0.3s ease-in-out, width 0.3s ease-in-out,
    color 0.5s ease-in-out;
`;

const StepOne = styled.span`
  display: inline-block;
  text-align: center;
  width: 108px;
  line-height: 40px;
  font-size: 16px;
  color: ${(props) => (props.steps === 1 ? `#ffffff` : `#1e314a`)};
  cursor: pointer;
`;

const StepTwo = styled(StepOne)`
  width: 81px;
  color: ${(props) => (props.steps === 2 ? `#ffffff` : `#1e314a`)};
`;

const StepThree = styled(StepOne)`
  width: 134px;
  color: ${(props) => (props.steps === 3 ? `#ffffff` : `#1e314a`)};
`;

const Arrow = styled.span`
  margin: 0 10px;
  color: #1e314a;
`;
const LearnMoreBtn = styled.span`
  font-size: 14px;
  line-height: 100px;
  letter-spacing: -0.04em;
  color: #0055b8;
  cursor: pointer;
`;

const RightDiv = styled.div`
  height: 100%;
  width: 50%;
  margin-left: 9.0623%;
  position: relative;
`;

const imgAnimation = keyframes`
 from{opacity:0;}to{opacity:1;}
`;

const RightImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${imgAnimation} 0.6s ease-in-out;
  top: 0;
  left: 0;
`;
export default ShaveHabit;
