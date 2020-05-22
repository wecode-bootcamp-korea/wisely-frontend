import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { withRouter } from "react-router-dom";

const ResultBottom = (props) => {
  const goTo = (path) => {
    props.history.push(path);
  };

  const tabs = ["4주에 한 번", "8주에 한 번", "16주에 한 번"];
  const tabtext = [
    "하루에 여러 번 면도한다면 1주마다 날을 교체해 주세요.",
    "하루에 한 번 면도한다면 2주마다 날을 교체해 주세요.",
    "2~3일에 한 번 면도한다면 4주마다 날을 교체해 주세요.",
  ];
  const tabimgs = [
    "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/shave4Week.svg",
    "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/shave8Week.svg",
    "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/shave16Week.svg",
    "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/shave4WeekSelected.svg",
    "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/shave8WeekSelected.svg",
    "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/shave16WeekSelected.svg",
  ];

  const [isContact, setIsContact] = useState(0); //API로 담아서 백엔드로 보내야함 몇번 선택했는지 임의로0번해둠

  //몇번 탭 idx인지 담아오기
  const clickHandlevent = (id) => {
    setIsContact(id);
  };

  const [isToTo3, setIsToTo3] = useState(false);
  const [isToTo4, setIsToTo4] = useState(false);

  const toggle3Handler = () => {
    setIsToTo3(!isToTo3);
  };

  const toggle4Handler = () => {
    setIsToTo4(!isToTo4);
  };

  console.log("이거 맞나요 선주님!?", props.recoMmen);
  //useEffect로 API받아와서 몇번 주기로 되었는지 감지하고 처음에 클릭된상태

  return (
    <ResultBottomWrappaer>
      <ContentPadding>
        <ContentTitle>구매 예정 상품</ContentTitle>
        <ListBox>
          <div>
            <ItemBox>
              <InfoText>
                <Text>주문에 </Text>
                <Bold> 필수 포함 </Bold>
                <Text> 입니다.</Text>
              </InfoText>
              <ItemContent>
                <ItemImg>
                  {/* 아래이미지 백에서 바뀌는중 */}
                  <ItemImgI src={props.shaverImgColor} />
                </ItemImg>
                <ItemInFo>
                  <ItemTitle>
                    <Ttex>면도기</Ttex>
                    <InfoIcon>
                      <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/infoIconBlue.svg" />
                    </InfoIcon>
                  </ItemTitle>
                  <ItemDes>
                    <FreeColor>사파이어 블루</FreeColor>
                  </ItemDes>
                  <ItemPrice>
                    <Price>0원</Price>
                  </ItemPrice>
                </ItemInFo>
                <ItemOnOff>
                  <Toggle>
                    <Label></Label>
                    <FreeBackImg>
                      <On>
                        <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/smallHappy.svg" />
                      </On>
                      <Off>
                        <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/smallUpset.svg" />
                      </Off>
                    </FreeBackImg>
                  </Toggle>
                  <CheckText>이번만 포함</CheckText>
                </ItemOnOff>
              </ItemContent>
            </ItemBox>
          </div>

          <ItemBox>
            <InfoText>
              <Bold>상처와 피부보호</Bold>
              <Text>에 좋아요.</Text>
            </InfoText>
            <ItemContent>
              <ItemImg>
                <ItemImgI src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/items/blade/refill_blade.png" />
              </ItemImg>
              <ItemInFo>
                <ItemTitle>
                  <Ttex>리필면도날</Ttex>
                  <InfoIcon>
                    <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/infoIconBlue.svg" />
                  </InfoIcon>
                </ItemTitle>
                <ItemDes>
                  <Color>4입</Color>
                </ItemDes>
                <ItemPrice>
                  <Deco>9,600</Deco>&nbsp;&nbsp;
                  <Price>8,900원</Price>
                </ItemPrice>
              </ItemInFo>
              <ItemOnOff>
                <Toggle>
                  <Label></Label>
                  <BackImg>
                    <On>
                      <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/smallHappy.svg" />
                    </On>
                    <Off>
                      <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/smallUpset.svg" />
                    </Off>
                  </BackImg>
                </Toggle>
                <CheckText>필수포함</CheckText>
              </ItemOnOff>
            </ItemContent>
          </ItemBox>

          <ItemBox>
            <InfoText>
              <Bold>면도 후 자극 </Bold>
              <Text>부위 진정에 좋아요.</Text>
            </InfoText>
            <ItemContent>
              <ItemImg>
                <ItemImgI src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/items/shaving_gel/shaving_gel_150.png" />
              </ItemImg>
              <ItemInFo>
                <ItemTitle>
                  <Ttex>쉐이빙젤</Ttex>
                  <InfoIcon>
                    <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/infoIconBlue.svg" />
                  </InfoIcon>
                </ItemTitle>
                <ItemDes>
                  <Color>스탠다드 150ml</Color>
                </ItemDes>
                <ItemPrice>
                  <Deco>4,500</Deco>&nbsp;&nbsp;
                  <Price>3,900원</Price>
                </ItemPrice>
              </ItemInFo>
              <ItemOnOff>
                <Toggle onClick={() => toggle3Handler()}>
                  <Label isWhat={isToTo3}></Label>
                  <BackImg isWhat={isToTo3}>
                    <On>
                      <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/smallHappy.svg" />
                    </On>
                    <Off>
                      <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/smallUpset.svg" />
                    </Off>
                  </BackImg>
                </Toggle>
                <CheckText isWhat={isToTo3}>
                  {isToTo3 ? "제외" : "포함"}
                </CheckText>
              </ItemOnOff>
            </ItemContent>
          </ItemBox>

          <ItemBox>
            <InfoText>
              <Text></Text>
              <Bold>첫 가입시 무료로 드려요.</Bold>
            </InfoText>
            <ItemContent>
              <ItemImg>
                <ItemImgI src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/items/aftershaving/after_shaving_gel_dry_60.png" />
              </ItemImg>
              <ItemInFo>
                <ItemTitle>
                  <Ttex>리페어 애프터쉐이브</Ttex>
                  <InfoIcon>
                    <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/infoIconBlue.svg" />
                  </InfoIcon>
                </ItemTitle>
                <ItemDes>
                  <Color>건성용 / 스탠다드 60ml</Color>
                </ItemDes>
                <ItemPrice>
                  <Deco>6,500</Deco>&nbsp;&nbsp;
                  <Price>5,900원</Price>
                </ItemPrice>
              </ItemInFo>
              <ItemOnOff>
                <Toggle onClick={() => toggle4Handler()}>
                  <Label isWhat={isToTo4}></Label>
                  <BackImg isWhat={isToTo4}>
                    <On>
                      <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/smallHappy.svg" />
                    </On>
                    <Off>
                      <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/smallUpset.svg" />
                    </Off>
                  </BackImg>
                </Toggle>
                <CheckText isWhat={isToTo4}>
                  {isToTo4 ? "제외" : "포함"}
                </CheckText>
              </ItemOnOff>
            </ItemContent>
          </ItemBox>
        </ListBox>
        <TermBox>
          <TermTitle>배송받는 주기</TermTitle>
          <TermInfo>
            <p>{tabtext[isContact]}</p>
            <p> 면도날 4개를 16주에 한 번 배송해 드릴게요. </p>
          </TermInfo>
          <TermSelect>
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
                    <Good
                      keyId={idx}
                      whatContact={props.recoMmen}
                      style={{
                        display:
                          Number(props.recoMmen) === { idx } + 1
                            ? "flex"
                            : "none",
                      }}
                    >
                      <GoodText>추천</GoodText>
                    </Good>
                    <div>{tabname}</div>
                  </TextBox>
                </ItemBoxWrapper>
              );
            })}
          </TermSelect>
          <TermSurvey>
            <Grayspan>다시 추천받고 싶으신가요?</Grayspan>
            &nbsp;
            <Bluespan onClick={() => goTo("/Survey1")}>
              퀴즈 다시 시작하기
            </Bluespan>
          </TermSurvey>
        </TermBox>
      </ContentPadding>
    </ResultBottomWrappaer>
  );
};

