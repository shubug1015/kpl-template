import React from 'react';
import styled from 'styled-components';
import BottomHome from 'Components/Sections/BottomHome';
import Carousel from 'Components/Carousel';
import { Helmet } from 'react-helmet';

const Container = styled.div`
  width: 100vw;
`;

const Content = styled.div``;

const Home = () => (
  <Container>
    <Helmet>
      <title>BLING</title>
    </Helmet>
    <Carousel />
    <BottomHome />
  </Container>
);

export default Home;
