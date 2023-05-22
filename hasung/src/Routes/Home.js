import React from 'react';
import styled from 'styled-components';
import First from 'Components/Home/First';
import Second from 'Components/Home/Second';
import Third from 'Components/Home/Third';
import Fourth from 'Components/Home/Fourth';
import FourthSmall from 'Components/Home/FourthSmall';
import Fifth from 'Components/Home/Fifth';
import Sixth from 'Components/Home/Sixth';
import Seventh from 'Components/Home/Seventh';
import Eighth from 'Components/Home/Eighth';
import { Helmet } from 'react-helmet-async';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100vw;
  max-width: 100%;
`;

const Home = () => {
  return (
    <Container>
      <Helmet>
        <title>하성건설 | 설계하기</title>
      </Helmet>
      <First />
      <Second />
      <Third />
      <Fourth />
      <FourthSmall />
      <Fifth />
      <Sixth />
      <Seventh />
      <Eighth />
    </Container>
  );
};

export default Home;
