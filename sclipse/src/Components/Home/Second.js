import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  position: relative;
  width: 100%;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 1200px;
`;

const Content = styled.div`
  ${(props) => props.theme.columnCenter};
  width: 80%;
`;

const Title = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 24px;
    padding-top: 260px;
  }
  padding-top: 200px;
  margin-bottom: 30px;
  font-size: 50px;
  font-weight: 900;
  opacity: 0.8;
`;

const Text = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 15px;
  }
  :not(:first-child) {
    margin-top: 5px;
  }
  font-size: 18px;
  opacity: 0.8;
`;

const Service = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 12px;
  }
  margin-top: 30px;
  font-size: 14px;
  opacity: 0.5;
`;

const Second = () => (
  <Container>
    <Backdrop bgUrl={require('Components/assets/second.png')} />
    <Content>
      <Title>글로벌 크레이에터가 되어보세요!</Title>
      <Text>Youtube 영상 컨텐츠의 CC 자막을 다국어로 번역합니다.</Text>
      <Text>개인 크리에이터를 위한 맞춤형 자막 번역 서비스,</Text>
      <Text>스크립스와 함께 컨텐츠 경쟁력을 높이세요!</Text>
      <Service>
        서비스 언어: 한국어, 영어, 중국어, 일본어(추후 6개 언어 지원 예정)
      </Service>
    </Content>
  </Container>
);

export default Second;
