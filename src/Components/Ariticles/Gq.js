import React from "react";
import styled, { keyframes } from "styled-components";

function Gq() {
  return (
    <GqStyle>
      다이아몬드 코팅된 독일산5중날로서
      <br /> 우수한 절삭력을 보여주는데도 1만원 이하다.
    </GqStyle>
  );
}

const opacityAni = keyframes`
    from {opacity: 0;} to {opacity: 1;}
`;

const GqStyle = styled.div`
  animation: ${opacityAni} 0.6s ease-in-out;
`;

export default Gq;
