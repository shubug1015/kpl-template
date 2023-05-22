import React from 'react';
import styled from 'styled-components';
import Section1 from 'Components/Sections/Section1';
import Section2 from 'Components/Sections/Section2';
import Section3 from 'Components/Sections/Section3';
import Section4 from 'Components/Sections/Section4';
import Section5 from 'Components/Sections/Section5';
import Section6 from 'Components/Sections/Section6';
import Form from 'Components/Sections/Form';
import { Helmet } from 'react-helmet-async';

const Container = styled.div`
  ${(props) => props.theme.columnCenter};
  width: 100vw;
  max-width: 100%;
  overflow: hidden;
`;

const Home = () => (
  <Container>
    <Helmet>
      <title>NECTA | 홈</title>
    </Helmet>
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Form />
  </Container>
);

export default Home;
