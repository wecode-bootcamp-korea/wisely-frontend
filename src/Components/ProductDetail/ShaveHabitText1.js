import React from "react";
import styled, { keyframes } from "styled-components";

class ShaveHabitText1 extends React.Component {
  render() {
    return (
      <Textarea>
        <MiddleTitle>
          10초만 투자하면
          <br />
          면도가 부드러워져요
        </MiddleTitle>
        <MiddleP>
          자극없이 면도하고 싶다면 꼭 사용해보세요.
          <br /> 수염을 불려서 쉽게 잘리도록 도와주고, 면도날이
          <br /> 피부를 자극하지 않도록 쿠션 역할을 해줍니다.
        </MiddleP>
      </Textarea>
    );
  }
}
const textAnimation = keyframes`
    from{opacity:0;}to{opacity:1;}
`;

const Textarea = styled.div`
  animation: ${textAnimation} 0.6s ease-in-out;
`;

const MiddleTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 25px;
  line-height: 140%;
`;

const MiddleP = styled.p`
  /* margin-bottom: 40px; */
  font-weight: 300;
  font-size: 14px;
  line-height: 160%;
  letter-spacing: -0.04em;
`;
export default ShaveHabitText1;
