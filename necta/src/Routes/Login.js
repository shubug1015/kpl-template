import React, { useState } from 'react';
import styled from 'styled-components';
import { RiKakaoTalkFill, RiMailLine } from 'react-icons/ri';
import { Helmet } from 'react-helmet-async';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
  }
  ${(props) => props.theme.flexCenter};
  width: 100%;
  height: calc(100vh - 70px);
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
    height: auto;
    padding-top: 30px;
  }
  ${(props) => props.theme.columnCenter};
  width: 40%;
  height: 100%;
  padding-top: 100px;
`;

const TextBox = styled.div`
  ${(props) => props.theme.columnStartCenter};
  margin-bottom: 80px;
`;

const Text = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 30px;
  }
  font-size: 36px;
  line-height: 65px;
`;

const KakaoBtn = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 300px;
  height: 60px;
  background-color: #ffc107;
  border-radius: 7px;
  margin-bottom: 20px;
  cursor: pointer;
  :hover {
    background-color: black;
    color: #ffc107;
    transition: all 0.2s ease-in-out;
  }
`;

const EmailBtn = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 300px;
  height: 60px;
  border: 2px solid #5a9ee6;
  border-radius: 7px;
  color: #007bff;
  cursor: pointer;
  :hover {
    background-color: #007bff;
    color: #fafafa;
    transition: all 0.2s ease-in-out;
  }
`;

const InputContainer = styled.div`
  display: ${(props) => (props.show ? '' : 'none')};
  width: 300px;
  padding-top: 50px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid #007bff;
  padding-left: 5px;
  padding-bottom: 5px;
  :focus {
    outline: none;
  }
  font-size: 18px;
`;

const InputBtn = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 300px;
  height: 50px;
  border: 2px solid #5a9ee6;
  border-radius: 7px;
  background-color: #007bff;
  color: #fafafa;
  cursor: pointer;
  :hover {
    background-color: #0059ba;
    transition: all 0.2s ease-in-out;
  }
  margin-top: 30px;
`;

const Image = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
    height: 400px;
  }
  width: 60%;
  height: 100%;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const Login = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <Container>
      <Helmet>
        <title>NECTA | 로그인</title>
      </Helmet>
      <TextContainer>
        <TextBox>
          <Text>로그인 및 회원가입을</Text>
          <Text>시작합니다.</Text>
        </TextBox>
        <KakaoBtn>
          <RiKakaoTalkFill size={22} style={{ marginRight: '5px' }} />
          카카오로
          <p style={{ fontWeight: '700', marginLeft: '4px' }}>시작하기</p>
        </KakaoBtn>
        <EmailBtn onClick={toggleOpen}>
          <RiMailLine size={22} style={{ marginRight: '5px' }} />
          이메일로
          <p style={{ fontWeight: '700', marginLeft: '4px' }}>시작하기</p>
        </EmailBtn>
        <InputContainer show={open}>
          <Input />
          <InputBtn>다음</InputBtn>
        </InputContainer>
      </TextContainer>
      <Image bgUrl={require('Components/assets/login.png')} />
    </Container>
  );
};

export default Login;
