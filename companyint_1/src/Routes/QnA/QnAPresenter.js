import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import QnASection from 'Components/QnASection';

const Container = styled.div`
  padding-top: ${(props) => props.theme.headerHeight};
  width: 100vw;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding-top: 30px;
  background-color: #fafafa;
`;

const Title = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 30px;
  }
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
`;

const ContentContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 80%;
    ${(props) => props.theme.columnCenter}
  }
  ${(props) => props.theme.flexAroundCenter}
  width: 60%;
`;

const QnAPresenter = ({ qnas1, qnas2 }) => {
  return (
    <>
      <Helmet>
        <title>QnA</title>
      </Helmet>
      <Container>
        <SectionContainer>
          <Title>QnA</Title>
          <ContentContainer>
            {qnas1.map((qna) => (
              <QnASection
                key={qna.id}
                id={qna.id}
                title={qna.title}
                reply={qna.reply}
              />
            ))}
          </ContentContainer>
          <ContentContainer>
            {qnas2.map((qna) => (
              <QnASection
                key={qna.id}
                id={qna.id}
                title={qna.title}
                reply={qna.reply}
              />
            ))}
          </ContentContainer>
        </SectionContainer>
      </Container>
    </>
  );
};

export default QnAPresenter;
