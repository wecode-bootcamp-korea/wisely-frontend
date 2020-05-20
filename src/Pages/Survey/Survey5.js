import React from "react";
import styled, { css } from "styled-components";
import SurveyNav from "../../Components/Surveys/SurveyNav";
import ResultTop from "../../Components/Surveys/ResultTop";
import ResultBottom from "../../Components/Surveys/ResultBottom";
import { withRouter } from "react-router-dom";

const Survey5 = () => {
  return (
    <Survey2Wrapper>
      <SurveyNav />
      <ResultTop />
      <ResultBottom />
    </Survey2Wrapper>
  );
};

export default Survey5;

const Survey2Wrapper = styled.div`
  font-family: "Spoqa Han Sans";
`;
