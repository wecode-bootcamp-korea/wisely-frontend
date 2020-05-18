import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const Changecolor = () => {
  return (
    <ChangecolorWrapper>
      <TextH2>
        <Strong>부드럽고 정교한 면도</Strong>
        <br />
        독일산 5중 면도날
      </TextH2>
      <Shaperimg src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/subscription/razor_navy.png"></Shaperimg>
    </ChangecolorWrapper>
  );
};

const ChangecolorWrapper = styled.div`
  height: 100%;
  padding-top: 120px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
`;

const TextH2 = styled.h2`
  font-size: 48px;
  line-height: 130%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #1e314a;
  font-weight: 300;
  margin-bottom: 80px;
`;

const Strong = styled.strong`
  font-weight: 400;
`;

const Shaperimg = styled.img`
  width: 280px;
  margin: 0 auto;
`;

export default Changecolor;
