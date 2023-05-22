import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import ProductSection from 'Components/Sections/ProductSection';
import PageBar from 'Components/PageBar';
import Filter from 'Components/Filter';
import Message from 'Components/Message';
import Loader from 'Components/Loader';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100vw;
`;

const ItemContainer = styled.div`
  ${(props) => props.theme.flexStartCenter}
  flex-wrap: wrap;
  width: 80%;
`;

const PaginationContainer = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100%;
  height: 50px;
  margin-top: 20px;
`;

const ShopPresenter = ({ items, itemNum, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>Magnificent | SHOP</title>
      </Helmet>
      <Container>
        <ItemContainer>
          <Filter itemNum={itemNum} />
          {items &&
            items.length > 0 &&
            items.map((item) => (
              <ProductSection
                key={item.id}
                id={item.id}
                name={item.name}
                brand={item.brand}
                price={item.price}
                imageUrl={item.main_image}
              />
            ))}
        </ItemContainer>
        <PaginationContainer>
          <PageBar itemNum={itemNum} />
        </PaginationContainer>
        {error && <Message color='e74c3c' text={error} />}
      </Container>
    </>
  );

export default ShopPresenter;
