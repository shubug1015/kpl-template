import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Loader from 'Components/Loader';
import Message from 'Components/Message';
import TopDetail from 'Components/Sections/TopDetail';
import BottomDetail from 'Components/Sections/BottomDetail';

const Container = styled.div`
  width: 100vw;
  padding-top: 50px;
  margin-top: ${(props) => props.theme.headerHeight};
`;

const DetailPresenter = ({ detail, error, loading }) => {
  return loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>{`BLING | ${detail.name}`}</title>
      </Helmet>
      <Container>
        <TopDetail detail={detail} />
        <BottomDetail />
        {error && <Message color='e74c3c' text={error} />}
      </Container>
    </>
  );
};

export default DetailPresenter;
