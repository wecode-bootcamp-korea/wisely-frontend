import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import NextBtnBox1 from "./NextBtnBox1_1";
import NextBtnBox2 from "./NextBtnBox1_2";
import NextBtnBox3 from "./NextBtnBox1_3";

const SurveyFirCom = () => {
  const tabs = ["하루에 여러 번", "하루에 한 번", "2~3일에 한 번"];
  const tabimgs = [
    "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/shave4Week.svg",
    "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/shave8Week.svg",
    "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/shave16Week.svg",
    "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/shave4WeekSelected.svg",
    "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/shave8WeekSelected.svg",
    "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/shave16WeekSelected.svg",
  ];

  const obj = {
    0: <NextBtnBox1 pTagText="" />,
    1: <NextBtnBox2 pTagText="" />,
    2: <NextBtnBox3 pTagText="" />,
  };

  const [isContact, setIsContact] = useState(-1); //API로 담아서 백엔드로 보내야함 몇번 선택했는지

  //몇번 탭 idx인지 담아오기
  const clickHandlevent = (id) => {
    setIsContact(id);
  };

  return (
    <SurveyFirComWrapper>
      <SubWrapper>
        <InnerWrapper>
          <SurveyNumber>
            <CurrentNum>01</CurrentNum>
            <TotalNum> / 04</TotalNum>
          </SurveyNumber>

          <SubTitle>
            <SubTitleInn>얼마나 자주 면도하세요?</SubTitleInn>
          </SubTitle>
          {/**/}
          <SelectBox>
            {tabs.map((tabname, idx) => {
              return (
                <ItemBoxWrapper onClick={(e) => clickHandlevent(idx)}>
                  <ImgBox>
                    <ImgBoximage
                      src={
                        isContact === idx
                          ? `${tabimgs[idx + 3]}`
                          : `${tabimgs[idx]}`
                      }
                    />
                  </ImgBox>
                  <TextBox contactBoxchange={isContact} keyId={idx}>
                    <div>{tabname}</div>
                  </TextBox>
                </ItemBoxWrapper>
              );
            })}
          </SelectBox>
          {/**/}
          <div>{obj[isContact]}</div>
        </InnerWrapper>
      </SubWrapper>
    </SurveyFirComWrapper>
  );
};

export default SurveyFirCom;

const SurveyFirComWrapper = styled.div`
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
  margin: 40px auto 0;
  width: 760px;
`;

const ItemBoxWrapper = styled.div`
  margin: 5px 0;
  cursor: pointer;
  display: block;
  padding: 0;
  height: 100%;
  background: #fff;
  border: 0;
  box-shadow: 0 0 0 transparent;
`;

const ImgBox = styled.div`
  margin-right: 0;
  align-self: center;
`;

const ImgBoximage = styled.img`
  transform: scale(1.33);
`;

const TextBox = styled.div`
  margin-top: 30px;
  width: 240px;
  height: 60px;
  font-size: 18px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: -0.06em;
  line-height: 1px;

  border: ${(props) =>
    props.contactBoxchange === props.keyId
      ? "1px solid #0055b8"
      : "1px solid #f6f6f6"};
  background: ${(props) =>
    props.contactBoxchange === props.keyId
      ? "rgba(0, 85, 184, 0.03)"
      : "#fcfcfc"};
  color: ${(props) =>
    props.contactBoxchange === props.keyId ? "#0055b8" : "#979797"};
  font-weight: ${(props) =>
    props.contactBoxchange === props.keyId ? "400" : "300"};
`;

//----------------------------
//NextBtnBox
// const NextBtnBox = styled.div`
//   display: ${(props) => (props.nextBtnSee ? "" : "none")};
//   margin-top: 50px;
// `;

// const BtnTextBox = styled.div`
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 140%;
//   text-align: center;
//   letter-spacing: -0.06em;
//   color: #0055b8;
// `;

// const BtnBox = styled.button`
//   height: 60px;
//   font-weight: 400;
//   font-size: 20px;
//   width: 195px;
//   margin-top: 50px;
//   outline: none;
//   cursor: pointer;
//   border: 0;
//   background: #0055b8;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
//   border-radius: 4px;
//   color: #fff;
//   line-height: 59px;
//   letter-spacing: -0.06em;
//   font-family: SpoqaHanSans;
// `;
