import React, { Component } from "react";
import styled from "styled-components";

class SubScriptionMain extends Component {
    render() {
        return (
            <MainSection>
                <MainTitle>
                    <TitleText>부담없이 시작해보세요.</TitleText>
                    <br/>
                    첫 구독시 면도기 무료
                </MainTitle>
                <TitleSubText>면도기는 써봐야 아니까. 배송비는 언제나 무료에요.</TitleSubText>
                <StartBtn>시작하기</StartBtn>
            </MainSection>
        )
    }
}

export default SubScriptionMain;

const MainSection = styled.section `
    text-align: center; 
    background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/subscription/subscription_background.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: bottom;
    padding-top: 160px;
    margin-top: 0;
    height: 880px;   
`;

const MainTitle = styled.h2 `
    margin-bottom: 28px;
    font-size: 38px;
    font-weight: 300;
`;

const TitleText = styled.strong `
    font-weight: 400;
`;

const TitleSubText = styled.div `
    margin-bottom: 60px;
    font-size: 16px;
    line-height: 130%;
    font-weight: 300;
`;

const StartBtn = styled.div `
    width: 180px;
    height: 60px;
    margin: 0 auto;
    font-weight: 400;
    font-size: 20px;
    line-height: 60px;
    background-color: #0055b8;
    border-radius: 4px;
    color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`;

