import React from 'react';
import styled from 'styled-components';
import { BsDownload } from 'react-icons/bs';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
  }
  ${(props) => props.theme.flexCenter};
  background-color: ${(props) => props.theme.mainColor};
  width: 100%;
  padding: 30px 0;
`;

const Content = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
    width: 100%;
    margin-bottom: 30px;
  }
  ${(props) => props.theme.columnStartCenter}
  width: 60%;
  color: #ffffff;
  word-break: keep-all;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Text = styled.div``;

const Btn = styled.div`
  ${(props) => props.theme.flexCenter}
  background-color: #ffffff;
  border-radius: 5px;
  width: 180px;
  height: 50px;
  color: ${(props) => props.theme.mainColor};
  font-weight: 700;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Sixth = () => (
  <Container>
    <Content>
      <Title>스크립스 유튜브 자막 번역 소개서</Title>
      <Text>더 자세한 내용을 확인하세요</Text>
    </Content>
    <Btn>
      소개서 다운로드
      <BsDownload size={22} style={{ marginLeft: '10px' }} />
    </Btn>
  </Container>
);

export default Sixth;
