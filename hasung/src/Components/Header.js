import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import HamburgerMenu from 'Components/HamburgerMenu';

const Container = styled.header`
  ${(props) => props.theme.flexCenter}
  position: fixed;
  top: 0;
  background-color: #fafafa;
  border-bottom: 1px solid #dbdbdb;
  width: 100vw;
  max-width: 100%;
  height: ${(props) => props.theme.headerHeight};
  z-index: 999;
`;

const Content = styled.div`
  @media only screen and (max-width: 765px) {
    ${(props) => props.theme.flexCenter}
  }
  ${(props) => props.theme.flexCenter}
  width: 75%;
`;

const Title = styled(Link)`
  @media only screen and (max-width: 765px) {
    width: 80%;
  }
  ${(props) => props.theme.flexStartCenter}
  width: 20%;
  font-family: 'Newsreader', serif;
  font-size: 20px;
  font-weight: 400;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const LeftContent = styled.div`
  @media only screen and (max-width: 765px) {
    display: none;
  }
  ${(props) => props.theme.flexStartCenter}
  width: 50%;
`;

const LeftList = styled.div`
  ${(props) => props.theme.flexCenter}
  font-weight: 500;
  color: black;
`;

const LeftItem = styled(Link)`
  :not(:last-child) {
    margin-right: 40px;
  }
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
  color: ${(props) => (props.locationProps ? props.theme.mainColor : 'black')};
  font-weight: ${(props) => (props.locationProps ? '700' : '400')};
`;

const RightContent = styled.div`
  @media only screen and (max-width: 765px) {
    display: none;
  }
  ${(props) => props.theme.flexEndCenter}
  width: 40%;
`;

const RightList = styled.div`
  ${(props) => props.theme.flexCenter}
  font-size: 14px;
  color: black;
`;

const RightItem = styled(Link)`
  :last-child {
    font-weight: 600;
  }
  :not(:last-child) {
    margin-right: 40px;
    opacity: 0.7;
  }
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Header = () => {
  const loc = useLocation().pathname;

  return (
    <Container>
      <HamburgerMenu />
      <Content>
        <Title to='/'>HASUNG</Title>
        <LeftContent>
          <LeftList>
            <LeftItem to='/' locationProps={loc === '/'}>
              설계하기
            </LeftItem>
            <LeftItem to='/build' locationProps={loc === '/build'}>
              공사하기
            </LeftItem>
          </LeftList>
        </LeftContent>
        <RightContent>
          <RightList>
            <RightItem to='/user'>로그인 / 회원가입</RightItem>
          </RightList>
        </RightContent>
      </Content>
    </Container>
  );
};

export default Header;
