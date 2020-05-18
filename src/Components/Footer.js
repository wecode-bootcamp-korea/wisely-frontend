import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const Footer = () => {
  return (
    <div>
      <FooterFir>
        <BorderBo>
          <Wrappter>
            <Firstleft>
              <Mouse>와이즐리 이야기</Mouse>
              <Mouse>개인정보처리방침</Mouse>
              <Mouse>이용안내</Mouse>
              <Mouse>사업자 정보확인</Mouse>
              <Mouse>이용약관</Mouse>
            </Firstleft>
            <FirstRight>
              <Mouse1>로그인</Mouse1>
              <Mouse2>고객센터</Mouse2>
              <Mouse3>인재채용</Mouse3>
            </FirstRight>
          </Wrappter>
        </BorderBo>
        <FooterSec>
          <Sec>
            <Sectop>
              <DAdatext>
                <Toptexts>주식회사 와이즐리컴퍼니</Toptexts>
                <Texts>
                  서울특별시 성동구 왕십리로 125, 8층(성수동1가, KD타워),
                  대표자: 김동욱
                </Texts>
                <Texts>
                  사업자등록번호: 344-88-00965, 통신사판매업신고번호:
                  2019-서울성동-01739
                </Texts>
                <Texts>
                  개인정보보호책임자: 천민기(mkchon@wiselyshave.com), 전화번호:
                  1833-9133 E-mail: help@wiselyshave.com
                </Texts>
                <Margintexts>
                  고객님은 안전하게 거래를 위해 현금 등으로 결제 시 저희
                  쇼핑몰에서 가입한 나이스페이먼츠(주)의 구매안전서비스를
                  이용하실 수 있습니다. {"    "}
                  <TextBorder>서비스가입사실 확인 </TextBorder>
                </Margintexts>
                <Texts>
                  와이즐리는 서비스 품질 보증을 위하여 개인정보배상책임보험 과
                  생산물 피해보상보험에 가입하였습니다.
                </Texts>
              </DAdatext>
              <Dadalogo>
                <Snslogo>
                  <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/facebook.svg" />
                </Snslogo>
                <Snslogo>
                  <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/instagram.svg" />
                </Snslogo>
              </Dadalogo>
            </Sectop>
            <Copyright>
              Copyright ©2020 <Cowis>WISELY.</Cowis>All rights reserved.
            </Copyright>
          </Sec>
        </FooterSec>
      </FooterFir>
    </div>
  );
};

export default Footer;

//right: calc((100% - 980px) / 2 * -1);

const FooterFir = styled.div`
  height: 304px;
  width: 100%;
  padding: 0 16px;
  background: #1b2a38;
  color: #cecece;
  bottom: 0;
  left: 0;
`;

const BorderBo = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #56636f;
`;

const Wrappter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  max-width: 1140px;
`;

const Firstleft = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 50px;
`;

const Mouse = styled.div`
  align-self: center;
  text-align: center;
  margin-right: 50px;
  font-weight: 300;
  font-size: 12px;
  letter-spacing: -0.04em;
  color: #cecece;
  cursor: pointer;
`;

const FirstRight = styled.div`
  width: 195px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const Mouse1 = styled.div`
  width: 65px;
  align-self: center;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: -0.06em;
  color: #cecece;
  cursor: pointer;
`;

const Mouse2 = styled.div`
  width: 65px;
  align-self: center;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: -0.06em;
  color: #cecece;
  cursor: pointer;
`;

const Mouse3 = styled.div`
  width: 65px;
  align-self: center;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: -0.06em;
  color: #cecece;
  cursor: pointer;
`;

const FooterSec = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 26px;
`;

const Sec = styled.div`
  max-width: 1140px;
  width: 100%;
`;

const Sectop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DAdatext = styled.div`
  margin-top: 10px;
  padding-bottom: 20px;
`;

const Texts = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 180%;
  letter-spacing: -0.04em;
  word-break: keep-all;
`;

const Toptexts = styled(Texts)`
  font-weight: 400;
`;

const Margintexts = styled(Texts)`
  margin-top: 10px;
`;

const TextBorder = styled.span`
  cursor: pointer;
  border-bottom: 1px solid #cecece;
  font-weight: 300;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.06em;
  font-size: 12px;
`;

const Copyright = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.06em;
`;

const Cowis = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.06em;
`;

const Dadalogo = styled.div`
  display: flex;
`;

const Snslogo = styled.div`
  text-align: center;
  width: 46px;
  cursor: pointer;
`;
