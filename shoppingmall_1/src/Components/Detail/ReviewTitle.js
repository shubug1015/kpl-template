import React from 'react';
import styled from 'styled-components';

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
  margin-right: 1%;
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

const Star = styled.div`
  ${(props) => props.theme.flexCenter}
  border-bottom: ${(props) => props.theme.blackBorder};
  width: 8%;
  margin: 0 1%;
`;

const ReviewTitle = () => (
  <Container>
    <Num>NO.</Num>
    <Title>제목</Title>
    <Writer>작성자</Writer>
    <Date>작성일</Date>
    <Star>별점</Star>
  </Container>
);

export default ReviewTitle;
