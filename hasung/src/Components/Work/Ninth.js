import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
  }
  ${(props) => props.theme.flexCenter}
  width: 100%;
  padding: 70px 0;
  background-color: #edeff2;
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
    margin-bottom: 40px;
  }
  ${(props) => props.theme.flexStartCenter};
  width: 30%;
`;

const Text = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
  }
`;

const Text1 = styled.div`
  font-size: 17px;
  font-weight: 700;
  opacity: 0.5;
  padding: 7px 0;
`;

const Text2 = styled.div`
  font-size: 23px;
  font-weight: 700;
  color: ${(props) => props.theme.mainColor};
  padding: 7px 0;
`;

const ImageContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  ${(props) => props.theme.flexEndCenter};
  width: 45%;
`;

const ImgSection = styled.div`
  ${(props) => props.theme.columnCenter};
  margin: 0 20px;
  cursor: pointer;
`;

const Img = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const ImgText = styled.div`
  font-size: 13px;
  font-weight: 700;
  opacity: 0.7;
  padding: 10px 0;
`;

const Ninth = () => {
  return (
    <Container>
      <TextContainer>
        <Text>
          <Text1>어렵고 복잡한 건축</Text1>
          <Text2>하성과 함께 공부해요!</Text2>
        </Text>
      </TextContainer>
      <ImageContainer>
        <ImgSection>
          <Img bgUrl={require('Components/assets/Work/ninth-1.png')} />
          <ImgText>건축 공부</ImgText>
        </ImgSection>
        <ImgSection>
          <Img bgUrl={require('Components/assets/Work/ninth-2.png')} />
          <ImgText>Youtube</ImgText>
        </ImgSection>
        <ImgSection>
          <Img bgUrl={require('Components/assets/Work/ninth-3.png')} />
          <ImgText>네이버 블로그</ImgText>
        </ImgSection>
      </ImageContainer>
    </Container>
  );
};

export default Ninth;
