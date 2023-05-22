import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { userData } from 'store';

const Container = styled.div`
  margin-top: 1px;
`;

const NaverBtn = styled.div`
  ${(props) => props.theme.flexCenter};
  background-color: transparent;
  width: 96%;
  height: 30px;
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

const { naver } = window;

const naverLogin = new naver.LoginWithNaverId({
  clientId: 'gjpZ6uP47BSJwizaKd4_',
  callbackUrl: 'http://127.0.0.1:3000/naver_login',
  isPopup: true,
  callbackHandle: true,
  loginButton: { color: 'white', type: 0, height: 29 },
});

const NaverLogin = ({ currentLocation, redux_saveUserInfo }) => {
  const history = useHistory();

  const logIn = () => naverLogin.init();

  const getData = (err, res) => {
    sessionStorage.setItem('LogIn_Info', JSON.stringify(res));
    redux_saveUserInfo(res);
    history.push(currentLocation);
  };

  let browser = null;

  browser = window.self;
  browser.onSuccess = (res) => {
    getData(null, res);
  };

  browser.onError = (error) => {
    getData(error);
  };

  browser.onOpen = (message) => {
    getData(null, message);
  };

  browser.onClose = (message) => {
    getData(null, message);
  };

  useEffect(logIn, []);

  return (
    <Container>
      <NaverBtn id='naverIdLogin' />
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

export { naverLogin };

export default connect(mapStateToProps, mapDispatchToProps)(NaverLogin);
