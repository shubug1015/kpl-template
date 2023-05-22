import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

const Container = styled.div`
  @media only screen and (min-width: 766px) {
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
`;

const HamburgerBar = styled.div`
  @media only screen and (min-width: 766px) {
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
  padding-bottom: 5%;
  border-bottom: 1px solid #dbdbdb;
`;

const UserItem = styled(Link)`
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  padding: 0 30px;
  opacity: 0.8;
  :hover {
    opacity: 0.4;
    transition: opacity 0.3s ease-in-out;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 90%;
`;

const DropDownItem = styled(Link)`
  font-size: 17px;
  font-weight: 700;
  padding: 20px 0;
  :hover {
    opacity: 0.4;
    transition: opacity 0.3s ease-in-out;
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
      <Container open={open}>
        <Title>하성건설</Title>
        <User>
          <UserItem to='/'>로그인 / 회원가입</UserItem>
        </User>
        <List>
          <DropDownItem onClick={toggleOpen} to='/'>
            설계하기
          </DropDownItem>
          <DropDownItem onClick={toggleOpen} to='/build'>
            공사하기
          </DropDownItem>
        </List>
      </Container>
    </>
  );
};

export default HamburgerMenu;
