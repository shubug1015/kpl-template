import React from 'react';
import styled from 'styled-components';
import { VscLaw } from 'react-icons/vsc';
import { BsQuestion, BsExclamation } from 'react-icons/bs';

const Container = styled.div`
  width: 100vw;
  background-color: #2d4059;
  padding-top: ${(props) => props.theme.headerHeight};
`;

const ContentContainer = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0px;
  @media only screen and (max-width: 768px) {
    padding: 0px 30px;
    flex-direction: row;
  }
`;

const TitleContainer = styled.div`
  width: 90vw;
  height: 50px;
  display: flex;
  border: ${(props) => props.theme.boldMainBorder};
  border-bottom: none;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 20%;
    height: 300px;
    border: ${(props) => props.theme.boldMainBorder};
    border-right: none;
  }
`;

const TitleTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
  font-size: 17px;
  font-weight: 600;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 20%;
  }
`;

const TextTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  font-size: 17px;
  font-weight: 600;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;

const ResultTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
  font-size: 17px;
  font-weight: 600;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 30%;
  }
`;

const ContentsContainer = styled.div`
  width: 90vw;
  height: 300px;
  display: flex;
  border: ${(props) => props.theme.boldMainBorder};
  @media only screen and (max-width: 768px) {
    width: 80%;
    flex-direction: column;
  }
`;

const TitleContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
  font-size: 14px;
  font-weight: bold;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 20%;
  }
`;

const TextContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  filter: blur(5px);
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;

const ResultContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
  font-size: 14px;
  font-weight: bold;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 30%;
  }
`;

const SuccessionDetail = (props) => {
  const title = props.location.state.title;
  const text = props.location.state.text;
  const result = props.location.state.result;

  return (
    <Container>
      <ContentContainer>
        <TitleContainer>
          <TitleTitle>분류</TitleTitle>
          <TextTitle>내용</TextTitle>
          <ResultTitle>결과</ResultTitle>
        </TitleContainer>
        <ContentsContainer>
          <TitleContents>{title}</TitleContents>
          <TextContents>{text}</TextContents>
          <ResultContents>{result}</ResultContents>
        </ContentsContainer>
      </ContentContainer>
    </Container>
  );
};

export default SuccessionDetail;
