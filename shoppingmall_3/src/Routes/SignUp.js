import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  @media only screen and (max-width: 900px) {
    width: 400px;
  }
  ${(props) => props.theme.columnCenter}
  border-radius: 4px;
  width: 400px;
`;

const Title = styled.div`
  ${(props) => props.theme.flexCenter}
  border-bottom: ${(props) => props.theme.blackBorder};
  margin-bottom: 20px;
  padding-bottom: 5px;
`;

const Text = styled.div`
  font-size: 12px;
  font-weight: 700;
`;

const SignUpContainer = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100%;
`;

const Section = styled.div`
  @media only screen and (max-width: 760px) {
    width: 80%;
  }
  ${(props) => props.theme.columnCenter}
  width: 60%;
  margin-bottom: 20px;
`;

const SectionTitle = styled.div`
  width: 100%;
  padding: 5px;
  font-size: 11px;
  font-weight: 700;
`;

const Input = styled.input`
  border: ${(props) => props.theme.blackBorder};
  width: 100%;
  height: 30px;
  padding-left: 10px;
  margin: 5px 0px;
  font-size: 10px;
  outline: none;
`;

const SubmitContainer = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: center;
`;

const SubmitBtn = styled.button`
  border: none;
  background-color: black;
  margin: 20px 0px;
  width: 20%;
  height: 30px;
  outline: none;
  color: white;
  font-size: 11px;
  cursor: pointer;
`;

const SignUp = () => {
  return (
    <Container>
      <Helmet>
        <title>Magnificent | SIGNUP</title>
      </Helmet>
      <Content>
        <Title>
          <Text>REGISTER</Text>
        </Title>
        <SignUpContainer>
          <Section>
            <SectionTitle>ID</SectionTitle>
            <Input type='text' placeholder='사용하실 ID를 입력하세요.' />
          </Section>
          <Section>
            <SectionTitle>비밀번호</SectionTitle>
            <Input type='password' placeholder='비밀번호를 입력하세요.' />
            <Input
              type='password'
              placeholder='비밀번호를 다시 한번 입력하세요.'
            />
          </Section>
          <Section>
            <SectionTitle>닉네임</SectionTitle>
            <Input type='text' placeholder='닉네임을 입력하세요.' />
          </Section>
          <Section>
            <SectionTitle>Email</SectionTitle>
            <Input type='text' placeholder='이메일을 입력하세요.' />
          </Section>
          <Section>
            <SectionTitle>전화번호</SectionTitle>
            <Input type='text' placeholder='전화번호를 입력하세요.' />
          </Section>
          <SubmitContainer>
            <SubmitBtn>회원가입</SubmitBtn>
          </SubmitContainer>
        </SignUpContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
