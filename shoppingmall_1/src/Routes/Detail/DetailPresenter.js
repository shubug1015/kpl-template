import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import TopDetail from 'Components/Detail/TopDetail';
import BottomDetail from 'Components/Detail/BottomDetail';
import Loader from 'Components/Loader';
// import Message from 'Components/Message';

const Container = styled.div`
  width: 100vw;
  padding-top: 50px;
`;

const Content = styled.div`
  ${(props) => props.theme.cloumnCenter}
  width: 100%;
`;

const DetailPresenter = ({
  detail,
  check_favs,
  reviews,
  qnas,
  purchase,
  loading,
}) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>Hipster | {detail.name}</title>
      </Helmet>
      <Container>
        <Content>
          <TopDetail {...detail} check_favs={check_favs} />
          <BottomDetail
            reviews={reviews}
            qnas={qnas}
            purchase={purchase}
            detail={detail}
          />
        </Content>
      </Container>
    </>
  );

export default DetailPresenter;
