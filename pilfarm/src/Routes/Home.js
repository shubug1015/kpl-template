import React from 'react';
import styled from 'styled-components';
import Carousel from 'Components/Sections/Carousel';
import With from 'Components/Sections/With';
import Review from 'Components/Sections/Review';
import Ranking from 'Components/Sections/Ranking';
import Info from 'Components/Sections/Info';
import Contents from 'Components/Sections/Contents';
import App from 'Components/Sections/App';
import { Helmet } from 'react-helmet-async';

const Container = styled.div`
  ${(props) => props.theme.columnCenter};
  overflow: hidden;
`;

const Home = () => (
  <Container>
    <Helmet>
      <title>필팜</title>
    </Helmet>
    <Carousel />
    <With />
    <Review />
    <Ranking />
    <Contents />
    <Info />
    <App />
  </Container>
);

export default Home;
