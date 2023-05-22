import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 70%;
  padding: 50px 0;
`;

const Title = styled.div`
  @media only screen and (max-width: 765px) {
    ${(props) => props.theme.columnCenter};
  }
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 50px;
`;

const InputContainer = styled.div`
  @media only screen and (max-width: 765px) {
    ${(props) => props.theme.flexCenter};
  }
  ${(props) => props.theme.columnStartCenter};
  padding: 20px 0;
`;

const InputName = styled.div`
  font-size: 13px;
  font-weight: 700;
  opacity: 0.8;
  padding: 7px 0;
`;

const Input = styled.input`
  border: 1px solid #d3d3d3;
  width: 300px;
  height: 40px;
  padding-left: 10px;
  font-size: 13px;
  outline: none;
`;

const BtnContainer = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 100%;
`;

const Btn = styled.div`
  ${(props) => props.theme.flexCenter};
  background-color: ${(props) => props.theme.mainColor};
  width: 300px;
  height: 70px;
  font-size: 20px;
  font-weight: 700;
  color: #fafafa;
  border-radius: 7px;
  cursor: pointer;
  margin-top: 50px;
`;

const AgreeBtnContainer = styled.div`
  @media only screen and (max-width: 765px) {
    ${(props) => props.theme.flexCenter};
  }
  ${(props) => props.theme.flexStartCenter};
  font-size: 10px;
  font-weight: 700;
  opacity: 0.8;
`;

const AgreeBtn = styled.input`
  margin-right: 10px;
`;

const Signup = () => {
  return (
    <Container>
      <Title>SIGNUP</Title>
      <InputContainer>
        <InputName>아이디</InputName>
        <Input placeholder={'아이디 혹은 이메일을 입력하세요.'} />
      </InputContainer>
      <InputContainer>
        <InputName>비밀번호</InputName>
        <Input placeholder={'비밀번호를 입력하세요.'} type='password' />
      </InputContainer>
      <InputContainer>
        <InputName>비밀번호 확인</InputName>
        <Input placeholder={'비밀번호를 확인해주세요.'} type='password' />
      </InputContainer>
      <InputContainer>
        <InputName>이름</InputName>
        <Input placeholder={'이름을 입력하세요.'} type='password' />
      </InputContainer>
      <InputContainer>
        <InputName>휴대폰 번호</InputName>
        <Input placeholder={'휴대폰 번호를 입력하세요.'} type='password' />
      </InputContainer>
      <InputContainer>
        <InputName>E-mail</InputName>
        <Input placeholder={'이메일을 입력하세요.'} type='password' />
      </InputContainer>
      <AgreeBtnContainer>
        <AgreeBtn type='checkbox' />
        이용약관 및 개인정보 수집 이용에 대한 동의
      </AgreeBtnContainer>
      <BtnContainer>
        <Btn>가입하기</Btn>
      </BtnContainer>
    </Container>
  );
};

export default Signup;
