import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaCircle } from 'react-icons/fa';

const Files = styled.div`
  @media only screen and (max-width: 765px) {
    width: 100vw;
    height: 50vh;
  }
  position: relative;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-shrink: 0;
  width: 100vw;
  height: 100vh;
`;

const File = styled.img`
  max-width: 100%;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  /* background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center; */
  transition: opacity 0.5s linear;
  opacity: ${(props) => (props.showing ? 1 : 0)};
`;

const ComponentBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 13%;
  padding-bottom: 30px;
`;
const Carousel = () => {
  const files = [
    {
      id: 0,
      url: require('Components/assets/homeImg_1.jpg'),
    },
    {
      id: 1,
      url: require('Components/assets/homeImg_2.jpg'),
    },
    {
      id: 2,
      url: require('Components/assets/homeImg_3.jpg'),
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
    <Files>
      {files &&
        files.map((file, index) => (
          <File
            key={file.id}
            src={file.url}
            alt='shoppingmall2 home images'
            showing={index === currentItem}
          ></File>
        ))}
      <ComponentBox>
        {files &&
          files.map((file, index) => (
            <FaCircle
              key={index}
              style={{
                display: 'inline-block',
                alignSelf: 'flex-end',
                color: '#474440',
                fontSize: '10px',
                opacity: currentItem === index ? '1' : '0.3',
                cursor: 'pointer',
                zIndex: '2',
              }}
              onClick={() => {
                setCurrentItem(index);
              }}
            />
          ))}
      </ComponentBox>
    </Files>
  );
};

export default Carousel;
