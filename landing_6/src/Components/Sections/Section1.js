import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
    flex-direction: column-reverse;
  }
  ${(props) => props.theme.flexCenter};
  background-color: #ebf5f6;
  width: 100vw;
  padding: 150px 0;
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
    width: 90%;
  }
  ${(props) => props.theme.columnStartCenter};
  width: 45%;
`;

const TitleContainer = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
  }
  ${(props) => props.theme.flexCenter};
  font-size: 40px;
`;

const Title1 = styled.div``;

const Title2 = styled.div`
  color: ${(props) => props.theme.mainColor};
  margin-left: 20px;
`;

const MidTextContainer = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
  }
  padding: 50px 0;
  font-size: 24px;
`;

const MidText = styled.div`
  padding: 5px 0;
`;

const BottomTextContainer = styled.div`
  font-size: 14px;
`;

const BottomText = styled.div`
  padding: 3px 0;
`;

const Image = styled.div`
  @media only screen and (max-width: 900px) {
    margin-bottom: 50px;
  }
  width: 400px;
  height: 400px;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const Section1 = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <Container>
      <TextContainer>
        <TitleContainer>
          <Title1>비교해보세요!</Title1>
          <Title2>더 큰 돈이 됩니다.</Title2>
        </TitleContainer>
        <MidTextContainer>
          <MidText>지금 내 통장 금리와</MidText>
          <MidText>비교해보세요.</MidText>
        </MidTextContainer>
        <BottomTextContainer>
          <BottomText>*1천만원 1년 예치시</BottomText>
          <BottomText>
            *이자는 월 복리 세전 기준이며, 계산 시점에 따라 달라질 수 있음
          </BottomText>
        </BottomTextContainer>
      </TextContainer>
      <Image
        bgUrl={require('Components/assets/section1.png')}
        data-aos='zoom-in'
        data-aos-duration='1000'
      />
    </Container>
  );
};

export default Section1;
