import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { connect } from "react-redux";
import { addSelect4 } from "../../store/actions/addSelect4";
import { withRouter } from "react-router-dom";

const SurveyFoCom = (props) => {
  const colortabs = ["#122141", "#3A81C1", "#CECECE"];
  const shaverimgtabs = [
    "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/razor_lie_navy.png",
    "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/razor_lie_blue.png",
    "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/razor_lie_gray.png",
  ];
  const [quesTitle, setQuesTitle] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [isContact4, setIsContact4] = useState(0);

  useEffect(() => {
    fetch("http://10.58.7.74:8000/subscription-survey/4")
      .then((res) => res.json())
      .then((res) => {
        console.log("타이틀 :", res.data.question);
        console.log("조그만글 :", res.data.answers);

        setQuesTitle(res.data.question);
        setAnswers(res.data.answers);
      });
  }, []);

  const clickHandlevent = (id) => {
    setIsContact4(id);
  };

  const goTo = (path) => {
    props.history.push(path);
    props.addSelect4(isContact4 + 1);
  };

  return (
    <SurveySeComWrapper>
      <SubWrapper>
        <InnerWrapper>
          <SurveyNumber>
            <CurrentNum>04</CurrentNum>
            <TotalNum> / 04</TotalNum>
          </SurveyNumber>
          <LittleTi>구독시 무료로 드려요!</LittleTi>
          <SubTitle>
            <SubTitleInn>{quesTitle}</SubTitleInn>
          </SubTitle>
          {/**/}
          <SelectBox>
            {answers.map((tabname, idx) => {
              return (
                <ItemWrapper>
                  <ItemBoxWrapper
                    onClick={(e) => clickHandlevent(idx)}
                    contactBoxchange={isContact4}
                    keyId={idx}
                  >
                    <TextBox contactBoxchange={isContact4} keyId={idx}>
                      <Color
                        style={{ backgroundColor: `${colortabs[idx]}` }}
                      ></Color>
                      <TextWrapper>
                        <ColorText>{tabname}</ColorText>
                      </TextWrapper>
                    </TextBox>
                  </ItemBoxWrapper>
                  <ImgWrapper>
                    <ImageShaver
                      src={shaverimgtabs[idx]}
                      style={{ opacity: isContact4 === idx ? 1 : 0 }}
                    ></ImageShaver>
                    {/* {shaverimgtabs[idx]} 위에 대신 이런방법도 있음, {shaverimgtabs[isContact]} */}
                  </ImgWrapper>
                </ItemWrapper>
              );
            })}
          </SelectBox>
          {/**/}
          <NextBtnBox1Wrapper>
            <BtnBox onClick={() => goTo("/Survey5")}>
              <p>결과보기</p>
            </BtnBox>
          </NextBtnBox1Wrapper>
        </InnerWrapper>
      </SubWrapper>
    </SurveySeComWrapper>
  );
};

export default withRouter(connect(null, { addSelect4 })(SurveyFoCom));

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
  margin-top: 100px;
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

const LittleTi = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.06em;
  color: #0055b8;
`;

//SubTitle
const SubTitle = styled.div`
  font-weight: 300;
  font-size: 30px;
  line-height: 130%;
  letter-spacing: -0.06em;
  color: #1e314a;
  margin-top: 20px;
`;

const SubTitleInn = styled.span`
  font-size: 46px;
`;

//SelectBox
const SelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px auto 0;
  width: 760px;
  max-width: 100%;
  position: relative;
`;

const ItemWrapper = styled.div`
  margin-top: 230px;
  margin-bottom: 5px;
  flex-direction: column-reverse;
  margin-top: 230px;
  width: 240px;
  height: 60px;
  display: flex;
  justify-content: space-between;
`;

const ItemBoxWrapper = styled.div`
  display: flex;
  padding: 0 18px;
  background: ${(props) =>
    props.contactBoxchange === props.keyId ? "rgba(0,85,184,.03)" : "#fcfcfc"};
  border: ${(props) =>
    props.contactBoxchange === props.keyId
      ? "1px solid #0055b8"
      : "1px solid #f6f6f6"};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  cursor: pointer;
  width: 240px;
  height: 60px;
  /* flex-direction: column-reverse; */
  justify-content: space-between;
  align-items: center;
`;

const TextBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  text-align: center;
  font-size: 16px;
  line-height: 130%;
  letter-spacing: -0.06em;
  word-break: keep-all;
  font-weight: ${(props) =>
    props.contactBoxchange === props.keyId ? "400" : "300"};
  color: ${(props) =>
    props.contactBoxchange === props.keyId ? "#0055b8" : "#979797"};
`;

const Color = styled.div`
  align-self: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 182px;
`;

const ColorText = styled.div`
  align-self: center;
`;

//면도기이미지
const ImgWrapper = styled.div`
  /* visibility: visible; */
  /* opacity: 1; */
  height: unset;
  top: -60px;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
  z-index: -1;
  position: absolute;
`;

const ImageShaver = styled.img`
  transform: scale(0.5);
  transition: opacity 1.2s ease;
`;

//결과보기버튼
const NextBtnBox1Wrapper = styled.div`
  margin-top: 100px;
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
