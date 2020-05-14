import React from "react";
import styled, { keyframes } from "styled-components";

function Ja() {
  return (
    <JaStyle>
      독점화된 면도기 시장을 '가성비'로 뚫은 브랜드,
      <br /> 시장을 정확히 파고 들었다.
    </JaStyle>
  );
}

const opacityAni = keyframes`
  from{opacity:0;}to{opacity:1;}
`;
const JaStyle = styled.div`
  animation: ${opacityAni} 0.6s ease-in-out;
`;

export default Ja;
