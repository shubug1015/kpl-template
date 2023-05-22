import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';

const Container = styled.div`
  position: relative;
  ${(props) => props.theme.columnCenter};
  justify-content: center;
  /* background: linear-gradient(to right, #aafffa, #d4fceb); */
  background-color: #dff9f9;
  width: 100vw;
  height: 700px;
  margin-bottom: 100px;
`;

const TextContainer = styled.div`
  ${(props) => props.theme.columnCenter};
`;

const BoldText = styled.div`
  font-size: 36px;
  font-weight: 900;
  color: ${(props) => props.theme.mainColor};
  padding: 7px 0;
  :nth-child(2) {
    margin-bottom: 20px;
  }
`;

const LightText = styled.div`
  font-size: 16px;
  opacity: 0.8;
  padding: 4px 0;
`;

const Phone = styled.div`
  position: absolute;
  top: -200px;
  left: 5%;
  width: 500px;
  height: 500px;
  border-radius: 5px;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
`;

const Image1 = styled.div`
  @media only screen and (max-width: 900px) {
    width: 200px;
    height: 150px;
    top: 30px;
    left: 30%;
  }
  position: absolute;
  top: 30px;
  right: 18%;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
`;

const Image2 = styled.div`
  @media only screen and (max-width: 1100px) {
    right: 10%;
  }
  @media only screen and (max-width: 900px) {
    display: none;
  }
  position: absolute;
  bottom: 20px;
  right: 20%;
  width: 250px;
  height: 250px;
  border-radius: 5px;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
`;

const Image3 = styled.div`
  @media only screen and (max-width: 900px) {
    width: 200px;
    height: 150px;
    left: -8%;
    bottom: 20px;
  }
  position: absolute;
  bottom: 100px;
  left: 15%;
  width: 180px;
  height: 180px;
  border-radius: 5px;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
`;

// const Image4 = styled.div`
//   @media only screen and (max-width: 900px) {
//     display: none;
//   }
//   position: absolute;
//   bottom: 130px;
//   right: 30%;
//   width: 220px;
//   height: 170px;
//   border-radius: 5px;
//   background-image: url(${(props) => props.bgUrl});
//   background-position: center center;
//   background-size: cover;
// `;

// const Image5 = styled.div`
//   @media only screen and (max-width: 900px) {
//     width: 200px;
//     height: 150px;
//     right: 5%;
//     top: 70%;
//   }
//   position: absolute;
//   top: 120px;
//   right: 30%;
//   width: 240px;
//   height: 180px;
//   border-radius: 5px;
//   background-image: url(${(props) => props.bgUrl});
//   background-position: center center;
//   background-size: cover;
// `;

const Review = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <Container>
      <TextContainer>
        <BoldText>솔직한 리뷰로</BoldText>
        <BoldText>인생템을 찾아보세요!</BoldText>
        <LightText>실제 구매자들이 남긴 진짜 리뷰들로</LightText>
        <LightText>내 몸에 맞는 제품을 한 눈에!</LightText>
      </TextContainer>
      <Phone
        bgUrl={require('Components/assets/Review/phone.png')}
        data-aos='zoom-in'
        data-aos-duration='1000'
      />
      <Image1
        bgUrl={require('Components/assets/Review/product6.png')}
        data-aos='zoom-in'
        data-aos-duration='1000'
      />
      <Image2
        bgUrl={require('Components/assets/Review/product8.png')}
        data-aos='zoom-in'
        data-aos-duration='1400'
      />
      <Image3
        bgUrl={require('Components/assets/Review/product7.png')}
        data-aos='zoom-in'
        data-aos-duration='1800'
      />
      {/* <Image4
        bgUrl={require('Components/assets/Review/product5.png')}
        data-aos='zoom-in'
        data-aos-duration='2000'
      />
      <Image5
        bgUrl={require('Components/assets/Review/product4.png')}
        data-aos='zoom-in'
        data-aos-duration='2300'
      /> */}
    </Container>
  );
};

export default Review;
