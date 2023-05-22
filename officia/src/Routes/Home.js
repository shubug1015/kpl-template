import React from 'react';
import styled from 'styled-components';
import First from 'Components/Home/First';
import Second from 'Components/Home/Second';
import Third from 'Components/Home/Third';
import Fourth from 'Components/Home/Fourth';
import Fifth from 'Components/Home/Fifth';
import Sixth from 'Components/Home/Sixth';
import Seventh from 'Components/Home/Seventh';
import Last from 'Components/Home/Last';
import { Helmet } from 'react-helmet-async';

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  /* overflow: hidden; */
`;

const Home = ({ ref1, ref2, ref3, ref4, ref5, ref6, ref7 }) => (
  <Container>
    <Helmet>
      <title>OFFICIA</title>
    </Helmet>
    <First ref1={ref1} />
    <Second ref2={ref2} />
    <Third ref3={ref3} />
    <Fourth ref4={ref4} />
    <Fifth ref5={ref5} />
    <Sixth ref6={ref6} />
    <Seventh ref7={ref7} />
    {/* <Last /> */}
  </Container>
);

export default Home;
