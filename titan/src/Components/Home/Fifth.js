import React from 'react';
import styled from 'styled-components';
import { BiQuestionMark } from 'react-icons/bi';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  justify-content: center;
  background-color: #ececec;
  width: 100%;
  height: 500px;
`;

const Icon = styled.div`
  @media only screen and (max-width: 760px) {
    font-size: 50px;
  }
  ${(props) => props.theme.columnCenter}
  width: 300px;
  margin-bottom: 50px;
  color: ${(props) => props.theme.mainColor};
  font-size: 80px;
  opacity: 0.7;
`;

const Title = styled.div`
  @media only screen and (max-width: 760px) {
    font-size: 30px;
  }
  border-bottom: 1px solid black;
  margin-bottom: 70px;
  padding-bottom: 10px;
  font-size: 35px;
  font-weight: 400;
`;

const Content = styled.div`
  ${(props) => props.theme.columnCenter}
`;

const Text = styled.div`
  @media only screen and (max-width: 760px) {
    ${(props) => props.theme.columnCenter}
    font-size: 16px;
  }
  display: flex;
  margin-bottom: 20px;
  font-size: 20px;
`;

const AboutSection = () => (
  <Container>
    <Icon>
      <BiQuestionMark />
    </Icon>
    <Title>타이탄의 노트란</Title>
    <Content>
      <Text>
        <div style={{ marginBottom: '15px' }}>
          1만 시간의 법칙을 깬 거인들의
        </div>
        <div>61가지 전략 중 필수 항목인 '메모',</div>
      </Text>
      <Text>거인이 되고자하는 이들을 위해 효과적으로 정리한 노트</Text>
    </Content>
  </Container>
);

export default AboutSection;
