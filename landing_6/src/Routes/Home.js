import React from 'react';
import styled from 'styled-components';
import Main from 'Components/Sections/Main';
import Section1 from 'Components/Sections/Section1';
import Section2 from 'Components/Sections/Section2';
import Section3 from 'Components/Sections/Section3';
import Section4 from 'Components/Sections/Section4';
import Section5 from 'Components/Sections/Section5';
import Section6 from 'Components/Sections/Section6';
import Section7 from 'Components/Sections/Section7';
import AppSection from 'Components/Sections/AppSection';
import { Helmet } from 'react-helmet';

const Container = styled.div`
  ${(props) => props.theme.columnCenter};
  overflow: hidden;
`;

const Home = () => (
  <Container>
    <Helmet>
      <title>당신의 금융 파트너, 오렌지 뱅크</title>
    </Helmet>
    <Main />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />
    <AppSection />
  </Container>
);

export default Home;
