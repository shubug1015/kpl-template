import React from 'react';
import styled from 'styled-components';
import { AiOutlineLock } from 'react-icons/ai';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  display: flex;
  width: 80%;
  height: 30px;
  font-size: 12px;
`;

const Num = styled.div`
  ${(props) => props.theme.flexCenter}
  border-bottom: ${(props) => props.theme.blackBorder};
  width: 5%;
  margin: 0 1%;
`;

const Title = styled.div`
  ${(props) => props.theme.flexCenter}
  border-bottom: ${(props) => props.theme.blackBorder};
  width: 36%;
  margin: 0 1%;
`;

const Writer = styled.div`
  ${(props) => props.theme.flexCenter}
  border-bottom: ${(props) => props.theme.blackBorder};
  width: 18%;
  margin: 0 1%;
`;

const Date = styled.div`
  ${(props) => props.theme.flexCenter}
  border-bottom: ${(props) => props.theme.blackBorder};
  width: 16%;
  margin: 0 1%;
`;

const QnALock = styled.div`
  ${(props) => props.theme.flexCenter}
  border-bottom: ${(props) => props.theme.blackBorder};
  width: 8%;
  margin: 0 1%;
  font-size: 15px;
`;

const DeleteQnA = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 5%;
  font-size: 8px;
  opacity: 0.5;
  margin: 0 1%;
`;

const QnATitle = () => (
  <Container>
    <Num>NO.</Num>
    <Title>제목</Title>
    <Writer>작성자</Writer>
    <Date>작성일</Date>
    <QnALock>
      <AiOutlineLock />
    </QnALock>
    <DeleteQnA />
  </Container>
);

export default QnATitle;
