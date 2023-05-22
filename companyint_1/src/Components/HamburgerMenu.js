import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

const Container = styled.div`
  @media only screen and (min-width: 901px) {
    display: none;
  }
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 40%;
  height: 100%;
`;

const HamburgerBar = styled.div`
  @media only screen and (min-width: 901px) {
    display: none;
  }
  ${(props) => props.theme.flexStartCenter}
  width: 10%;
  height: 100%;
  padding: 2%;
  margin-bottom: 0.65%;
  font-size: 20px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  z-index: 1;
`;

const Menus = styled.div`
  ${(props) => props.theme.columnStartCenter};
  width: 100%;
  margin: 100px 10%;
`;

const Menu = styled(Link)`
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
  margin: 20px 0;
`;

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  return (
    <>
      <HamburgerBar onClick={toggleOpen}>
        {open ? <RiCloseLine /> : <RiMenuLine />}
      </HamburgerBar>
      <Container
        style={{
          visibility: open ? 'visible' : 'hidden',
          opacity: open ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <Menus>
          <Menu to='/aboutus' onClick={toggleOpen}>
            법률사무소 소개
          </Menu>
          <Menu to='/contact' onClick={toggleOpen}>
            상담신청
          </Menu>
          <Menu to='/qna' onClick={toggleOpen}>
            QnA
          </Menu>
        </Menus>
      </Container>
    </>
  );
};

export default HamburgerMenu;
