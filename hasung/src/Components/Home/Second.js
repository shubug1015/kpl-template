import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100%;
  padding-bottom: 100px;
`;

const Box = styled.div`
  @media only screen and (max-width: 1200px) {
    width: 85%;
  }
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
    width: 100%;
    border-radius: 0px;
  }
  ${(props) => props.theme.flexCenter}
  background-color: #e0e2f9;
  border-radius: 10px;
  width: 75%;
  padding: 30px 0;
`;

const Icon = styled.div`
  ${(props) => props.theme.flexCenter}
  background-image: url(${(props) => props.imgUrl});
  background-position: center center;
  background-size: cover;
  width: 10%;
  height: 150px;
`;

const TitleContent = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
  }
  @media only screen and (max-width: 765px) {
    width: 90%;
  }
  ${(props) => props.theme.columnStartCenter}
  width: 65%;
  margin-left: 5%;
`;

const Title = styled.div`
  font-size: 21px;
  font-weight: 700;
  margin-bottom: 25px;
`;

const Content = styled.div`
  :not(:last-child) {
    margin-bottom: 7px;
  }
  opacity: 0.7;
`;

const Link = styled.div`
  @media only screen and (max-width: 900px) {
    margin-top: 30px;
  }
  ${(props) => props.theme.flexCenter}
  color: ${(props) => props.theme.mainColor};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Second = () => (
  <Container>
    <Box>
      <Icon imgUrl={require('Components/assets/fifth.png')} />
      <TitleContent>
        <Title>아직도 착공 계획이 없나요?</Title>
        <Content>건축 가능한 건물의 정확한 규모와 공사비를 알아보세요.</Content>
        <Content>전문가가 직접 내 땅의 가능성을 검토해 줍니다.</Content>
      </TitleContent>
      <Link>공사비예측리포트 {'>'}</Link>
    </Box>
  </Container>
);

export default Second;
