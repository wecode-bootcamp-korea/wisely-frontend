import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { withRouter } from "react-router-dom";

const SurveySeComCopy = (props) => {
  // const tabs = [
  //   "강한 자극과 따가움",
  //   "피부 붉어짐",
  //   "상처와 트러블",
  //   "건조하고 당기는 피부",
  //   "수염이 바짝 깎이지 않음",
  //   "없음",
  // ];

  const goTo = (path) => {
    props.history.push(path);
  };

  const [isContact, setIsContact] = useState(-1);

  const [keyId0, setKeyId0] = useState(false);
  const [keyId1, setKeyId1] = useState(false);
  const [keyId2, setKeyId2] = useState(false);
  const [keyId3, setKeyId3] = useState(false);
  const [keyId4, setKeyId4] = useState(false);
  const [keyId5, setKeyId5] = useState(false);

  //클릭할때 트루가 폴스로 바뀌어야하는데 그게 안됨..
  const keyClickHandle0 = (id) => {
    setIsContact(id);
    setKeyId0(`${!keyId0}`);
    setKeyId5(false);
    console.log("클릭");
  };

  const keyClickHandle1 = (id) => {
    setIsContact(id);
    setKeyId1(`${!keyId1}`);
    setKeyId5(false);
  };

  const keyClickHandle2 = (id) => {
    setIsContact(id);
    setKeyId2(`${!keyId2}`);
    setKeyId5(false);
  };

  const keyClickHandle3 = (id) => {
    setIsContact(id);
    setKeyId3(`${!keyId3}`);
    setKeyId5(false);
  };

  const keyClickHandle4 = (id) => {
    setIsContact(id);
    setKeyId4(`${!keyId4}`);
    setKeyId5(false);
  };

  const keyClickHandle5 = (id) => {
    setIsContact(id);
    setKeyId5(true);
    setKeyId0(false);
    setKeyId1(false);
    setKeyId2(false);
    setKeyId3(false);
    setKeyId4(false);
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
            <SubTitleInn>
              면도할 때 느끼는 불편함을 모두 선택해주세요
            </SubTitleInn>
          </SubTitle>
          <SelectBox>
            <ItemBoxWrapper
              onClick={(e) => keyClickHandle0(0)}
              contactBoxchange={isContact}
              keyTandF={keyId0}
            >
              <TextBox contactBoxchange={isContact} keyTandF={keyId5}>
                <div>강한 자극과 따가움</div>
              </TextBox>
            </ItemBoxWrapper>

            <ItemBoxWrapper
              onClick={(e) => keyClickHandle1(1)}
              contactBoxchange={isContact}
              keyTandF={keyId1}
            >
              <TextBox contactBoxchange={isContact} keyTandF={keyId5}>
                <div>피부 붉어짐</div>
              </TextBox>
            </ItemBoxWrapper>

            <ItemBoxWrapper
              onClick={(e) => keyClickHandle2(2)}
              contactBoxchange={isContact}
              keyTandF={keyId2}
            >
              <TextBox contactBoxchange={isContact} keyTandF={keyId5}>
                <div>상처와 트러블</div>
              </TextBox>
            </ItemBoxWrapper>

            <ItemBoxWrapper
              onClick={(e) => keyClickHandle3(3)}
              contactBoxchange={isContact}
              keyTandF={keyId3}
            >
              <TextBox contactBoxchange={isContact} keyTandF={keyId5}>
                <div>건조하고 당기는 피부</div>
              </TextBox>
            </ItemBoxWrapper>

            <ItemBoxWrapper
              onClick={(e) => keyClickHandle4(4)}
              contactBoxchange={isContact}
              keyTandF={keyId4}
            >
              <TextBox contactBoxchange={isContact} keyTandF={keyId5}>
                <div>수염이 바짝 깎이지 않음</div>
              </TextBox>
            </ItemBoxWrapper>

            <ItemBoxWrapper
              onClick={(e) => keyClickHandle5(5)}
              contactBoxchange={isContact}
              keyTandF={keyId5}
            >
              <TextBox contactBoxchange={isContact} keyTandF={keyId5}>
                <div>없음</div>
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

export default withRouter(SurveySeComCopy);

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
