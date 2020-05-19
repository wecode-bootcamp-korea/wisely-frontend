import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const ResultBottom = () => {
  return (
    <ResultBottomWrappaer>
      <ContentPadding>
        <ContentTitle>구매 예정 상품</ContentTitle>
        <ListBox>
          <div>
            <ItemBox>
              <InfoText></InfoText>
              <ItemContent></ItemContent>
            </ItemBox>
          </div>
        </ListBox>
        <TermBox></TermBox>
      </ContentPadding>
    </ResultBottomWrappaer>
  );
};

export default ResultBottom;

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

const ItemBox = styled.div``;

const InfoText = styled.div``;

const ItemContent = styled.div``;

//TermBox
const TermBox = styled.div`
  margin: 0 auto;
  padding-top: 140px;
  max-width: 750px;
`;
