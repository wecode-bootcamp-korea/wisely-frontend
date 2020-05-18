import React from "react";
import styled, { css } from "styled-components";
import SurveyNav from "../Components/Surveys/SurveyNav";
import Survey4Com from "../Components/Surveys/Survey4Com";

const Survey4 = () => {
  return (
    <Survey1Wrapper>
      {/* <GlobalStyles /> */}

      <SurveyNav />

      <Survey4Com />
    </Survey1Wrapper>
  );
};

export default Survey4;

const Survey1Wrapper = styled.div`
  font-family: "Spoqa Han Sans";
`;
