import React from "react";
import styled, { css } from "styled-components";
import SurveyNav from "../../Components/Surveys/SurveyNav";
import Survey0Com from "../../Components/Surveys/Survey0Com";

const Survey0 = () => {
  return (
    <Survey0Wrapper>
      <SurveyNav />
      <Survey0Com />
    </Survey0Wrapper>
  );
};

export default Survey0;

const Survey0Wrapper = styled.div`
  font-family: "Spoqa Han Sans";
`;
