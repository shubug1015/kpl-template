import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import KakaoLogin from 'react-kakao-login';
import { usersApi } from 'api';
import { connect } from 'react-redux';
import { userData } from 'store';

const Container = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 40%;
`;

const KakaoBtn = styled(KakaoLogin)`
  ${(props) => props.theme.flexCenter};
  background-color: transparent;
  border: 0.2px solid #e1e1e1;
  border-radius: 3px;
  width: 96%;
  height: 29px;
  margin: 0 2%;
  font-size: 9px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
  :focus {
    outline: none;
  }
`;

const Kakaologin = ({ currentLocation, redux_saveUserInfo }) => {
  const history = useHistory();

  const responseKakao = async (res) => {
    try {
      const {
        profile: {
          properties: { nickname: name },
        },
        profile: {
          kakao_account: { email },
        },
      } = res;
      const {
        data: { token, user_pk },
      } = await usersApi.kakaoLogin(name, email);
      redux_saveUserInfo({ token, user_pk, logged: true });
      sessionStorage.setItem(
        'Login_Info',
        JSON.stringify({ token, user_pk, logged: true })
      );
      history.push(currentLocation);
    } catch {
      history.push('/');
    }
  };

  const responseFail = () => {
    alert('아이디 및 비밀번호가 일치하지 않습니다.');
  };

  return (
    <Container>
      <KakaoBtn
        jsKey='652728f30d952eaeda20af5b98991887'
        buttonText='카카오톡 로그인'
        onSuccess={responseKakao}
        onFailure={responseFail}
        getProfile='true'
      />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    currentLocation: state.location[state.location.length - 2]?.location,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    redux_saveUserInfo: (data) => dispatch(userData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Kakaologin);
