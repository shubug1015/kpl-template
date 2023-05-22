import React from 'react';
import styled from 'styled-components';
import First from 'Components/Home/First';
import Second from 'Components/Home/Second';
import Third from 'Components/Home/Third';
import Fourth from 'Components/Home/Fourth';
import Fifth from 'Components/Home/Fifth';
import Sixth from 'Components/Home/Sixth';
// import Seventh from 'Components/Home/Seventh';
import Eighth from 'Components/Home/Eighth';
import Ninth from 'Components/Home/Ninth';
import Last from 'Components/Home/Last';
import { Helmet } from 'react-helmet-async';

const Container = styled.div`
  width: 100vw;
  overflow-x: hidden;
  /* max-width: 100%; */
`;

const Home = () => (
  <Container>
    <Helmet>
      <title>Sclipse</title>
    </Helmet>
    <First />
    <Second />
    <Third />
    <Fourth />
    <Fifth />
    <Sixth />
    {/* <Seventh /> */}
    <Eighth />
    <Ninth />
    {/* <Last /> */}
  </Container>
);

export default Home;
