import React, { Component } from "react";
import styled from "styled-components";

class SubScriptionStory extends Component {
    constructor() {
        super();

        this.state = {
            activeBtn: 1
        }
    }

    clickHandleOne = () => {
        if(this.state.activeBtn < 2){
            this.setState({ activeBtn: this.state.activeBtn+=1 });
        }
    }

    clickHandleTwo = () => {
        if(this.state.activeBtn < 3) {
            this.setState({ activeBtn: this.state.activeBtn += 1 })
        } else {
            this.setState({ activeBtn: this.state.activeBtn = 1 })
        }
    }

    render() {
        const { activeBtn } = this.state
        return (
            <MainSection>
                <StroyWrapper>
                    <FirStrWrapper>
                    {activeBtn === 1 && <FirStrImg watchOne={ activeBtn === 1 } />}
                    {activeBtn === 2 && <SecStrImg style={{ transition: '.4 ease-in-out' }} watchTwo={ activeBtn === 2 } />}
                    {activeBtn === 3 && <ThrStrImg watchThree={ activeBtn === 3 } />}

                        <FirStrSection>
                            <FirStrSequence>
                                <FirStrItem watchTwo={ activeBtn === 2 } onClick={this.clickHandleOne}>
                                    NewYork, U.S.A
                                </FirStrItem>
                                <SecStrItem watchThree={ activeBtn === 3 } onClick={this.clickHandleTwo}>
                                    Solingen, Germany
                                </SecStrItem>
                                <CircleBox>
                                    <SlideCircle watchTwo={ activeBtn === 2 } />
                                    <SlideStick />
                                    <SecCircle watchThree={ activeBtn === 3 } />
                                </CircleBox>
                            </FirStrSequence>
                            <FirStrTitle watchOne={ activeBtn === 1 }>
                                <MainTitle>
                                    더 높은 기준을 찾아<br/>
                                    전세계로
                                </MainTitle>
                                <SubTitle>
                                    와이즐리는 가장 뛰어난 면도 경험을 위해 전 세계의<br/>
                                    전문가들과 함께 했습니다. 현명한 소비는 좋은 제품에서<br/>
                                    출발한다고 믿기 때문입니다.
                                </SubTitle>
                            </FirStrTitle>
                            <SecStrTitle watchTwo={ activeBtn === 2 }>
                                <MainTitle>
                                    미국 뉴욕의 디자이너,<br/>
                                    문제를 해결하는 디자인
                                </MainTitle>
                                <SubTitle>
                                    와이즐리는 뉴욕의 세계적인 디자인 스튜디어 Aruliden과<br/>
                                    혁신적인 면도 용품을 디자인 해 왔습니다. Google, MoMa, Glossier, Bvlgari를<br/>
                                    디자인 해 온 Aruliden은 기성 면도기의 오래 된 디자인 관행에 의문을 던지며.<br/>
                                    사용자 중심의 문제 해결에 집중한 탁월한 사용성과 아름다운 디자인을 만들어 냈습니다.
                                </SubTitle>
                            </SecStrTitle>
                            <ThrStrTitle watchThree={ activeBtn === 3 }>
                                <MainTitle>
                                    독일 졸링겐의 엔지니어.<br/>
                                    정교한 기술력과 장인정신
                                </MainTitle>
                                <SubTitle>
                                    와이즐리 면도날은 100% 독일 졸링겐에서 생산됩니다. 독일 졸링겐은<br/>
                                    세계적으로 유명한 칼의 도시로, 헹켈, 우스타프 등 명품 칼 브랜드들의<br/>
                                    본사가 위치 해 있죠. 세계 최고 수준의 기술력을 가진 500여명의 엔지니어들이<br/>
                                    장인정신을 담아 독보적인 품질의 면도날을 만들어내고 있습니다.
                                </SubTitle>
                            </ThrStrTitle>
                        </FirStrSection>
                    </FirStrWrapper>
                </StroyWrapper>
            </MainSection>
        )
    }
}

export default SubScriptionStory;

const MainSection = styled.section ``;

const StroyWrapper = styled.div `
    padding-top: 68px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

const FirStrWrapper = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
    height: 635px;
    background-color: #1e314a;
`;

const FirStrImg = styled.div `
    background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/razorDesignStory/razor_design_story_1.png");
    background-size: cover;
    object-position: center;
    object-fit: cover;
    width: 50%;
    height: 100%;
    display: ${props => props.watchOne ? "" : "none"};
`;

const FirStrSection = styled.section `
    width: 50%;
    height: 100%;
    padding: 0 20px 0 5.729%;
`;

const FirStrSequence = styled.div `
    width: 100%;
    margin-bottom: 48px;
    margin-top: 27.963%;
`;

const FirStrItem = styled.div `
    font-size: 14px;
    display: initial;
    align-items: normal;
    margin-right: 40px;
    color: ${props => props.watchTwo ? "#fff" : "#979797"};
    transition: ${props => props.watchTwo ? ".4s ease-in-out" : ""}; 
    font-weight: bold;
    cursor: pointer;
`;

const SecStrItem = styled.div `
    font-size: 14px;
    display: initial;
    align-items: normal;
    margin-right: 40px;
    color: ${props => props.watchThree ? "#fff" : "#979797"};
    transition: ${props => props.watchThree ? ".4s ease-in-out" : ""};  
    font-weight: bold;
    cursor: pointer;
`;

const CircleBox = styled.div `
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-left: 45px;
`;

const SlideCircle = styled.div `
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => props.watchTwo ? "#fff" : "#979797" };
    transition: ${props => props.watchTwo ? ".4s ease-in-out" : ""};  
`;

const SecCircle = styled.div `
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => props.watchThree ? "#fff" : "#979797" };
    transition: ${props => props.watchThree ? ".4s ease-in-out" : ""};  
`;

const SlideStick = styled.div `
    width: 100px;
    height: 1px;
    border-bottom: 1px solid #979797;
    margin-left: 15px;
    margin-right: 15px;
`;

const FirStrTitle = styled.div `
    display: ${props => props.watchOne ? "" : "none"};
`;

const MainTitle = styled.h3 `
    color: white;
    font-size: 40px;
    line-height: 130%;
    margin-bottom: 20px;
`;

const SubTitle = styled.div `
    color: #d1d0ce;
    line-height: 160%;
    font-weight: 350;
    font-size: 14px;
`;

const SecStrImg = styled.div `
    background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/razorDesignStory/razor_design_story_2.png");
    background-size: cover;
    object-position: center;
    object-fit: cover;
    width: 50%;
    height: 100%;
    display: ${props => props.watchTwo ? "" : "none"};
    /* transition: ${props => props.watchTwo ? ".4s ease-in-out" : "" }; */
`;

const SecStrTitle = styled.div `
    display: ${props => props.watchTwo ? "" : "none"};
    transition: ${props => props.watchTwo ? ".4s ease-in-out" : ""}; 
`;

const ThrStrImg = styled.div `
    background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/razorDesignStory/razor_design_story_3.png");
    background-size: cover;
    object-position: center;
    object-fit: cover;
    width: 50%;
    height: 100%;
    display: ${props => props.watchThree ? "" : "none"};
    transition: ${props => props.watchThree ? ".4s ease-in-out" : ""}; 
`;

const ThrStrTitle = styled.div `
    display: ${props => props.watchThree ? "" : "none"};
    transition: ${props => props.watchThree ? ".4s ease-in-out" : ""}; 
`;

