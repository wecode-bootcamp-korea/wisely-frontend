import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { withRouter } from "react-router-dom";

const NextBtnBox1 = (props) => {
  const goTo = (path) => {
    props.history.push(path);
  };

  return (
    <NextBtnBox1Wrapper>
      <BtnTextBox>
        <p>오래된 면도날은 턱 주변 트러블의 원인이 된답니다.</p>
        <p>하루에 여러 번 면도 한다면 날은 1주마다 교체해 주세요.</p>
      </BtnTextBox>
      <BtnBox onClick={() => goTo("/Survey2")}>
        <p>다음</p>
      </BtnBox>
    </NextBtnBox1Wrapper>
  );
};

export default withRouter(NextBtnBox1);

const NextBtnBox1Wrapper = styled.div`
  margin-top: 50px;
`;

const BtnTextBox = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  letter-spacing: -0.06em;
  color: #0055b8;
`;

const BtnBox = styled.button`
  height: 60px;
  font-weight: 400;
  font-size: 20px;
  width: 195px;
  margin-top: 50px;

  outline: none;
  cursor: pointer;
  border: 0;
  background: #0055b8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  color: #fff;
  line-height: 59px;
  letter-spacing: -0.06em;
  /* font-family: SpoqaHanSans; */
`;
