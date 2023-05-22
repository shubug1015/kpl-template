import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { sideMenuList as list, logoutList, loginList } from 'Components/Lists';
import { connect } from 'react-redux';
import { BsDot } from 'react-icons/bs';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

const Container = styled.div`
  @media only screen and (min-width: 901px) {
    display: none;
  }
  ${(props) => props.theme.columnCenter}
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.mainColor};
  width: 60%;
  height: 100%;
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
  overflow: auto;
  background-color: red;
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
    transition: opacity 0.3s ease-in-out;
  }
  z-index: 1;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-top: 5%;
`;

const User = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 90%;
  margin: 15% 0;
  padding-bottom: 10%;
  border-bottom: 1px solid #dbdbdb;
`;

const UserItem = styled(Link)`
  display: flex;
  justify-content: center;
  width: 25%;
  font-size: 11px;
  margin: 0 4%;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 90%;
`;

const Item = styled(Link)`
  text-align: center;
  border-bottom: ${(props) => props.theme.blackBorder};
  padding-bottom: 5px;
  font-size: 12px;
  :not(:first-child) {
    margin-top: 15%;
  }
`;

const DropDownItem = styled(Link)`
  font-size: 11px;
  :not(:first-child) {
    margin-top: 10%;
  }
`;

const HamburgerMenu = ({ logged }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  return (
    <>
      <HamburgerBar onClick={toggleOpen}>
        {open ? <RiCloseLine /> : <RiMenuLine />}
      </HamburgerBar>
      <Container open={open}>
        <Title>HIPSTER</Title>
        <User>
          {logged
            ? loginList &&
              loginList.length > 0 &&
              loginList.map((list) => (
                <UserItem key={list.id} onClick={toggleOpen} to={list.pathUrl}>
                  {list.name}
                </UserItem>
              ))
            : logoutList &&
              logoutList.length > 0 &&
              logoutList.map((list) => (
                <UserItem key={list.id} onClick={toggleOpen} to={list.pathUrl}>
                  {list.name}
                </UserItem>
              ))}
        </User>
        <List>
          {list &&
            list.length > 0 &&
            list.map((l) => (
              <Fragment key={l.id}>
                <Item onClick={toggleOpen} to={l.pathUrl + l.searchUrl}>
                  {l.name}
                </Item>
                {l.menu.map((menu) => (
                  <DropDownItem
                    key={menu}
                    onClick={toggleOpen}
                    to={l.pathUrl + l.searchUrl}
                  >
                    <BsDot />
                    {menu}
                  </DropDownItem>
                ))}
              </Fragment>
            ))}
        </List>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    logged: state.user.logged,
  };
};

export default connect(mapStateToProps, null)(HamburgerMenu);
