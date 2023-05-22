import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.header`
  ${(props) => props.theme.flexBetweenCenter}
  position: fixed;
  top: 0;
  background-color: black;
  width: 100vw;
  height: ${(props) => props.theme.headerHeight};
  z-index: 1;
`;

const Title = styled(Link)`
  ${(props) => props.theme.flexCenter}
  width: 150px;
  height: 100%;
  font-size: 18px;
  font-weight: 700;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Header = () => (
  <Container>
    <Title to='/'>Title</Title>
  </Container>
);

export default Header;
