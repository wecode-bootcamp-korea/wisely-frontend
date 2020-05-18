import React from "react";
import styled, { css } from "styled-components";
import SurveyNav from "../Components/Surveys/SurveyNav";
import Survey3Com from "../Components/Surveys/Survey3Com";

const Survey3 = () => {
  return (
    <Survey1Wrapper>
      {/* <GlobalStyles /> */}

      <SurveyNav />

      <Survey3Com />
    </Survey1Wrapper>
  );
};

export default Survey3;

const Survey1Wrapper = styled.div`
  font-family: "Spoqa Han Sans";
`;
