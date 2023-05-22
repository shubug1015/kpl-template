import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';

const Container = styled.div`
  ${(props) => props.theme.flexCenter};
  position: relative;
  width: 100vw;
  height: calc(100vh - 70px);
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const TextContainer = styled.div`
  ${(props) => props.theme.columnCenter};
  justify-content: center;
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

const Info = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <Container bgUrl={require('Components/assets/Info/info.png')}>
      <TextContainer>
        <BoldText>제품별로 쉽게 보는</BoldText>
        <BoldText>식품 전 성분 정보</BoldText>
        <LightText>
          브랜드 정보와 함께 식품의 전 성분 정보를 제공합니다
        </LightText>
        <LightText>지금 구매할 제품의 전 성분을 확인해 보세요</LightText>
        <LightText>내 몸에 꼭 맞는 제품을 찾을 수 있습니다!</LightText>
      </TextContainer>
    </Container>
  );
};

export default Info;
