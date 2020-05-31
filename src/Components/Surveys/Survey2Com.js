import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import NextBtnBox2_1 from "./NextBtnBox2_1.js";
import NextBtnBox2_2 from "./NextBtnBox2_2";
import NextBtnBox2_3 from "./NextBtnBox2_3";

const SurveyTirComCopy = () => {
  const [quesTitle, setQuesTitle] = useState();
  const [answers, setAnswers] = useState([]);

  const obj = {
    0: <NextBtnBox2_1 />,
    1: <NextBtnBox2_2 />,
    2: <NextBtnBox2_3 />,
  };

  const [isContact2, setIsContact2] = useState(-1);

  const clickHandlevent = (id) => {
    setIsContact2(id);
  };

  useEffect(() => {
    fetch("http://52.14.187.223:8000/subscription-survey/2")
      .then((res) => res.json())
      .then((res) => {
        console.log("question :", res.data.question);
        console.log("answers :", res.data.answers);

        setQuesTitle(res.data.question);
        setAnswers(res.data.answers);
      });
  }, []);

  return (
    <SurveySeComWrapper>
      <SubWrapper>
        <InnerWrapper>
          <SurveyNumber>
            <CurrentNum>02</CurrentNum>
            <TotalNum> / 04</TotalNum>
          </SurveyNumber>
          <SubTitle>
            <SubTitleInn>{quesTitle}</SubTitleInn>
          </SubTitle>
          <SelectBox>
            {answers.map((tabname, idx) => {
              return (
                <ItemBoxWrapper
                  onClick={(e) => clickHandlevent(idx)}
                  contactBoxchange={isContact2}
                  keyId={idx}
                >
                  <TextBox contactBoxchange={isContact2} keyId={idx}>
                    <div>{tabname}</div>
                  </TextBox>
                </ItemBoxWrapper>
              );
            })}
          </SelectBox>
          {/**/}
          <div>{obj[isContact2]}</div>
        </InnerWrapper>
      </SubWrapper>
    </SurveySeComWrapper>
  );
};

export default SurveyTirComCopy;

const SurveySeComWrapper = styled.div`
  min-height: calc(100vh - 89px);
  min-width: 60%;
  position: relative;
  overflow: hidden;
`;

const SubWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px 16px;
  width: 100%;
`;

const InnerWrapper = styled.div`
  max-width: 980px;
  text-align: center;
  background-image: red;
`;

//SurveyNumber
const SurveyNumber = styled.div`
  margin-top: 140px;
  margin-bottom: 40px;
  font-size: 16px;
`;

const CurrentNum = styled.span`
  line-height: 100%;
  letter-spacing: -0.04em;
  color: #0055b8;
  height: 24px;
`;

const TotalNum = styled(CurrentNum)`
  font-size: 16px;
  color: #ddd;
`;

//SubTitle
const SubTitle = styled.div`
  font-weight: 300;
  font-size: 30px;
  line-height: 130%;
  letter-spacing: -0.06em;
  color: #1e314a;
`;

const SubTitleInn = styled.span`
  font-size: 46px;
`;

//SelectBox
const SelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 80px auto 0;
  width: 880px;
  max-width: 100%;
`;

const ItemBoxWrapper = styled.div`
  display: flex;
  margin: 5px 0;
  padding: 10px 20px;
  background: ${(props) =>
    props.contactBoxchange === props.keyId ? "rgba(0,85,184,.03)" : "#fcfcfc"};
  border: ${(props) =>
    props.contactBoxchange === props.keyId
      ? "1px solid #0055b8"
      : "1px solid #f6f6f6"};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  cursor: pointer;
  width: 280px;
  height: 60px;
`;

const TextBox = styled.div`
  align-self: center;
  width: 100%;
  text-align: center;
  font-size: 16px;
  line-height: 130%;
  letter-spacing: -0.06em;
  word-break: keep-all;
  color: #979797;
  font-weight: ${(props) =>
    props.contactBoxchange === props.keyId ? "400" : "300"};
  color: ${(props) =>
    props.contactBoxchange === props.keyId ? "#0055b8" : "#979797"};
`;
