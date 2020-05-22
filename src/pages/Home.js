import React from "react";
import { useState } from "react";
import Nav from "../Components/Nav";
import Gq from "../Components/Ariticles/Gq";
import Ja from "../Components/Ariticles/Ja";
import Es from "../Components/Ariticles/Es";
import FacesSection from "../Components/FacesSection";

import Footer from "../Components/Footer";
import styled, { css } from "styled-components";

function Home() {
  const [clicked, setClicked] = useState(0);

  const clickHandler = (num) => {
    setClicked(num);
    // console.log("클릭 ok", num, clicked);
  };
  const articles = { 0: <Gq />, 1: <Ja />, 2: <Es /> };

  return (
    <HomeWrapper>
      <Nav />
      <FirstSection>
        <HomeTitle>
          정직한 가격의
          <br />
          <HomeTitleStrong>프리미엄 면도용품 구독 서비스</HomeTitleStrong>
        </HomeTitle>
        <HomeTitleSpan>
          독일산 5중날 8,900원, 첫 가입시 면도기를 드려요
        </HomeTitleSpan>
        <MoreInfoBtn href="https://www.wiselyshave.com/subscription-info">
          더 알아보기
        </MoreInfoBtn>
      </FirstSection>
      <SecondSection>
        <HomeGiftset>
          <HomeGiftSetH2>
            5월의 기념일,<HomeGiftSetStrong>와이즐리</HomeGiftSetStrong>
            <br />
            <HomeGiftSetStrong>선물세트</HomeGiftSetStrong>로 준비하세요
          </HomeGiftSetH2>
          <HomeGiftSetP>
            건강한 면도 습관을 선물하세요. 3단계 프리미엄
            <br />
            면도용품부터 클럽 구독 1회 기프트까지. 선물의 품격을 올려주는
            <br />
            특별한 패키지와 쇼핑백도 제공됩니다.
          </HomeGiftSetP>
          <HomeGiftSetSpan>* 한정판매 상품입니다.</HomeGiftSetSpan>
          <MoreInfoBtn href="https://www.wiselyshave.com/subscription-info">
            더 알아보기
          </MoreInfoBtn>
        </HomeGiftset>
      </SecondSection>
      <ThirdSection>
        <ThirdSectionImg
          src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/home/home_fooled.png"
          alr=""
        />
        <div>
          <ThirdSectionH2>더 이상 속지 마세요</ThirdSectionH2>
          <ThirdSectionP>
            면도날 가격은 거품이 많습니다.와이즐리는 중간 유통과 과도한
            <br />
            마케팅을 걷어내고,최고급 면도날을 정직한 가격에 제공합니다.
          </ThirdSectionP>
          <BrandStoryBtn href="https://www.wiselyshave.com/story/brand">
            브랜드 스토리<ThirdSectionSpan></ThirdSectionSpan>
          </BrandStoryBtn>
        </div>
      </ThirdSection>
      <FourthSection>
        <FourthSectionDiv>
          <FourthSectionH2>
            최고급 면도용품
            <br />
            독일 생산 5중 면도날
          </FourthSectionH2>
          <FourthSectionP>
            우리는 본질에 집중했습니다
            <br />
            세계적인 엔지니어,디자이너들이 만들어낸
            <br />
            압도적인 퍼포먼스와 디자인을 만나보세요.
          </FourthSectionP>
        </FourthSectionDiv>
        <FourthSectionImg
          src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/home/home_razor_info.png"
          art=""
        />
      </FourthSection>
      <FifthSection>
        <FifthSectionH2>
          가장 높은 기준으로 만든 프리미엄 면도 용품
        </FifthSectionH2>
        <FifthSectionDiv>
          <FifthSectionFigContainer>
            <FifthSectionFig>
              <FifthSectionImg
                src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/home/thumbnail_1.png"
                art=""
              />
              <FigCaption>
                <FigCaptionName>면도기</FigCaptionName>
                <FigCaptionPrice>무료증정</FigCaptionPrice>
              </FigCaption>
            </FifthSectionFig>
            <FifthSectionFigRight>
              <FifthSectionImg
                src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/home/thumbnail_2.png"
                art=""
              />
              <FigCaption>
                <FigCaptionName>리필 면도날</FigCaptionName>
                <FigCaptionPrice>8,900원</FigCaptionPrice>
              </FigCaption>
            </FifthSectionFigRight>
          </FifthSectionFigContainer>
          <FifthSectionFigContainer>
            <FifthSectionFig>
              <FifthSectionImg
                src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/home/thumbnail_3.png"
                art=""
              />
              <FigCaption>
                <FigCaptionName>쉐이빙젤</FigCaptionName>
                <FigCaptionPrice>3,900원</FigCaptionPrice>
              </FigCaption>
            </FifthSectionFig>
            <FifthSectionFigRight>
              <FifthSectionImg
                src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/home/thumbnail_4.png"
                art=""
              />
              <FigCaption>
                <FigCaptionName>리페어 애프터쉐이브</FigCaptionName>
                <FigCaptionPrice>5,900</FigCaptionPrice>
              </FigCaption>
            </FifthSectionFigRight>
          </FifthSectionFigContainer>
        </FifthSectionDiv>
        <RecommendBtn href="https://www.wiselyshave.com/subscription-survey/0">
          나에게 맞는 제품 추천 받기
        </RecommendBtn>
      </FifthSection>
      <SixthSection>
        <SixthSectionDiv>
          <NewsDiv1>
            <NewsP>
              <QuoteStart />
              {articles[clicked]}
              <QuoteFinish />
            </NewsP>
          </NewsDiv1>
          <NewsList>
            {/* {newsLogos.map((logo) => {
              return logo;
            })} */}
            <GQ state={clicked} onClick={() => clickHandler(0)} />
            <JungAng state={clicked} onClick={() => clickHandler(1)} />
            <Esquire state={clicked} onClick={() => clickHandler(2)} />
          </NewsList>
        </SixthSectionDiv>
      </SixthSection>
      <FacesSection />
      <EighthSection>
        <EighthSectionDiv>
          <EighthSectionH2>
            부담없이 시작하세요
            <br />
            <EighthSectionStong>클럽 구독 시 면도기 무료</EighthSectionStong>
          </EighthSectionH2>
          <StartingBtn href="https://www.wiselyshave.com/subscription-info">
            시작하기
          </StartingBtn>
        </EighthSectionDiv>
        <EighthSectionImg
          src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/start_subscribe.png"
          art=""
        />
      </EighthSection>
      <Footer />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  font-family: "Spoqa Han Sans";
`;

const FirstSection = styled.section`
  width: 100%;
  background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/home/home_background.png");
  background-size: cover;
  text-align: center;
  padding-top: 60px;
  height: 43.333vw;
  min-height: 720px;
  display: flex;
  flex-direction: column;
  color: #1e314a;
`;
const HomeTitle = styled.h2`
  font-size: 38px;
  font-weight: 300;
  line-height: 130%;
  letter-spacing: -0.04em;
  margin-bottom: 28px;
`;
const HomeTitleStrong = styled(HomeTitle.withComponent("strong"))`
  font-weight: 400;
`;

const HomeTitleSpan = styled.span`
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 60px;
  line-height: 130%;
`;

const MoreInfoBtn = styled.a`
  display: inline-block;
  width: 180px;
  height: 60px;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 60px;
  margin: 0 auto;
  background-color: #0055b8;
  color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, -0.25);
  border-radius: 4px;
  cursor: pointer;
`;
const SecondSection = styled.section`
  width: 100%;
  height: 44.792vw;
  min-height: 860px;
  display: flex;
  background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/home/home_gift_set.png");
  background-size: cover;
  padding: 0 50px;
  align-items: center;
`;

const HomeGiftset = styled.div`
  width: 100%;
  max-width: 1110px;
  margin: 0 auto;
  text-align: left;
`;

const HomeGiftSetH2 = styled.h2`
  margin-bottom: 28px;
  font-size: 38px;
  font-weight: 300;
  line-height: 130%;
  color: #1e314a;
`;

const HomeGiftSetStrong = styled(HomeGiftSetH2.withComponent("strong"))`
  font-weight: 400;
`;

const HomeGiftSetP = styled.p`
  font-weight: 300;
  font-size: 15px;
  letter-spacing: -0.06em;
  line-height: 180%;
  margin-bottom: 40px;
`;

const HomeGiftSetSpan = styled.span`
  margin-bottom: 60px;
  font-size: 15px;
  font-weight: 400;
  color: #0055b8;
  display: block;
  letter-spacing: -0.06em;
`;
const ThirdSection = styled.section`
  background-color: #1e314a;
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  color: #fff;
`;

const ThirdSectionImg = styled.img`
  width: 198px;
  height: 305px;
  margin: 0 auto 38px;
`;

const ThirdSectionH2 = styled.h2`
  font-size: 38px;
  margin-bottom: 23px;
  line-height: 130%;
  letter-spacing: -0.06em;
`;

const ThirdSectionP = styled(HomeGiftSetP)``;

const BrandStoryBtn = styled.a`
  cursor: pointer;
  font-size: 15px;
`;

const ThirdSectionSpan = styled.span`
  width: 6px;
  height: 11px;
  background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/arrow/arrowRightWhite.svg");
  background-size: cover;
  margin-left: 5px;
  display: inline-block;
`;
const FourthSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const FourthSectionDiv = styled.div`
  padding: 0;
  order: 0;
  text-align: left;
  margin-right: 15%;
`;

const FourthSectionImg = styled.img`
  max-width: 50%;
  width: 50%;
  height: 100%;
`;

const FourthSectionH2 = styled(HomeGiftSetH2)`
  font-weight: 500;
  font-family: SpoqaHanSans;
  font-size: 38px;
  /* letter-spacing: 0; */
`;

const FourthSectionP = styled(ThirdSectionP)``;
const FifthSection = styled.section`
  /* background-color: #fff; */
  flex-direction: column;
  align-items: center;
  text-align: center;
  display: flex;
  padding: 160px 0;
`;

const FifthSectionH2 = styled.h2`
  font-size: 28px;
  margin-bottom: 100px;
`;

const FifthSectionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 80px;
  max-width: 1110px;
  width: 100%;
`;

const FifthSectionFigContainer = styled.div`
  display: flex;
`;

const FifthSectionFig = styled.figure`
  background-color: #fafafa;
  margin: 0 30px 10px 0;
`;

const FifthSectionFigRight = styled.figure`
  background-color: #fafafa;
  margin-bottom: 10px;
`;

const FifthSectionImg = styled.img`
  width: 255px;
  height: 255px;
`;

const FigCaption = styled.figcaption`
  padding: 44px 0;
  display: flex;
  flex-direction: column;
`;

const FigCaptionName = styled.span`
  font-size: 14px;
  margin-bottom: 8px;
`;
const FigCaptionPrice = styled.span`
  font-size: 22px;
`;

const RecommendBtn = styled.a`
  width: 284px;
  height: 60px;
  line-height: 65px;
  vertical-align: middle;
  background-color: #0055b8;
  box-shadow: 0 2px 40x rgba(0, 0, 0, 25);
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
`;
const SixthSection = styled.section`
  background-color: #fafafa;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SixthSectionDiv = styled.div`
  display: block;
`;

const NewsDiv1 = styled.div`
  display: inline-block;
  position: relative;
  max-width: 435.59px;
  width: 435.59px;
`;

const NewsP = styled.p`
  margin-bottom: 82px;
  text-align: center;
  font-size: 24px;
  line-height: 160%;
  letter-spacing: -0.04em;
  color: #1e314a;
`;

const QuoteStart = styled.i`
  background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/startQuote.svg");
  position: absolute;
  width: 19px;
  height: 19px;
  top: -10px;
  left: -40px;
`;

const QuoteFinish = styled.i`
  background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/finishQuote.svg");
  position: absolute;
  width: 19px;
  height: 19px;
  bottom: 70px;
  right: -50px;
`;
const NewsList = styled.div`
  display: flex;
  justify-content: space-around;
`;
const GQ = styled.span`
  background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/news/news_1.svg");
  width: 44px;
  height: 22px;
  cursor: pointer;
  background-repeat: no-repeat;
  position: relative;
  opacity: ${(props) => (props.state === 0 ? 1 : 0.2)};
  transition: opacity 0.4s ease-in-out;
  ${(props) =>
    props.state === 0 &&
    css`
      &::after {
        content: "";
        position: absolute;
        bottom: -12px;
        display: block;
        width: 100%;
        height: 2px;
        background-color: #0055b8;
      }
    `}
`;
const JungAng = styled.span`
  background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/news/news_2.svg");
  width: 81.76px;
  height: 22px;
  cursor: pointer;
  background-repeat: no-repeat;
  position: relative;
  opacity: ${(props) => (props.state === 1 ? 1 : 0.2)};
  transition: opacity 0.4s ease-in-out;
  ${(props) =>
    props.state === 1 &&
    css`
      &::after {
        content: "";
        position: absolute;
        bottom: -12px;
        display: block;
        width: 100%;
        height: 2px;
        background-color: #0055b8;
      }
    `}
`;
const Esquire = styled.span`
  background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/news/news_3.svg");
  width: 76.56px;
  height: 22px;
  cursor: pointer;
  background-repeat: no-repeat;
  position: relative;
  opacity: ${(props) => (props.state === 2 ? 1 : 0.2)};
  transition: opacity 0.4s ease-in-out;
  ${(props) =>
    props.state === 2 &&
    css`
      &::after {
        content: "";
        position: absolute;
        bottom: -12px;
        display: block;
        width: 100%;
        height: 2px;
        background-color: #0055b8;
      }
    `}
`;

const StartingBtn = styled(MoreInfoBtn)``;

const EighthSection = styled.section`
  background-color: #1e314a;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const EighthSectionDiv = styled.div`
  margin: 0 16.667% 0 0;
`;
const EighthSectionH2 = styled.h2`
  font-size: 38px;
  font-weight: 300;
  color: #fff;
  line-height: 130%;
  letter-spacing: -0.06em;
  margin-bottom: 60px;
`;

const EighthSectionStong = styled.strong`
  font-size: 38px;
  font-weight: 400;
  color: #fff;
`;
const EighthSectionImg = styled.img`
  height: 100%;
  width: 290px;
  padding-top: 80px;
`;
export default Home;
