import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.header`
  display: ${(props) => (props.loginProp ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: 100%;
  padding-bottom: 50px;
  padding-right: 50px;
  z-index: 99;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  background-color: ${(props) => (props.locProp ? '#fafafa' : '#ffffff')};
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  :not(:last-child) {
    margin-bottom: 15px;
  }
  opacity: 0.8;
`;

const SLink = styled.span`
  margin-left: 3px;
  border-bottom: 1px solid #333333;
  opacity: 0.8;
  :hover {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
  cursor: pointer;
`;

const Footer = () => {
  const location = useLocation().pathname;

  return (
    <Container locProp={location === '/'} loginProp={location === '/login'}>
      <Content>Copyright © 웹페토. All rights reserved.</Content>
      <Content>
        Powered By
        <SLink onClick={() => window.open('https://webpetto.com/')}>
          Webpetto
        </SLink>
      </Content>
    </Container>
  );
};

export default Footer;
