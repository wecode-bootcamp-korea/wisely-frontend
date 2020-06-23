import React, { useState } from "react";
import styled from "styled-components";
import "../../Styles/Reset.scss";

export default function SignUp ({email, password, name, phone, birth}) {

    const [userEmail, setUserEmail] = useState("");
    const [warningEmail, setWarningEamil] = useState("");
    const [emailBorder, setEmailBorder] = useState(true);
    const [passEmail, setPassEmail] = useState(false);

    const [userPwd, setUserPwd] = useState("");
    const [warningPwd, setWarningPwd] = useState("");
    const [pwdBorder, setPwdBorder] = useState(true);
    const [passPwd, setPassPwd] = useState(false);

    const [userName, setUserName] = useState("");
    const [warningName, setWarningName] = useState("");
    const [nameBorder, setNameBorder] = useState(true);
    const [passName, setPassName] = useState(false);

    const [userPhone, setUserPhone] = useState("");
    const [warningPhone, setWarningPhone] = useState("");
    const [phoneBorder, setPhoneBorder] = useState(true);
    const [passPhone, setPassPhone] = useState(false);

    const [userBirth, setUserBirth] = useState("");
    const [warningBirth, setWarningBirth] = useState("");
    const [birthBorder, setBirthBorder] = useState(true);
    const [passBirth, setPassBirth] = useState(false);

    const [infoBtn, setInfoBtn] = useState(false);

    const emailNotValue = e => {
        email = e.target.value;

        if(!email) {
            setWarningEamil("필수 입력창입니다");
            setEmailBorder(false);
        }
    }

    const emailValidation = e => {
        email = e.target.value;
        setEmailBorder(false);
        setPassEmail(false);
        
        const regExp = (/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i).test(email);

        if(regExp) {
            setUserEmail(email);
            setWarningEamil("");
            setEmailBorder(true);
            setPassEmail(true);
        } else if(!regExp) {
            setUserEmail("");
            setWarningEamil("이메일 양식을 확인 해 주세요");
            setPassEmail(false);
            setEmailBorder(false);
        }
    }

    const pwdNotValue = e => {
        password = e.target.value;

        if(!password) {
            setWarningPwd("필수 입력창입니다");
            setPwdBorder(false);
        }
    }

    const pwdValidation = e => {
        password = e.target.value;
        setPwdBorder(false);
        setPassPwd(false);
        
        const regExp = (/^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/).test(password);
         
        if(regExp) {
            setUserPwd(password);
            setWarningPwd("");
            setPwdBorder(true);
            setPassPwd(true);
        } else if(!regExp) {
            setUserPwd("");
            setWarningPwd("비밀번호 양식을 확인 해 주세요");
            setPwdBorder(false);
            setPassPwd(false);
        }
    }

    const nameNotValue = e => {
        name = e.target.value;

        if(!name) {
            setUserName("");
            setWarningName("이름은 필수 입력창입니다");
            setNameBorder(false);
            setPassName(false);
        } else if(name) {
            setUserName(name);
            setPassName(true);
            setNameBorder(true);
        }
    }


    const phoneNotValue = e => {
        phone = e.target.value;

        if(!phone) {
            setWarningPhone("휴대폰번호는 필수 입력창입니다");
            setPhoneBorder(false);
        }
    }


    const phoneValidation = e => {
        phone = e.target.value;
        setPhoneBorder(false);
        setPassPhone(false);
        
        const regExp = (/^\d{3}-\d{3,4}-\d{4}$/).test(phone);
         
        if(regExp) {
            setUserPhone(phone);
            setWarningPhone("");
            setPhoneBorder(true);
            setPassPhone(true);
        } else if(!regExp) {
            setUserPhone("");
            setWarningPhone("휴대폰 번호를 올바르게 입력해주세요");
            setPhoneBorder(false);
            setPassPhone(false);
        }
    }

    const birthNotValue = e => {
        birth = e.target.value;

        if(!birth) {
            setWarningBirth("생년월일은 필수 입력창입니다");
            setBirthBorder(false);
        }
    }


    const birthValidation = e => {
        birth = e.target.value;
        setBirthBorder(false);
        setPassBirth(false);
        
        const regExp = (/^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/).test(birth);
         
        if(regExp) {
            setUserBirth(birth);
            setWarningBirth("");
            setBirthBorder(true);
            setPassBirth(true);
        } else if(!regExp) {
            setUserBirth("");
            setWarningBirth("생년월일을 올바르게 입력해주세요");
            setBirthBorder(false);
            setPassBirth(false);
        }
    }

    const clickSignup = e => {
        fetch("http://52.14.187.223:8000/signup", {
            method: "POST",
            body: JSON.stringify({
                email: userEmail,
                password: userPwd,
                phone: userPhone,
                birth: userBirth,
                name: userName,
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
    
    const clickFeed = e => {
        setInfoBtn(!infoBtn);
    }

    console.log(userEmail);
    
    return (
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
                            <EmailIdContain style={{ borderBottom: emailBorder ? "" : "1px solid #ff1e1e" }}>
                                <DefaultId 
                                    onChange={ emailValidation } 
                                    onBlur={ emailNotValue } 
                                    placeholder=" 이메일" 
                                />
                                <CheckBoxOne cleanMail={ passEmail } />
                            </EmailIdContain>
                            <DangerMsg mailErr={ emailBorder }>
                                { warningEmail }
                            </DangerMsg>
                            <PwBox>비밀번호</PwBox>
                            <PwContain style={{ borderBottom: pwdBorder ? "" : "1px solid #ff1e1e" }}>
                                <DefaultPw 
                                    onChange={ pwdValidation } 
                                    onBlur={ pwdNotValue } 
                                    type="password" 
                                    placeholder=" 비밀번호(특수문자 포함 8자 이상)" 
                                />
                                <CheckBoxTwo cleanPwd={ passPwd } />
                            </PwContain>
                            <DangerMsgTwo pwdErr={ pwdBorder } >
                                { warningPwd }
                            </DangerMsgTwo>
                            <PhoneNumBox>휴대폰번호</PhoneNumBox>
                            <PhoneNumContain style={{ borderBottom: phoneBorder ? "" : "1px solid #ff1e1e" }} >
                                <DefaultPhoneNum 
                                    onChange={ phoneValidation } 
                                    onBlur={ phoneNotValue } 
                                    placeholder=" 휴대폰번호('-' 포함)" 
                                />
                                <CheckBoxThree cleanPhone={ passPhone } />
                            </PhoneNumContain>
                            <DangerMsgThree phoneErr={ phoneBorder } >
                                { warningPhone }
                            </DangerMsgThree>
                            <BirthDayBox>생년월일</BirthDayBox>
                            <BirthDayContain style={{ borderBottom: birthBorder ? "" : "1px solid #ff1e1e" }}>
                                <DefaultBirthDay 
                                    onChange={ birthValidation } 
                                    onBlur={ birthNotValue } 
                                    placeholder=" 생년월일(예:YYYY-MM-DD)" 
                                />
                                <CheckBoxFour cleanBirth={ passBirth } />
                            </BirthDayContain>
                            <DangerMsgFour birthErr={ birthBorder } >
                                { warningBirth }
                            </DangerMsgFour>
                            <NameBox>이름</NameBox>
                            <NameContain style={{ borderBottom: nameBorder ? "" : "1px solid #ff1e1e" }} >
                                <DefaultName onBlur={ nameNotValue } placeholder=" 이름"/>
                                <CheckBoxFive cleanName={ passName } />
                            </NameContain>
                            <DangerMsgFive nameErr={ nameBorder } >
                                { warningName }
                            </DangerMsgFive>
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
                            <SuccessBtn 
                                signUpReady={ (passEmail&&passPwd) && (passPhone&&passBirth) && passName } 
                                onClick={ clickSignup }>
                                가입완료
                            </SuccessBtn>
                            <Terms>
                                본인은 만 14세 이상이며, <TermsText>이용약관</TermsText>, <TermsText>개인정보 수집 및 이용</TermsText>, <br/>
                                <TermsText>개인정보 제공 내용</TermsText>, <TermsText>전자금융거래 약관</TermsText>을 확인하였으며, 동의합니다.
                            </Terms>
                            <MarketingBox>
                                <MarketingTitle>
                                    와이즐리 혜택 알림 받기
                                </MarketingTitle>
                                <Switch change={ infoBtn } onClick={ clickFeed }>
                                    <SlideBall change={ infoBtn } onClick={ clickFeed } />
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
    border-bottom: 1px solid #ddd;
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
    display: ${props => props.cleanMail ? "" : "none"};
`;

const CheckBoxTwo = styled.div `
    background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/checkBlue.svg");
    width: 36px;
    height: 36px;
    display: ${props => props.cleanPwd ? "" : "none"};
`;

const CheckBoxThree = styled.div `
    background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/checkBlue.svg");
    width: 36px;
    height: 36px;
    display: ${props => props.cleanPhone ? "" : "none"};
`;

const CheckBoxFour = styled.div `
    background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/checkBlue.svg");
    width: 36px;
    height: 36px;
    display: ${props => props.cleanBirth ? "" : "none"};
`;

const CheckBoxFive = styled.div `
    background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/checkBlue.svg");
    width: 36px;
    height: 36px;
    display: ${props => props.cleanName ? "" : "none"};
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

const DangerMsg = styled.p `
    display: ${props => props.mailErr ? "none" : ""};
    margin-top: 8px;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -.04em;
    color: #ff1e1e;
`;

const DangerMsgTwo = styled.p `
    display: ${props => props.pwdErr ? "none" : ""};
    margin-top: 8px;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -.04em;
    color: #ff1e1e;
`;

const DangerMsgThree = styled.p `
    display: ${props => props.phoneErr ? "none" : ""};
    margin-top: 8px;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -.04em;
    color: #ff1e1e;
`;

const DangerMsgFour = styled.p `
    display: ${props => props.birthErr ? "none" : ""};
    margin-top: 8px;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -.04em;
    color: #ff1e1e;
`;

const DangerMsgFive = styled.p `
    display: ${props => props.nameErr ? "none" : ""};
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
    background-color: ${props => props.signUpReady ? "#0055b8" : "#ddd"};
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