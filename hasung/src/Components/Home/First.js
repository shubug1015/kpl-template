import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
    width: 95%;
  }
  ${(props) => props.theme.flexBetweenCenter}
  width: 75%;
  padding: 100px 0;
`;

const LeftContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 70%;
    margin-bottom: 30px;
    background-size: contain;
    background-repeat: no-repeat;
  }
  @media only screen and (max-width: 765px) {
    width: 90%;
    margin-bottom: 30px;
  }
  background-image: url(${(props) => props.imgUrl});
  background-position: center center;
  background-size: cover;
  width: 40%;
  height: 400px;
`;

const RightContainer = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
    width: 80%;
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 765px) {
    width: 90%;
    margin-bottom: 30px;
  }
  width: 45%;
`;

const TitleContainer = styled.div`
  @media only screen and (max-width: 1300px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
  }
  @media only screen and (max-width: 765px) {
    font-size: 27px;
  }
  margin-bottom: 25px;
  font-size: 35px;
  font-weight: 700;
  line-height: 55px;
  opacity: 0.7;
`;

const Title = styled.div``;

const ContentContainer = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
  }
  @media only screen and (max-width: 765px) {
    font-size: 13px;
  }
  line-height: 25px;
  opacity: 0.5;
`;

const Content = styled.div``;

const Btn = styled(Link)`
  ${(props) => props.theme.flexCenter}
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 5px;
  width: 250px;
  height: 65px;
  margin-top: 35px;
  color: #ffffff;
  font-weight: 700;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const First = () => (
  <Container>
    <LeftContainer imgUrl={require('Components/assets/first.png')} />
    <RightContainer>
      <TitleContainer>
        <Title>하성과 함께</Title>
        <Title>쉽고 안전하게 건축하세요.</Title>
      </TitleContainer>
      <ContentContainer>
        <Content>하성은 분석부터 설계, 공사, 준공까지</Content>
        <Content>건축 사업을 도와주는 온라인 건축 관리 서비스입니다.</Content>
      </ContentContainer>
      <Btn to='/build'>하성과 설계 시작하기</Btn>
    </RightContainer>
  </Container>
);

export default First;
