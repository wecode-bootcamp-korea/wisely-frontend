import React, { Component } from "react";
import styled from "styled-components";

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            userPwd: "",
            userPhone: "",
            userError: "",
            isValid: false
        }
    }

    changeHandle = e => {
       
        // const phoneNumRule = /^\d{3}-\d{3,4}-\d{4}$/;
        let errorMsg = "";        
        
        if(e.target.value === 0) {
            errorMsg = "필수 입력창입니다"
        } else {
            const passRule = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
            errorMsg = passRule ? "" : "비밀번호 양식을 확인 해 주세요"
        }
        
        this.setState({
            userPwd: e.target.value,
            userPhone: e.target.value,
            isValid: !errorMsg,
            userError: errorMsg
        })
    }
    
    render() {
        return(
            <SignUpBg>
                <SignUpContain>
                    <LogoContain>
                        <Logo />
                    </LogoContain>
                    <SignUpBox>
                        <SignUpTitle>
                            <TitleOne>처음이시군요</TitleOne>
                            <TitleTwo>가입을 진행합니다.</TitleTwo>
                        </SignUpTitle>
                        <InfoContain>
                            <IdBox>아이디</IdBox>
                            <EmailIdContain>
                                <DefaultId></DefaultId>
                                <CheckBox />
                            </EmailIdContain>
                            <PwBox>비밀번호</PwBox>
                            <PwContain>
                                <DefaultPw type="password" placeholder=" 비밀번호(6자 이상)" />
                                <PwOff />
                            </PwContain>
                            <PhoneNumBox>휴대폰번호</PhoneNumBox>
                            <PhoneNumContain>
                                <DefaultPhoneNum placeholder=" 휴대폰번호('-'제외)" />
                            </PhoneNumContain>
                            <BirthDayBox>생년월일</BirthDayBox>
                            <BirthDayContain>
                                <DefaultBirthDay placeholder=" 생년월일 6자리(예:860617)" />
                            </BirthDayContain>
                            <NameBox>이름</NameBox>
                            <NameContain>
                                <DefaultName placeholder=" 이름"/>
                            </NameContain>
                            <GenderBox>성별</GenderBox>
                            <GenderContain>
                                <GenderLabel>
                                    <CheckGender type="radio" name="gender" value="male" checked />
                                    <GenderType>남자</GenderType>
                                </GenderLabel>
                                <GenderLabel>
                                    <CheckGender type="radio" name="gender" value="female" checked />
                                    <GenderType>여자</GenderType>
                                </GenderLabel>
                            </GenderContain>
                            <SuccessBtn>가입완료</SuccessBtn>
                            <Terms>
                                본인은 만 14세 이상이며, <TermsText>이용약관</TermsText>, <TermsText>개인정보 수집 및 이용</TermsText>, <br/>
                                <TermsText>개인정보 제공 내용</TermsText>, <TermsText>전자금융거래 약관</TermsText>을 확인하였으며, 동의합니다.
                            </Terms>
                            <MarketingBox>
                                <MarketingTitle>
                                    와이즐리 혜택 알림 받기
                                </MarketingTitle>
                                <Switch>
                                    <SwitchInput type="checkbox"/>
                                    <Slider></Slider>
                                </Switch>
                            </MarketingBox>
                            <MarketingInfo>
                                <p>알림에 동의하시면, 면도날 교체 알림, 신제품 출시 등</p>
                                <p>꼭 필요한 정보만 알려드릴게요. (SMS, 카톡, 이메일)</p>
                            </MarketingInfo>
                        </InfoContain>
                    </SignUpBox>
                </SignUpContain>
            </SignUpBg>
        )
    }
}

const SignUpBg = styled.div `
    background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/signInBg.png");
    background-size: cover;
    height: 1400px;
`;

const SignUpContain = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding-top: 64px;
`;

const SignUpBox = styled.div `
    width: 500px;
    height: 1157px;
    margin-top: 40px;
    margin-left: 19vw;
    padding: 60px 50px; 
    border-radius: 10px;
    background-color: #fff;
`;

const LogoContain = styled.div `
    margin-left: calc(19vw + 192px);
`;

const Logo = styled.div `
    background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/WiselyLogo.svg");
    width: 115px;
    height: 18px;
    cursor: pointer;
`;

const SignUpTitle = styled.div `
    margin-bottom: 15px;
`;

const TitleOne = styled.p `
    font-size: 45px;
    font-weight: 300;
`;

const TitleTwo = styled.p `
    margin-top: 10px;
    font-size: 45px;
    font-weight: 400;
`;

const InfoContain = styled.div `
    margin-top: 55px;
`;

const IdBox = styled.div `
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -.04em;
    color: #3a3a3a;
    font-weight: 300;
    margin-top: 24px;
`

const EmailIdContain = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    border-bottom: 1px solid #0055b8;
`;

const DefaultId = styled.input `
    font-weight: 300;
    border: 0;
    width: 80%;
    height: 100%;
    font-size: 18px;
    line-height: 130%;
    letter-spacing: -.06em;
    margin-left: 4px;
    outline-style: none;
    &::placeholder {
        opacity: 0.6;
        font-size: 18px;
    }
`;

const CheckBox = styled.div `
    background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/checkBlue.svg");
    width: 36px;
    height: 36px;
`;

