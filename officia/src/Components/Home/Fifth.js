import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Backdrop = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 815px;
  filter: brightness(20%);
`;

const Content = styled.div`
  @media only screen and (max-width: 900px) {
    left: 0;
    padding-left: 30px;
  }
  position: absolute;
  top: 150px;
  left: 118px;
  color: #ffffff;
`;

const Title = styled.div`
  margin-bottom: 25px;
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
`;

const Brand = styled.div`
  margin-bottom: 40px;
  font-size: 55px;
  font-weight: 900;
`;

const YoutubeContainer = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Fifth = ({ ref5 }) => {
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState(undefined);

    useEffect(() => {
      function handleResize() {
        setWindowSize(window.innerWidth);
      }

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
  }

  const windowWidth = useWindowSize();

  const opts = {
    height: windowWidth > 900 ? '390' : '210',
    width: windowWidth > 900 ? '700' : '350',
    playerVars: {
      autoplay: 2,
    },
  };

  const onReady = (e) => {
    e.target.pauseVideo();
  };

  return (
    <Container ref={ref5}>
      <Backdrop bgUrl={require('Components/assets/fifth.png')} />
      <Content>
        <Title>MAKE MY OFFICE</Title>
        <Brand>오피시아</Brand>
      </Content>
      <YoutubeContainer>
        <YouTube videoId='KQo8MEBvvEg' opts={opts} onReady={onReady} />
      </YoutubeContainer>
    </Container>
  );
};

export default Fifth;
