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

const SearchPresenter = ({
  searchTerm,
  searchResults,
  itemNum,
  error,
  loading,
}) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>{`Magnificent | ${searchTerm}`}</title>
      </Helmet>
      <Container>
        <Filter itemNum={itemNum} />
        <ItemContainer>
          {searchResults &&
            searchResults.length > 0 &&
            searchResults.map((searchResult) => (
              <ProductSection
                key={searchResult.id}
                id={searchResult.id}
                name={searchResult.name}
                brand={searchResult.brand}
                price={searchResult.price}
                imageUrl={searchResult.product_image}
              />
            ))}
        </ItemContainer>
        {searchResults && searchResults.length > 0 ? (
          <PageBar itemNum={itemNum} />
        ) : (
          <Message
            text1={`"${searchTerm}" 에 대한 검색결과가 없습니다.`}
            color='black'
          />
        )}
        {error && <Message color='e74c3c' text={error} />}
      </Container>
    </>
  );

export default SearchPresenter;
