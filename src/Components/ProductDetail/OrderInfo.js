import React, { useState } from "react";
import styled from "styled-components";

const OrderInfo = () => {
  //   const [clicked, setClicked] = useState([false, false]);

  //   const clickHandler = (id) => {
  //     clicked[id] = !clicked[id];
  //     setClicked(clicked);
  //     console.log("클릭ok", clicked);
  //   };

  const [clickone, setClickone] = useState(false);
  const [clicktwo, setClicktwo] = useState(false);
  const clickOne = () => {
    setClickone(!clickone);
  };
  const clickTwo = () => {
    setClicktwo(!clicktwo);
  };

  return (
    <OrderInfoContainer>
      <OrderInfoDiv onClick={() => clickOne()}>
        <NoticeList>
          <span>주문 및 배송 안내</span>
          <MiniPointerImg
            src='https://wiselyshave-cdn.s3.amazonaws.com/assets/images/arrow/backAngleBracket.svg'
            art=''
            click={clickone}
          />
        </NoticeList>
        <ClickedDetail clickone={clickone}>
          <div>
            <ListTitle>[배송 안내]</ListTitle>
            <Ultag>
              <Listtag>배송 방법: 택배 배송</Listtag>
              <Listtag>배송 지역: 전국</Listtag>
              <Listtag>
                배송 비용: 15,000 원 미만 구매 시 2,500원, 15,000 원 이상 구매
                시 무료 배송, 산간 및 도서 지역 3,000원 추가. 와이즐리 클럽
                이용시 무료 배송
              </Listtag>
              <Listtag>
                배송 소요일: 평일 기준 출고 후 2~3일 정도 소요되며, 지역 및
                택배사 사정에 따라 지연될 수 있으며, 천재지변, 물량 수급 변동 등
                예외적인 사유 발생 시 다소 지연될 수 있는 점 양해 부탁드립니다.
              </Listtag>
              <Listtag>
                결제 완료일 기준 오후 5시 이전 결제 시: 당일 출고 (토요일,
                공휴일 제외)
              </Listtag>
              <Listtag>
                결제 완료일 기준 오후 5시 이후 결제 시: 익일 출고 (토요일,
                공휴일 제외)
              </Listtag>
            </Ultag>
          </div>
        </ClickedDetail>
      </OrderInfoDiv>
      <ProductsInfoDiv onClick={() => clickTwo()}>
        <NoticeList>
          <span>상품 정보 / 거래조건</span>
          <MiniPointerImg
            src='https://wiselyshave-cdn.s3.amazonaws.com/assets/images/arrow/backAngleBracket.svg'
            art=''
            click={clicktwo}
          />
        </NoticeList>
      </ProductsInfoDiv>
    </OrderInfoContainer>
  );
};

const OrderInfoContainer = styled.div`
  margin: 80px auto;
  max-width: 1140px;
`;
const OrderInfoDiv = styled.div`
  font-size: 16px;
  padding: 35px 10px;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  cursor: pointer;
  /* height: 77px; */
  color: #979797;
  position: relative;
  /* border: 1px solid red; */
`;

const NoticeList = styled.h2`
  display: flex;
  justify-content: space-between;
  span {
    align-items: center;
  }
`;

const ProductsInfoDiv = styled(OrderInfoDiv)`
  border-top: none;
`;

const MiniPointerImg = styled.img`
  height: 10px;
  transform: ${(props) => (props.click ? `rotate(270deg)` : `rotate(90deg)`)};
  transition: transform 0.4s ease-in-out;
`;

const ClickedDetail = styled.div`
  color: #3a3a3a;
  position: relative;
  padding: 0 20px;
  height: ${(props) => (props.clickone ? "300px" : "0px")};
  width: 715px;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  cursor: default;
`;

const ListTitle = styled.h3`
  margin-top: 40px;
  margin-bottom: 10px;
  font-size: 20px;
  text-align: center;
`;

const Ultag = styled.ul`
  list-style-type: disc;
`;
const Listtag = styled(Ultag)`
  margin: 0 0 20px 40px;
`;

export default OrderInfo;
