import React from "react";
import styled from "styled-components";

function ProductNav() {
  return (
    <ProductsNav>
      <ProductsNavDiv>
        <ProductNameDiv>
          면도기 세트
          <ProductsNameSpan>(면도기 + 날2입)</ProductsNameSpan>
        </ProductNameDiv>
        <NavRight>
          <LinkToDetailDiv>상세정보</LinkToDetailDiv>
          <LinkToReview>후기(22,415)</LinkToReview>
          <PriceDiv>8,900원</PriceDiv>
          <div>
            <PurchaseBtn>구매하기</PurchaseBtn>
          </div>
        </NavRight>
      </ProductsNavDiv>
    </ProductsNav>
  );
}

const ProductsNav = styled.div`
  background-color: #fff;
  opacity: 0.8;
  position: sticky;
  top: 0;
  z-index: 0;
`;

const ProductsNavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  width: 100%;
  height: 68px;
  margin: 0 auto;
  padding: 0 32px;
  z-index: 1;
`;
const ProductNameDiv = styled.div`
  display: flex;
  color: #1e314a;
  font-size: 18px;
`;

const ProductsNameSpan = styled.span`
  font-size: 16px;
  color: #979797;
  margin-left: 5px;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
`;

const LinkToDetailDiv = styled.div`
  font-size: 14px;
  color: #1e314a;
  cursor: pointer;
  margin-right: 28px;
`;

const LinkToReview = styled(LinkToDetailDiv)`
  font-size: 14px;
  color: #cecece;
  margin-right: 70px;
`;

const PriceDiv = styled(LinkToDetailDiv)`
  margin-right: 24px;
  cursor: default;
`;

const PurchaseBtn = styled.button`
  display: inline-block;
  background: #0055b8;
  text-align: center;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  outline: none;
  width: 142px;
  height: 42px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 25);
  border-radius: 4px;
`;

export default ProductNav;
