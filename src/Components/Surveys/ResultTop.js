import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { withRouter } from "react-router-dom";

const ResultTop = (props) => {
  //false가 보임, true가 안보임
  const [isZell, setIsZell] = useState(false);
  const [isAfter, setIsAfter] = useState(false);

  return (
    <ResultTopWrappaer>
      <SubTitle>
        <TitleSpan>고객님께 제안하는 </TitleSpan>
        <TitleSpanST>현명한 면도 습관 </TitleSpanST>
        <TitleSpan>입니다.</TitleSpan>
      </SubTitle>
      <ImgBox>
        <ImgBoxSub>
          <Shaverfix>
            <Img src={props.shaverImgColor} />
            <Small>
              <Text>무료증정</Text>
            </Small>
          </Shaverfix>
          <Shaverfix>
            <Img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/surveyResult/survey_result_blade.png" />
          </Shaverfix>
          <Shaver FTFT={isZell}>
            <Img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/surveyResult/survey_result_gel.png" />
          </Shaver>
          <Shaver
            FTFT={isAfter}
            style={{ display: props.afterImgTf === "1" ? "flex" : "none" }}
          >
            {/* recoMmen는 answer_2가 '1'인지 '2'인지 가져옴 */}
            <Img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/surveyResult/survey_result_after_shaving_gel.png" />
          </Shaver>
        </ImgBoxSub>
      </ImgBox>
      <PayMent>
        <PayMoney>
          <PayBox>
            <Left>오늘 결제 금액</Left>
            <Right>
              <Xx>25,100 </Xx>18,700원
            </Right>
          </PayBox>
          <Info> 무료배송 + 할인 </Info>
          <PayBox>
            <Left>다음 결제일</Left>
            <Right>09월 08일</Right>
          </PayBox>
          <Info> 16주마다 결제 및 배송 </Info>
        </PayMoney>
        <Kakao>
          걱정마세요. 언제든 카톡 하나면 미루거나 취소할 수 있어요 :)
        </Kakao>
        <PayBtn>결제하기</PayBtn>
        <Today>평일 17시 이전 주문 시 당일 출고</Today>
        <Pict>
          <ImgText>
            <Imgone src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/myPageMainEmpty1.svg" />
            <Textone>
              <p>결제 3일 전에</p>
              <p>알려드려요</p>
            </Textone>
          </ImgText>
          <ImgText>
            <Imgone src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/myPageMainEmpty3.svg" />
            <Textone>
              <p>면도날 교체 시기에</p>
              <p>문자로 알려드려요.</p>
            </Textone>
          </ImgText>
          <ImgText>
            <Imgone src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/myPageMainEmpty2.svg" />
            <Textone>
              <p>언제나 10% 할인,</p>
              <p>배송비 무료</p>
            </Textone>
          </ImgText>
        </Pict>
        <BotBtn>
          <BtnImg
            onClick={() => props.clickScroll()}
            src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/arrow/arrowDownInCircle.svg"
          />
        </BotBtn>
      </PayMent>
    </ResultTopWrappaer>
  );
};

export default ResultTop;

const ResultTopWrappaer = styled.div`
  padding: 16px;
`;

//SubTitle
const SubTitle = styled.div`
  margin-top: 96px;
  text-align: center;
  font-size: 46px;
  letter-spacing: -0.06em;
  color: #1e314a;
`;

const TitleSpan = styled.span`
  font-weight: 300;
`;

const TitleSpanST = styled.span`
  font-weight: 400;
`;

//ImgBox
const ImgBox = styled.div`
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
`;

const ImgBoxSub = styled.div`
  max-width: 100%;
  padding: 60px 0;
  display: flex;
  margin: 0 auto;
  justify-content: center;
`;

const Shaver = styled.div`
  width: 160px;
  position: relative;
  /* display: ${(props) => (props.recoMmen === 2 ? "none" : "flex")}; */
`;

const Shaverfix = styled(Shaver)`
  width: 160px;
  position: relative;
`;

const Img = styled.img`
  width: 150px;
  cursor: pointer;
`;

const Small = styled.div`
  position: absolute;
  bottom: 10px;
  width: 150px;
`;

const Text = styled.div`
  font-size: 16px;
  line-height: 130%;
  letter-spacing: -0.06em;
  text-align: center;
  color: #0055b8;
`;

//PayMent
const PayMent = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
`;

const PayMoney = styled.div`
  padding: 0 0 28px;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
`;

const PayBox = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  font-size: 20px;
  line-height: 130%;
  align-self: center;
  font-weight: 400;
  letter-spacing: -0.06em;
  color: #3a3a3a;
`;

const Right = styled.div`
  align-self: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.06em;
  color: #3a3a3a;
`;

const Xx = styled.span`
  margin-right: 6px;
  font-weight: 300;
  text-decoration: line-through;
  color: #cecece;
`;

const Info = styled.div`
  margin-top: 2px;
  text-align: right;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  letter-spacing: -0.04em;
  color: #0055b8;
`;

const Kakao = styled.div`
  margin-top: 28px;
  line-height: 140%;
  letter-spacing: -0.06em;
  text-align: center;
  color: #1e314a;
  font-size: 14px;
`;

const PayBtn = styled.div`
  margin-top: 40px;
  color: #fff;
  letter-spacing: -0.06em;
  background: #0055b8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  /* width: 100%; */
  width: 400px;
  outline: none;
  cursor: pointer;
  height: 60px;
  font-weight: 400;
  font-size: 20px;
  border: 0;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Today = styled.div`
  margin-top: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  letter-spacing: -0.06em;
  color: #0055b8;
`;

const Pict = styled.div`
  display: flex;
  margin: 50px 0;
  justify-content: space-evenly;
`;

const ImgText = styled.div`
  width: 130px;
  text-align: center;
`;

const Imgone = styled.img`
  width: 80px;
  height: 80px;
  margin: 0 auto;
`;

const Textone = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  letter-spacing: -0.04em;
  color: #3a3a3a;
`;

const BotBtn = styled.div`
  display: flex;
  justify-content: center;
`;

const BtnImg = styled.img`
  margin: 30px auto 0;
  width: 38px;
  cursor: pointer;
`;
