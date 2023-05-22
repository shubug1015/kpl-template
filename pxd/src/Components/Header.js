import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useScrollDir } from 'utils';
import { AiOutlineMenu } from 'react-icons/ai';
import MenuBar from 'Components/MenuBar';

const Container = styled.header`
  ${(props) => props.theme.flexCenter}
  position: fixed;
  top: ${(props) => (props.scrollDir ? 0 : '-80px')};
  left: 0;
  background-color: #ffffff;
  width: 100vw;
  height: ${(props) => props.theme.headerHeight};
  z-index: 1;
  transition: top 0.3s ease-in-out;
`;

const ContentsContainer = styled.div`
  ${(props) => props.theme.flexBetweenCenter};
  width: 85%;
`;

const Title = styled(Link)`
  ${(props) => props.theme.flexCenter}
  height: 100%;
  font-size: 25px;
  font-weight: 700;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Icon = styled.div`
  font-size: 25px;
  cursor: pointer;
`;

const Header = () => {
  const [menuBar, setMenuBar] = useState(false);

  const openMenuBar = () => setMenuBar(true);

  const closeMenuBar = () => setMenuBar(false);

  const scrollDir = useScrollDir().scrollDir;

  useEffect(() => {
    const body = document.body;
    const scrollPosition = window.pageYOffset;
    if (menuBar) {
      body.style.overflow = 'hidden';
      // body.style.pointerEvents = 'none';
      body.style.position = 'fixed';
      body.style.top = `-${scrollPosition}px`;
      body.style.left = '0';
      body.style.right = '0';
    } else {
      // body.style.removeProperty('overflow');
      // body.style.removeProperty('pointer-events');
      // body.style.removeProperty('position');
      // body.style.removeProperty('top');
      // body.style.removeProperty('left');
      // body.style.removeProperty('right');
      body.style.overflow = '';
      body.style.pointerEvents = '';
      body.style.position = '';
      body.style.top = `-${scrollPosition}px`;
      body.style.left = '';
      body.style.right = '';

      window.scrollTo(0, scrollPosition);
    }
  }, [menuBar]);

  return (
    <Container scrollDir={scrollDir === 'scroll up' || scrollDir === 'top'}>
      <ContentsContainer>
        <Title to='/'>title</Title>
        <Icon onClick={openMenuBar}>
          <AiOutlineMenu />
        </Icon>
      </ContentsContainer>
      <MenuBar menuBar={menuBar} closeMenuBar={closeMenuBar} />
    </Container>
  );
};

export default Header;
