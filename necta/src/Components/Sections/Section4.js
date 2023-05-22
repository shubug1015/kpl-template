import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    padding: 50px 10px;
  }
  ${(props) => props.theme.columnCenter};
  width: 100%;
  padding: 100px;
  background-color: #fafafa;
`;

const Image = styled.div`
  @media only screen and (max-width: 900px) {
    width: 150px;
    height: 150px;
  }
  width: 100px;
  height: 100px;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 80%;
  }
  display: flex;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const Text = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 17px;
  }
  ${(props) => props.theme.flexCenter};
  font-size: 20px;
  color: ${(props) => (props.show === 'highlight' ? '#0069d9' : 'black')};
  margin-left: ${(props) => (props.show === 'highlight' ? '10px' : '0')};
`;

const Text2 = styled.div`
  @media only screen and (max-width: 900px) {
    width: 80%;
    font-size: 14px;
    line-height: 20px;
  }
  opacity: 0.7;
`;

const Section4 = () => {
  return (
    <Container>
      <Image bgUrl={require('Components/assets/section4.png')} />
      <TextContainer>
        <Text>3년 연속 소비자 브랜드 평판</Text>
        <Text show={'highlight'}>최우수!</Text>
      </TextContainer>
      <Text2>
        "간소화된 유통단계 덕분에 제조 후 이틀 안에 신선한 주스를 받아볼 수 있는
        유일한 브랜드."
      </Text2>
    </Container>
  );
};

export default Section4;
