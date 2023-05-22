import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Container = styled.div``;

const HomeImg = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center;
`;

const HomeImgText1 = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 4.5vw;
  }
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3vw;
  text-shadow: black 3px 0 10px;
  color: white;
`;

const HomeImgText2 = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 4.5vw;
  }
  position: absolute;
  top: 150%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3vw;
  text-shadow: black 3px 0 10px;
  color: white;
  line-height: 150%;
`;

const ContactBtn = styled(Link)`
  position: absolute;
  top: 180%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  color: white;
  padding-bottom: 10px;
  border-bottom: 1px solid white;
`;

const Home = () => {
  const pageHeight = window.innerHeight;
  const [pageNum, setPageNum] = useState(0);

  const scrollUp = () => {
    setPageNum(0);
  };

  const scrollDown = () => {
    setPageNum(1);
  };

  useEffect(() => {
    window.scrollTo({
      top: pageNum * pageHeight,
      behavior: 'smooth',
    });
  }, [pageNum]);

  return (
    <>
      <Helmet>
        <title>고상현 법률사무소</title>
      </Helmet>
      <Container
        onWheel={(event) => {
          if (event.nativeEvent.wheelDelta > 0) {
            scrollUp();
          } else {
            scrollDown();
          }
        }}
      >
        <HomeImg bgUrl={require('Components/assets/HomeImg1.jpg')} />
        <HomeImgText1>결과로 말합니다.</HomeImgText1>
        <HomeImg bgUrl={require('Components/assets/HomeImg2.jpg')} />
        <HomeImgText2>
          수많은 성공사례,
          <br />
          당신 옆에 서겠습니다.
        </HomeImgText2>
        <ContactBtn to='/contact'>상담신청 {'>'}</ContactBtn>
      </Container>
    </>
  );
};

export default Home;
