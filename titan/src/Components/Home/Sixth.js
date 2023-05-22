import React from 'react';
import styled from 'styled-components';
import { HiOutlineLightBulb } from 'react-icons/hi';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  justify-content: center;
  /* background-color: #ececec; */
  width: 100%;
  padding: 50px 0;
`;

const Icon = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 60px;
    margin-bottom: 30px;
  }
  ${(props) => props.theme.columnCenter}
  width: 300px;
  margin-bottom: 50px;
  color: ${(props) => props.theme.mainColor};
  font-size: 80px;
  opacity: 0.7;
`;

const Title = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 25px;
    margin-bottom: 30px;
  }
  border-bottom: 1px solid black;
  margin-bottom: 70px;
  padding-bottom: 10px;
  font-size: 35px;
  font-weight: 400;
`;

const Content = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
    justify-content: center;
  }
  ${(props) => props.theme.flexAroundCenter}
  flex-wrap: wrap;
  width: 90vw;
`;

const Item = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
    :not(:last-child) {
      margin-bottom: 40px;
    }
  }
  ${(props) => props.theme.columnCenter}
  width: 30%;
  margin-bottom: 15px;
  font-weight: 400;
`;

const Text = styled.div`
  font-size: 18px;
  margin-top: 15px;
  font-weight: 400;
`;

const ColorText = styled.span`
  color: ${(props) => props.theme.mainColor};
  margin-right: 5px;
  font-size: 22px;
`;

const ExplanationSection = () => (
  <Container>
    <Icon>
      <HiOutlineLightBulb />
    </Icon>
    <Title>끊임없이 메모하세요</Title>
    <Content>
      <Item>
        <Text>
          <ColorText>타이탄</ColorText>들은
        </Text>
        <Text>아침 일기를 쓴다.</Text>
      </Item>
      <Item>
        <Text>
          <ColorText>타이탄</ColorText>들은
        </Text>
        <Text>모든 것을 기록으로 남긴다.</Text>
      </Item>
      <Item>
        <Text>
          <ColorText>타이탄</ColorText>들은
        </Text>
        <Text>문제가 생길 시 메모를 하며 풀어나간다.</Text>
      </Item>
    </Content>
  </Container>
);

export default ExplanationSection;
