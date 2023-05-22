import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100vw;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
`;

const TitleContainer = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100%;
  margin: 40px 0;
  padding: 10px 0;
  background-color: rgba(255, 255, 255, 0.9);
  color: #333333;
  font-weight: 700;
`;

const Text1 = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 23px;
  }
  border-bottom: 3px solid ${(props) => props.theme.mainColor};
  font-size: 28px;
  font-weight: 900;
  padding: 20px 5px 10px 5px;
  margin-bottom: 20px;
  /* color: #fafafa; */
`;

const Text2 = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 16px;
  }
  font-size: 20px;
  padding: 5px 0;
  /* color: #fafafa; */
`;

const ImageContainer = styled.div`
  ${(props) => props.theme.columnCenter}
  @media only screen and (max-width: 900px) {
    width: 70%;
  }
  width: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  margin: 20px 0 100px 0;
  padding: 40px 0;
`;

const Images = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
  }
  ${(props) => props.theme.flexCenter}
`;

const Image = styled.div`
  @media only screen and (max-width: 900px) {
    margin: 20px 0;
  }
  width: 230px;
  height: 350px;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin: 0 20px;
  border-radius: 10px;
`;

const ImageTextContainer = styled.div`
  ${(props) => props.theme.columnCenter}
  color: #333333;
  font-size: 12px;
  font-weight: 700;
  margin-top: 20px;
`;

const ImageText = styled.div`
  padding: 3px 0;
`;

const AnalysisSection = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <Container bgUrl={require('Components/assets/Analysis/analysis_back.jpg')}>
      <TitleContainer>
        <Text1>실시간으로 확인하는 컨설팅 진행 현황!</Text1>
        <Text2>한 눈에 보이는 결과분석으로</Text2>
        <Text2>누적 데이터, 키워드 분석까지 한 번에!</Text2>
      </TitleContainer>
      <ImageContainer data-aos='fade-up' data-aos-duration='1000'>
        <Images>
          <Image bgUrl={require('Components/assets/Analysis/chart.png')} />
          <Image bgUrl={require('Components/assets/Analysis/keyword.png')} />
        </Images>
        <ImageTextContainer>
          <ImageText>컨텐츠별 조회수, 검색 및 유입 키워드 등</ImageText>
          <ImageText>브랜드 운영에 필요한 모든 정보들을</ImageText>
          <ImageText>PC / 앱에서 모두 한 눈에 확인!</ImageText>
        </ImageTextContainer>
      </ImageContainer>
    </Container>
  );
};

export default AnalysisSection;
