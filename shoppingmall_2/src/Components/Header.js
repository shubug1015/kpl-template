import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchBar from 'Components/SearchBar';
import HamburgerMenu from 'Components/HamburgerMenu';

const Container = styled.header`
  @media only screen and (max-width: 900px) {
    justify-content: space-between;
  }
  position: fixed;
  display: flex;
  top: 0;
  align-items: center;
  width: 100vw;
  height: ${(props) => props.theme.headerHeight};
  z-index: 1;
`;

const CompanyName = styled(Link)`
  width: 15%;
  height: 100%;
  ${(props) => props.theme.flexCenter};
  font-size: 18px;
  font-weight: 900;
`;

const MenuContainer = styled.div`
  @media only screen and (max-width: 900px) {
    display: none;
  }
  width: 40%;
  height: 100%;
  ${(props) => props.theme.flexCenter};
`;

const Menu = styled(Link)`
  font-size: 14px;
  margin: 0px 10%;
`;

const UserContainer = styled.div`
  @media only screen and (max-width: 900px) {
    display: none;
  }
  width: 25%;
  height: 100%;
  ${(props) => props.theme.flexCenter};
`;

const User = styled(Link)`
  font-size: 11px;
  margin: 0px 10px;
`;

const SearchContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 70%;
    justify-content: flex-end;
  }
  width: 20%;
  height: 100%;
  ${(props) => props.theme.flexCenter};
`;

const SLink = styled(Link)`
  :hover {
    text-decoration: none;
    color: black;
    opacity: 0.5;
  }
`;

const Header = () => {
  const userList = [
    {
      id: 0,
      pathUrl: '/login',
      name: '로그인',
    },
    {
      id: 1,
      pathUrl: '/signup',
      name: '회원가입',
    },
    {
      id: 2,
      pathUrl: '/login',
      name: '마이페이지',
    },
  ];

  const menuList = [
    {
      id: 0,
      pathUrl: '/shop',
      name: 'SHOP',
    },
    {
      id: 1,
      pathUrl: '/brand',
      name: 'BRAND',
    },
  ];

  return (
    <Container>
      <HamburgerMenu />
      <CompanyName to='/'>BLING</CompanyName>
      <MenuContainer>
        {menuList &&
          menuList.length > 0 &&
          menuList.map((list) => (
            <Menu key={list.id} to={list.pathUrl}>
              {list.name}
            </Menu>
          ))}
      </MenuContainer>
      <UserContainer>
        {userList &&
          userList.length > 0 &&
          userList.map((list) => (
            <User key={list.id} to={list.pathUrl}>
              {list.name}
            </User>
          ))}
      </UserContainer>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
    </Container>
  );
};

export default Header;
