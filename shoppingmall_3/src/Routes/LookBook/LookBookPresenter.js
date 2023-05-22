import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import LookBookSection from 'Components/Sections/LookBookSection';
import Message from 'Components/Message';
import Loader from 'Components/Loader';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100vw;
`;

const ItemContainer = styled.div`
  ${(props) => props.theme.flexStartCenter}
  flex-wrap: wrap;
  width: 100%;
`;

const LookBookPresenter = ({ items, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>Magnificent | LOOkBOOk</title>
      </Helmet>
      <Container>
        <ItemContainer>
          {items &&
            items.length > 0 &&
            items.map((item) => (
              <LookBookSection
                key={item.id}
                id={item.id}
                imageUrl={item.product_image}
              />
            ))}
        </ItemContainer>
        {error && <Message color='e74c3c' text={error} />}
      </Container>
    </>
  );

export default LookBookPresenter;
