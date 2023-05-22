import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
    height: auto;
    margin-bottom: 30px;
  }
  ${(props) => props.theme.flexCenter};
  position: relative;
  width: 80vw;
  height: 700px;
  margin-bottom: 100px;
  padding: 30px 0;
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 90%;
    align-items: center;
  }
  ${(props) => props.theme.columnCenter};
  justify-content: center;
  align-items: flex-end;
  width: 40%;
  height: 100%;
`;

const TextBox = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
  }
`;

const BoldText = styled.div`
  font-size: 40px;
  font-weight: 900;
  color: ${(props) => props.theme.mainColor};
  padding: 7px 0;
  :nth-child(2) {
    margin-bottom: 20px;
  }
`;

const LightText = styled.div`
  font-size: 18px;
  /* color: #fafafa; */
  opacity: 0.8;
  padding: 4px 0;
`;

const Image = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
    height: 500px;
  }
  width: 60%;
  height: 100%;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const Ranking = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <Container>
      <TextContainer>
        <TextBox>
          <BoldText>믿을 수 있는</BoldText>
          <BoldText>필팜 랭킹</BoldText>
          <LightText>실제 사용자들의 데이터로 만들어진 랭킹!</LightText>
          <LightText>연령, 카테고리, 브랜드별</LightText>
          <LightText>원하는 랭킹을 확인하세요!</LightText>
        </TextBox>
      </TextContainer>
      <Image
        bgUrl={require('Components/assets/Ranking/ranking.png')}
        data-aos='zoom-in'
        data-aos-duration='1500'
      />
    </Container>
  );
};

export default Ranking;
