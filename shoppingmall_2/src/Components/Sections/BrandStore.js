import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const Title = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 100%;
  height: 50px;
`;

const Contents = styled.div`
  ${(props) => props.theme.flexCenter};
  border: ${(props) => props.theme.mainBorder};
  width: 100%;
  height: 350px;
  font-size: 11px;
`;

const BrandStore = () => {
  return (
    <Container>
      <Title>STORE</Title>
      <Contents>게시물이 없습니다.</Contents>
    </Container>
  );
};

export default BrandStore;
