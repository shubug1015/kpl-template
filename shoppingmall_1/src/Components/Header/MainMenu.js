import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { headerList as list } from 'Components/Lists';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    display: none;
  }
  ${(props) => props.theme.flexStartCenter}
  width: 40%;
`;

const Item = styled(Link)`
  text-align: center;
  width: 22%;
  font-size: 12px;
  :hover {
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
  }
`;

const MainMenu = ({ openMenu, closeMenu }) => (
  <Container onMouseEnter={openMenu} onClick={closeMenu}>
    {list &&
      list.length > 0 &&
      list.map((l) => (
        <Item key={l.id} to={l.pathUrl + l.searchUrl}>
          {l.name}
        </Item>
      ))}
  </Container>
);

export default MainMenu;
