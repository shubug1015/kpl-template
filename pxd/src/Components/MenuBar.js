import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { VscChromeClose } from 'react-icons/vsc';

// const BackGround = styled.div`
//   @media only screen and (max-width: 900px) {
//     display: flex;
//   }
//   display: none;
//   position: absolute;
//   top: 0;
//   width: 100vw;
//   height: 100vh;
//   background-color: rgba(0, 0, 0, 0.2);
//   visibility: ${(props) => (props.menuBar ? 'visible' : 'hidden')};
//   opacity: ${(props) => (props.menuBar ? '1' : '0')};
//   transition: opacity 0.7s ease-in-out, visibility 0.7s ease-in-out;
//   z-index: -1;
// `;

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    display: flex;
    top: ${(props) => (props.menuBar ? 0 : '-200vw')};
  }
  position: fixed;
  display: none;
  ${(props) => props.theme.flexCenter}
  justify-content:flex-end;
  position: absolute;
  top: ${(props) => (props.menuBar ? 0 : '-100vw')};
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  color: ${(props) => props.theme.whiteColor};
  transition: top 0.7s ease-in-out;
`;

const Menu = styled.div`
  ${(props) => props.theme.columnCenter}
  position: absolute;
  top: 0;
  background-color: #1d1d1d;
  width: 100%;
  height: 100%;
`;

const TopMenu = styled.div`
  ${(props) => props.theme.flexBetweenCenter};
  width: 85%;
  height: ${(props) => props.theme.headerHeight};
  color: #ffffff;
`;

const Title = styled.div`
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
  font-size: 36px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const MiddleMenu = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 85%;
  margin-top: 140px;
`;

const MiddleLeft = styled.div`
  ${(props) => props.theme.columnStartCenter}
  width: 50%;
  color: #ffffff;
  height: calc(100vh - 220px);
`;

const LeftSection = styled.div`
  ${(props) => props.theme.columnStartCenter};
  margin-bottom: 30px;
`;

const LeftTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: #888;
  line-height: 20px;
  margin-bottom: 10px;
`;

const LeftText = styled.div`
  font-size: 16px;
  color: #555;
  line-height: 26px;
  letter-spacing: -0.4px;
`;

const MiddleRight = styled.div`
  ${(props) => props.theme.columnStartCenter}
  width: 50%;
  color: #ffffff;
  height: calc(100vh - 220px);
`;

const ItemSection = styled.div`
  ${(props) => props.theme.columnStartCenter}
  margin-bottom: 20px;
`;

const Item = styled(Link)`
  font-weight: 200;
  font-size: 72px;
  border: none;
`;

const UnderBar = styled.div`
  width: ${(props) => (props.hoverProps ? '100%' : '0')};
  height: 1px;
  background-color: #ffffff;
  transition: width 0.4s ease-in-out;
`;

const SubItem = styled(Link)`
  font-weight: 200;
  font-size: 28px;
  line-height: 40px;
  margin-top: ${(props) => (props.firstProps ? '40px' : '12px')};
  opacity: 0.8;
  border: none;
`;

const MenuBar = ({ menuBar, closeMenuBar }) => {
  const [enter, setEnter] = useState(null);

  const aboutList = [
    {
      id: 0,
      title: 'OUR ADDRESS',
      content: [{ id: 0, text: '서울시 새검정로' }],
    },
    {
      id: 1,
      title: 'CONTACT US',
      content: [
        { id: 0, text: 'help@webpetto.com' },
        { id: 1, text: '010-0000-0000' },
      ],
    },
    {
      id: 2,
      title: 'NETWORK',
      content: [
        { id: 0, text: 'UX Tech Lab' },
        { id: 1, text: 'ix pattern library' },
      ],
    },
  ];

  const mainList = [
    {
      id: 0,
      url: '/',
      name: 'Work',
    },
    {
      id: 1,
      url: '/',
      name: 'Story',
    },
    {
      id: 2,
      url: '/',
      name: 'Service',
    },
  ];

  const subList = [
    {
      id: 3,
      url: '/',
      name: 'People',
    },
    {
      id: 4,
      url: '/',
      name: 'Contact',
    },
  ];

  return (
    <Container menuBar={menuBar}>
      <Menu>
        <TopMenu>
          <Title>title</Title>
          <Icon>
            <VscChromeClose onClick={closeMenuBar} />
          </Icon>
        </TopMenu>
        <MiddleMenu>
          <MiddleLeft>
            {aboutList &&
              aboutList.length > 0 &&
              aboutList.map((l) => (
                <LeftSection key={l.id}>
                  <LeftTitle>{l.title}</LeftTitle>
                  {l.content.map((c) => (
                    <LeftText>{c.text}</LeftText>
                  ))}
                </LeftSection>
              ))}
          </MiddleLeft>
          <MiddleRight>
            {mainList &&
              mainList.length > 0 &&
              mainList.map((l) => (
                <ItemSection
                  key={l.id}
                  onMouseEnter={() => setEnter(l.id)}
                  onMouseLeave={() => setEnter(null)}
                >
                  <Item onClick={closeMenuBar}>
                    {<Link href={l.url}>{l.name}</Link>}
                  </Item>
                  <UnderBar hoverProps={enter === l.id} />
                </ItemSection>
              ))}
            {subList &&
              subList.length > 0 &&
              subList.map((l) => (
                <ItemSection
                  key={l.id}
                  onMouseEnter={() => setEnter(l.id)}
                  onMouseLeave={() => setEnter(null)}
                >
                  <SubItem onClick={closeMenuBar} firstProps={l.id === 3}>
                    {<Link href={l.url}>{l.name}</Link>}
                  </SubItem>
                  <UnderBar hoverProps={enter === l.id} />
                </ItemSection>
              ))}
          </MiddleRight>
        </MiddleMenu>
      </Menu>
    </Container>
  );
};

export default MenuBar;
