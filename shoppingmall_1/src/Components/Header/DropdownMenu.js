import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { dropDownList } from 'Components/Lists';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    display: none;
  }
  position: absolute;
  top: ${(props) => props.theme.headerHeight};
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 12px -5px rgba(0, 0, 0, 0.1);
  width: 100vw;
  height: 120px;
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  height: 100%;
  margin-left: 30%;
`;

const List = styled.div`
  ${(props) => props.theme.columnCenter}
  justify-content: center;
  border-left: 1px solid #333333;
  :last-child {
    border-right: 1px solid #333333;
  }
  width: 22%;
  height: 20%;
  padding: 0 1%;
`;

const Item = styled(Link)`
  ${(props) => props.theme.flexCenter}
  font-size: 12px;
  opacity: 0.8;
  :not(:first-child) {
    margin-top: 8%;
  }
  width: 100%;
  :hover {
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
  }
`;

const DropdownMenu = ({ open, closeMenu }) => (
  // <>
  //   {open && (
  <Container open={open} onMouseLeave={closeMenu}>
    <Content onClick={closeMenu}>
      {dropDownList &&
        dropDownList.length > 0 &&
        dropDownList.map((l) => (
          <List key={l.id}>
            {l.menu.map((m) => (
              <Item key={m} to={l.pathUrl + l.searchUrl}>
                {m}
              </Item>
            ))}
          </List>
        ))}
    </Content>
  </Container>
  //   )}
  // </>
);

export default DropdownMenu;
