import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import TopDetail from 'Components/Detail/TopDetail';
import BottomDetail from 'Components/Detail/BottomDetail';
import Loader from 'Components/Loader';
import Message from 'Components/Message';

const Container = styled.div`
  width: 100vw;
  padding-top: 50px;
  margin-top: ${(props) => props.theme.headerHeight};
`;

const Content = styled.div`
  ${(props) => props.theme.cloumnCenter}
  width: 100%;
`;

const DetailPresenter = ({ detail, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>{`MAGINFICENT | ${detail.name}`}</title>
      </Helmet>
      <Container>
        <Content>
          <TopDetail {...detail} />
          <BottomDetail />
        </Content>
        {error && <Message color='e74c3c' text={error} />}
      </Container>
    </>
  );

export default DetailPresenter;
