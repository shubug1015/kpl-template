import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { logOutLists, headerLists } from 'Components/Lists';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

const Container = styled.div`
  @media only screen and (min-width: 901px) {
    display: none;
  }
  background-color: ${(props) => props.theme.mainColor};
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
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

const UserItem = styled(Link)`
  display: flex;
  justify-content: center;
  /* width: 20%; */
  font-size: 11px;
  margin: 0 4%;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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

  return (
    <>
      <HamburgerBar onClick={toggleOpen}>
        {open ? <RiCloseLine /> : <RiMenuLine />}
      </HamburgerBar>
      <Container show={open}>
        <User>
          {logOutLists &&
            logOutLists.length > 0 &&
            logOutLists.map((list) => (
              <UserItem onClick={toggleOpen} to={list.pathUrl} key={list.id}>
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
