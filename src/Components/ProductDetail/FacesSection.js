import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

function FacesSection(props) {
  const goTo = (path) => {
    props.history.push(path);
  };
  return (
    <FacesSectionStyle>
      <FacesImg src='https://test.png' art=''/>
      <div>
        <SeventhSectionH2>
          구독으로 만나는
          <br />
          건강하고 편리한 생활
        </SeventhSectionH2>
        <SeventhSectionP>
          와이즐리는 좋은 제품을 넘어 건강하고 편리한 생활 습관을 제공합니다
          <br />
          적절한 면도날 교체 시기를 문자로 알려주고 다 떨어질 때 쯤 자동으로
          배송해드려요.
          <br />
          와이즐리 클럽으로 자극적인 면도와 낡은 면도날에서 벗아나보세요.
          <br />
          <br />* 면도 구독서비스 1위(2020년 2월, 오픈서베이)
        </SeventhSectionP>
        <StartingBtn onClick={() => goTo("/Survey0")}>시작하기</StartingBtn>
      </div>
    </FacesSectionStyle>
  );
}

const FacesSectionStyle = styled.section`
  display: flex;
  flex-direction: row;
  padding: 130px 0;
  margin: 0 auto;
  max-width: 1140px;
`;

const FacesImg = styled.img`
  margin: 0 9.649% 0 0;
  width: 49.123%;
`;

const SeventhSectionH2 = styled.h2`
  font-size: 48px;
  font-weight: 300;
  line-height: 130%;
  text-align: left;
  margin-bottom: 28px;
`;

const SeventhSectionP = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #1e314a;
  margin-bottom: 40px;
  letter-spacing: -0.06em;
  line-height: 180%;
`;

const StartingBtn = styled.a`
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
export default withRouter(FacesSection);
