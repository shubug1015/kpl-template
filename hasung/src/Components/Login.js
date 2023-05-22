import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 70%;
  padding: 50px 0;
`;

const Title = styled.div`
  @media only screen and (max-width: 765px) {
    ${(props) => props.theme.flexCenter};
  }
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 50px;
`;

const InputContainer = styled.div`
  @media only screen and (max-width: 765px) {
    ${(props) => props.theme.columnCenter};
  }
  ${(props) => props.theme.columnStartCenter};
  padding: 20px 0;
`;

const InputName = styled.div`
  font-size: 13px;
  font-weight: 700;
  opacity: 0.8;
  padding: 7px 0;
`;

const Input = styled.input`
  border: 1px solid #d3d3d3;
  width: 300px;
  height: 40px;
  padding-left: 10px;
  font-size: 13px;
  outline: none;
`;

const BtnContainer = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 100%;
`;

const Btn = styled.div`
  ${(props) => props.theme.flexCenter};
  background-color: ${(props) => props.theme.mainColor};
  width: 300px;
  height: 70px;
  font-size: 20px;
  font-weight: 700;
  color: #fafafa;
  border-radius: 7px;
  cursor: pointer;
  margin-top: 50px;
`;

const Login = () => {
  return (
    <Container>
      <Title>LOGIN</Title>
      <InputContainer>
        <InputName>아이디</InputName>
        <Input placeholder={'아이디 혹은 이메일을 입력하세요.'} />
      </InputContainer>
      <InputContainer>
        <InputName>비밀번호</InputName>
        <Input placeholder={'비밀번호를 입력하세요.'} type='password' />
      </InputContainer>
      <BtnContainer>
        <Btn>로그인</Btn>
      </BtnContainer>
    </Container>
  );
};

export default Login;
