import React, { useState } from "react";
import ItemsInCart from "./ItemsInCart";
import styled from "styled-components";

function ShoppingCart(props) {
  // localStorage.setItem(
  //   "access_token",
  //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzN9.aTp_S4zzNX6i3O2Rq9HsifM0v5JYp7-LVlVOF07jdcE"
  // );
  const imgAndNameArr = [
    {
      1: "미드나이트 네이비",
      2: "https://test.png",
    },

    {
      1: "사파이어 블루",
      2: "https://test.png",
    },

    {
      1: "슬레이트 그레이",
      2: "https://test.png",
    },
  ];
  const [responseData, setResponseData] = useState([]);
  const [buttonClick, setButtonClick] = useState(1); // 장바구니 밑에 파란버튼 누를때 바뀌는 state, 기본값은 1로 할 것! (1은 첫째페이지, 2는 두번째페이지, 3은 마지막페이지)
  const [razorColor, setRazorColor] = useState(1); // 장바구니에서 면도기 컬러 선택할때 바뀌는 state, 기본값은 1로 할 것! (1은 네이비, 2는 블루, 3은 그레이 컬러)
  const [selectShavingGel, setSelectShavingGel] = useState(false); //장바구니에서 쉐이빙젤 선택, 기본값은 false(선택안함)로 할 것! true는 선택을 의미
  const [selectAfterShave, setSelectAfterShave] = useState(false); //장바구니에서 애프터쉐이브 선택, 기본값은 false(선택안함)로 할 것! true는 선택을 의미
  const [countNums, setCountNums] = useState(1); // 장바구니 마지막페이지에서 제품 개수 카운트 저장하는 state, 기본값은 1로 할 것!
  const addGelToCart = () => {
    setSelectShavingGel(!selectShavingGel);
  };
  const AddAfterShaveToCart = () => {
    setSelectAfterShave(!selectAfterShave);
  };

  const clickBackground = () => {
    props.setBtnClick(false);
  };

  const thisIsFetch = () => {
    fetch("http://52.14.187.223:8000/cart", {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({
        gift_set_id: null,
        razor_set_id: razorColor,
        blade_id: null,
        shaving_gel_id: null,
        after_shave_id: null,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((response) => setResponseData(response.data[0]["cart"]));
  };
  console.log("응답받은 데이터-->", responseData);

  //아래는 장바구니 페이지 넘어갈때마다 윗 부분 텍스트 바꿔주는 조건문
  let HereIsCartTitle = null;
  if (buttonClick === 1) {
    HereIsCartTitle = "면도기 색상 선택";
  } else if (buttonClick === 2) {
    HereIsCartTitle = "함께하면 더 현명한 습관";
  } else {
    HereIsCartTitle = "장바구니";
  }
  return (
    <>
      <BackgroundDiv onClick={() => clickBackground()}></BackgroundDiv>
      <CartContainer open={props.btnClick}>
        <CartTitle>
          <CartTitleArrow
            display={buttonClick}
            onClick={() => clickBackground()}
          />
          <CartTitleText>{HereIsCartTitle}</CartTitleText>
          <EmptyArrowBox />
        </CartTitle>
        {buttonClick === 1 && (
          <ImgContainer>
            {imgAndNameArr.map((data, index) => {
              return (
                <RazorImages
                  key={index}
                  src={imgAndNameArr[index][2]}
                  alt=''
                  style={{ opacity: razorColor === index + 1 ? 1 : 0 }}
                />
              );
            })}
          </ImgContainer>
        )}
        {buttonClick === 2 && (
          <ScrollArea>
            <ScrollContainer>
              <DivInScroll>
                <ShavingGelImg>
                  <ShavingGelTextArea>
                    <ShavingGelText>
                      <strong>자극없이 부드러운</strong>
                      <br /> 면도를 원한다면
                    </ShavingGelText>
                    <DetailInfo>
                      <span>자세히</span>
                      <img
                        src='https://test.svg'
                        alt=''
                      />
                    </DetailInfo>
                  </ShavingGelTextArea>
                </ShavingGelImg>
                <ShavingGelPrice
                  clicked={selectShavingGel}
                  onClick={() => addGelToCart()}
                >
                  {selectShavingGel ? (
                    <CheckedImg
                      src='https://test.svg'
                      alt=''
                    />
                  ) : (
                    <CheckedImg
                      src='https://test.svg'
                      alt=''
                    />
                  )}
                  <ShavingGelName>
                    쉐이빙젤<span> (여행용75ml)</span>
                  </ShavingGelName>
                  <ShavingGelSale>
                    <BuyTogether>함께 구매시</BuyTogether>
                    <div>
                      <LinedPrice>2,900</LinedPrice>{" "}
                      <CurrentPrice> 1,900원</CurrentPrice>
                    </div>
                  </ShavingGelSale>
                </ShavingGelPrice>
              </DivInScroll>
              <DivInScroll>
                <AfterShaveImg>
                  <AfterShaveTextArea>
                    <AfterShaveText>
                      <div>NEW</div>
                      <strong>자극없이 부드러운</strong>
                      <br /> 면도를 원한다면
                    </AfterShaveText>
                    <DetailInfo>
                      <span>자세히</span>
                      <img
                        src='https://test.svg'
                        alt=''
                      />
                    </DetailInfo>
                  </AfterShaveTextArea>
                </AfterShaveImg>
                <AfterShavePrice
                  clicked={selectAfterShave}
                  onClick={() => AddAfterShaveToCart()}
                >
                  {selectAfterShave ? (
                    <CheckedImg
                      src='https://test.svg'
                      alt=''
                    />
                  ) : (
                    <CheckedImg
                      src='https://test.svg'
                      alt=''
                    />
                  )}
                  <AfrterShaveName>
                    리페어 애프터쉐이브<span> (여행용30ml)</span>
                  </AfrterShaveName>
                  <ShavingGelSale>
                    <BuyTogether>함께 구매시</BuyTogether>
                    <div>
                      <LinedPrice>3,900</LinedPrice>
                      <CurrentPrice> 2,900원</CurrentPrice>
                    </div>
                  </ShavingGelSale>
                </AfterShavePrice>
              </DivInScroll>
            </ScrollContainer>
          </ScrollArea>
        )}
        {buttonClick === 3 && (
          <CartLastpage>
            <ItemsInCart
              responseData={responseData}
              razorColor={razorColor}
              countNums={countNums}
              setCountNums={setCountNums}
            />

            <div>
              <PriceContainer>
                <ShippingFee>
                  <div>배송비</div>
                  <div>무료</div>
                </ShippingFee>
                <TotalPriceContainer>
                  <div>최종 결제 금액</div>
                  {responseData.length > 0 && (
                    <div>
                      {Number(
                        `${
                          countNums *
                          responseData[razorColor - 1]["razor_price"]
                        }`
                      ).toLocaleString("en")}
                      원
                    </div>
                  )}
                </TotalPriceContainer>
              </PriceContainer>
              <ChoiceBtn onClick={() => alert("주문은 거절한다!🤪")}>
                주문하기
              </ChoiceBtn>
              <TextUnderBtn>
                <p>1.5만원 이상 무료 배송</p>
                <p>평일 17시 이전 주문 시 당일 출고</p>
              </TextUnderBtn>
              <WiseHabit>함께하면 더 현명한 습관</WiseHabit>
            </div>
          </CartLastpage>
        )}
        {buttonClick === 1 && (
          <ColorContainer>
            <ColorBtns>
              <NavySelect select={razorColor}>
                <NavyBtn onClick={() => setRazorColor(1)} />
              </NavySelect>
              <BlueSelect select={razorColor}>
                <BlueBtn onClick={() => setRazorColor(2)} />
              </BlueSelect>
              <GraySelect select={razorColor}>
                <GrayBtn onClick={() => setRazorColor(3)} />
              </GraySelect>
            </ColorBtns>
            <ColorName color={razorColor}>
              {imgAndNameArr[razorColor - 1][1]}
            </ColorName>
          </ColorContainer>
        )}
        <ButtonContainer>
          {buttonClick === 1 && (
            <ChoiceBtn onClick={() => setButtonClick(2)}>선택하기</ChoiceBtn>
          )}
          {buttonClick === 2 && (
            <ChoiceBtn
              onClick={() => {
                setButtonClick(3);
                thisIsFetch();
              }}
            >
              {selectShavingGel || selectAfterShave ? "함께 구매하기" : "다음"}
            </ChoiceBtn>
          )}
        </ButtonContainer>
      </CartContainer>
    </>
  );
}

const BackgroundDiv = styled.div`
  background: rgb(100, 100, 100, 0.81);
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`;

const CartContainer = styled.div`
  background: #fff;
  position: absolute;
  top: 0;
  right: 0;
  width: ${(props) => (props.open ? "440px" : 0)};
  transition: width 0.8s ease-in-out;
  height: 100vh;
  z-index: 12;
  text-align: center;
`;

const CartTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 88px;
  padding: 0 16px;
  border-bottom: 1px solid #f3f3f3;
`;

const CartTitleArrow = styled.div`
  width: 24px;
  height: 24px;
  margin-top: 1px;
  background: url("https://test.svg");
  background-size: 100%;
  cursor: pointer;
  visibility: ${(props) => (props.display === 1 ? "visible" : "hidden")};
`;

const CartTitleText = styled.div`
  font-size: 21px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.04em;
`;

const EmptyArrowBox = styled(CartTitleArrow)`
  background: none;
`;
const ImgContainer = styled.div`
  height: 65vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const RazorImages = styled.img`
  width: 520px;
  height: 153px;
  position: absolute;
  top: 148px;
  left: calc(50% - 320px);
  transition: opacity 1s ease;
`;
const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ColorBtns = styled.div`
  display: flex;
  justify-content: center;
`;

const NavyBtn = styled.div`
  background: #1e314a;
  margin: 2px auto 3px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const NavySelect = styled.div`
  border: ${(props) => (props.select === 1 ? "1px solid #1e314a" : "none")};
  border-radius: 50%;
  width: 28px;
  height: 28px;
  padding: 1px;
  margin: 0 4px;
`;
const BlueBtn = styled(NavyBtn)`
  background: #1888cd;
  margin: 2px auto 3px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
const BlueSelect = styled(NavySelect)`
  border: ${(props) => (props.select === 2 ? "1px solid #1888cd" : "none")};
  border-radius: 50%;
  width: 28px;
  height: 28px;
  padding: 1px;
  margin: 0 4px;
`;

const GrayBtn = styled(NavyBtn)`
  background: #cecece;
  margin: 2px auto 3px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const GraySelect = styled(NavySelect)`
  border: ${(props) => (props.select === 3 ? "1px solid #cecece" : "none")};
  border-radius: 50%;
  width: 28px;
  height: 28px;
  padding: 1px;
  margin: 0 4px;
`;

const ColorName = styled.div`
  width: 100%;
  margin-top: 14px;
  color: ${(props) => {
    if (props.color === 1) return "#1e314a";
    else if (props.color === 2) return "#1888cd";
    else return "#cecece";
  }};
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
`;
const ButtonContainer = styled.div`
  padding: 0 16px;
`;

const ChoiceBtn = styled.button`
  height: 60px;
  width: 100%;
  font-weight: 400;
  font-size: 20px;
  margin: 26px 0 18px 0;
  padding: 1px 7px 2px;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  background-color: #0055b8;
  outline: none;
`;
const ScrollArea = styled.div`
  margin-top: 40px;
  padding: 0 16px;
`;
const ScrollContainer = styled.div`
  height: 480px;
  border-radius: 4px;
  overflow-x: scroll;
  /* display: flex; */
  white-space: nowrap;
  /* border: 1px solid red; */
`;

const DivInScroll = styled.div`
  width: 360px;
  height: 440px;
  margin-right: 10px;
  display: inline-block;
`;

const ShavingGelImg = styled.div`
  position: relative;
  width: 360px;
  height: 320px;
  background: url("https://test.png")
    no-repeat;
  background-size: cover;
`;

const ShavingGelPrice = styled.div`
  text-align: left;
  height: 120px;
  position: relative;
  margin-top: 9px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.08);
  padding: 12px 18px;
  background: ${(props) =>
    props.clicked ? "rgba(30, 169, 255, 0.03)" : "#fcfcfc"};
  border-radius: 4px;
  border: ${(props) =>
    props.clicked ? "1px solid #0055b8" : "1px solid #fcfcfc"};
  cursor: pointer;
  &:hover {
    background: rgba(30, 169, 255, 0.03);
    border: 1px solid #0055b8;
  }
`;

const CheckedImg = styled.img`
  width: 46px;
  height: 46px;
  position: absolute;
  top: 35px;
  right: 24px;
`;

const AfterShavePrice = styled(ShavingGelPrice)`
  background: ${(props) =>
    props.clicked ? "rgba(30, 169, 255, 0.03)" : "#fcfcfc"};
  border: ${(props) =>
    props.clicked ? "1px solid #0055b8" : "1px solid #fcfcfc"};
`;

const ShavingGelName = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.06em;
  color: #1e314a;
  span {
    font-size: 16px;
    font-weight: 300;
    color: #979797;
  }
`;

const AfrterShaveName = styled(ShavingGelName)``;

const ShavingGelSale = styled.div`
  margin-top: 15px;
`;
const BuyTogether = styled.div`
  font-size: 13px;
  font-weight: 300;
  color: #0f5783;
`;
const LinedPrice = styled.span`
  color: #cecece;
  font-size: 20px;
  text-decoration: line-through;
`;
const CurrentPrice = styled.span`
  color: #0f5783;
  font-size: 20px;
`;

const AfterShaveImg = styled(ShavingGelImg)`
  background: url("https://test.png");
  background-size: cover;
`;

const ShavingGelTextArea = styled.div`
  position: absolute;
  top: 100px;
  left: 20px;
  text-align: left;
`;
const AfterShaveTextArea = styled(ShavingGelTextArea)`
  position: absolute;
  top: 70px;
  left: 20px;
  text-align: left;
`;

const ShavingGelText = styled.div`
  font-size: 24px;
  font-weight: 300;
  text-align: left;
  line-height: 130%;
  strong {
    font-weight: 400;
  }
`;

const AfterShaveText = styled(ShavingGelText)`
  color: #fff;
  div {
    color: #0055b8;
    font-size: 16px;
    font-weight: 400;
  }
  strong {
    font-weight: 400;
  }
`;

const DetailInfo = styled.div`
  display: inline-block;
  padding: 6px 8px;
  margin-top: 23px;
  border: 1px solid #1e314a;
  border-radius: 4px;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  letter-spacing: -0.04em;
  cursor: pointer;
  img {
    margin-left: 5px;
  }
`;

const CartLastpage = styled.div`
  padding: 0 16px;
  position: relative;
`;
const PriceContainer = styled.div`
  padding: 0 10px;
  margin-top: 22px;
  font-size: 16px;
  font-weight: 300;
  line-height: 130%;
  letter-spacing: -0.06em;
`;

const ShippingFee = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  color: #979797;
`;

const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 18px;
  color: #3a3a3a;
`;
const TextUnderBtn = styled.div`
  margin-top: 20px;
  text-align: cetner;
  font-size: 15px;
  line-height: 140%;
  letter-spacing: -0.06em;
  color: #979797;
`;

const WiseHabit = styled.div`
  color: #0f5783;
  font-size: 24px;
  line-height: 130%;
  letter-spacing: -0.06em;
  margin: 80px 0 56px 0;
`;
export default ShoppingCart;
