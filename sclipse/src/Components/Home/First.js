import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import AOS from 'aos';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
    justify-content: center;
  }
  ${(props) => props.theme.columnCenter}
  width: 100%;
  height: calc(100vh - 80px);
  padding: 50px 0;
`;

const Content = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100%;
`;

const TitleContainer = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
  }
  ${(props) => props.theme.columnStartCenter}
  width: 500px;
`;

const Title = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 34px;
  }
  :not(:first-child) {
    margin-top: 20px;
  }
  font-size: 40px;
  font-weight: 900;
  opacity: 0.8;
`;

const Btn = styled.div`
  ${(props) => props.theme.flexCenter}
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 4px;
  width: 200px;
  height: 50px;
  margin-top: 50px;
  color: #fafafa;
  font-weight: 700;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Image = styled.div`
  @media only screen and (max-width: 900px) {
    width: 80%;
    height: 80vw;
    margin-top: 30px;
  }
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  width: 35%;
  height: 35vw;
`;

const Scroll = styled.div`
  font-size: 12px;
  opacity: 0.8;
  padding-top: 70px;
`;

const bounce = keyframes`
  0% {
    transform: translate(0, -15px);
  }
  50% {
    transform: translate(0, -10px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const Icon = styled.div`
  margin-top: 30px;
  animation: ${bounce} 1.5s infinite;
`;

const First = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <Content>
        <TitleContainer data-aos='fade-up' data-aos-duration='1500'>
          <Title>스크립스 자막 번역과 함께</Title>
          <Title>글로벌 크리에이터로</Title>
          <Title>거듭나세요!</Title>
          <Btn>자막번역 요청하기</Btn>
        </TitleContainer>
        <Image
          data-aos='fade-left'
          data-aos-duration='1500'
          bgUrl={require('Components/assets/first.png')}
        />
      </Content>
      <Scroll>scroll down</Scroll>
      <Icon>
        <IoIosArrowDown />
      </Icon>
    </Container>
  );
};

export default First;
