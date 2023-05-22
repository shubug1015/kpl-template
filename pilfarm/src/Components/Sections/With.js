import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';

const Container = styled.div`
  ${(props) => props.theme.columnCenter};
  width: 100vw;
  margin-bottom: 100px;
  padding-top: 80px;
  padding-bottom: 150px;
`;

const Title = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 100%;
  font-size: 28px;
`;

const Bar = styled.div`
  background-color: ${(props) => props.theme.mainColor};
  width: 40px;
  height: 4px;
  margin: 20px 0;
  border-radius: 20px;
  opacity: 0.6;
`;

const BtnContainer = styled.div`
  ${(props) => props.theme.flexCenter};
  margin: 30px;
`;

const Btn = styled.div`
  font-size: ${(props) => (props.show ? '20px' : '15px')};
  opacity: ${(props) => (props.show ? '1' : '0.5')};
  color: #444444;
  margin: 0 15px;
  cursor: pointer;
`;

const CountUpBox = styled.div`
  @media only screen and (max-width: 900px) {
    width: 90%;
    font-size: 70px;
  }
  ${(props) => props.theme.flexCenter};
  width: 70%;
  font-size: 120px;
  font-weight: 800;
  color: ${(props) => props.theme.mainColor};
  padding: 20px 40px;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  letter-spacing: -5px;
`;

const CountUpText = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 25px;
  }
  font-size: 30px;
  font-weight: 800;
  color: ${(props) => props.theme.mainColor};
  margin-left: 20px;
  margin-bottom: -60px;
`;

const With = () => {
  const [section, setSection] = useState(0);

  const slide = () => {
    if (section === 2) {
      var timer = setTimeout(() => setSection(0), 3500);
    } else {
      timer = setTimeout(() => setSection(section + 1), 3500);
    }
    return timer;
  };

  useEffect(() => {
    let timer = slide();
    return () => {
      clearTimeout(timer);
    };
  }, [section]);

  return (
    <Container>
      <Title>필팜과 함께 합니다!</Title>
      <Bar />
      <BtnContainer>
        <Btn show={section === 0} onClick={() => setSection(0)}>
          브랜드
        </Btn>
        <Btn show={section === 1} onClick={() => setSection(1)}>
          제품
        </Btn>
        <Btn show={section === 2} onClick={() => setSection(2)}>
          리뷰
        </Btn>
      </BtnContainer>
      <CountUpBox bgUrl={require('Components/assets/With/wings.png')}>
        {section === 0 ? (
          <>
            <CountUp end={1160} duration={1} separator=',' />
            <CountUpText>개</CountUpText>
          </>
        ) : section === 1 ? (
          <>
            <CountUp end={11250} duration={1} separator=',' />
            <CountUpText>개</CountUpText>
          </>
        ) : (
          <>
            <CountUp end={4258560} duration={1} separator=',' />
            <CountUpText>개</CountUpText>
          </>
        )}
      </CountUpBox>
    </Container>
  );
};

export default With;
