
import React, { useState } from "react";
import { history } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import "../../Styles/Reset.scss";

createGlobalStyle`
    boby {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export default function SignIn({email, password}) {

    const [userEmail, setUserEamil] = useState("");
    const [warningEmail, setWarningEamil] = useState("");
    const [emailBorder, setEmailBorder] = useState(true);
    const [passEmail, setPassEmail] = useState(false);
    
    const [userPwd, setUserPwd] = useState("");
    const [warningPwd, setWarningPwd] = useState("");
    const [pwdBorder, setPwdBorder] = useState(true);
    const [passPwd, setPassPwd] = useState(false);

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
            setUserEamil(email);
            setWarningEamil("");
            setEmailBorder(true);
            setPassEmail(true);
        } else if(!regExp) {
            setUserEamil("");
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


    const clickLogin = e => {
        fetch("http://52.14.187.223:8000/login", {
            method: "POST",
            body: JSON.stringify({
                email: userEmail,
                password: userPwd
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.access_token) {
                    localStorage.setItem("access_token", res.access_token);
                    history.push("/");
                }
            })
    }

    const enterLogin = e => {
        fetch("http://52.14.187.223:8000/login", {
            method: "POST",
            body: JSON.stringify({
                email: userEmail,
                password: userPwd
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.access_token) {
                    localStorage.setItem("access_token", res.access_token);
                    history.push("/");
                }
            })
    }


    return (
        <SignInBg>
            <SignInContain>
                <LogoContain>
                    <Logo />
                </LogoContain>
                <SignInBox>
                    <LoginContent>
                        <LoginTitle>
                            <p>
                                <Stro>로그인 및 회원가입</Stro><Spn>을</Spn>
                                <Pero>시작합니다.</Pero>
                            </p>
                            <MailContain>
                                <EmailIdBox style={{ borderBottom: emailBorder ? "" : "1px solid #ff1e1e" }}>
                                    <SendEmailId 
                                        placeholder=" 이메일" 
                                        onChange={ emailValidation } 
                                        onBlur={ emailNotValue } 
                                    />
                                    <SuccessEamil cleanMail={ passEmail } />
                                </EmailIdBox>
                                <ImportEmail mailErr={ emailBorder }>
                                  { warningEmail }
                                </ImportEmail>
                                <PwdBox style={{ borderBottom: pwdBorder ? "" : "1px solid #ff1e1e" }}>
                                    <SendPwd 
                                        type="password" 
                                        placeholder=" 비밀번호" 
                                        onChange={ pwdValidation } 
                                        onBlur={ pwdNotValue }
                                        onKeyUp={ (e) => window.event.keyCode === 13 ? enterLogin(e) : "" } 
                                    />
                                    <SuccessPwd cleanPwd={ passPwd } />
                                </PwdBox>
                                <ImportPwd pwdErr={ pwdBorder }>
                                    { warningPwd }
                                </ImportPwd>
                            </MailContain>
                            <NextBtn
                            loginReady={ passEmail && passPwd } 
                            onClick={ clickLogin }>
                                로그인
                            </NextBtn>
                        </LoginTitle>
                    </LoginContent>
                    <SignInOther>
                        <ForgotEmail>
                            <ForgotEmailText>
                                이메일 주소가 기억나지 않아요
                                </ForgotEmailText>
                        </ForgotEmail>
                        <Another>
                            또는
                            </Another>
                        <SignInKakao>
                            <KakaoBtn>
                                <KaKaoImg />
                            </KakaoBtn>
                        </SignInKakao>
                        <KakaoLoginTextBox>
                            카카오톡
                                <KakaoText> 간편시작</KakaoText>
                        </KakaoLoginTextBox>
                    </SignInOther>
                </SignInBox>
            </SignInContain>
        </SignInBg>
    )
}

const SignInBg = styled.div`
    background-image: url("https://test.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: bottom;
    height: 980px;
`;

const SignInContain = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding-top: 64px;
`;

const SignInBox = styled.div`
    width: 500px;
    height: 680px;
    margin-top: 40px;
    margin-left: 19vw;
    border-radius: 10px;
    background-color: #fff;
`;

const LoginContent = styled.div`
    padding: 60px 50px 0;
`;

const LoginTitle = styled.div`
    margin-bottom: 15px;
`;

const Stro = styled.strong`
    font-size: 45px;
`;

const Spn = styled.span`
    font-size: 45px;
    font-weight: 200;
`;

const Pero = styled.p`
    margin-top: 10px;
    font-size: 45px;
    font-weight: 200;
`;

const LogoContain = styled.div`
    margin-left: calc(19vw + 192px);
`;

const Logo = styled.div`
    background-image: url("https://test.svg");
    width: 115px;
    height: 18px;
    cursor: pointer;
`;

const MailContain = styled.div`
    margin-top: 55px;
`;

const EmailIdBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    height: 48px;
    border-bottom: 1px solid #ddd;
`;

const SendEmailId = styled.input`
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

const PwdBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    height: 48px;
    border-bottom: 1px solid #ddd;
`;

const SendPwd = styled.input`
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

const NextBtn = styled.button`
    text-align: center;
    font-size: 20px;
    color: #fff;
    margin-top: 40px;
    outline: none;
    background-color: ${props => props.loginReady ? "#0055b8" : "#cbcbcb"};
    width: 100%;
    height: 60px;
    border-radius: 4px;
    outline: 0;
    border: 0;
    cursor: pointer;
`;

const SignInOther = styled.div`
    text-align: center;
`;

const ForgotEmail = styled.div`
    margin-bottom: 43px;
`;

const ForgotEmailText = styled.span`
    font-size: 14px;
    font-weight: 300;
    letter-spacing: -.04em;
    color: #979797;
    border-bottom: 1px solid #979797;
    cursor: pointer;
`
const Another = styled.div`
    font-weight: 300;
    color: #3a3a3a;
    letter-spacing: -.025em;
    line-height: 100%;
    margin-bottom: 28px;
`;

const SignInKakao = styled.div`
    display: flex;
    justify-content: center;
`;

const KakaoBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 0 0 12px rgba(0, 0, 0, .08);
    width: 46px;
    height: 46px;
    cursor: pointer;
`;

const KaKaoImg = styled.div`
    background-image: url("https://test.svg");
    width: 25px;
    height: 25px;
`;

const KakaoLoginTextBox = styled.div`
    margin-top: 9px;
    font-weight: 300;
    font-size: 12px;
    line-height: 100%;
    text-align: center;
    color: #3a3a3a;
`;

const KakaoText = styled.span`
    font-weight: 400;
`;

const SuccessEamil = styled.div`
    background-image: url("https://test.svg");
    width: 36px;
    height: 36px;
    display: ${props => props.cleanMail ? "" : "none"};
`;

const SuccessPwd = styled.div`
    background-image: url("https://test.svg");
    width: 36px;
    height: 36px;
    display: ${props => props.cleanPwd ? "" : "none"};
`;

const ImportEmail = styled.p`
    display: ${props => props.mailErr ? "none" : ""};
    margin-top: 8px;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -.04em;
    color: #ff1e1e;
`;

const ImportPwd = styled.p`
    display: ${props => props.pwdErr ? "none" : ""};
    margin-top: 8px;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -.04em;
    color: #ff1e1e;
`;


