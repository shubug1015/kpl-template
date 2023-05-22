import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    padding-top: 50px;
  }
  ${(props) => props.theme.columnCenter}
  justify-content: center;
  width: 100%;
  padding-top: 100px;
`;

const Title = styled.div`
  ${(props) => props.theme.columnCenter}
  margin-bottom: 50px;
  font-size: 28px;
`;

const TopTitle = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 38px;
    font-weight: 700;
  }
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    font-weight: 700;
  }
  margin-bottom: 20px;
  font-size: 42px;
`;

const BottomTitle = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

const Btn = styled(Link)`
  /* @media only screen and (max-width: 900px) {
    width: 130px;
    height: 45px;
  } */
  ${(props) => props.theme.flexCenter}
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 5px;
  width: 240px;
  height: 60px;
  margin-bottom: 20px;
  color: #fafafa;
  font-size: 15px;
  font-weight: 400;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Login = styled.div`
  border-bottom: 1px solid black;
  padding-bottom: 2px;
  opacity: 0.8;
  :hover {
    border-bottom: 1px solid ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.mainColor};
    opacity: 1;
  }
`;

const First = () => (
  <Container>
    <Title>
      <TopTitle>세계 최고들의 성공 전략을 담았습니다</TopTitle>
      <BottomTitle>타이탄의 비밀노트를 만나 한 단계 나아가세요.</BottomTitle>
    </Title>
    <Btn to='/'>1개월 무료체험 {'>'}</Btn>
    <Login>이미 회원이신가요? 로그인</Login>
  </Container>
);

export default First;
