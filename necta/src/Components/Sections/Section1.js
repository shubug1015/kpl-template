import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: relative;
  width: 100vw;
`;

const Backdrop = styled.div`
  @media only screen and (max-width: 765px) {
    display: none;
  }
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: calc(100vh - 80px);
`;

const Backdrop2 = styled.div`
  @media only screen and (min-width: 765px) {
    display: none;
  }
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: calc(100vh - 140px);
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  ${(props) => props.theme.columnCenter};
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Text1 = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 26px;
  }
  font-size: 36px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const Text2 = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 26px;
  }
  font-size: 36px;
  margin-bottom: 35px;
`;

const Text3 = styled.div`
  font-weight: 300;
  margin-bottom: 50px;
`;

const Btn = styled(Link)`
  ${(props) => props.theme.flexCenter}
  background-color: #0069d9;
  width: 180px;
  height: 60px;
  color: #fafafa;
  border-radius: 5px;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Section1 = () => {
  return (
    <Container>
      <Backdrop bgUrl={require('Components/assets/section1.png')} />
      <Backdrop2 bgUrl={require('Components/assets/section1_2.png')} />
      <TextContainer>
        <Text1>프리미엄 퀄리티</Text1>
        <Text2>수제 디톡스 주스 구독 브랜드</Text2>
        <Text3>디톡스 주스 12일 분량을 12,800원에!</Text3>
        <Btn to='/subscribe'>자세히보기</Btn>
      </TextContainer>
    </Container>
  );
};

export default Section1;
