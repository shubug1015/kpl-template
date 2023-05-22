import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
  }
  ${(props) => props.theme.flexCenter}
  background-color: ${(props) => props.theme.mainColor};
  width: 100%;
  padding: 100px 0;
  margin-bottom: 50px;
`;

const TitleContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
    padding: 30px 0;
  }
  ${(props) => props.theme.columnCenter}
  justify-content: center;
  width: 60%;
  color: #fafafa;
`;

const MainTitle = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 25px;
  }
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 50px;
`;

const SubTitle = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 20px;
  }
  font-size: 25px;
  margin-bottom: 10px;
`;

const Content = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
    padding: 30px 0;
    ${(props) => props.theme.columnCenter}
  }
  ${(props) => props.theme.columnStartCenter}
  justify-content: center;
  width: 40%;
  height: 100%;
`;

const Sns = styled.div`
  @media only screen and (max-width: 900px) {
    width: 75%;
  }
  ${(props) => props.theme.flexStartCenter}
  background-color: #fafafa;
  border-radius: 5px;
  width: 390px;
  height: 60px;
  padding-left: 15px;
  font-size: 15px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Input = styled.input`
  @media only screen and (max-width: 900px) {
    width: 75%;
  }
  background-color: #fafafa;
  border: none;
  border-radius: 5px;
  width: 390px;
  height: 60px;
  :nth-child(3) {
    margin-bottom: 10px;
  }
  padding-left: 15px;
  font-size: 15px;
  :focus {
    outline: none;
  }
`;

const SignUpBtn = styled.div`
  @media only screen and (max-width: 900px) {
    width: 75%;
  }
  ${(props) => props.theme.flexCenter}
  background-color: #fafafa;
  border-radius: 5px;
  width: 390px;
  height: 60px;
  color: ${(props) => props.theme.mainColor};
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Text = styled.div`
  @media only screen and (max-width: 900px) {
    width: 90%;
    font-size: 12px;
  }
  ${(props) => props.theme.flexCenter}
  width: 390px;
  margin: 20px 0;
  color: #fafafa;
  font-size: 14px;
  font-weight: 400;
`;

const SignUpSection = () => (
  <Container>
    <TitleContainer>
      <MainTitle>오늘 Titan's Note에 가입하세요</MainTitle>
      <SubTitle>거인이 되고자하는 당신, 언제 어디서나</SubTitle>
      <SubTitle>당신의 삶을 메모해 나가세요</SubTitle>
    </TitleContainer>
    <Content>
      <Sns>카카오톡 회원가입</Sns>
      <Text>또는</Text>
      <Input type='text' placeholder='이메일' />
      <Input type='password' placeholder='비밀번호' />
      <Text>
        아래를 클릭함으로써 사용 약관과 개인정보 취급방침에 동의합니다.
      </Text>
      <SignUpBtn>무료로 가입하기</SignUpBtn>
    </Content>
  </Container>
);

export default SignUpSection;
