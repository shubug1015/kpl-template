import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  @media only screen and (max-width: 1100px) {
    ${(props) => props.theme.columnCenter};
    height: 1600px;
    padding: 100px 0;
  }
  display: flex;
  justify-content: center;
  background-color: #111111;
  width: 100%;
  /* height: 920px; */
  padding: 200px 0;
  color: #ffffff;
`;

const LeftContent = styled.div`
  @media only screen and (max-width: 1100px) {
    width: 100%;
    padding: 30px;
  }
  width: 50%;
  padding: 50px 0;
  padding-left: 100px;
`;

const Title = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 12px;
  }
  margin-bottom: 30px;
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 3px;
`;

const Brand = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 35px;
    line-height: 50px;
  }
  margin-bottom: 40px;
  font-size: 55px;
  font-weight: 900;
`;

const Text1Container = styled.div`
  @media only screen and (max-width: 1100px) {
    ${(props) => props.theme.columnStartCenter}
  }
  margin: 50px 0;
  font-size: 18px;
`;

const Text1 = styled.div`
  @media only screen and (max-width: 1100px) {
    font-size: 15px;
    line-height: 25px;
  }
  :not(:first-child) {
    margin-top: 10px;
  }
`;

const Text2Container = styled.div`
  @media only screen and (max-width: 1100px) {
    ${(props) => props.theme.columnStartCenter};
  }
  margin-top: 50px;
  font-size: 18px;
`;

const Text2 = styled.li`
  @media only screen and (max-width: 1100px) {
    font-size: 15px;
    line-height: 25px;
  }
  :not(:first-child) {
    margin-top: 15px;
  }
  width: 90%;
`;

const Text3Container = styled.div`
  @media only screen and (max-width: 1100px) {
    width: 100%;
    font-size: 15px;
  }
  width: 80%;
  margin-top: 80px;
  font-size: 20px;
`;

const Text3 = styled.div`
  line-height: 25px;
  word-break: keep-all;
  :not(:first-child) {
    margin-top: 15px;
  }
`;

const BtnContainer = styled.div`
  @media only screen and (max-width: 1100px) {
    ${(props) => props.theme.flexCenter}
  }
  width: 100%;
  margin-bottom: 50px;
`;

const Btn = styled.div`
  @media only screen and (max-width: 1100px) {
    width: 170px;
    height: 50px;
    font-size: 17px;
  }
  ${(props) => props.theme.flexCenter}
  width: 234px;
  height: 63px;
  margin-top: 50px;
  font-size: 20px;
  border-radius: 50px;
  border: 2px solid #ffffff;
  color: #ffffff;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const RightContent = styled.div`
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  width: 50%;
  height: 100%;
`;

const ContactContainer = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100%;
  height: 100%;
`;

const ContactBox = styled.div`
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  ${(props) => props.theme.columnCenter}
  width: 90%;
  height: 100%;
`;

const ContactTitle = styled.div`
  ${(props) => props.theme.flexCenter}
  font-size: 25px;
  font-weight: bold;
  padding-top: 20px;
  padding-bottom: 30px;
  color: white;
`;

const ContactForm = styled.div`
  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
  ${(props) => props.theme.columnCenter};
  justify-content: space-around;
  border: 2px solid white;
  width: 90%;
  /* height: 600px; */
  padding: 100px 0;
  font-family: 'Lato', sans-serif;
`;

const FormSection = styled.div`
  width: 80%;
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const FormTitle = styled.div`
  ${(props) => props.theme.flexStartCenter}
  width: 100%;
  height: 30px;
  font-weight: bold;
  color: white;
`;

const FormInput = styled.input`
  -webkit-appearance: none;
  -webkit-border-radius: 0;
  width: 100%;
  height: 40px;
  padding-left: 10px;
  font-size: 18px;
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
  height: 200px;
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
  width: 180px;
  height: 60px;
  border: 2px solid white;
  color: white;
  margin-top: 40px;
  cursor: pointer;
`;

const Seventh = ({ ref7 }) => (
  <Container id='seventh' ref={ref7}>
    <LeftContent>
      <Title>APPLY</Title>
      <Brand>입주안내</Brand>
      <Text1Container>
        <Text1>2020년 1월에 오픈한 오피시아 강남은</Text1>
        <Text1>
          '나 자신의 브랜드’라는 꿈을 가진 입주자 여러분을 기다립니다.
        </Text1>
      </Text1Container>
      <Text2Container>
        <Text2>입주비용 : 보증금 60만원, 월 임대료 34만원</Text2>
        <Text2>신청기간 : 상시 모집 (결원 발생시 개별 연락)</Text2>
        <Text2>접수 : https://webpetto.com</Text2>
        <Text2>문의 : help@webpetto.com</Text2>
      </Text2Container>
      <Text3Container>
        <Text3>- 오피시아 회원가입 후, 입주신청 하실 수 있습니다.</Text3>
        <Text3>
          - 홈페이지 내 안내된 입주자 혜택 및 프로그램은 예시에 해당하며 실제
          입주 후 일정 및 상황에 따라 변경될 수 있습니다.
        </Text3>
      </Text3Container>
      <BtnContainer>
        <Btn>입주신청 {'>'}</Btn>
      </BtnContainer>
    </LeftContent>
    <RightContent>
      <ContactContainer>
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
            <FormSection>
              <FormTitle>Comments</FormTitle>
              <FormText></FormText>
            </FormSection>
            <FormBtn>제출</FormBtn>
          </ContactForm>
        </ContactBox>
      </ContactContainer>
    </RightContent>
  </Container>
);

export default Seventh;
