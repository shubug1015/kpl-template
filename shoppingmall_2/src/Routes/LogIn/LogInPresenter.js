import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import KakaoLogIn from 'Components/KakaoLogIn';
import NaverLogIn from 'Components/NaverLogIn';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const SectionContainer = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
    padding-top: 20%;
  }
  ${(props) => props.theme.flexCenter}
  width: 100%;
  padding-top: 10%;
`;

const LogInBox = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 300px;
  height: 50%;
`;

const Form = styled.form`
  ${(props) => props.theme.columnCenter}
  width: 100%;
  font-size: 11px;
`;

const Title = styled.span`
  width: 80%;
  font-size: 12px;
  font-weight: 700;
`;

const Input = styled.input`
  border: ${(props) => props.theme.blackBorder};
  padding-left: 10px;
  width: 80%;
  height: 25px;
  margin-top: 15px;
  outline: none;
  font-size: 11px;
`;

const SaveLogged = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

const SaveLoggedCheck = styled.input`
  margin-right: 10px;
`;

const SubmitBtn = styled.div`
  text-align: center;
  line-height: 30px;
  border: none;
  background-color: black;
  width: 80%;
  height: 30px;
  margin-top: 15px;
  outline: none;
  color: white;
  font-size: 11px;
  cursor: pointer;
`;

const SnsLogIn = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100%;
  margin-top: 20px;
`;

const SignUp = styled.div`
  /* @media only screen and (max-width: 600px) {
    width: 80%;
    height: 35%;
  } */
  ${(props) => props.theme.columnCenter}
  width: 300px;
  margin-top: 30px;
`;

const SignUpContent = styled.div`
  width: 80%;
  margin-top: 20px;
`;

const SignUpText = styled.div`
  width: 100%;
  font-size: 11px;
  :last-child {
    margin-top: 5px;
  }
`;

const SignUpBtn = styled(Link)`
  text-align: center;
  line-height: 30px;
  background-color: black;
  width: 80%;
  height: 30px;
  margin-top: 20px;
  color: white;
  font-size: 11px;
`;

const LogInPresenter = ({ id, pw, handleId, handlePw }) => {
  return (
    <Container>
      <Helmet>
        <title>LOGIN</title>
      </Helmet>
      <SectionContainer>
        <LogInBox>
          <Form>
            <Title>LOG IN</Title>
            <Input
              type='text'
              placeholder='아이디를 입력하세요.'
              value={id}
              onChange={handleId}
            />
            <Input
              type='password'
              placeholder='비밀번호를 입력하세요.'
              value={pw}
              onChange={handlePw}
            />
            <SaveLogged>
              <SaveLoggedCheck type='checkbox' />
              로그인상태 유지하기
            </SaveLogged>
            <SubmitBtn>로그인</SubmitBtn>
          </Form>
          <SnsLogIn>
            <KakaoLogIn />
            <NaverLogIn />
          </SnsLogIn>
        </LogInBox>
        <SignUp>
          <Title>REGISTER</Title>
          <SignUpContent>
            <SignUpText>회원가입시 다양한 혜택들과 함께</SignUpText>
            <SignUpText>
              더욱 유용하게 사이트를 이용하실 수 있습니다.
            </SignUpText>
          </SignUpContent>
          <SignUpBtn to='/signup'>회원가입 {'>'}</SignUpBtn>
        </SignUp>
      </SectionContainer>
    </Container>
  );
};

export default LogInPresenter;
