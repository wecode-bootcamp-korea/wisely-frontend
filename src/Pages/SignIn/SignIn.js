import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

createGlobalStyle `
    boby {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

class SignIn extends Component {
    constructor() {
        super();

        //초기값 설정
        this.state = {
            userEmail: "",
            isValid: false,
            error: "",
            isFirst: true,
        }
    }

    setIsFirst = () => {
        this.setState({
            isFirst: false,
        })
    }

    handleEmail = e => {
        //e.target.value는 계속 쓰이는 값이므로 변수에 선언
        const value = e.target.value;
        //에러 메세지는 조건에 맞지 않을 경우 setState 되어야 하기 때문에 빈 문자열
        let error = "";

        //에러 메세지가 발생하는 조건문
        if (!value) {
            //e.target.value에 대한 값이 들어 오지 않았을 경우 위와 같은 메세지를 return
            error = "필수 입력창입니다"
        } else {
            const flag = (/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i).test(value);
            //삼항 연산자로 위의 정규 표현식 조건에 부합하t는 경우 rue(빈 문자열 아무 에러 메세지도 나오지 않음)
            //조건에 부합하지 않는 경우 false(에러메시지)를 return
            error = flag ? "" : "이메일 양식을 확인 해 주세요"
        }

        this.setState({
            userEmail: value, //e.target.value가 state로 setState가 된다
            isValid: !error, 
            error: error,
        });
    }
    
    render() {
        const { isValid, error, isFirst } = this.state;
        const shouldError = !isFirst && !isValid;
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
                                    <EmailIdBox boxMsg={ shouldError }>
                                        <SendEmailId onChange={this.handleEmail} placeholder=" 이메일" onBlur={this.setIsFirst}/>
                                        <CheckContain view={ isValid } onChange={this.handleEmail} />
                                    </EmailIdBox>
                                    { shouldError && (<ImportEmail msg={ error } onChange={this.handleEmail}>
                                        {error}
                                    </ImportEmail>)}
                                </MailContain>
                                <NextBtn a={isValid}>
                                    다음
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
}

const SignInBg = styled.div `
    background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/signInBg.png");
    background-size: cover;
    background-position-x: -128px;
    height: 980px;
`; 

const SignInContain = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding-top: 64px;
`;

const SignInBox = styled.div `
    width: 500px;
    height: 680px;
    margin-top: 40px;
    margin-left: 19vw;
    border-radius: 10px;
    background-color: #fff;
`;

const LoginContent = styled.div `
    padding: 60px 50px 0;
`;

const LoginTitle = styled.div `
    margin-bottom: 15px;
`;

const Stro = styled.strong `
    font-size: 45px;
`;

const Spn = styled.span `
    font-size: 45px;
    font-weight: 200;
`;

const Pero = styled.p `
    margin-top: 10px;
    font-size: 45px;
    font-weight: 200;
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

const MailContain = styled.div `
    margin-top: 55px;
`;

const EmailIdBox = styled.div `
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    height: 48px;
    border-bottom: ${props => props.boxMsg ? "1px solid #ff1e1e" : "1px solid #ddd"};
`;

const SendEmailId = styled.input `
    font-weight: 300;
    border: 0;
    width: 80%;
    height: 100%;
    font-size: 18px;
    line-height: 130%;
    letter-spacing: -.06em;
    margin-left: 4px;
    &::placeholder {
        opacity: 0.6;
        font-size: 18px;
    }
`;

const NextBtn = styled.button `
    text-align: center;
    font-size: 20px;
    color: #fff;
    margin-top: 40px;
    outline: none;
    background-color: ${props => props.a ? "blue" : "#cbcbcb"};
    width: 100%;
    height: 60px;
    border-radius: 4px;
    cursor: pointer;
`;

const SignInOther = styled.div `
    text-align: center;
`;

const ForgotEmail = styled.div `
    margin-bottom: 43px;
`;

const ForgotEmailText = styled.span `
    font-size: 14px;
    font-weight: 300;
    letter-spacing: -.04em;
    color: #979797;
    border-bottom: 1px solid #979797;
    cursor: pointer;
`
const Another = styled.div `
    font-weight: 300;
    color: #3a3a3a;
    letter-spacing: -.025em;
    line-height: 100%;
    margin-bottom: 28px;
`;

const SignInKakao = styled.div `
    display: flex;
    justify-content: center;
`;

const KakaoBtn = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 0 0 12px rgba(0, 0, 0, .08);
    width: 46px;
    height: 46px;
    cursor: pointer;
`;

const KaKaoImg = styled.div `
    background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/kakaoLoginIcon.svg");
    width: 25px;
    height: 25px;
`;

const KakaoLoginTextBox = styled.div `
    margin-top: 9px;
    font-weight: 300;
    font-size: 12px;
    line-height: 100%;
    text-align: center;
    color: #3a3a3a;
`;

const KakaoText = styled.span `
    font-weight: 400;
`;

const CheckContain = styled.div `
    background-image: url("https://wiselyshave-cdn.s3.amazonaws.com/assets/images/checkBlue.svg");
    width: 36px;
    height: 36px;
    display: ${props => props.view ? "" : "none"};
`;

const ImportEmail = styled.p `
    display: ${props => props.msg ? "" : "none"};
    margin-top: 8px;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -.04em;
    color: #ff1e1e;
`;

export default SignIn;

