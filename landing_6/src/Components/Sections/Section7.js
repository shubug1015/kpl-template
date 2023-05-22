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
  font-size: 20px;
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
          <Title1>신용정보 확인하고</Title1>
          <Title2>신용점수 올리세요!</Title2>
        </TitleContainer>
        <MidTextContainer>
          <MidText>신용평점, 대출정보, 카드결제금액 등</MidText>
          <MidText>내 신용정보 한 번에 확인 가능!</MidText>
        </MidTextContainer>
        <BottomTextContainer>
          <MidText>
            신용점수 올리고 싶을땐, "내 신용정보 갱신" 신청 가능!
          </MidText>
        </BottomTextContainer>
      </TextContainer>
      <Image
        bgUrl={require('Components/assets/section7.png')}
        data-aos='zoom-in'
        data-aos-duration='1000'
      />
    </Container>
  );
};

export default Section3;
