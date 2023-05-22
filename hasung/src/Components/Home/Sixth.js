import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100%;
  padding: 100px 0;
`;

const TitleContainer = styled.div`
  ${(props) => props.theme.columnCenter}
  margin-bottom: 70px;
`;

const Title = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 25px;
  }
  margin-bottom: 25px;
  font-size: 30px;
  font-weight: 700;
`;

const Content = styled.div`
  padding: 5px 0;
  opacity: 0.7;
`;

const BoxContainer = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 75%;
`;

const TopContainer = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
  }
  ${(props) => props.theme.flexBetweenCenter}
  width: 100%;
  margin-bottom: 30px;
`;

const TopBox = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
    height: 400px;
    margin-bottom: 20px;
    background-size: cover;
  }
  ${(props) => props.theme.columnStartCenter}
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #eff3f7;
  border-radius: 10px;
  width: 48.5%;
  height: 500px;
  padding-left: 50px;
`;

const TopBoxSubtitle = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  color: ${(props) => props.theme.mainColor};
  font-size: 14px;
  font-weight: 700;
`;

const TopBoxTitle = styled.div`
  @media only screen and (max-width: 1200px) {
    font-size: 23px;
  }
  :not(:last-child) {
    margin-bottom: 12px;
  }
  font-size: 26px;
  font-weight: 700;
  opacity: 0.7;
`;

const Btn = styled.div`
  @media only screen and (max-width: 900px) {
    margin-top: 50px;
  }
  ${(props) => props.theme.flexCenter}
  background-color: #ffffff;
  border-radius: 7px;
  width: 200px;
  height: 60px;
  margin-top: 180px;
  color: ${(props) => props.theme.mainColor};
  font-weight: 700;
  cursor: pointer;
  :hover {
    background-color: #e0e2f9;
    transition: background-color 0.2s ease-in-out;
  }
`;

const BottomContainer = styled.div`
  width: 100%;
`;

const BottomBox = styled.div`
  @media only screen and (max-width: 900px) {
    height: 400px;
  }
  ${(props) => props.theme.columnStartCenter}
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  background-color: #eff3f7;
  border-radius: 10px;
  width: 100%;
  height: 500px;
  padding-left: 50px;
`;

const BottomBoxSubtitle = styled.div`
  @media only screen and (max-width: 900px) {
    margin-top: 100px;
  }
  margin-top: 50px;
  margin-bottom: 30px;
  background-color: #fafafa;
  color: ${(props) => props.theme.mainColor};
  font-size: 14px;
  font-weight: 700;
  padding: 10px;
`;

const BottomBoxTitle = styled.div`
  :not(:last-child) {
    margin-bottom: 12px;
  }
  font-size: 26px;
  font-weight: 700;
  opacity: 0.7;
`;

const Sixth = () => (
  <Container>
    <TitleContainer>
      <Title>하성 기획설계, 무엇이 다른가요?</Title>
      <Content>기획설계는 건축 목표와 예산을 고려하여</Content>
      <Content>설계의 기본 방향을 설정하는단계입니다.</Content>
      <Content>건축사는 설계 수주를 목표로 건축 목표에 부합하는</Content>
      <Content>건물의 기능과 규모, 형태와 재료 등을 제안합니다.</Content>
    </TitleContainer>
    <BoxContainer>
      <TopContainer>
        <TopBox>
          <TopBoxSubtitle>합리적인 가격</TopBoxSubtitle>
          <TopBoxTitle>저렴한 비용으로</TopBoxTitle>
          <TopBoxTitle>다양한 건축사에게</TopBoxTitle>
          <TopBoxTitle>설계를 받아볼 수 있습니다.</TopBoxTitle>
          <Btn>기획설계 현장 보기</Btn>
        </TopBox>
        <TopBox bgUrl={require('Components/assets/sixth_1.png')}>
          <TopBoxSubtitle>공사비까지 비교 & 선택</TopBoxSubtitle>
          <TopBoxTitle>각 기획설계를 기반으로</TopBoxTitle>
          <TopBoxTitle>예측된 공사비까지</TopBoxTitle>
          <TopBoxTitle>간편하게 비교합니다.</TopBoxTitle>
        </TopBox>
      </TopContainer>
      <BottomContainer>
        <BottomBox bgUrl={require('Components/assets/sixth_2.png')}>
          <BottomBoxSubtitle>
            투시도, 입면도, 단면도, 층별 배치도까지
          </BottomBoxSubtitle>
          <BottomBoxTitle>수준 높은 도면으로</BottomBoxTitle>
          <BottomBoxTitle>설계 방향을 제안받습니다.</BottomBoxTitle>
        </BottomBox>
      </BottomContainer>
    </BoxContainer>
  </Container>
);

export default Sixth;
