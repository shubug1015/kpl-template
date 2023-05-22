import React, { Component } from 'react';
import styled from 'styled-components';
import KakaoLogin from 'react-kakao-login';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
`;

const KakaoBtn = styled(KakaoLogin)`
  text-align: center;
  line-height: 30px;
  background-color: transparent;
  border: 1px solid #dbdbdb;
  width: 100%;
  height: 30px;
  padding: 0;
  margin-right: 5px;
  font-size: 10px;
  color: black;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
  :focus {
    outline: none;
  }
`;

class Kakaologin extends Component {
  render() {
    return (
      <Container>
        <KakaoBtn>카카오톡 로그인</KakaoBtn>
      </Container>
    );
  }
}

export default Kakaologin;
