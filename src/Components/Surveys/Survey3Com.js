import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import { addSelect3 } from "../../store/actions/addSelect3";
import { withRouter } from "react-router-dom";

const SurveySeComCopy = (props) => {
  const [quesTitle, setQuesTitle] = useState();
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    fetch("http://52.14.187.223:8000/subscription-survey/3")
      .then((res) => res.json())
      .then((res) => {
        console.log("제목타이틀 :", res.data.question);
        console.log("answers :", res.data.answers);

        setQuesTitle(res.data.question);
        setAnswers(res.data.answers);
      });
  }, []);

  const goTo = (path) => {
    props.history.push(path);
    props.addSelect3(isThree);
  };

  const [isContact3, setIsContact3] = useState(-1);
  const [isThree, setIsThree] = useState(-1);

  const [keyId0, setKeyId0] = useState(false);
  const [keyId1, setKeyId1] = useState(false);
  const [keyId2, setKeyId2] = useState(false);
  const [keyId3, setKeyId3] = useState(false);
  const [keyId4, setKeyId4] = useState(false);
  const [keyId5, setKeyId5] = useState(false);

  //클릭할때 트루가 폴스로 바뀌어야하는데 그게 안됨..
  const keyClickHandle0 = (id) => {
    setIsContact3(id);
    setKeyId0(`${!keyId0}`);
    setKeyId5(false);
    setIsThree("1");
    console.log("클릭");
  };

  const keyClickHandle1 = (id) => {
    setIsContact3(id);
    setKeyId1(`${!keyId1}`);
    setKeyId5(false);
    setIsThree("1");
  };

  const keyClickHandle2 = (id) => {
    setIsContact3(id);
    setKeyId2(`${!keyId2}`);
    setKeyId5(false);
    setIsThree("1");
  };

  const keyClickHandle3 = (id) => {
    setIsContact3(id);
    setKeyId3(`${!keyId3}`);
    setKeyId5(false);
    setIsThree("1");
  };

  const keyClickHandle4 = (id) => {
    setIsContact3(id);
    setKeyId4(`${!keyId4}`);
    setKeyId5(false);
    setIsThree("1");
  };

  const keyClickHandle5 = (id) => {
    setIsContact3(id);
    setKeyId5(true);
    setKeyId0(false);
    setKeyId1(false);
    setKeyId2(false);
    setKeyId3(false);
    setKeyId4(false);
    setIsThree("2");
  };

  return (
    <SurveySeComWrapper>
      <SubWrapper>
        <InnerWrapper>
          <SurveyNumber>
            <CurrentNum>03</CurrentNum>
            <TotalNum> / 04</TotalNum>
          </SurveyNumber>
          <SubTitle>
            <SubTitleInn>{quesTitle}</SubTitleInn>
          </SubTitle>
          <SelectBox>
            <ItemBoxWrapper
              onClick={(e) => keyClickHandle0(0)}
              contactBoxchange={isContact3}
              keyTandF={keyId0}
            >
              <TextBox contactBoxchange={isContact3} keyTandF={keyId5}>
                <div>{answers[0]}</div>
              </TextBox>
            </ItemBoxWrapper>

            <ItemBoxWrapper
              onClick={(e) => keyClickHandle1(1)}
              contactBoxchange={isContact3}
              keyTandF={keyId1}
            >
              <TextBox contactBoxchange={isContact3} keyTandF={keyId5}>
                <div>{answers[1]}</div>
              </TextBox>
            </ItemBoxWrapper>

            <ItemBoxWrapper
              onClick={(e) => keyClickHandle2(2)}
              contactBoxchange={isContact3}
              keyTandF={keyId2}
            >
              <TextBox contactBoxchange={isContact3} keyTandF={keyId5}>
                <div>{answers[2]}</div>
              </TextBox>
            </ItemBoxWrapper>

            <ItemBoxWrapper
              onClick={(e) => keyClickHandle3(3)}
              contactBoxchange={isContact3}
              keyTandF={keyId3}
            >
              <TextBox contactBoxchange={isContact3} keyTandF={keyId5}>
                <div>{answers[3]}</div>
              </TextBox>
            </ItemBoxWrapper>

            <ItemBoxWrapper
              onClick={(e) => keyClickHandle4(4)}
              contactBoxchange={isContact3}
              keyTandF={keyId4}
            >
              <TextBox contactBoxchange={isContact3} keyTandF={keyId5}>
                <div>{answers[4]}</div>
              </TextBox>
            </ItemBoxWrapper>

            <ItemBoxWrapper
              onClick={(e) => keyClickHandle5(5)}
              contactBoxchange={isContact3}
              keyTandF={keyId5}
            >
              <TextBox contactBoxchange={isContact3} keyTandF={keyId5}>
                <div>{answers[5]}</div>
              </TextBox>
            </ItemBoxWrapper>
          </SelectBox>
          {/**/}
          <NextBtnBox1Wrapper>
            <BtnBox onClick={() => goTo("/Survey4")}>
              <p>다음</p>
            </BtnBox>
          </NextBtnBox1Wrapper>
          {/**/}
        </InnerWrapper>
      </SubWrapper>
    </SurveySeComWrapper>
  );
};

export default withRouter(connect(null, { addSelect3 })(SurveySeComCopy));

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
  width: 760px;
  max-width: 100%;
  flex-wrap: wrap;
`;

const ItemBoxWrapper = styled.div`
  display: flex;
  margin: 5px 0;
  padding: 10px 20px;
  background: ${(props) => (props.keyTandF ? "rgba(0,85,184,.03)" : "#fcfcfc")};
  border: ${(props) =>
    props.keyTandF ? "1px solid #0055b8" : "1px solid #f6f6f6"};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  cursor: pointer;
  width: 240px;
  height: 60px;
  color: ${(props) => (props.keyTandF ? "#0055b8" : "#979797")};

  font-weight: ${(props) => (props.keyTandF ? "400" : "300")};
`;

const TextBox = styled.div`
  align-self: center;
  width: 100%;
  text-align: center;
  font-size: 16px;
  line-height: 130%;
  letter-spacing: -0.06em;
  word-break: keep-all;
`;

const NextBtnBox1Wrapper = styled.div`
  margin-top: 50px;
`;

const BtnBox = styled.button`
  height: 60px;
  font-weight: 400;
  font-size: 20px;
  width: 195px;
  outline: none;
  cursor: pointer;
  border: 0;
  background: #0055b8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  color: #fff;
  line-height: 59px;
  letter-spacing: -0.06em;
`;
