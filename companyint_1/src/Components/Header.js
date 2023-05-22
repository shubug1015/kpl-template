import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'Components/HamburgerMenu';

const Container = styled.header`
  position: fixed;
  display: flex;
  top: 0;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: ${(props) => props.theme.headerHeight};
  z-index: 1;
  color: #e7dec8;
`;

const LogoContainer = styled(Link)`
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  ${(props) => props.theme.flexCenter};
  width: 250px;
  height: 100%;
  font-weight: lighter;
`;

const MenuContainer = styled.div`
  @media only screen and (max-width: 900px) {
    display: none;
  }
  ${(props) => props.theme.flexCenter};
  width: 85%;
  height: 100%;
`;

const Menus = styled.div`
  ${(props) => props.theme.flexAroundCenter};
  width: 50%;
  height: 50%;
`;

const Menu = styled(Link)`
  ${(props) => props.theme.flexCenter};
  height: 100%;
  font-size: 12px;
  font-weight: bold;
  opacity: 0.7;
  &:hover,
  &:focus {
    opacity: 1;
    text-decoration: none;
    color: #e7dec8;
  }
  cursor: pointer;
`;

const SLink = styled(Link)``;

const Header = () => {
  return (
    <Container>
      <HamburgerMenu />
      <LogoContainer to='/'>고상현 법률사무소</LogoContainer>
      <MenuContainer>
        <Menus>
          <Menu to='/aboutus'>법률사무소 소개</Menu>
          <Menu to='/contact'>상담신청</Menu>
          <Menu to='/qna'>QnA</Menu>
        </Menus>
      </MenuContainer>
    </Container>
  );
};

export default Header;
