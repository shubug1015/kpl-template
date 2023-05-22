import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: ${(props) => props.theme.mainColor};
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  transition: filter 2s ease-in-out, opacity 1.8s ease-in-out;
  /* aspect-ratio: 8/2; */
`;

const Source = styled.source`
  width: 100%;
`;

const Content = styled.div`
  ${(props) => props.theme.columnCenter}
  justify-content: space-around;
  position: absolute;
  top: 30%;
  width: 100%;
  height: 40%;
  z-index: 1;
  transition: opacity 2s ease-in-out;
`;

const Item = styled(Link)`
  @media only screen and (max-width: 760px) {
    width: 165px;
    height: 60px;
  }
  ${(props) => props.theme.flexCenter}
  border: 5px solid ${(props) => props.theme.mainColor};
  width: 220px;
  height: 80px;
  color: white;
  font-size: 12px;
  :hover {
    opacity: 0.7;
    transition: opacity 0.5s ease-in-out;
  }
`;

const Home = () => {
  const [clear, setClear] = useState(false);
  const [show, setShow] = useState(false);

  const clearFunc = () => setTimeout(() => setClear(true), 2000);
  const blurFunc = () =>
    setTimeout(() => {
      setShow(true);
      setClear(false);
    }, 5500);

  useEffect(() => {
    clearFunc();
    blurFunc();
  }, []);

  const style = {
    videoStyle: {
      filter: clear ? 'blur(1px)' : 'blur(9px)',
    },
    contentStyle: {
      visibility: show ? 'visible' : 'hidden',
      opacity: show ? 1 : 0,
    },
  };

  return (
    <>
      <Helmet>
        <title>Magnificent</title>
      </Helmet>
      <Container>
        <Video loop autoPlay muted style={style.videoStyle}>
          <Source
            type='video/mp4'
            src={require('Components/assets/shoppingmall_1.mp4')}
          />
        </Video>
        <Content style={style.contentStyle}>
          <Item to='/shop'>BEST ITEM</Item>
          <Item to='/shop'>NEW ARRIVAL</Item>
        </Content>
      </Container>
    </>
  );
};

export default Home;
