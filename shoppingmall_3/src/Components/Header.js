import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchBar from 'Components/SearchBar';
import { headerLists, logOutLists, loginLists } from 'Components/Lists';
import HamburgerMenu from 'Components/HamburgerMenu';

const Container = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.mainColor};
  width: 100vw;
  height: ${(props) => props.theme.headerHeight};
  z-index: 2;
  color: white;
`;

const Title = styled(Link)`
  ${(props) => props.theme.flexCenter}
  width: 120px;
  height: 100%;
  font-size: 15px;
  font-weight: 700;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const List = styled.div`
  @media only screen and (max-width: 900px) {
    display: none;
  }
  ${(props) => props.theme.flexCenter}
  width: 240px;
  height: 100%;
  font-size: 11px;
`;

const Item = styled(Link)`
  ${(props) => props.theme.flexCenter}
  width: 80px;
  height: 100%;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const UserList = styled.div`
  @media only screen and (max-width: 900px) {
    width: 40%;
  }
  ${(props) => props.theme.flexCenter}
  position: fixed;
  top: 0;
  right: 0;
  background-color: #bca78d;
  width: 450px;
  height: ${(props) => props.theme.headerHeight};
  font-size: 11px;
`;

const UserItem = styled(Link)`
  @media only screen and (max-width: 900px) {
    display: none;
  }
  ${(props) => props.theme.flexCenter}
  width: 80px;
  height: 100%;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

// const DropDown = styled.div``;

// const DropDownContent = styled.div``;

// const DropDownList = styled.div``;

// const DropDownItem = styled.div``;

const Header = () => {
  return (
    <Container>
      <HamburgerMenu />
      <Title to='/'>MAGNIFICENT</Title>
      <List>
        {headerLists &&
          headerLists.length > 0 &&
          headerLists.map((list) => (
            <Item key={list.id} to={list.pathUrl + list.searchUrl}>
              {list.name}
            </Item>
          ))}
      </List>
      <UserList>
        <SearchBar />
        {logOutLists &&
          logOutLists.length > 0 &&
          logOutLists.map((list) => (
            <UserItem key={list.id} to={list.pathUrl}>
              {list.name}
            </UserItem>
          ))}
      </UserList>
    </Container>
  );
};

export default Header;
