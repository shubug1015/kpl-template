import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { logOutLists, logInLists, headerLists } from 'Components/Lists';
import { BsDot } from 'react-icons/bs';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import store from 'store';

const Container = styled.div`
  @media only screen and (min-width: 901px) {
    display: none;
  }
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(221, 255, 221, 0.8);
  width: 50%;
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

const User = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 100%;
  height: 10%;
  margin-top: 15%;
`;

const UserItem = styled.div`
  ${(props) => props.theme.flexCenter}
  /* width: 20%; */
  font-size: 11px;
  margin: 0 4%;
`;

const List = styled.div`
  ${(props) => props.theme.columnStartCenter}
  align-items: center;
  width: 100%;
  height: 90%;
  margin-top: 100px;
`;

const Item = styled(Link)`
  /* text-align: center; */
  width: 80%;
  padding-bottom: 5px;
  font-size: 14px;
  :not(:first-child) {
    margin-top: 15%;
  }
  :hover {
    opacity: 0.7;
  }
`;

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  const logged = store.getState().logIn.logged;

  return (
    <>
      <HamburgerBar onClick={toggleOpen}>
        {open ? <RiCloseLine /> : <RiMenuLine />}
      </HamburgerBar>
      <Container
        style={{
          visibility: open ? 'visible' : 'hidden',
          opacity: open ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        <User>
          {logged
            ? logInLists &&
              logInLists.length > 0 &&
              logInLists.map((list) => (
                <UserItem onClick={toggleOpen} key={list.id}>
                  {list.name}
                </UserItem>
              ))
            : logOutLists &&
              logOutLists.length > 0 &&
              logOutLists.map((list) => (
                <UserItem onClick={toggleOpen} key={list.id}>
                  {list.name}
                </UserItem>
              ))}
        </User>
        <List>
          {headerLists &&
            headerLists.length > 0 &&
            headerLists.map((list) => (
              <Fragment key={list.id}>
                <Item onClick={toggleOpen} to={list.pathUrl + list.searchUrl}>
                  {list.name}
                </Item>
              </Fragment>
            ))}
        </List>
      </Container>
    </>
  );
};

export default HamburgerMenu;
