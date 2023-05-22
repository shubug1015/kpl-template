import React, { Component } from 'react';
import styled from 'styled-components';
// import NaverLogin from 'react-naver-login';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
`;

const NaverBtn = styled.div`
  text-align: center;
  line-height: 30px;
  background-color: transparent;
  border: 1px solid #dbdbdb;
  width: 100%;
  height: 30px;
  padding: 0;
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

class NaverLogin extends Component {
  render() {
    return (
      <Container>
        <NaverBtn>네이버 로그인</NaverBtn>
      </Container>
    );
  }
}

export default NaverLogin;
