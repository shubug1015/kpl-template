import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  ${(props) => props.theme.columnCenter};
  padding: 40px 20px;
`;

const Name = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 600;
`;

const Contents = styled.div`
  ${(props) => props.theme.columnCenter};
  width: 100%;
  padding: 40px 0px;
`;

const ContentContainer = styled.div`
  ${(props) => props.theme.flexStartCenter};
  width: 100%;
  margin: 10px 0;
`;

const ContentTitle = styled.div`
  width: 80px;
  font-size: 13px;
`;

const ContentText = styled.div`
  width: 80px;
  font-size: 12px;
  text-align: right;
`;

const Info = () => {
  return (
    <Container>
      <Name>name</Name>
      <Contents>
        <ContentContainer>
          <ContentTitle>POINT</ContentTitle>
          <ContentText>000P</ContentText>
        </ContentContainer>
        <ContentContainer>
          <ContentTitle>COUPON</ContentTitle>
          <ContentText>0개</ContentText>
        </ContentContainer>
      </Contents>
    </Container>
  );
};

export default Info;
