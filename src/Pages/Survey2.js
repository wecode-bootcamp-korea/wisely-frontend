import React from "react";
import styled, { css } from "styled-components";
import SurveyNav from "../Components/Surveys/SurveyNav";
import Survey2Com from "../Components/Surveys/Survey2Com";

const Survey2 = () => {
  return (
    <Survey2Wrapper>
      {/* <GlobalStyles /> */}
      <SurveyNav />
      <Survey2Com />
    </Survey2Wrapper>
  );
};

export default Survey2;

const Survey2Wrapper = styled.div`
  font-family: "Spoqa Han Sans";
`;
