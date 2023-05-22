import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 70px 0;
`;

const TextContainer = styled.div`
  ${(props) => props.theme.columnCenter};
  width: 100%;
`;

const TitleContainer = styled.div`
  ${(props) => props.theme.columnCenter};
  padding: 30px 0;
`;

const Title1 = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 25px;
    word-spacing: -4px;
  }
  font-size: 35px;
  font-weight: 700;
  line-height: 55px;
  opacity: 0.7;
`;

const Title2 = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 25px;
    word-spacing: -4px;
  }
  font-size: 35px;
  font-weight: 700;
  line-height: 55px;
  color: ${(props) => props.theme.mainColor};
  /* padding: 10px 0; */
`;

const MidTextContainer = styled.div`
  ${(props) => props.theme.columnCenter};
`;

const MidText = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 13px;
    font-weight: 700;
    word-spacing: -4px;
  }
  opacity: 0.7;
  padding: 5px 0;
`;

const BtnContainer = styled.div`
  @media only screen and (max-width: 765px) {
    padding-top: 30px;
  }
  ${(props) => props.theme.flexCenter};
  padding-top: 50px;
`;

const Btn = styled.div`
  @media only screen and (max-width: 765px) {
    width: 180px;
    height: 60px;
    font-size: 13px;
    margin: 0 10px;
  }
  ${(props) => props.theme.flexCenter};
  background-color: ${(props) =>
    props.left ? '#EBF5F6' : props.theme.mainColor};
  color: ${(props) => (props.left ? props.theme.mainColor : '#ffffff')};
  width: 180px;
  height: 60px;
  margin: 0 20px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

const Image = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 50px;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const First = () => {
  return (
    <Container>
      <TextContainer>
        <TitleContainer>
          <Title1>건설사 부도까지 책임지는</Title1>
          <Title2>하성 건축 솔루션</Title2>
        </TitleContainer>
        <MidTextContainer>
          <MidText>건축 과정에서 생기는 예상치 못한 문제들을</MidText>
          <MidText>하성 안심작업제도가 책임지고 막아드립니다.</MidText>
        </MidTextContainer>
        <BtnContainer>
          <Btn left={true}>하성 공사 현장 보기</Btn>
          <Btn left={false}>하성과 공사 시작하기</Btn>
        </BtnContainer>
      </TextContainer>
      <Image bgUrl={require('Components/assets/Work/first.png')} />
    </Container>
  );
};

export default First;
