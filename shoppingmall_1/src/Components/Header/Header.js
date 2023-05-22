import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { logoutList, loginList } from 'Components/Lists';
import SearchBar from 'Components/SearchBar';
import HamburgerMenu from 'Components/HamburgerMenu';
import { connect } from 'react-redux';
import { userData } from 'store';
import MainMenu from './MainMenu';
import DropdownMenu from './DropdownMenu';

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.isPopup ? 'none' : 'flex')};
  justify-content: space-between;
  background-color: ${(props) => props.theme.mainColor};
  width: 100vw;
  height: ${(props) => props.theme.headerHeight};
  z-index: 1;
`;

const Title = styled(Link)`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.flexStartCenter}
    width: 20%;
  }
  ${(props) => props.theme.flexCenter}
  width: 30%;
  height: 100%;
  font-size: 18px;
  font-weight: 900;
`;

const SearchContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 70%;
    justify-content: flex-end;
  }
  ${(props) => props.theme.flexCenter}
  width: 15%;
`;

const UserMenu = styled.div`
  @media only screen and (max-width: 900px) {
    display: none;
  }
  ${(props) => props.theme.flexAroundCenter}
  width: 15%;
`;

const UserItem = styled(Link)`
  @media only screen and (max-width: 900px) {
    width: 15%;
  }
  ${(props) => props.theme.flexCenter}
  width: 20%;
  font-size: 11px;
`;

const Header = ({ logged, redux_removeUserInfo }) => {
  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  const location = useLocation().pathname;

  const logout = () => {
    sessionStorage.removeItem('Login_Info');
    localStorage.removeItem('Login_Info');
    redux_removeUserInfo({ token: '', user_pk: '', logged: false });
  };

  return (
    <Container
      isPopup={location === '/popup' || location === '/naver_login' ? 1 : 0}
    >
      <HamburgerMenu />
      <Title to='/'>HIPSTER</Title>
      <MainMenu openMenu={openMenu} closeMenu={closeMenu} />
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <UserMenu>
        {logged
          ? loginList &&
            loginList.length > 0 &&
            loginList.map((l) => (
              <UserItem
                key={l.id}
                onClick={l.name === 'LOGOUT' ? logout : null}
                to={{
                  pathname: l.pathUrl,
                  state: l.name === 'CART' ? { init: 2 } : { init: 0 },
                }}
              >
                {l.name}
              </UserItem>
            ))
          : logoutList &&
            logoutList.length > 0 &&
            logoutList.map((l) => (
              <UserItem key={l.id} to={l.pathUrl}>
                {l.name}
              </UserItem>
            ))}
      </UserMenu>
      <DropdownMenu open={open} closeMenu={closeMenu} />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    logged: state.user.logged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    redux_removeUserInfo: (data) => dispatch(userData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
