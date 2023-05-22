import React from 'react';
import styled from 'styled-components';
import { MdFormatQuote } from 'react-icons/md';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    padding: 50px 0;
  }
  ${(props) => props.theme.columnCenter}
  justify-content: center;
  background-color: #ececec;
  width: 100%;
  padding: 100px 0;
`;

const Icon = styled.div`
  margin-bottom: 30px;
  color: ${(props) => props.theme.mainColor};
  font-size: 50px;
`;

const Text = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 20px;
  }
  ${(props) => props.theme.columnCenter}
  font-size: 28px;
`;

const TopText = styled.div`
  margin-bottom: 10px;
`;

const MiddleText = styled.div`
  margin-bottom: 10px;
`;

const BottomText = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 13px;
  }
  font-size: 15px;
  opacity: 0.7;
`;

const PhrasesSecton = () => (
  <Container>
    <Icon>
      <MdFormatQuote />
    </Icon>
    <Text>
      <TopText>"세계 최고들은 1등이 아니다.</TopText>
      <MiddleText>그들은 1등과 싸워 이긴 사람들이다"</MiddleText>
      <BottomText>- 타이탄의 도구들 -</BottomText>
    </Text>
  </Container>
);

export default PhrasesSecton;
