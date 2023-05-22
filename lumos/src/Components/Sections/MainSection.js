import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  @media only screen and (max-width: 1000px) {
    ${(props) => props.theme.columnCenter};
    flex-direction: column-reverse;
    height: 100vh;
  }
  ${(props) => props.theme.flexCenter};
  width: 100vw;
  height: 70vh;
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 1000px) {
    ${(props) => props.theme.columnCenter};
    border-left: none;
    width: 80%;
    height: 50%;
    margin-left: 0;
  }
  ${(props) => props.theme.columnStartCenter};
  width: 30%;
  border-left: 3px solid ${(props) => props.theme.mainColor};
  padding: 0px 20px;
  margin-left: 100px;
`;

const TextSection = styled.div`
  @media only screen and (max-width: 1000px) {
    ${(props) => props.theme.columnCenter};
  }
`;

const BoldText = styled.div`
  font-size: 35px;
  font-weight: 800;
  padding: 10px 0;
  opacity: 0.7;
`;

const LightText = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding: 5px 0;
  color: #7f7f7f;
`;

const MidText = styled.div`
  font-size: 24px;
  font-weight: 500;
  padding: 7px 0px;
`;

const Image = styled.div`
  width: 500px;
  height: 400px;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const MainSection = () => {
  return (
    <Container>
      <Image bgUrl={require('Components/assets/Main/main_Img.png')} />
      <TextContainer>
        <TextSection>
          <BoldText>디지털 마케팅 No.1</BoldText>
          <BoldText>LUMOS!</BoldText>
        </TextSection>
        <TextSection style={{ margin: '20px 0' }}>
          <LightText>최신 트렌드 분석부터</LightText>
          <LightText>컨텐츠 기획, 관리까지</LightText>
          <LightText>한 번에 해결하고 싶다면?</LightText>
        </TextSection>
        <TextSection>
          <MidText>LUMOS와 함께</MidText>
          <MidText>브랜드의 가치를 높여보세요!</MidText>
        </TextSection>
      </TextContainer>
    </Container>
  );
};

export default MainSection;
