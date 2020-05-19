import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import ProductsNav from "../Components/ProductDetail/ProductsNav";
import OrderInfo from "../Components/ProductDetail/OrderInfo";
import ShaveHabit from "../Components/ProductDetail/ShaveHabit";
import Footer from "../Components/Footer";
import styled from "styled-components";

function Razor() {
  //   const currentScroll = window.scrollY;
  //   console.log("요기요->", currentScroll);
  //   const [scrolly, setScrolly] = useState(0);

  //   useEffect(() => {
  //     setScrolly(currentScroll);
  //     console.log(scrolly);
  //   }, [currentScroll, scrolly]);

  return (
    <>
      <Nav />
      <ProductsNav />
      <RazorSetSection>
        <RazorSetSectionTextArea>
          <RazorSetSectionTextAreaH3>
            <TextAreaStrong>부드럽고 정교한 면도</TextAreaStrong>
            <br />
            독일산 5중 면도날
          </RazorSetSectionTextAreaH3>
          <RazorSetSectionTextAreaP>
            2020년 신제품 업그레이드,
            <br />
            모든 면에서 나아졌습니다.
          </RazorSetSectionTextAreaP>
          <RazorSetSectionTextAreaSpan>
            기존 면도날과 호환됩니다.
          </RazorSetSectionTextAreaSpan>
        </RazorSetSectionTextArea>
      </RazorSetSection>
      <BrandStorySection>
        <BrandStroyDiv>
          <BrandStoryH2>
            누구나<TextAreaStrong> 정직한 가격에</TextAreaStrong>
            <br />
            <TextAreaStrong>좋은 제품</TextAreaStrong>을 누릴 수 있도록
          </BrandStoryH2>
          <BrandStoryP>
            생필품 중 유독 비싼 면도날. 독과점과 가격거품으로 많은 고객들이 고통
            받고 있습니다.
            <br />
            불합리한 시장을 바꾸고 고객들의 현명한 소비를 돕는 것이 우리의 가장
            큰 목표입니다.
          </BrandStoryP>
          <BrandStoryA href='https://www.wiselyshave.com/story/brand'>
            브랜드 스토리
          </BrandStoryA>
        </BrandStroyDiv>
      </BrandStorySection>
      <RazorStorySection>
        <RazorStoryDiv>
          <RazorStoryImgSection
            src='https://wiselyshave-cdn.s3.amazonaws.com/assets/images/razorDesignStory/razor_design_story_1.png'
            alt=''
          />
          <InnerSection>
            <UsaToGermanyDiv>
              <Cities>New York, U.S.A</Cities>
              <SolingenGermany>Solingen, Germany</SolingenGermany>
            </UsaToGermanyDiv>
            <div>
              <ScrollH3Title>
                더 높은 기준을 찾아
                <br />
                전세계로
              </ScrollH3Title>
              <ScrollP>
                와이즐리는 가장 뛰어난 면도 경험을 위해 전 세계의 <br />
                전문가들과 함께 했습니다. 현명한 소비는 좋은 제품에서
                <br /> 출발한다고 믿기 때문입니다.
              </ScrollP>
            </div>
          </InnerSection>
        </RazorStoryDiv>
      </RazorStorySection>
      <ShaveHabit />
      <OrderInfo />
      <ReviewContianer>
        <div>
          <ReviewImg
            src='https://wiselyshave-cdn.s3.amazonaws.com/assets/images/review/reviewPcFace.svg'
            art=''
          />
        </div>
        <TextUnderFace>
          <p>실제 구매한 고객님께서 작성해주셨어요.</p>
          <TextBold>숨김 없이 날 것 그대로!</TextBold>
        </TextUnderFace>
        <StarPointContainer>
          <RatingBox>
            <RatingNums>
              <RatingBig>4.6</RatingBig>
              <RatingSmall> / 5</RatingSmall>
            </RatingNums>
            <StarsDiv>
              <StarContainer>
                <BlueStarContainer>
                  <BlueStar
                    src='https://wiselyshave-cdn.s3.amazonaws.com/assets/images/ratingStarFront.png'
                    alt=''
                  />
                </BlueStarContainer>
                <GrayStar
                  src='https://wiselyshave-cdn.s3.amazonaws.com/assets/images/ratingStarBack.png'
                  alt=''
                />
              </StarContainer>
              <StarContainer>
                <BlueStarContainer>
                  <BlueStar
                    src='https://wiselyshave-cdn.s3.amazonaws.com/assets/images/ratingStarFront.png'
                    alt=''
                  />
                </BlueStarContainer>
                <GrayStar
                  src='https://wiselyshave-cdn.s3.amazonaws.com/assets/images/ratingStarBack.png'
                  alt=''
                />
              </StarContainer>
              <StarContainer>
                <BlueStarContainer>
                  <BlueStar
                    src='https://wiselyshave-cdn.s3.amazonaws.com/assets/images/ratingStarFront.png'
                    alt=''
                  />
                </BlueStarContainer>
                <GrayStar
                  src='https://wiselyshave-cdn.s3.amazonaws.com/assets/images/ratingStarBack.png'
                  alt=''
                />
              </StarContainer>
              <StarContainer>
                <BlueStarContainer>
                  <BlueStar
                    src='https://wiselyshave-cdn.s3.amazonaws.com/assets/images/ratingStarFront.png'
                    alt=''
                  />
                </BlueStarContainer>
                <GrayStar
                  src='https://wiselyshave-cdn.s3.amazonaws.com/assets/images/ratingStarBack.png'
                  alt=''
                />
              </StarContainer>
              <StarContainer>
                <BlueHalfStarContainer>
                  <BlueStar
                    src='https://wiselyshave-cdn.s3.amazonaws.com/assets/images/ratingStarFront.png'
                    alt=''
                  />
                </BlueHalfStarContainer>
                <GrayStar
                  src='https://wiselyshave-cdn.s3.amazonaws.com/assets/images/ratingStarBack.png'
                  alt=''
                />
              </StarContainer>
            </StarsDiv>
            <ReviewNumsContainer>
              <ReviewNums>22,499개</ReviewNums> 의 후기
            </ReviewNumsContainer>
          </RatingBox>
          <GraphRating>
            <GraphDiv>
              <TopPercent>74%</TopPercent>
              <GrayGraph>
                <BlueGraph />
              </GrayGraph>
              <PointDiv>
                <span>5</span>점
              </PointDiv>
            </GraphDiv>
            <GraphDiv>
              <Percents>16%</Percents>
              <GrayGraph>
                <BlueGraph4 />
              </GrayGraph>
              <PointDiv>
                <span>4</span>점
              </PointDiv>
            </GraphDiv>
            <GraphDiv>
              <Percents>5%</Percents>
              <GrayGraph>
                <BlueGraph3 />
              </GrayGraph>
              <PointDiv>
                <span>3</span>점
              </PointDiv>
            </GraphDiv>
            <GraphDiv>
              <Percents>2%</Percents>
              <GrayGraph>
                <BlueGraph2 />
              </GrayGraph>
              <PointDiv>
                <span>2</span>점
              </PointDiv>
            </GraphDiv>
            <GraphDiv>
              <Percents>3%</Percents>
              <GrayGraph>
                <BlueGraph1 />
              </GrayGraph>
              <PointDiv>
                <span>1</span>점
              </PointDiv>
            </GraphDiv>
          </GraphRating>
        </StarPointContainer>
      </ReviewContianer>
      <Footer />
    </>
  );
}