export default withRouter(ResultBottom);

const ResultBottomWrappaer = styled.div`
  position: relative;
  padding-top: 100px;
`;

const ContentPadding = styled.div`
  padding: 0 16px;
`;

const ContentTitle = styled.div`
  margin: 0 auto;
  padding-bottom: 40px;
  width: 600px;
  max-width: 100%;
  font-size: 18px;
  line-height: 130%;
  text-align: center;
  letter-spacing: -0.06em;
  color: #0f5783;
  border-bottom: 1px solid #efefef;
`;

//ListBox
const ListBox = styled.div`
  margin: 0 auto;
  width: 600px;
  max-width: 100%;
`;

const ItemBox = styled.div`
  padding: 48px 10px 58px;
  border-bottom: 1px solid #efefef;
`;

const InfoText = styled.div`
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.04em;
  color: #1e314a;
`;

const Text = styled.span`
  font-weight: 300;
`;

const Bold = styled.span`
  font-weight: 400;
`;

const ItemContent = styled.div`
  margin-top: 20px;
  display: flex;
  position: relative;
`;

const ItemImg = styled.div`
  margin-right: 16px;
`;

const ItemImgI = styled.img`
  width: 100px;
  height: 100px;
`;

const ItemInFo = styled.div``;

const ItemTitle = styled.div`
  display: flex;
  cursor: pointer;
`;

