import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { sideMenuList as list } from 'Components/Lists';
import { BsDot } from 'react-icons/bs';

const Container = styled.div`
  @media screen and (max-width: 900px) {
    display: none;
  }
  position: fixed;
  top: ${(props) => props.theme.headerHeight};
  left: 0;
  background-color: ${(props) => props.theme.mainColor};
  width: 20%;
  height: 100%;
`;

const List = styled.div`
  ${(props) => props.theme.columnStartCenter}
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 20%;
`;

const Item = styled(Link)`
  text-align: center;
  border-bottom: ${(props) => props.theme.blackBorder};
  padding-bottom: 5px;
  font-size: 12px;
  :not(:first-child) {
    margin-top: 15%;
  }
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const DropDownItem = styled(Link)`
  font-size: 11px;
  :not(:first-child) {
    margin-top: 10%;
  }
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const SideMenu = () => {
  const location = useLocation().pathname;
  return (
    <Container>
      <List>
        {list &&
          list.length > 0 &&
          list.map((l) => (
            <Fragment key={l.id}>
              <Item to={l.pathUrl + l.searchUrl}>{l.name}</Item>
              {location === l.pathUrl && //현재페이지와 주소가 같으면
                l.menu.map((m) => (
                  <DropDownItem key={m} to={l.pathUrl + l.searchUrl}>
                    <BsDot />
                    {m}
                  </DropDownItem>
                ))}
            </Fragment>
          ))}
      </List>
    </Container>
  );
};

export default SideMenu;
