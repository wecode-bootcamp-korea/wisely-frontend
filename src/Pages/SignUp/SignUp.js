import React, { Component } from "react";
import styled from "styled-components";

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            userMail: "",
            userPwd: "",
            userPhone: "",
            userBirth: "",
            userName: "",
            mailError: "",
            pwdError: "",
            phoneError: "",
            birthError: "",
            nameError: "",
            mailValid: false,
            pwValid: false,
            birthValid: false,
            nameValid: false,
            phoneValid: false,
            firstText: true,
            infoBtn : false,
        }
    }

    setFirText = () => {
        this.setState({
            firstText: false
        })
    }

    handleEmail = e => {
        let error = "";
        console.log("handleEmail")
        if (!e.target.value) {
            error = "필수 입력창입니다"
        } else {
            const flag = (/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i).test(e.target.value);
            error = flag ? "" : "이메일 양식을 확인 해 주세요"
        }

        this.setState({
            userMail: e.target.value,
            mailValid: !error, 
            mailError: error
        });
    }

    changePwHandle = e => {

        let errorMsg = "";        
        
        if(!e.target.value) {
            errorMsg = "필수 입력창입니다"
        } else {
            const passRule = (/^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/).test(e.target.value);
            errorMsg = passRule ? "" : "비밀번호 양식을 확인 해 주세요"
        }
        
        this.setState({
            userPwd: e.target.value,
            pwValid: !errorMsg,
            pwdError: errorMsg
        })
    }

    changePhoneHandle = e => {

        let phoneErrorMsg = "";
        if(!e.target.value) {
            phoneErrorMsg = "휴대폰 번호는 필수 입력 창입니다";
        } else {
            const phoneNumRule = (/^\d{3}-\d{3,4}-\d{4}$/).test(e.target.value);
            phoneErrorMsg = phoneNumRule ? "" : "휴대폰 번호를 올바르게 입력해주세요";
        }

        this.setState({
            userPhone: e.target.value,
            phoneValid: !phoneErrorMsg,
            phoneError: phoneErrorMsg
        })
    }

    changeBirthHandle = e => {

        let birthErrorMsg = "";

        if(!e.target.value) {
            birthErrorMsg = "생년월일은 번호는 필수 입력 창입니다";
        } else {
            const birthDayRule = (/^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/).test(e.target.value);
            birthErrorMsg = birthDayRule ? "" : "생년월일을 올바르게 입력해주세요";
        }

        this.setState({
            userBirth: e.target.value,
            birthValid: !birthErrorMsg,
            birthError: birthErrorMsg
        })
    }

    changeNameHandle = e => {

        let nameErrorMsg = "";

        if(!e.target.value) {
            nameErrorMsg = "이름은 필수 입력 창입니다";
        } else {
            nameErrorMsg = "";
        }

        this.setState({
            userName: e.target.value,
            nameValid: !nameErrorMsg,
            nameError: nameErrorMsg
        })
    }

    clickHandle = e => {
        this.setState({
            infoBtn: !this.state.infoBtn
        })
    }

    clickSignup = e => {
        fetch("http://10.58.7.74:8000/signup", {
            method: "POST",
            body: JSON.stringify({
                email: this.state.userMail,
                password: this.state.userPwd,
                phone: this.state.userPhone,
                birth: this.state.userBirth,
                name: this.state.userName,
                gender: '남성',
                alarm_confirm: '1'
            })
        })
            .then(res => res.json())
            .then(res => {
                if(res.message === "SUCCESS") {
                    this.props.history.push("/SignIn");
                }
            })
    }

    render() {
        const { pwValid, birthValid, phoneValid, 
            nameValid, firstText, pwdError, phoneError, 
            birthError, nameError, infoBtn, mailValid, mailError } = this.state
        
        const anonError = !firstText && !mailValid;
        const firTypeError = !firstText && !pwValid;
        const secTypeError = !firstText && !phoneValid;
        const thrTypeError = !firstText && !birthValid;
        const fourTypeError = !firstText && !nameValid;
        
        // console.log("anonError :" , anonError)

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
                            <EmailIdContain msgBox={ anonError }>
                                <DefaultId onChange={ this.handleEmail } onBlur={ this.setFirText } placeholder=" 이메일" />
                                <CheckBoxOne viewOne={ mailValid } onChange={ this.handleEmail } />
                            </EmailIdContain>
                            { anonError && (<DangerMsg msgOne={ mailError } onChange={ this.handleEmail }>
                                { mailError }
                            </DangerMsg>) }
                            <PwBox>비밀번호</PwBox>
                            <PwContain msgBoxSec={ firTypeError }>
                                <DefaultPw onChange={ this.changePwHandle } onBlur={ this.setFirText } type="password" placeholder=" 비밀번호(특수문자 포함 8자 이상)" />
                                <CheckBoxTwo viewTwo={ pwValid } onChange={ this.changePwHandle } />
                            </PwContain>
                            { firTypeError && (<DangerMsgTwo msgTwo={ pwdError } onBlur={ this.setFirText } onChange={ this.changePwHandle }>
                                { pwdError }
                            </DangerMsgTwo>) }
                            <PhoneNumBox>휴대폰번호</PhoneNumBox>
                            <PhoneNumContain msgBoxThr={ secTypeError } onBlur={ this.setFirText } onChange={this.changePhoneHandle}>
                                <DefaultPhoneNum placeholder=" 휴대폰번호('-'제외)" />
                                <CheckBoxThree viewThr={ phoneValid } onChange={ this.changePhoneHandle } />
                            </PhoneNumContain>
                            { secTypeError && (<DangerMsgThree msgThr={ phoneError } onChange={ this.changePhoneHandle }>
                                    { phoneError }
                                </DangerMsgThree>) }
                            <BirthDayBox>생년월일</BirthDayBox>
                            <BirthDayContain msgBoxfour={ thrTypeError }>
                                <DefaultBirthDay onChange={ this.changeBirthHandle } onBlur={ this.setFirText } placeholder=" 생년월일(예:YYYY-MM-DD)" />
                                <CheckBoxFour viewFour={ birthValid } onChange={ this.changeBirthHandle } />
                            </BirthDayContain>
                            { thrTypeError && (<DangerMsgFour msgFour={ birthError } onChange={ this.changeBirthHandle }>
                                    { birthError }
                                </DangerMsgFour>) }
                            <NameBox>이름</NameBox>
                            <NameContain msgBoxFive={ fourTypeError } >
                                <DefaultName onChange={ this.changeNameHandle } onBlur={ this.setFirText } placeholder=" 이름"/>
                                <CheckBoxFive viewFive={ nameValid } onChange={ this.changeNameHandle } />
                            </NameContain>
                            { fourTypeError && (<DangerMsgFive msgFive={ nameError } onChange={ this.changeNameHandle }>
                                    { nameError }
                                </DangerMsgFive>) }
                            <GenderBox>성별</GenderBox>
                            <GenderContain>
                                <GenderLabel>
                                    <CheckGender type="radio" name="gender" value="male" checked />
                                    <GenderType>남자</GenderType>
                                </GenderLabel>
                                <GenderLabel>
                                    <CheckGender type="radio" name="gender" value="female" />
                                    <GenderType>여자</GenderType>
                                </GenderLabel>
                            </GenderContain>
                            <SuccessBtn onClick={this.clickSignup}>가입완료</SuccessBtn>
                            <Terms>
                                본인은 만 14세 이상이며, <TermsText>이용약관</TermsText>, <TermsText>개인정보 수집 및 이용</TermsText>, <br/>
                                <TermsText>개인정보 제공 내용</TermsText>, <TermsText>전자금융거래 약관</TermsText>을 확인하였으며, 동의합니다.
                            </Terms>
                            <MarketingBox>
                                <MarketingTitle>
                                    와이즐리 혜택 알림 받기
                                </MarketingTitle>
                                <Switch change={ infoBtn } onClick={this.clickHandle}>
                                    <SlideBall change={ infoBtn } onClick={this.clickHandle} />
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
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: bottom;
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
    border-bottom: ${props => props.msgBox ? "1px solid #ff1e1e" : "1px solid #ddd" };
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

const CheckBoxOne = styled.div `
    background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/checkBlue.svg");
    width: 36px;
    height: 36px;
    display: ${props => props.viewOne ? "" : "none"};
`;

const CheckBoxTwo = styled.div `
    background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/checkBlue.svg");
    width: 36px;
    height: 36px;
    display: ${props => props.viewTwo ? "" : "none"};
`;

const CheckBoxThree = styled.div `
    background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/checkBlue.svg");
    width: 36px;
    height: 36px;
    display: ${props => props.viewThr ? "" : "none"};
`;

const CheckBoxFour = styled.div `
    background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/checkBlue.svg");
    width: 36px;
    height: 36px;
    display: ${props => props.viewFour ? "" : "none"};
`;

const CheckBoxFive = styled.div `
    background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/checkBlue.svg");
    width: 36px;
    height: 36px;
    display: ${props => props.viewFive ? "" : "none"};
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
    border-bottom: ${props => props.msgBoxSec ? "1px solid #ff1e1e" : "1px solid #ddd" };
`;

const DangerMsg = styled.p `
    display: ${props => props.msgOne ? "" : "none"};
    margin-top: 8px;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -.04em;
    color: #ff1e1e;
`;

const DangerMsgTwo = styled.p `
    display: ${props => props.msgTwo ? "" : "none"};
    margin-top: 8px;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -.04em;
    color: #ff1e1e;
`;

const DangerMsgThree = styled.p `
    display: ${props => props.msgThr ? "" : "none"};
    margin-top: 8px;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -.04em;
    color: #ff1e1e;
`;

const DangerMsgFour = styled.p `
    display: ${props => props.msgFour ? "" : "none"};
    margin-top: 8px;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -.04em;
    color: #ff1e1e;
`;

const DangerMsgFive = styled.p `
    display: ${props => props.msgFive? "" : "none"};
    margin-top: 8px;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -.04em;
    color: #ff1e1e;
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
    border-bottom: ${props => props.msgBoxThr ? "1px solid #ff1e1e" : "1px solid #ddd" };
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
    border-bottom: ${props => props.msgBoxfour ? "1px solid #ff1e1e" : "1px solid #ddd" };
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
    border-bottom: ${props => props.msgBoxFive ? "1px solid #ff1e1e" : "1px solid #ddd" };
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
    background-color: #0055b8;
    width: 100%;
    height: 60px;
    border-radius: 4px;
    outline: 0;
    border: 0;
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
    width: 55px;
    height: 25px;
    background-color: ${props => props.change ? "#0055b8;" : "#ccc"};
    border-radius: 32px;
    cursor: pointer;
    transition: .4s;
`;

const SlideBall = styled.div `
    position: absolute;
    content: "";
    height: 21px;
    width: 21px;
    left: 4px;
    bottom: 2px;
    background-color: white;
    border-radius: 50%;
    transition: .4s;
    transform: ${props => props.change ? "translateX(26px)" : ""};
`;

const MarketingInfo = styled.div `
    margin-top: 20px;
    padding-bottom: 30px;
    font-weight: 300px;
    font-size: 12px;
    line-height: 140%;
    letter-spacing: -.04em;
    color: #979797;
`;

export default SignUp;