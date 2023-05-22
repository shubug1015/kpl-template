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
  height: 300px;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const Section3 = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <Container>
      <TextContainer>
        <TitleContainer>
          <Title1>카드 없이</Title1>
          <Title2>휴대폰으로 출금하세요!</Title2>
        </TitleContainer>
        <MidTextContainer>
          <MidText>스마트출금 서비스로</MidText>
          <MidText>카드 없이 휴대폰으로</MidText>
          <MidText>무료로 현금 출금 가능!</MidText>
        </MidTextContainer>
        <BottomTextContainer>
          <BottomText>
            *스마트 출금은 일부 제휴된 피에스넷 기기에서 이용 가능
          </BottomText>
        </BottomTextContainer>
      </TextContainer>
      <Image
        bgUrl={require('Components/assets/section5.png')}
        data-aos='fade-right'
        data-aos-duration='1000'
      />
    </Container>
  );
};

export default Section3;
