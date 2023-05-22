import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  @media only screen and (max-width: 765px) {
    ${(props) => props.theme.columnCenter};
    flex-direction: column-reverse;
  }
  ${(props) => props.theme.flexCenter};
  background-color: ${(props) => props.theme.mainColor};
  width: 100vw;
  padding: 70px 0;
`;

const TextContainer = styled.div`
  ${(props) => props.theme.columnCenter};
  padding: 0 30px;
`;

const TitleContainer = styled.div``;

const Title1 = styled.div`
  font-size: 50px;
  padding: 7px 0;
`;

const Title2 = styled.div`
  font-size: 38px;
  padding: 7px 0;
`;

const TitleImg = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 30px;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const Image = styled.div`
  @media only screen and (max-width: 765px) {
    margin-bottom: 50px;
  }
  width: 250px;
  height: 250px;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const Main = () => {
  return (
    <Container>
      <TextContainer>
        <TitleContainer>
          <Title1>파킹통장으로 딱!</Title1>
          <Title2>오렌지뱅크 입출금통장</Title2>
        </TitleContainer>
        <TitleImg bgUrl={require('Components/assets/Main/chart.png')} />
      </TextContainer>
      <Image bgUrl={require('Components/assets/Main/logo.png')} />
    </Container>
  );
};

export default Main;