const PwBox = styled.div `
    margin-top: 24px;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -.04em;
    color: #3a3a3a;
    font-weight: 300;
    margin-top: 24px;
`;

const PwContain = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    height: 48px;
    border-bottom: 1px solid #ddd;
`;

const DefaultPw = styled.input `
    font-weight: 300;
    border: 0;
    width: 80%;
    height: 100%;
    font-size: 18px;
    line-height: 130%;
    letter-spacing: -.06em;
    margin-left: 4px;
    outline-style: none;
    &::placeholder {
        opacity: 0.4;
        font-size: 18px;
        font-weight: 350;
    }
`;

const PwOff = styled.div `
    background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/passwordOff.svg");
    width: 30px;
    height: 25px;
    cursor: pointer;
`;

const PhoneNumBox = styled.div `
    margin-top: 24px;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -.04em;
    color: #3a3a3a;
    font-weight: 300;
    margin-top: 24px;
`;

const PhoneNumContain = styled.div `
    display: flex;
    align-items: center;
    margin-top: 10px;
    height: 48px;
    border-bottom: 1px solid #ddd;
`;

const DefaultPhoneNum = styled.input `
    font-weight: 300;
    border: 0;
    width: 80%;
    height: 100%;
    font-size: 18px;
    line-height: 130%;
    letter-spacing: -.06em;
    margin-left: 4px;
    outline-style: none;
    &::placeholder {
        opacity: 0.4;
        font-size: 18px;
        font-weight: 350;
    }
`;

const BirthDayBox = styled.div `
    margin-top: 24px;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -.04em;
    color: #3a3a3a;
    font-weight: 300;
    margin-top: 24px;
`;

const BirthDayContain = styled.div `
    display: flex;
    align-items: center;
    margin-top: 10px;
    height: 48px;
    border-bottom: 1px solid #ddd;
`;

const DefaultBirthDay = styled.input `
    font-weight: 300;
    border: 0;
    width: 80%;
    height: 100%;
    font-size: 18px;
    line-height: 130%;
    letter-spacing: -.06em;
    margin-left: 4px;
    outline-style: none;
    &::placeholder {
        opacity: 0.4;
        font-size: 18px;
        font-weight: 350;
    }
`;

const NameBox = styled.div `
    margin-top: 24px;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -.04em;
    color: #3a3a3a;
    font-weight: 300;
    margin-top: 24px;
`;

const NameContain = styled.div `
    display: flex;
    align-items: center;
    margin-top: 1px;
    height: 48px;
    border-bottom: 1px solid #ddd;
`;

const DefaultName = styled.input `
    font-weight: 300;
    border: 0;
    width: 80%;
    height: 100%;
    font-size: 18px;
    line-height: 130%;
    letter-spacing: -.06em;
    margin-left: 4px;
    outline-style: none;
    &::placeholder {
        opacity: 0.4;
        font-size: 18px;
        font-weight: 350;
    }
`;

const GenderBox = styled.div `
    margin-top: 24px;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -.04em;
    color: #3a3a3a;
    font-weight: 300;
    margin-top: 24px;
`;

const GenderContain = styled.div `
    display: flex;
    align-items: center;
    margin-top: 10px;
    height: 48px;
`;

const GenderLabel = styled.label `
    cursor: pointer;
    font-size: 20px;
    font-weight: 300;
    line-height: 100%;
    margin-right: 34px;
    margin-bottom: 12px;
    color: #3a3a3a;
`;

const CheckGender = styled.input `
    margin-right: 10px;
`;

const GenderType = styled.span ``;

const SuccessBtn = styled.button `
    text-align: center;
    font-size: 20px;
    color: #fff;
    margin-top: 40px;
    outline: none;
    background-color: #cbcbcb;
    width: 100%;
    height: 60px;
    border-radius: 4px;
    cursor: pointer;
`;

const Terms = styled.div `
    margin-top: 20px;
    padding-bottom: 46px;
    font-weight: 300;
    font-size: 12px;
    text-align: center;
    line-height: 140%;
    letter-spacing: -.04em;
    color: #979797;
    border-bottom: 1px solid #cecece;
`;

const TermsText = styled.span `
    color: #1d314a;
    text-decoration: underline;
    cursor: pointer;
`;

const MarketingBox = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 45px;
`;

const MarketingTitle = styled.div `
    align-self: center;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: -.06em;
    color: #3a3a3a;
`;

const Switch = styled.label `
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
`;

const SwitchInput = styled.input `
    opacity: 0;
    width: 0;
    height: 0;
    &:checked {
        background-color: #0055b8;
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
    &:focus {
        box-shadow: 0 0 1px #0055b8;
    }
`;

const Slider = styled.span `
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 34px;
    background-color: #0055b8;
    box-shadow: 0 0 1px #0055b8;
    -webkit-transition: .4s;
    transition: .4s;
    &:before {
        position: absolute;
        content: " ";
        width: 26px;
        height: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        border-radius: 50%;
        -webkit-transition: .4s;
        transition: .4s;
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
`;

const MarketingInfo = styled.div `
    margin-top: 20px;
    padding-bottom: 30px;
    font-weight: 300px;
    font-size: 12px;
    line-height: 140%;
    letter-spacing: -.04em;
    color: #979797;
`

export default SignUp;