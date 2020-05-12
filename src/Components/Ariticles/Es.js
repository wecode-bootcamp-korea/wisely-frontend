import React from "react";
import styled, { keyframes } from "styled-components";

function Es() {
  return (
    <EsStyle>
      뛰어난 절삭력,간결한 구성과
      <br /> 효율적인 디자인이 만들어내는 만족감
    </EsStyle>
  );
}

const opacityAni = keyframes`
  from{opacity:0;}to{opacity:1;}
`;
const EsStyle = styled.div`
  animation: ${opacityAni} 0.6s ease-in-out;
`;
export default Es;
