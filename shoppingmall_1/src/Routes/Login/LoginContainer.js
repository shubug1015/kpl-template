import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginPresenter from './LoginPresenter';
import { connect } from 'react-redux';
import { userData } from 'store';
import { usersApi } from 'api';
import ga from 'ga';

const LoginContainer = ({ currentLocation, redux_saveUserInfo }) => {
  const [userData, setUserData] = useState({
    id: '',
    pw: '',
    saveLocal: false,
  });

  const history = useHistory();

  const loginFunc = {
    toggleSaveLocal: () =>
      setUserData({
        ...userData,
        saveLocal: !userData.saveLocal,
      }),
    handleId: (e) => {
      const {
        target: { value: id },
      } = e;
      setUserData({
        ...userData,
        id,
      });
    },
    handlePw: (e) => {
      const {
        target: { value: pw },
      } = e;
      setUserData({
        ...userData,
        pw,
      });
    },
    handleSubmit: async (e) => {
      e.preventDefault();
      try {
        const {
          data: { token, user_pk },
        } = await usersApi.login(userData.id, userData.pw);
        if (userData.saveLocal) {
          //로그인 시 localStorage 저장
          localStorage.setItem(
            'Login_Info',
            JSON.stringify({ token, user_pk, logged: true })
          );
        } else {
          //로그인 시 sessionStorage 저장
          sessionStorage.setItem(
            'Login_Info',
            JSON.stringify({ token, user_pk, logged: true })
          );
        }
        redux_saveUserInfo({ token, user_pk, logged: true });
        ga.sendEvent({
          category: '로그인',
          action: '로그인 버튼 클릭',
          label: '로그인_로그인 버튼 클릭',
        });
        history.push(currentLocation);
      } catch {
        alert('아이디 및 비밀번호가 일치하지 않습니다.');
      }
    },
  };
  return <LoginPresenter {...userData} {...loginFunc} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