const RazorSetSection = styled.section`
  background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/razorSetMainBackground.png");
  max-height: 852px;
  height: calc(100vh - 68px);
  padding: 0 50px;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
`;

const RazorSetSectionTextArea = styled.div`
  text-align: left;
  margin: 0 auto;
  max-width: 1020px;
`;

const RazorSetSectionTextAreaH3 = styled.h3`
  padding-top: 16.893%;
  margin-bottom: 22px;
  font-size: 48px;
  font-weight: 300;
  letter-spacing: -0.06em;
  line-height: 130%;
`;

const TextAreaStrong = styled.strong`
  font-weight: 400;
`;

const RazorSetSectionTextAreaP = styled.p`
  margin-bottom: 40px;
  font-size: 14px;
  line-height: 160%;
  letter-spacing: -0.06em;
  font-weight: 300;
`;

const RazorSetSectionTextAreaSpan = styled.span`
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  letter-spacing: -0.06em;
  color: #0055b8;
`;

const BrandStorySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BrandStroyDiv = styled.div`
  padding-top: 160px;
  text-align: center;
`;

const BrandStoryH2 = styled.h2`
  text-align: center;
  font-size: 48px;
  font-weight: 300;
  margin-bottom: 40px;
  line-height: 130%;
  letter-spacing: -0.06em;
  color: #1e314a;
`;

const BrandStoryP = styled.p`
  margin-bottom: 60px;
  font-size: 16px;
  font-weight: 300;
  line-height: 180%;
  letter-spacing: -0.06em;
  color: #3a3a3a;
`;

const BrandStoryA = styled.a`
  font-size: 15px;
  line-height: 180%;
  letter-spacing: -0.06em;
  color: #0055b8;
  position: relative;
  cursor: pointer;
  &::after {
    content: "";
    background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/arrow/arrowRightBlue.svg");
    width: 6px;
    height: 11px;
    position: absolute;
    top: 3px;
    right: -15px;
  }
`;

