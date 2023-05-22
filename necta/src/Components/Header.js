import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Container = styled.header`
  ${(props) => props.theme.flexBetweenCenter}
  position: fixed;
  top: 0;
  background-color: #ffffff;
  width: 100vw;
  height: ${(props) => props.theme.headerHeight};
  z-index: 1;
`;

const Title = styled(Link)`
  ${(props) => props.theme.flexCenter}
  width: 50px;
  height: 50px;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  margin-left: 5%;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const UserList = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 12px;
  }
  ${(props) => props.theme.flexCenter}
  height: 100%;
  font-size: 14px;
  /* font-weight: 400; */
  /* padding-right: 30px; */
  margin-right: 7%;
`;

const ServiceBtn = styled.div`
  @media only screen and (max-width: 900px) {
    margin-right: 30px;
  }
  display: ${(props) => (props.show ? 'flex' : 'none')};
  font-size: 14px;
  margin-right: 50px;
  cursor: pointer;
  opacity: 0.7;
  :hover {
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
  }
`;

const UserItem = styled(Link)`
  font-size: 14px;
  /* margin-right: 15px; */
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
  color: ${(props) => props.theme.mainColor};
`;

const Header = () => {
  const scrollBottom = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  const loc = useLocation().pathname;

  return (
    <Container>
      <Title to='/' bgUrl={require('Components/assets/logo_1.png')}></Title>
      <UserList>
        <ServiceBtn onClick={scrollBottom} show={loc === '/'}>
          상담문의
        </ServiceBtn>
        <UserItem to='/login'>로그인 / 회원가입</UserItem>
      </UserList>
    </Container>
  );
};

export default Header;
