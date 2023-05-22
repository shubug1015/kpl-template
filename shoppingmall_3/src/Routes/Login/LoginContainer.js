import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginPresenter from './LoginPresenter';
import { connect } from 'react-redux';
import store, { loginData } from 'store';
import { usersApi } from 'api';

const LoginContainer = ({ redux_saveLoginInfo }) => {
  const [userData, setUserData] = useState({
    id: '',
    pw: '',
  });

  const history = useHistory();
  const currentLocation = store.getState().location[
    store.getState().location.length - 2
  ]?.location;

  const loginFunc = {
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
        redux_saveLoginInfo({ token, user_pk, logged: true });
      } catch {
        alert('Error');
      } finally {
        history.push(currentLocation);
      }
    },
  };

  return <LoginPresenter {...userData} {...loginFunc} />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    redux_saveLoginInfo: (data) => dispatch(loginData(data)),
  };
};

export default connect(null, mapDispatchToProps)(LoginContainer);