const RazorStorySection = styled.section`
  padding-top: 6.296vh;
`;

const RazorStoryDiv = styled.div`
  display: flex;
`;

const RazorStoryImgSection = styled.img`
  height: 100%;
  width: 50%;
`;

const InnerSection = styled.section`
  height: 735px;
  width: 100%;
  background-color: #1e314a;
  padding: 0 20px 0 5.792%;
  color: #fff;
`;

const UsaToGermanyDiv = styled.div`
  position: static;
  display: flex;
  margin: 27.963% 0 80px 0;
`;

const Cities = styled.span`
  position: relative;
  color: #979797;
  line-height: 100%;
  letter-spacing: -0.06em;
  margin-right: 40px;
  &::after {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #979797;
    margin: 16px auto 0;
    position: absolute;
    left: 50px;
  }
`;

const SolingenGermany = styled(Cities)`
  position: relative;
  &::before {
    content: "";
    display: inline-block;
    width: 100px;
    height: 1px;
    background-color: #979797;
    position: absolute;
    bottom: -20px;
    right: 72px;
  }
`;

const ScrollH3Title = styled.h3`
  font-size: 38px;
  margin-bottom: 28px;
  line-height: 140%;
  letter-spacing: -0.06em;
`;

const ScrollP = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 180%;
  color: #cecece;
  white-space: pre-line;
`;

const ReviewContianer = styled.div`
  margin: 0 auto;
  max-width: 980px;
  border-bottom: 1px solid #efefef;
`;

const ReviewImg = styled.img`
  margin: 40px auto 0;
  width: 360px;
  display: block;
`;
const TextUnderFace = styled.div`
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  margin-top: 33px;
  line-height: 140%;
`;

const TextBold = styled.p`
  font-weight: 400;
`;

const StarPointContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px 0 60px 0;
  padding: 0 16px;
  height: 180px;
`;

const RatingBox = styled.div`
  width: 50vw;
  border-right: 2px solid #efefef;
  text-align: center;
  align-self: center;
`;

const RatingBig = styled.span`
  font-size: 40px;
  color: #0055b8;
`;

const RatingSmall = styled.span`
  font-size: 30px;
  font-weight: 300;
  color: #1e314a;
`;

const StarsDiv = styled.div`
  margin-top: 6px;
`;

const StarContainer = styled.span`
  margin: 0 5px;
  position: relative;
`;
const BlueStarContainer = styled.span`
  position: absolute;
  top: -10px;
`;

const BlueHalfStarContainer = styled(BlueStarContainer)`
  position: absolute;
  top: -10px;
  width: 50%;
  overflow: hidden;
`;
const BlueStar = styled.img`
  width: 25px;
  height: 25px;
`;

const GrayStar = styled.img`
  width: 25px;
  height: 25px;
`;

const GraphRating = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
`;
const RatingNums = styled.div`
  padding-top: 6px;
`;

const ReviewNumsContainer = styled.div`
  margin-top: 15px;
  font-size: 16px;
  font-weight: 300;
`;

const ReviewNums = styled.span`
  font-weight: 400;
`;

const GraphDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #cecece;
`;
const Percents = styled.div`
  /* color: #0055b8; */
  font-weight: 300;
  font-size: 22px;
  margin-bottom: 4px;
`;
const TopPercent = styled(Percents)`
  color: #0055b8;
  font-weight: 300;
  font-size: 22px;
  margin-bottom: 4px;
`;

const GrayGraph = styled.span`
  margin: 0 28px;
  height: 100px;
  width: 10px;
  display: inline-block;
  position: relative;
  background-color: #f8f8f8;
  border-radius: 10px;
`;
const BlueGraph = styled.span`
  position: absolute;
  bottom: 0;
  background: linear-gradient(270deg, #0055b8 3.33%, #479bfe 196.34%);
  border-radius: 10px;
  width: 10px;
  height: 74px;
`;
const BlueGraph4 = styled(BlueGraph)`
  height: 22px;
`;
const BlueGraph3 = styled(BlueGraph)`
  height: 15px;
  border-radius: 20px;
`;
const BlueGraph2 = styled(BlueGraph)`
  height: 10px;
  border-radius: 15px;
`;
const BlueGraph1 = styled(BlueGraph)`
  height: 13px;
  border-radius: 15px;
`;
const PointDiv = styled.div`
  margin-top: 7px;
  color: #979797;
  font-size: 13px;
  font-weight: 300;
  span {
    font-size: 23px;
  }
`;
export default Razor;
