import React from 'react';
import styled from 'styled-components';
import First from 'Components/Home/First';
import Second from 'Components/Home/Second';
import Third from 'Components/Home/Third';
import Fourth from 'Components/Home/Fourth';
import Fifth from 'Components/Home/Fifth';
import Sixth from 'Components/Home/Sixth';
import Seventh from 'Components/Home/Seventh';
import Eighth from 'Components/Home/Eighth';
import Footer from 'Components/Footer';
import { Helmet } from 'react-helmet-async';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100vw;
  max-width: 100%;
`;

const Home = () => (
  <>
    <Helmet>
      <title>Titans's Note</title>
    </Helmet>
    <Container>
      <First />
      <Second />
      {/* <Third /> */}
      <Fourth />
      <Fifth />
      <Sixth />
      <Third />
      <Seventh />
      <Eighth />
      <Footer />
    </Container>
  </>
);

export default Home;
