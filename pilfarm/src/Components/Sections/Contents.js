import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
  }
  ${(props) => props.theme.flexCenter};
  position: relative;
  justify-content: flex-end;
  width: 100vw;
  height: 600px;
`;

const Backdrop = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  filter: opacity(25%);
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 90%;
    align-items: center;
  }
  ${(props) => props.theme.columnCenter};
  position: absolute;
  width: 65%;
  height: 100%;
  padding-top: 150px;
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
    margin-bottom: 30px;
  }
`;

const LightText = styled.div`
  font-size: 18px;
  opacity: 0.8;
  padding: 4px 0;
`;

const Ranking = () => {
  return (
    <Container>
      <Backdrop
        bgUrl={require('Components/assets/Contents/contents_back1.jpg')}
      />
      <TextContainer>
        <TextBox>
          <BoldText>전문가가 직접 작성한</BoldText>
          <BoldText>HEALTH-CARE 칼럼</BoldText>
          <LightText>건강식품이 처음인 분들을 위한 기초정보부터</LightText>
          <LightText>고수들을 위한 고급 정보까지!</LightText>
          <LightText>매주 업로드되는 헬스케어 칼럼을 만나보세요!</LightText>
        </TextBox>
      </TextContainer>
    </Container>
  );
};

export default Ranking;
