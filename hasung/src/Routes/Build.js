import React from 'react';
import styled from 'styled-components';
import First from 'Components/Work/First';
import Second from 'Components/Work/Second';
import Third from 'Components/Work/Third';
import Fourth from 'Components/Work/Fourth';
import Fifth from 'Components/Work/Fifth';
import Sixth from 'Components/Work/Sixth';
import Seventh from 'Components/Work/Seventh';
import Eighth from 'Components/Work/Eighth';
import Ninth from 'Components/Work/Ninth';
import { Helmet } from 'react-helmet-async';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100vw;
  max-width: 100%;
`;

const Build = () => (
  <Container>
    <Helmet>
      <title>하성건설 | 공사하기</title>
    </Helmet>
    <First />
    <Second />
    <Third />
    <Fourth />
    <Fifth />
    <Sixth />
    <Seventh />
    <Eighth />
    <Ninth />
  </Container>
);

export default Build;
