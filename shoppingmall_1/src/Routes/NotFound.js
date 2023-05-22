import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100vw;
  height: 100vh;
  padding: 100px 0;
`;

const Text = styled.div`
  ${(props) => props.theme.flexCenter}
  font-size: 20px;
  font-weight: bold;
  height: 50px;
`;

const LinkContainer = styled.div`
  display: flex;
  padding: 100px 0;
`;

const GoToPage = styled(Link)`
  ${(props) => props.theme.flexCenter}
  padding: 10px;
  margin: 0 20px;
`;

const NotFound = () => (
  <Container>
    <Text> 404: Page Not Found</Text>
    <Text> 요청하신 페이지를 찾을 수 없습니다. </Text>
    <LinkContainer>
      <GoToPage to='/'>HOME {'>'}</GoToPage>
      <GoToPage to='/shop/?page=1&filter=new'>SHOP {'>'}</GoToPage>
    </LinkContainer>
  </Container>
);

export default NotFound;
