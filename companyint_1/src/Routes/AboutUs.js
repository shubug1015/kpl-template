import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import AOS from 'aos';

const Container = styled.div``;

const TopImage = styled.div`
  width: 100vw;
  height: 50vh;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center center;
`;

const TextContainer = styled.div`
  ${(props) => props.theme.columnCenter}
  justify-content: center;
  width: 100vw;
  height: 50vh;
`;

const TextTitle = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 30px;
  }
  font-size: 40px;
  margin-bottom: 5%;
  text-shadow: #87431d 1px 0 1px;
`;

const TextContent = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 15px;
  }
  font-size: 20px;
  margin-bottom: 2%;
  text-shadow: #87431d 1px 0 1px;
`;

const MidContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  background-color: #e1e1e1;
`;

const MidImgContainer = styled.div`
  @media only screen and (max-width: 900px) {
    display: none;
  }
  ${(props) => props.theme.flexCenter}
  width: 40%;
  height: 100%;
`;

const MidImg = styled.img`
  width: 350px;
  height: 500px;
`;

const MidTextContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
    align-items: center;
  }
  ${(props) => props.theme.columnCenter};
  justify-content: center;
  width: 60%;
  height: 100%;
  align-items: flex-end;
`;

const MidTextTitle = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100%;
  height: 10%;
  font-size: 25px;
  color: #bca28b;
  /* padding: 50px 10px; */
`;

const MidText = styled.div`
  ${(props) => props.theme.columnCenter};
  align-items: flex-end;
  margin: 20px 15%;
  height: 27%;
`;

const MidBoldText = styled.div`
  ${(props) => props.theme.flexCenter}
  font-size: 27px;
  font-weight: bold;
  color: #a2a9ef;
  padding: 15px;
`;

const MidLightText = styled.div`
  ${(props) => props.theme.flexCenter}
  padding: 15px;
  font-weight: bold;
`;

const BottomContainer = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
    height: 200vh
  }
  ${(props) => props.theme.flexCenter}
  height: 100vh;
`;

const ContactContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
    height: 50%;
  }
  ${(props) => props.theme.flexCenter}
  justify-content:center;
  width: 50vw;
  height: 100%;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center center;
`;

const ContactBox = styled.div`
  @media only screen and (max-width: 1100px) {
    width: 90%;
  }
  ${(props) => props.theme.columnCenter}
  width: 70%;
  height: 95%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ContactTitle = styled.div`
  ${(props) => props.theme.flexCenter}
  height: 10%;
  font-size: 25px;
  font-weight: bold;
  color: white;
`;

const ContactForm = styled.div`
  @media only screen and (max-width: 1100px) {
    width: 90%;
  }
  ${(props) => props.theme.columnCenter};
  justify-content: space-around;
  width: 70%;
  height: 85%;
  border: 2px solid white;
`;

const FormSection = styled.div`
  width: 80%;
  height: 12%;
`;

const FormTitle = styled.div`
  ${(props) => props.theme.flexStartCenter}
  width: 100%;
  font-weight: bold;
  color: white;
  height: 40%;
`;

const FormInput = styled.input`
  width: 100%;
  height: 60%;
  background: transparent;
  border: none;
  border-bottom: 2px solid white;
  :focus {
    outline: none;
  }
  color: white;
`;

const FormText = styled.textarea`
  width: 100%;
  height: 30%;
  background: transparent;
  border: none;
  border: 1px solid white;
  :focus {
    outline: none;
  }
  color: white;
  padding: 10px;
`;

const FormBtn = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 70px;
  height: 40px;
  border: 2px solid white;
  border-radius: 4px;
  color: white;
  margin-top: 40px;
  cursor: pointer;
`;

const Position = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
    height: 50%;
  }
  ${(props) => props.theme.columnCenter}
  justify-content:center;
  width: 50vw;
  height: 100%;
`;

const PositionTitle = styled.div`
  font-size: 25px;
  border-bottom: 1px solid black;
  padding: 15px;
  margin-bottom: 30px;
`;

const PositionImg = styled.div`
  width: 90%;
  height: 500px;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center center;
`;

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Helmet>
        <title>ABOUT US</title>
      </Helmet>
      <Container>
        <TopImage bgUrl={require('Components/assets/AboutUsImg1.jpg')} />
        <TextContainer>
          <TextTitle>고상현 법률사무소</TextTitle>
          <TextContent>법이라는 벽 앞에서 무력해질 때,</TextContent>
          <TextContent>혼자라고 느껴질 때</TextContent>
          <TextContent>저희가 당신의 옆에 서겠습니다.</TextContent>
        </TextContainer>
        <MidContainer>
          <MidImgContainer>
            <MidImg
              src={require('Components/assets/AboutUsImg4.jpg')}
              alt='About US image'
              data-aos='zoom-in-right'
              data-aos-duration='1500'
            />
          </MidImgContainer>
          <MidTextContainer>
            <MidTextTitle>고상현 법률사무소와 함께 간다면</MidTextTitle>
            <MidText data-aos='fade-left' data-aos-duration='1000'>
              <MidBoldText>Customized</MidBoldText>
              <MidLightText>고객 맞춤형 컨설팅 진행</MidLightText>
            </MidText>
            <MidText data-aos='fade-left' data-aos-duration='2000'>
              <MidBoldText>Systematic</MidBoldText>
              <MidLightText>다년간의 노하우로 체계적인 컨설팅</MidLightText>
            </MidText>
            <MidText data-aos='fade-left' data-aos-duration='3000'>
              <MidBoldText>Goal-Oriented</MidBoldText>
              <MidLightText>포기하지 않는 목표지향적 컨설팅</MidLightText>
            </MidText>
          </MidTextContainer>
        </MidContainer>
        <BottomContainer>
          <ContactContainer
            bgUrl={require('Components/assets/AboutUsImg3.jpg')}
          >
            <ContactBox>
              <ContactTitle>Contact us</ContactTitle>
              <ContactForm>
                <FormSection>
                  <FormTitle>Name</FormTitle>
                  <FormInput></FormInput>
                </FormSection>
                <FormSection>
                  <FormTitle>E-mail</FormTitle>
                  <FormInput></FormInput>
                </FormSection>
                <FormSection style={{ height: '50%' }}>
                  <FormTitle style={{ height: '20%' }}>Comments</FormTitle>
                  <FormText style={{ height: '80%' }}></FormText>
                </FormSection>
                <FormBtn>Submit</FormBtn>
              </ContactForm>
            </ContactBox>
          </ContactContainer>
          <Position>
            <PositionTitle>오시는 길</PositionTitle>
            <PositionImg bgUrl={require('Components/assets/AboutUsImg2.jpg')} />
          </Position>
        </BottomContainer>
      </Container>
    </>
  );
};

export default AboutUs;
