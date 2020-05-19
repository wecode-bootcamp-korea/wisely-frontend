import React, { useState } from "react";
import styled from "styled-components";

function ItemsInCart(props) {
  const { responseData, razorColor } = props;
  const [deleteItem, setDeleteItem] = useState(false);
  //   console.log("삭제버튼 클릭 -->", deleteItem);
  const countProducts = (data) => {
    if (data === "minus") {
      // console.log("이건 마이너스 버튼")
      // [조건1]마이너스 버튼을 눌렀을 경우,
      if (props.countNums > 1) {
        //[조건2]제품개수가 최소 1개이상, 마이너스로 내려가지 안도록 할 것!
        props.setCountNums(props.countNums - 1);
      }
    } else if (data === "plus") {
      // [조건3] 플러스 버튼을 눌렀을 경우 제품 갯수에 +1 해줄 것!
      props.setCountNums(props.countNums + 1);
    }
  };
  // console.log("ok?---->", responseData[0][razorColor-1]['razor_image']);

  return (
    <>
      {responseData.length > 0 && (
        <CartContentContainer deleteItem={deleteItem}>
          <ProductImgDiv>
            <img src={responseData[razorColor - 1]["razor_image"]} alt='' />
          </ProductImgDiv>
          <ProductInfoContainer>
            <ProductName>면도기 세트</ProductName>
            <div>
              <ProductColor>
                {responseData[razorColor - 1]["razor_color"]}
              </ProductColor>
              <ProductDetail>면도기+날2입</ProductDetail>
            </div>
            <ProductPrice>
              {Number(
                `${responseData[razorColor - 1]["razor_price"]}`
              ).toLocaleString("en")}
              원
            </ProductPrice>
          </ProductInfoContainer>
          <div>
            <DeleteProduct>
              <img
                onClick={() => setDeleteItem(!deleteItem)}
                src='https://wiselyshave-cdn.s3.amazonaws.com/assets/images/smallXmark.svg'
                alt=''
              />
            </DeleteProduct>
            <ProductCounter>
              <ProductCountMinus onClick={() => countProducts("minus")}>
                <div>-</div>
              </ProductCountMinus>
              <ProductAmount>
                <div>{props.countNums}</div>
              </ProductAmount>
              <ProductCountPlus onClick={() => countProducts("plus")}>
                <div>+</div>
              </ProductCountPlus>
            </ProductCounter>
          </div>
        </CartContentContainer>
      )}
    </>
  );
}
const CartContentContainer = styled.div`
  padding: 15px 10px;
  background: #fff;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #efefef;
  position: ${(props) => (props.deleteItem ? "absolute" : "")};
  top: ${(props) => (props.deleteItem ? "100px" : 0)};
  opacity: ${(props) => (props.deleteItem ? 0 : 1)};
  transition: all 0.5s ease;
`;

const ProductImgDiv = styled.div`
  width: 128px;
  height: 128px;
  margin-right: 20px;
  img {
    width: 128px;
  }
`;

const ProductInfoContainer = styled.div`
  text-align: left;
`;

const ProductName = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #3a3a3a;
  margin-bottom: 5px;
  line-height: 130%;
`;

const ProductColor = styled.span`
  color: #1888d9;
  font-size: 14px;
`;
const ProductDetail = styled.span`
  color: #979797;
  font-size: 13px;
  font-weight: 300;
`;
const ProductPrice = styled.div`
  color: #0f5783;
  font-size: 16px;
  margin-top: 20px;
`;

const DeleteProduct = styled.div`
  margin-bottom: 50px;
  text-align: right;
  img {
    cursor: pointer;
  }
`;

const ProductCounter = styled.div`
  display: flex;
  text-align: right;
  font-size: 12px;
  color: #7a7a7a;
`;

const ProductCountMinus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #cecece;
  border-right-width: 0;
  border-radius: 2px 0 0 2px;
  padding-top: 2px;
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

const ProductAmount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #cecece;
  padding-top: 2px;
  width: 28px;
  height: 28px;
`;

const ProductCountPlus = styled(ProductCountMinus)`
  border: 1px solid #cecece;
  border-left-width: 0;
  border-radius: 0 2px 2px 0;
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

export default ItemsInCart;
