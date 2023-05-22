import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.header`
  ${(props) => props.theme.flexStartCenter}
  position: fixed;
  top: 0;
  background-color: #fafafa;
  box-shadow: 1px 4px 12px 1px rgba(0, 0, 0, 0.2);
  width: 100vw;
  max-width: 100%;
  height: ${(props) => props.theme.headerHeight};
  z-index: 1;
`;

const Title = styled(Link)`
  ${(props) => props.theme.flexCenter}
  width: 50%;
  height: 100%;
  font-size: 24px;
  font-weight: 700;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Logo = styled(Link)`
  background-image: url(${(props) => props.imgUrl});
  background-position: center center;
  background-size: cover;
  width: 250px;
  height: 100%;
  margin-left: 7%;
  cursor: pointer;
`;

const Header = () => (
  <Container>
    {/* <Title to='/'>Titan's Note</Title> */}
    <Logo to='/' imgUrl={require('Components/assets/logo.png')} />
  </Container>
);

export default Header;
