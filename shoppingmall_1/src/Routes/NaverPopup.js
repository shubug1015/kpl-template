import React, { useEffect } from 'react';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import { usersApi } from 'api';
import { naverLogin } from 'Components/SnsLogin/NaverLogin';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100vw;
  height: 100vh;
  background-color: #6ccd20;
  color: white;
`;

const Title = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100vw;
  height: 60vh;
  font-size: 35px;
  font-weight: 900;
`;

const Text = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100vw;
  height: 30vh;
  font-size: 12px;
  font-weight: 400;
`;

const Btn = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100vw;
  visibility: hidden;
`;

const NaverPopup = () => {
  const login = () => {
    naverLogin.init();

    naverLogin.getLoginStatus(async function (status) {
      if (status) {
        const {
          user: { name, email },
        } = naverLogin;
        const {
          data: { token, user_pk },
        } = await usersApi.naverLogin(name, email);
        window.opener.onSuccess({ token, user_pk, logged: true });
        window.close();
      } else {
        console.log('AccessToken이 올바르지 않습니다.');
      }
    });
  };

  useEffect(() => {
    login();
    if (!window.opener) {
      window.close();
    }
  }, []);

  return (
    <Container>
      <Title>NAVER</Title>
      <Loader />
      <Text>네이버 로그인이 진행중입니다.</Text>
      <Btn id='naverIdLogin' />
    </Container>
  );
};

export default NaverPopup;
