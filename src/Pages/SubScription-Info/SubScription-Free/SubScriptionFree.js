import React, { Component } from "react";
import styled from "styled-components";

class SubScriptionFree extends Component {
    render() {
        return (
            <SectionFree>
                <FreeTitle>
                    낡은 면도날과 자극적인 면도로부터
                    <br/>
                    <SubTitle>자유로워지세요</SubTitle>
                </FreeTitle>
                <ItemGroup>
                    <ContentBox>
                        <FirstItemImg />
                        <ItemText>
                            부담없는 가격의<br/> 
                            3-STEP 프리미엄 면도용품
                        </ItemText>
                    </ContentBox>
                    <ContentBox>
                        <SecItemImg />
                        <ItemText>
                            건강한 주기에 맞춰<br/>
                            교체 알림을 드리고 배송해드려요.<br/>
                            배송비는 언제나 무료
                        </ItemText>
                    </ContentBox>
                    <ContentBox>
                        <ThrItemImg />
                        <ItemText>
                            언제나 변경, 해지 할 수 있어요<br/>
                            카톡 하나만 보내면 끝!
                        </ItemText>
                    </ContentBox>
                </ItemGroup>
            </SectionFree>
        )
    }
}

export default SubScriptionFree;

const SectionFree = styled.section `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 776px;
`;

const FreeTitle = styled.h2 `
    text-align: center;
    margin-bottom: 120px;
    font-size: 38px;
    font-weight: 300;
    line-height: 130%;
`;

const SubTitle = styled.strong `
    font-weight: 400;
`;

const ItemGroup = styled.div `
    width: 1000px;
    height: 226px;
    display: flex;
    justify-content: space-between;
`;

const ContentBox = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FirstItemImg = styled.div `
    background-image: url("https://test.svg");
    background-size: cover;
    margin-bottom: 28px;
    width: 160px;
    height: 110px;
`;

const SecItemImg = styled.div `
    background-image: url("https://test.svg");
    background-size: cover;
    margin-bottom: 28px;
    width: 160px;
    height: 110px;
`;

const ThrItemImg = styled.div `
    background-image: url("https://test.svg");
    background-size: cover;
    margin-bottom: 28px;
    width: 160px;
    height: 110px;
`;

const ItemText = styled.p `
    text-align: center;
    font-size: 20px;
    line-height: 148%;
    letter-spacing: -.06em;
`;