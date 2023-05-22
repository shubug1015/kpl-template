import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import KakaoLogin from 'Components/SnsLogin/KakaoLogin';
import NaverLogin from 'Components/SnsLogin/NaverLogin';
import Meta from 'Components/Meta';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
    margin-top: 15vh;
  }
  ${(props) => props.theme.flexCenter}
  width: 100vw;
  height: 80vh;
`;

const LoginBox = styled.div`
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

const SubmitBtn = styled.input`
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

const SnsLogin = styled.div`
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
  height: 50%;
`;

const SignUpContent = styled.div`
  width: 80%;
  margin-top: 20px;
`;

const SignUpText = styled.div`
  width: 100%;
  font-size: 11px;
  :not(:first-child) {
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

const LoginPresenter = ({
  id,
  pw,
  toggleSaveLocal,
  handleId,
  handlePw,
  handleSubmit,
}) => {
  const metaData = {
    title: 'Hipster | LOGIN',
    description: 'Hipster 로그인 페이지입니다.',
  };

  return (
    <Container>
      <Meta data={metaData} />
      <LoginBox>
        <Form onSubmit={handleSubmit}>
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
            <SaveLoggedCheck type='checkbox' onClick={toggleSaveLocal} />
            로그인상태 유지하기
          </SaveLogged>
          <SubmitBtn type='submit' value='로그인' />
        </Form>
        <SnsLogin>
          <KakaoLogin />
          <NaverLogin />
        </SnsLogin>
      </LoginBox>
      <SignUp>
        <Title>REGISTER</Title>
        <SignUpContent>
          <SignUpText>회원가입시 다양한 혜택들과 함께</SignUpText>
          <SignUpText>더욱 유용하게 사이트를 이용하실 수 있습니다.</SignUpText>
        </SignUpContent>
        <SignUpBtn to='/signup'>회원가입 {'>'}</SignUpBtn>
      </SignUp>
    </Container>
  );
};

export default LoginPresenter;
