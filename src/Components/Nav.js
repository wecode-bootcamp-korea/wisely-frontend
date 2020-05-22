import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const Nav = (props) => {
  const [seeSup, setSeeSup] = useState(false);
  console.log(seeSup);

  const goTo = (path) => {
    props.history.push(path);
  };

  return (
    <div>
      <Header>
        <Naviga>
          <h1 className="wisely" onClick={() => goTo("/")}>
            <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/WiselyLogo.svg" />
          </h1>

          <nav>
            <Ul>
              <a href="#">
                <Li>
                  <span>시작하기</span>
                </Li>
              </a>
              <a href="#">
                <Li
                  onClick={() => {
                    setSeeSup(!seeSup);
                  }}
                >
                  <span>상품보기</span>
                </Li>
              </a>
              <a href="#">
                <Li>
                  <span>와이즐리 이야기</span>
                </Li>
              </a>
              <a href="#">
                <Li>
                  <span>고객센터</span>
                </Li>
              </a>
            </Ul>
          </nav>

          <Navright>
            <span>로그인</span>
            <Buckets>
              <Bucket>장바구니</Bucket>
              <Zero>0</Zero>
            </Buckets>
          </Navright>
        </Naviga>
      </Header>

      <Sup
        tAndf={seeSup}
        style={{ height: seeSup ? "100px" : "0", opacity: seeSup ? 1 : 0 }}
      >
        <Supsub>
          <SupUl>
            <SupLi>
              <Alink href="#">
                <Navimg1 src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/navigation/gift_set.png"></Navimg1>
                <LiText>선물세트</LiText>
              </Alink>
            </SupLi>
            <SupLi>
              <Alink href="#">
                <Navimg
                  src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/navigation/starter_navy.png"
                  onClick={() => goTo("/product/razor-set")}
                ></Navimg>
                <LiText>면도기 세트</LiText>
              </Alink>
            </SupLi>
            <SupLi>
              <Alink href="#">
                <Navimg src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/navigation/refill_blade.png"></Navimg>
                <LiText>리필 면도날</LiText>
              </Alink>
            </SupLi>
            <SupLi>
              <Alink href="#">
                <Navimg src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/navigation/shaving_gel_150.png"></Navimg>
                <LiText>쉐이빙 젤</LiText>
              </Alink>
            </SupLi>
            <SupLi>
              <Alink href="#">
                <Navimg src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/navigation/after_shaving_gel_oily_60.png"></Navimg>
                <LiText>애프터쉐이브</LiText>
              </Alink>
            </SupLi>
          </SupUl>
        </Supsub>
      </Sup>
    </div>
  );
};

export default Nav;

const Header = styled.header`
  height: 88px;
  padding: 0 50px;
`;

const Naviga = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  max-width: 1140px;
  height: 100%;
`;

const Ul = styled.ul`
  display: flex;
  opacity: 1;
  flex-direction: row;
  justify-content: space-between;
  overflow-y: hidden;
  background-color: inherit;
  color: #3a3a3a;
  width: 100%;
  font-weight: 300;
  font-size: 16px;
  line-height: 130%;
  list-style: none;
  margin-left: 30px;
  padding: 0;
  letter-spacing: -0.06em;
`;

const Alink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Li = styled.li`
  cursor: pointer;
  position: static;
  margin-bottom: 0;
  margin-right: 46px;
  letter-spacing: -0.06em;
  :hover {
    color: #0055b8;
  }
`;

const Navright = styled.div`
  display: flex;
  flex-direction: row;
  color: #3a3a3a;
  font-weight: 300;
  font-size: 16px;
  line-height: 130%;
`;

const Buckets = styled.div`
  margin-left: 28px;
  display: flex;
  flex-direction: row;
`;

const Bucket = styled.span`
  margin-right: 4px;
`;

const Zero = styled.div`
  position: static;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background: #ffc01e;
  line-height: 150%;
  color: #fff;
  font-size: 12px;
  letter-spacing: -0.04em;
  top: 21%;
  left: 51%;
  text-align: center;
  font-size: 12px;
`;

//subnav div 애니메이션
// const navHesup = keyframes`
//  {
//   from {
//     height: 0;
//   }
//   to {
//     height: 100px;
//   }
// }
// `;

//subnav이미지 애니메이션
// const navHesupimg = keyframes`
//  {
//   from {
//     height: 0;
//   }
//   to {
//     height: 60px;
//   }
// }
// `;

//ver keyframes ani
// const Sup = styled.div`
//   display: ${(props) => (props.tAndf ? "flex" : "none")};
//   align-items: center;
//   cursor: pointer;
//   height: 100px;
//   width: 100vw;
//   left: 0;
//   top: 88px;
//   color: #ffffff;
//   animation: ${navHesup} 0.3s ease-in-out;
// `;

//ver transition from jy
const Sup = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 0px;
  width: 100vw;
  left: 0;
  top: 88px;
  color: #ffffff;
  transition: all 0.3s ease-in-out;
`;

const Supsub = styled.div`
  margin: 10px auto;
`;

const SupUl = styled.ul`
  display: flex;
  flex-direction: row;
`;

const SupLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 46px;
  color: #cecece;
  opacity: 0.4;
  transition: opacity 0.2s ease-in-out;
  :hover {
    opacity: 1;
    color: #0055b8;
  }
`;

const LiText = styled.span`
  font-weight: 300;
  font-size: 13px;
  line-height: 140%;
  letter-spacing: -0.06em;
`;

const Navimg1 = styled.img`
  width: 88px;
  height: auto;
  margin-bottom: 2px;
`;

const Navimg = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 2px;
`;

// const Navimg1 = styled.img`
//   width: 88px;
//   height: auto;
//   margin-bottom: 2px;
//   /* animation: ${navHesupimg} 0.3s ease-in-out; */
// `;

// const Navimg = styled.img`
//   width: 60px;
//   height: 60px;
//   margin-bottom: 2px;
//   /* animation: ${navHesupimg} 0.3s ease-in-out; */
// `;
