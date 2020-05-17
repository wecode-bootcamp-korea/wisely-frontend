import React from "react";
import styled, { keyframes } from "styled-components";

class ShaveHabitText2 extends React.Component {
  render() {
    return (
      <TextArea>
        <MiddleTitle>
          독일산 5중날로
          <br />
          남김없이 깔끔하게
        </MiddleTitle>
        <MiddleP>
          품질 좋은 면도날로 깔끔하게 면도하세요.
          <br /> 턱 굴곡을 부드럽게 따라가며 수염을 절삭해줍니다.
        </MiddleP>
      </TextArea>
    );
  }
}

const textAnimation = keyframes`
 from{opacity:0;}to{opacity:1;}
`;

const TextArea = styled.div`
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
export default ShaveHabitText2;
