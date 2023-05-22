import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  color: ${(props) => props.theme.whiteColor};
`;

const Backdrop1 = styled.div`
  position: relative;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 948px;
  filter: brightness(30%);
`;

const Backdrop2 = styled.div`
  position: relative;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 630px;
  margin-top: -240px;
  filter: grayscale(100%) brightness(20%);
`;

const Content1 = styled.div`
  @media only screen and (max-width: 765px) {
    top: 40%;
    left: 5%;
  }
  position: absolute;
  top: 30%;
  left: 8%;
`;

const Title1 = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 20px;
  }
  margin-bottom: 78px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 3px;
`;

const Brand1 = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 60px;
  }
  width: 50vw;
  margin-bottom: 80px;
  font-family: 'Lato', sans-serif;
  font-size: 90px;
  font-weight: 700;
`;

const Text1 = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 14px;
  }
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.03em;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  word-break: keep-all;
`;

const Btn = styled.div`
  @media only screen and (max-width: 765px) {
    width: 180px;
    height: 55px;
    font-size: 16px;
  }
  ${(props) => props.theme.flexCenter}
  margin-top: 80px;
  width: 234px;
  height: 63px;
  background: rgba(255, 255, 255, 0.2);
  font-size: 20px;
  border-radius: 50px;
  border: 1px solid #fff;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Content2 = styled.div`
  @media only screen and (max-width: 765px) {
    width: 100%;
    top: 940px;
    left: 0;
    padding: 0 30px;
  }
  position: absolute;
  top: 1040px;
  left: 8%;
`;

const Title2 = styled.div`
  margin-bottom: 25px;
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
`;

const Brand2 = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 35px;
    line-height: 50px;
  }
  margin-bottom: 40px;
  font-size: 55px;
  font-weight: 900;
`;

const Text2 = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 15px;
  }
  font-size: 18px;
  line-height: 29px;
  font-weight: 500;
`;

const First = ({ ref1 }) => (
  <Container id='first' ref={ref1}>
    <Backdrop1 bgUrl={require('Components/assets/first_1.png')} />
    <Backdrop2 bgUrl={require('Components/assets/first_2.png')} />
    <Content1>
      <Title1>Clear, Connect, Create</Title1>
      <Brand1>OFFICIA</Brand1>
      <Text1>최고를 향해 달려가는 당신에게 가장 최적의 공간,</Text1>
      <Text1>최고를 꿈꾸는 사람들이 함께 모여 에너지를 공유합니다.</Text1>
      <Btn>오피시아 영상 보기 {'>'}</Btn>
    </Content1>
    <Content2>
      <Title2>GANGNAM</Title2>
      <Brand2>필요한 모든 것이 이 곳에</Brand2>
      <Text2>쾌적하고 한적한 산책길, 편리한 교통, </Text2>
      <Text2>아이디어 가득한 로컬 브랜드, 여러가지 분야의 크리에이터</Text2>
      <Text2>
        오피시아는 당신이 원하는 모든 것이 함께하는 강남에 자리 잡고 있습니다.
      </Text2>
    </Content2>
  </Container>
);

export default First;
