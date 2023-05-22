import React, { useState } from 'react';
import styled from 'styled-components';
import Login from 'Components/Login';
import Signup from 'Components/Signup';
import { Helmet } from 'react-helmet-async';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
  }
  ${(props) => props.theme.flexCenter};
  width: 100vw;
  max-width: 100%;
  height: calc(100vh - 80px);
  position: relative;
`;

const ImageContainer = styled.div`
  @media only screen and (max-width: 765px) {
    display: none;
  }
  ${(props) => props.theme.columnCenter};
  width: 50%;
  height: 100%;
  color: #fafafa;
  background-color: #7786a5;
  position: fixed;
  top: 0;
  left: 0;
`;

const ImageTextContainer = styled.div`
  ${(props) => props.theme.columnCenter};
  justify-content: flex-end;
  width: 100%;
  height: 100vh;
  background-color: #7786a5;
`;

const Text1 = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 28px;
  }
  font-size: 38px;
  font-weight: 700;
  padding: 50px 0;
`;

const Text2 = styled.div`
  font-size: 18px;
  padding: 10px 0;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const ContentContainer = styled.div`
  @media only screen and (max-width: 765px) {
    position: static;
    width: 100%;
  }
  ${(props) => props.theme.columnCenter};
  width: 50%;
  padding: 100px 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const BtnContainer = styled.div`
  @media only screen and (max-width: 765px) {
    ${(props) => props.theme.flexCenter};
  }
  ${(props) => props.theme.flexStartCenter};
  width: 70%;
`;

const Btn = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-right: 20px;
  padding-bottom: 10px;
  border-bottom: ${(props) => (props.focus ? '1px solid black' : 'none')};
  opacity: ${(props) => (props.focus ? '1' : '0.4')};
  cursor: pointer;
`;

const User = () => {
  const [type, setType] = useState(0);

  return (
    <Container>
      <Helmet>
        <title>하성건설 | 로그인/회원가입</title>
      </Helmet>
      <ImageContainer>
        <ImageTextContainer>
          <Text1>건축의 기준을 제시하다.</Text1>
          <Text2>어렵고 복잡한 건축,</Text2>
          <Text2>하성과 함께하면 달라집니다.</Text2>
        </ImageTextContainer>
        <Image bgUrl={require('Components/assets/test.png')} />
      </ImageContainer>
      <ContentContainer>
        <BtnContainer>
          <Btn onClick={() => setType(0)} focus={type === 0}>
            로그인
          </Btn>
          <Btn onClick={() => setType(1)} focus={type === 1}>
            회원가입
          </Btn>
        </BtnContainer>
        {type === 0 ? <Login /> : <Signup />}
      </ContentContainer>
    </Container>
  );
};

export default User;
