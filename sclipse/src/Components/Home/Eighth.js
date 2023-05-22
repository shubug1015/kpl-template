import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100%;
  padding: 50px 0;
  overflow: hidden;
`;

const Content = styled.div`
  @media only screen and (max-width: 900px) {
    padding: 30px 0;
  }
  ${(props) => props.theme.columnCenter}
  margin-bottom: 80px;
`;

const Title = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 30px;
  }
  :not(:first-child) {
    margin-top: 20px;
  }
  font-size: 45px;
  font-weight: 900;
  opacity: 0.8;
`;

const Text = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 13px;
  }
  ${(props) => props.theme.flexCenter}
  border-radius: 4px;
  margin-top: 5px;
  :nth-child(3) {
    margin-top: 30px;
  }
  opacity: 0.6;
`;

const Btn = styled.div`
  ${(props) => props.theme.flexCenter}
  border: 1px solid ${(props) => props.theme.mainColor};
  border-radius: 5px;
  width: 350px;
  height: 60px;
  margin-top: 50px;
  color: ${(props) => props.theme.mainColor};
  font-size: 18px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Link = styled.div`
  border-bottom: 1px solid black;
  margin-top: 30px;
  padding-bottom: 3px;
  font-size: 14px;
  opacity: 0.8;
  cursor: pointer;
  :hover {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
`;

// const Image = styled.div`
//   background-image: url(${(props) => props.bgUrl});
//   background-position: right center;
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-color: #5a5f63;
//   border-radius: 10px;
//   width: 876px;
//   height: 268px;
//   margin-top: 100px;
//   filter: opacity(50%) grayscale(90%);
// `;

const Eighth = () => {
  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(undefined);
    useEffect(() => {
      const handleResize = () => {
        setWindowSize(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
  };

  const windowWidth = useWindowSize();

  const opts = {
    height: windowWidth > 900 ? '390' : '220',
    width: windowWidth > 900 ? '700' : '400',
    playerVars: {
      autoplay: 2,
    },
  };

  const onReady = (e) => {
    e.target.pauseVideo();
  };

  return (
    <Container>
      <Content>
        <Title>상업적 무료 이용이</Title>
        <Title>가능한 배경음악</Title>
        <Text>오늘도 BGM을 찾아헤메는 크리에이터님들을 위해 준비했어요.</Text>
        <Text>
          YouTube 영상에 마음껏 사용하세요. 수익창출 영상에도 사용 가능합니다.
        </Text>
      </Content>
      <YouTube videoId='0bjJdR0CpO4' opts={opts} onReady={onReady} />
      <Btn>무료 음원 다운로드</Btn>
      <Link>라이센스 확인하기</Link>
      {/* <Image bgUrl={require('Components/assets/youtube_1.jpg')} /> */}
    </Container>
  );
};

export default Eighth;
