import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.header`
  ${(props) => props.theme.flexBetweenCenter}
  position: fixed;
  top: 0;
  background-color: #fafafa;
  width: 100vw;
  height: ${(props) => props.theme.headerHeight};
  z-index: 1;
  color: ${(props) => props.theme.mainColor};
`;

const Title = styled(Link)`
  ${(props) => props.theme.flexCenter}
  background-image: url(${(props) => props.imgUrl});
  background-position: center center;
  background-size: cover;
  width: 180px;
  height: 100%;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-left: 100px;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Header = () => (
  <Container>
    <Title to='/' imgUrl={require('Components/assets/logo.png')} />
  </Container>
);

export default Header;
