import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    height: 90%;
  }
  width: 80%;
  height: 60%;
  position: relative;
`;

const TextContainer = styled.div`
  ${(props) => props.theme.columnCenter}
  justify-content:center;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
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

const Carousel2 = () => {
  const files = [
    {
      id: 0,
      content: (
        <TextContainer
          bgUrl={require('Components/assets/Main/main_img1.jpg')}
        />
      ),
    },
    {
      id: 1,
      content: (
        <TextContainer
          bgUrl={require('Components/assets/Main/main_img2.jpg')}
        />
      ),
    },
    {
      id: 2,
      content: (
        <TextContainer
          bgUrl={require('Components/assets/Main/main_img3.jpg')}
        />
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

export default Carousel2;
