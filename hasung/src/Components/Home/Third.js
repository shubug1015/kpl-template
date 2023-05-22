import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
    flex-direction: column-reverse;
    padding: 50px 0;
    width: 85%;
  }
  ${(props) => props.theme.flexStartCenter}
  width: 75%;
`;

const LeftContainer = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
    width: 100%;
  }
  width: 60%;
`;

const RightContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 70%;
    height: 300px;
    margin-bottom: 50px;
  }
  background-image: url(${(props) => props.imgUrl});
  background-position: center center;
  background-size: cover;
  width: 40%;
  height: 400px;
`;

const TitleContainer = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 27px;
  }
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: 700;
  line-height: 45px;
`;

const Title = styled.div``;

const ContentContainer = styled.div`
  ${(props) => props.theme.columnStartCenter};
  @media only screen and (max-width: 765px) {
    font-size: 14px;
  }
  :not(:last-child) {
    margin-bottom: 20px;
  }
  width: 100%;
  line-height: 25px;
  opacity: 0.5;
  word-break: keep-all;
`;

const Content = styled.div`
  width: 100%;
`;

const Third = () => (
  <Container>
    <LeftContainer>
      <TitleContainer>
        <Title>하성과 건축하면</Title>
        <Title>안전하고 공정합니다.</Title>
      </TitleContainer>
      <ContentContainer>
        <Content>
          하성만의 엄격한 계약 기준으로 공사비 상승과 건설 분쟁에서
          건축주를 보호합니다
        </Content>
        {/* <Content>건설 분쟁에서 건축주를 보호합니다</Content> */}
      </ContentContainer>
      <ContentContainer>
        <Content>
          하성과 설계부터 함께하면 책임공사제도로 건설사 부도처럼 예상치
          못한 건설 분쟁에도 준공을 보장합니다.
        </Content>
        {/* <Content>부도처럼 예상치 못한 건설 분쟁에도 준공을 보장합니다.</Content> */}
      </ContentContainer>
      <ContentContainer>
        <Content>꼼꼼한 설계와 현장 관리로 건축 리스크를 줄입니다.</Content>
      </ContentContainer>
    </LeftContainer>
    <RightContainer imgUrl={require('Components/assets/third.png')} />
  </Container>
);

export default Third;
