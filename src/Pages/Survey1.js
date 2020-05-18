import React from "react";
import styled, { css } from "styled-components";
import SurveyNav from "../Components/Surveys/SurveyNav";
import Survey1Com from "../Components/Surveys/Survey1Com";

const Survey1 = () => {
  return (
    <Survey1Wrapper>
      {/* <GlobalStyles /> */}

      <SurveyNav />

      <Survey1Com />
    </Survey1Wrapper>
  );
};

export default Survey1;

const Survey1Wrapper = styled.div`
  font-family: "Spoqa Han Sans";
`;
