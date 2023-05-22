import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
  }
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 120px 0px;
`;

const ImageContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 90%;
    height: 200px;
    margin-bottom: 50px;
  }
  ${(props) => props.theme.flexCenter};
  width: 50%;
  height: 400px;
`;

const Image = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center center;
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
    width: 100%;
    padding-left: 0;
  }
  width: 40%;
  padding-top: 20px;
`;

const BoldText = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 25px;
  }
  font-size: 36px;
  margin-bottom: 10px;
  :nth-child(2) {
    margin-bottom: 30px;
  }
`;

const LightText = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 14px;
    line-height: 20px;
  }
  margin-bottom: 10px;
  :nth-child(5) {
    margin-bottom: 70px;
  }
  opacity: 0.7;
`;

const Btn = styled(Link)`
  text-align: center;
  /* width: 120px; */
  background-color: ${(props) => props.theme.mainColor};
  padding: 20px 60px;
  font-size: 14px;
  color: #fafafa;
  border-radius: 5px;
  letter-spacing: 1px;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Section5 = () => {
  return (
    <Container>
      <ImageContainer>
        <Image bgUrl={require('Components/assets/section5.png')} />
      </ImageContainer>
      <TextContainer>
        <BoldText>구독으로 만나는</BoldText>
        <BoldText>수제 디톡스 주스</BoldText>
        <LightText>매일 아침 당신의 하루를 책임질</LightText>
        <LightText>수제 디톡스 주스를 만나고</LightText>
        <LightText>바뀐 하루를 몸으로 느껴보세요!</LightText>
        <Btn to='/subscribe'>시작하기</Btn>
      </TextContainer>
    </Container>
  );
};

export default Section5;
