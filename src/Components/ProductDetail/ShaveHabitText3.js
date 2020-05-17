import React from "react";
import styled, { keyframes } from "styled-components";

class ShaveHabitText3 extends React.Component {
  render() {
    return (
      <TextArea>
        <MiddleTitle>
          면도의 마무리는
          <br />
          자극받은 피부 케어
        </MiddleTitle>
        <MiddleP>
          면도 후 화끈거리는 피부를 방치하지 마세요.
          <br /> 면도날의 미세자극을 부드럽게 케어해줍니다. <br />
          트러블이나 건조함도 쉽게 관리할 수 있어요.
        </MiddleP>
      </TextArea>
    );
  }
}

const textAnimation = keyframes`
  from{opacity:0;} to {opacity:1;}
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
export default ShaveHabitText3;
