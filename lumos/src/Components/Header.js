import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  ${(props) => props.theme.flexStartCenter};
  height: ${(props) => props.theme.headerHeight};
  position: fixed;
  top: 0;
  width: 100vw;
  font-size: 32px;
  font-weight: bold;
  /* color: ${(props) => props.theme.mainColor}; */

  /* background-color: rgba(95, 0, 128, 0.6); */
  background-color: #fafafa;
  padding-left: 10%;
`;

const Header = () => {
  return <Container>LUMOS</Container>;
};

export default Header;
