import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
`;

const TitleContainer = styled.div`
  width: 35%;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.2px;
  line-height: 40px;
  ::selection {
    ${(props) => props.theme.textSelection}
  }
`;

const More = styled.div`
  margin-top: 16px;
  line-height: 24px;
  opacity: 0.7;
  ::selection {
    ${(props) => props.theme.textSelection}
  }
`;

const ContentContainer = styled.div`
  ${(props) => props.theme.columnStartCenter}
  width: 65%;
`;

const Content = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: 36px;
  letter-spacing: -0.2px;
  word-break: keep-all;
  ::selection {
    ${(props) => props.theme.textSelection}
  }
`;

const OurService = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>pxd people</Title>
        <More>Go to instagram</More>
      </TitleContainer>
      <ContentContainer>
        <Content>좋은 사람들과 함께하는 우리의 시간을 소개합니다.</Content>
      </ContentContainer>
    </Container>
  );
};

export default OurService;