const Ttex = styled.div`
  margin-top: 12px;
  align-self: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  letter-spacing: -0.06em;
  color: #3a3a3a;
`;

const InfoIcon = styled.div`
  margin-top: 12px;
  align-self: center;
  margin-left: 4px;
`;

const ItemDes = styled.div`
  margin-top: 5px;
`;

const Color = styled.span`
  font-weight: 400;
  color: #979797;
  font-size: 12px;
  font-weight: 300;
  font-size: 12px;
  line-height: 140%;
  letter-spacing: -0.04em;
`;

const FreeColor = styled(Color)`
  color: #1888d9;
`;

const ItemPrice = styled.div`
  margin-top: 12px;
`;

const Price = styled.span`
  font-size: 16px;
  line-height: 130%;
  letter-spacing: -0.06em;
  color: #0f5783;
`;

const Deco = styled(Price)`
  font-weight: 300;
  text-decoration-line: line-through;
  color: #cecece;
`;

//Toggle
const ItemOnOff = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  margin-top: 4px;
  font-size: 12px;
  line-height: 140%;
  text-align: center;
  letter-spacing: -0.04em;
`;

const Toggle = styled.div`
  display: block;
  position: relative;
  width: 54px;
  height: 26px;
`;

const Label = styled.div`
  position: absolute;
  top: 5px;
  left: ${(props) => (props.isWhat ? "7px" : "29px")};
  /* left: 29px; */
  width: 18px;
  height: 18px;
  background-color: #fff;
  border-radius: 100%;
  cursor: pointer;
  transition: left 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
`;

const BackImg = styled.div`
  background: ${(props) =>
    props.isWhat
      ? "#cecece"
      : "linear-gradient(270deg, #0055b8 -33.33%, #479bfe 196.34%)"};
  overflow: hidden;
  border-radius: 25px;
  transition: background-color 0.2s;
  border: 2px solid #efefef;
  cursor: pointer;
`;

const FreeBackImg = styled(BackImg)`
  background: linear-gradient(270deg, #015386 -33.33%, #0055b8 196.34%);
`;

const On = styled.div`
  float: left;
  width: 50%;
  font-size: 15px;
  height: 24px;
  line-height: 24px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  padding: 1px 4px 0;
`;

const Off = styled.div`
  float: left;
  width: 50%;
  font-size: 15px;
  height: 24px;
  line-height: 24px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  padding: 1px 4px 0;
`;

const CheckText = styled.div`
  margin-top: 4px;
  color: ${(props) => (props.isWhat ? "#cecece" : "#0f5783")};
`;

//TermBox
const TermBox = styled.div`
  margin: 0 auto;
  padding-top: 140px;
  max-width: 750px;
`;

const TermTitle = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  text-align: center;
  letter-spacing: -0.06em;
  color: #0f5783;
`;

const TermInfo = styled.div`
  font-size: 16px;
  line-height: 130%;
  margin-top: 16px;
  font-weight: 300;
  text-align: center;
  letter-spacing: -0.04em;
  color: #979797;
`;

//SelectBox
const TermSelect = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 65px auto 0;
  /* width: 760px; */
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
  display: flex;
  flex-direction: column;
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
  width: 230px;
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
  position: relative;

  border: ${(props) =>
    props.contactBoxchange === props.keyId
      ? "1px solid #0055b8"
      : "1px solid #f6f6f6"};
  background: ${(props) =>
    props.contactBoxchange === props.keyId
      ? "rgba(0, 85, 184, 0.03)"
      : "#fcfcfc"};
  color: ${(props) =>
    props.contactBoxchange === props.keyId ? "#0055b8" : "#0F5784"};
  font-weight: ${(props) =>
    props.contactBoxchange === props.keyId ? "400" : "300"};
`;

const Good = styled.div`
  position: absolute;
  top: 53%;
  left: 16px;
  transform: translateY(-50%);
  width: 44px;
  height: 22px;
  justify-content: center;
  margin-right: 10px;
  background: #0055b8;
  border-radius: 2px;
  /* 얘도 API 받아와서 되는것 일단 임의로 클릭한거에 켜지도록 해둔것임*/
  display: ${(props) =>
    props.kdyId + 1 === Number(props.whatContact) ? "flex" : "none"};
`;

const GoodText = styled.div`
  font-size: 12px;
  align-self: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: -0.08em;
  color: #fff;
`;

//끝
const TermSurvey = styled.div`
  margin-top: 100px;
  padding-bottom: 200px;
  font-weight: 300;
  font-size: 12px;
  line-height: 140%;
  text-align: center;
  letter-spacing: -0.04em;
`;

const Grayspan = styled.span`
  color: #979797;
`;

const Bluespan = styled.span`
  font-weight: 400;
  color: #0055b8;
  cursor: pointer;
`;
