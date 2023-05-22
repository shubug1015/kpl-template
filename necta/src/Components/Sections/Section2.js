import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100%;
  background: linear-gradient(to bottom, #3b565f, #74939e);
  /* background-color: #3b565f; */
  /* padding: ${(props) => props.theme.SectionPadding}; */
  padding: 70px 0;
`;

const ImageContainer = styled.div`
  ${(props) => props.theme.flexCenter};
  flex-wrap: wrap;
  width: 80%;
  margin-top: 30px;
`;

const Image = styled.div`
  @media only screen and (max-width: 900px) {
    width: 25%;
    height: 80px;
  }
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 16%;
  height: 120px;
  margin-bottom: 100px;
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 70%;
  }
  ${(props) => props.theme.columnCenter};
  color: #fafafa;
  word-break: keep-all;
`;

const Text1 = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 25px;
    margin: 40px 0 40px 0;
  }
  font-size: 30px;
  margin: 70px 0 40px 0;
`;

const Text2 = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 13px;
    line-height: 22px;
  }
  padding: 10px 0;
  font-weight: 100;
`;

const Section2 = () => {
  const arrayEx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Container>
      <TextContainer style={{ opacity: '0.8', margin: '40px 0' }}>
        <Text2>NECTA 500ml 음료 4병으로</Text2>
        <Text2>
          12일의 아침을 책임질 12잔의 디톡스 주스를 따를 수 있습니다.
        </Text2>
      </TextContainer>
      <ImageContainer>
        {arrayEx.map((index) => (
          <Image
            bgUrl={require('Components/assets/section2.png')}
            key={index}
          />
        ))}
      </ImageContainer>
      <TextContainer>
        <Text1>음료 값만 결제하세요!</Text1>
        <Text2>NECTA는 임대료 및 중간유통 비용을 없애고</Text2>
        <Text2>
          100% 천연재료로 만든 디톡스 음료를 정직한 가격에 제공합니다.
        </Text2>
      </TextContainer>
    </Container>
  );
};

export default Section2;
