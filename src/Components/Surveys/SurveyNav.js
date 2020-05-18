import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const SurveyNav = () => {
  return (
    <SurveyNavWrapper>
      <Header>
        <Naviga>
          <h1 className="wisely">
            <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/WiselyLogo.svg" />
          </h1>
        </Naviga>
      </Header>
    </SurveyNavWrapper>
  );
};

export default SurveyNav;

const Header = styled.header`
  height: 89px;
  border-bottom: 1px solid #f5f5f5;
`;

const Naviga = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  padding: 0 32px;
  width: 100%;
  max-width: 1140px;
`;

const SurveyNavWrapper = styled.div`
  font-family: "Spoqa Han Sans";
`;
