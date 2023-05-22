import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import NaverLogin from 'react-naver-login';
import { usersApi } from 'api';
import { connect } from 'react-redux';
import { userData } from 'store';

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
  width: 96%;
  height: 30px;
  padding: 0;
  margin: 0 2%;
  font-size: 9px;
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

const Naverlogin = ({ currentLocation, redux_saveUserInfo }) => {
  const history = useHistory();

  const responseNaver = async (res) => {
    try {
      const { name, email } = res;
      const {
        data: { token, user_pk },
      } = await usersApi.naverLogin(name, email);
      redux_saveUserInfo({ token, user_pk, logged: true });
      sessionStorage.setItem(
        'Login_Info',
        JSON.stringify({ token, user_pk, logged: true })
      );
      // history.push(currentLocation);
      console.log(currentLocation);
    } catch {
      history.push('/');
      console.log('b');
    }
  };

  const responseFail = () => {
    alert('아이디 및 비밀번호가 일치하지 않습니다.');
  };

  return (
    <Container>
      <NaverBtn>
        <NaverLogin
          clientId='gjpZ6uP47BSJwizaKd4_'
          callbackUrl={'http://127.0.0.1:3000'}
          render={(props) => <div onClick={props.onClick}>네이버 로그인</div>}
          onSuccess={responseNaver}
          onFailure={responseFail}
        />
      </NaverBtn>
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

export default connect(mapStateToProps, mapDispatchToProps)(Naverlogin);
