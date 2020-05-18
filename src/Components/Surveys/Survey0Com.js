import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const SurveyZeroCom = () => {
  return (
    <SurveyZeroComWrapper>
      <PushSubscription>
        <div className="TitleBox">
          <Title>고객님의 면도 습관을 알려주세요</Title>
          <TitleSub>
            <p>면도 습관, 사람마다 참 다르지요.</p>
            <p>나에게 맞는 면도 플랜을 추천해 드릴게요</p>
          </TitleSub>
        </div>

        <ImgBox>
          <Surveystep0img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/subscriptionSurveyStep0.svg" />
        </ImgBox>

        <BtnBox>
          <StartBtn>1 분이면 끝나는 퀴즈 시작</StartBtn>
        </BtnBox>
      </PushSubscription>
    </SurveyZeroComWrapper>
  );
};

export default SurveyZeroCom;

const SurveyZeroComWrapper = styled.div`
  min-height: calc(100vh - 89px);
  min-width: 60%;
  position: relative;
  overflow: hidden;
`;

//---- 여기까지 기본 ------

const PushSubscription = styled.div`
  margin: 60px auto 0;
  padding: 0 16px;
  width: 100%;
  max-width: 600px;
`;

const Title = styled.div`
  font-size: 38px;
  font-weight: 300;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.06em;
  color: #1e314a;
  word-break: keep-all;
`;

const TitleSub = styled.div`
  font-size: 14px;
  margin-top: 20px;
  font-weight: 300;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.06em;
  color: #1e314a;
`;

const ImgBox = styled.div`
  margin-top: 80px;
  display: flex;
`;

const Surveystep0img = styled.img`
  width: 420px;
  height: 280px;
  margin: 0 auto;
`;

const BtnBox = styled.div`
  text-align: center;
`;

const StartBtn = styled.button`
  height: 60px;
  max-width: 400px;
  width: 100%;
  margin-top: 80px;

  font-family: SpoqaHanSans;
  font-weight: 400;
  font-size: 21px;
  color: #fff;
  letter-spacing: -0.06em;

  outline: none;
  cursor: pointer;
  border: 0;
  background: #0055b8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;
