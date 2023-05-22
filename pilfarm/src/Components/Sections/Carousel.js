import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 120px);
  position: relative;
  margin-bottom: 70px;
`;

const TextBack1 = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* background-color: ${(props) => props.theme.mainColor}; */
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  filter: brightness(0.5);
`;

const TextBack2 = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #5bc2bd, 70%, #a2e8e4);
`;

const Backdrop1 = styled.div`
  position: absolute;
  top: 25vh;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  width: 40vw;
  height: 35vw;
  opacity: 0.2;
`;

const Backdrop2 = styled.div`
  position: absolute;
  top: 0;
  right: -5vw;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  width: 40vw;
  height: 20vw;
  opacity: 0.2;
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 900px) {
    left: 50%;
  }
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${(props) => props.theme.columnCenter};
  color: #fafafa;
  width: 100%;
`;

const BoldText = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 25px;
  }
  ${(props) => props.theme.flexCenter}
  font-size: 45px;
  font-weight: 900;
  margin-bottom: 30px;
`;

const LightText = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 15px;
  }
  ${(props) => props.theme.flexCenter}
  font-size: 22px;
  margin: 5px 0;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  transition: opacity 0.5s linear;
  opacity: ${(props) => (props.showing ? 1 : 0)};
`;

const ComponentBox = styled.div`
  @media only screen and (max-width: 900px) {
    width: 40%;
    left: 30%;
  }
  position: absolute;
  bottom: 0px;
  left: 40%;
  display: flex;
  width: 20%;
  padding: 2% 0;
`;

const ComponentBar = styled.div`
  width: 33.33%;
  height: 5px;
  font-size: 10px;
  cursor: pointer;
  z-index: 2;
  background-color: #474440;
`;

const Carousel = () => {
  const files = [
    {
      id: 0,
      content: (
        <>
          <TextBack2
            // bgUrl={require('Components/assets/Carousel/carousel3.jpg')}
            notLast={false}
          />
          <Backdrop1
            bgUrl={require('Components/assets/Carousel/carousel_3_1.png')}
          />
          <Backdrop2
            bgUrl={require('Components/assets/Carousel/carousel_3_2.png')}
          />
          <TextContainer>
            <BoldText>3년 연속 1위!</BoldText>
            <BoldText>No.1 모바일 건강식품 필팜</BoldText>
            <LightText>50만명 이상의 사용자들이 선택한</LightText>
            <LightText>필팜 만나보세요!</LightText>
          </TextContainer>
        </>
      ),
    },
    {
      id: 1,
      content: (
        <>
          <TextBack1
            bgUrl={require('Components/assets/Carousel/carousel_6.jpg')}
            notLast={true}
          />
          <TextContainer>
            <BoldText>No.1 모바일 건강식품 플랫폼, 필팜!</BoldText>
            <LightText>제품, 성분, 리뷰 등 모든 정보는 물론</LightText>
            <LightText>콘텐츠와 쇼핑까지 한 번에!</LightText>
          </TextContainer>
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
          <TextBack1
            bgUrl={require('Components/assets/Carousel/carousel_7.jpg')}
            notLast={true}
          />
          <TextContainer>
            <BoldText>더 이상 헤매지 말고, 필팜!</BoldText>
            <LightText>내 몸에 맞는 건강식품을 위해</LightText>
            <LightText>아직도 여기저기 헤매고 계신가요?</LightText>
          </TextContainer>
        </>
      ),
    },
  ];

  const [currentItem, setCurrentItem] = useState(0);

  const slide = () => {
    const totalFiles = files.length;
    if (currentItem === totalFiles - 1) {
      var timer = setTimeout(() => setCurrentItem(0), 5000);
    } else {
      timer = setTimeout(() => setCurrentItem(currentItem + 1), 5000);
    }
    return timer;
  };

  useEffect(() => {
    let timer = slide();
    return () => {
      clearTimeout(timer);
    };
  }, [currentItem]);

  return (
    <Container>
      {files &&
        files.map((text, index) => (
          <Content key={text.id} showing={index === currentItem}>
            {text.content}
          </Content>
        ))}
      <ComponentBox>
        {files &&
          files.map((file, index) => (
            <ComponentBar
              key={index}
              style={{
                opacity: currentItem === index ? '1' : '0.3',
              }}
              onClick={() => {
                setCurrentItem(index);
              }}
            />
          ))}
      </ComponentBox>
    </Container>
  );
};

export default Carousel;
