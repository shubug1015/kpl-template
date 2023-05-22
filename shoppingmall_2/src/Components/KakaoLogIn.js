import React, { Component } from 'react';
import styled from 'styled-components';
import KakaoLogin from 'react-kakao-login';

const Container = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 40%;
`;

const KakaoBtn = styled(KakaoLogin)`
  text-align: center;
  line-height: 30px;
  background-color: transparent;
  border: 1px solid #dbdbdb;
  width: 96%;
  height: 30px;
  padding: 0;
  margin: 0 2%;
  font-size: 9px;
  color: black;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  :focus {
    outline: none;
  }
`;

class KakaoLogIn extends Component {
  render() {
    return (
      <Container>
        <KakaoBtn>카카오톡 로그인</KakaoBtn>
      </Container>
    );
  }
}

export default KakaoLogIn;
