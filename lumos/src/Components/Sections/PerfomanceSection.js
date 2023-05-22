import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    padding: 100px 0;
  }
  ${(props) => props.theme.columnCenter}
  width: 100%;
  background-color: #ffffff;
  padding: 150px 0;
`;

const ContentContainer = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
  }
  ${(props) => props.theme.flexCenter}
  width: 100%;
`;

const ImageContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
    height: 300px;
  }
  ${(props) => props.theme.flexCenter}
  width: 40%;
  height: 450px;
`;

const Logo = styled.div`
  width: 70%;
  height: 80%;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
    height: 300px;
  }
  ${(props) => props.theme.columnCenter}
  justify-content: center;
  width: 60%;
  height: 450px;
  padding: 40px 0;
  border-radius: 10px;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const TitleContainer = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.flexCenter}
  }
  width: 100%;
  display: flex;
`;

const TextTitle = styled.div`
  @media only screen and (max-width: 760px) {
    font-size: 25px;
  }
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => props.theme.mainColor};
  padding: 40px 0;
`;

const TextBox = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
  }
  width: 100%;
  margin: 20px 0;
`;

const LightText = styled.div`
  @media only screen and (max-width: 760px) {
    font-size: 16px;
  }
  font-size: 18px;
  color: gray;
  padding: 5px 0;
`;

const BoldText = styled.div`
  @media only screen and (max-width: 760px) {
    font-size: 18px;
  }
  font-size: 20px;
  font-weight: 800;
  padding: 5px 0;
`;

const PerfomanceSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <ContentContainer>
        <ImageContainer>
          <Logo bgUrl={require('Components/assets/Perfomance/logo2.png')} />
        </ImageContainer>
        <TextContainer
          bgUrl={require('Components/assets/Perfomance/whiteback2.JPG')}
        >
          <TitleContainer>
            <TextTitle>온라인 마케팅 No.1</TextTitle>
            <TextTitle style={{ color: 'black' }}>
              의 확실한 광고효과!
            </TextTitle>
          </TitleContainer>
          <TextBox>
            <LightText>경험해보신 고객님들은 모두 느끼고 있습니다.</LightText>
            <BoldText>온라인 마케팅은 역시 LUMOS!</BoldText>
          </TextBox>
          <TextBox>
            <LightText>80여 명의 마케팅 전문가와 함께 하는</LightText>
            <BoldText>LUMOS와 함께 하세요!</BoldText>
          </TextBox>
        </TextContainer>
      </ContentContainer>
    </Container>
  );
};

export default PerfomanceSection;
