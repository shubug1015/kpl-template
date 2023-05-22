import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import ProductSection from 'Components/Sections/ProductSection';
import PageBar from 'Components/PageBar';
import Filter from 'Components/Filter';
import Message from 'Components/Message';
import SideMenu from 'Components/SideMenu';
import Loader from 'Components/Loader';

const Container = styled.div`
  @media screen and (max-width: 900px) {
    ${(props) => props.theme.flexCenter}
  }
  width: 100vw;
`;

const Content = styled.div`
  @media screen and (max-width: 900px) {
    width: 90%;
    margin: 0;
  }
  ${(props) => props.theme.columnCenter}
  width: 80%;
  margin-left: 20%;
`;

const ItemContainer = styled.div`
  @media screen and (max-width: 900px) {
    width: 100%;
  }
  ${(props) => props.theme.flexStartCenter}
  flex-wrap: wrap;
  width: 80%;
`;

const PageBarContainer = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100%;
  height: 50px;
  margin-top: 20px;
`;

const SearchPresenter = ({ searchTerm, searchResults, itemNum, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>Hipster | {searchTerm} </title>
      </Helmet>
      <Container>
        <SideMenu />
        <Content>
          <ItemContainer>
            <Filter />
            {searchResults &&
              searchResults.length > 0 &&
              searchResults.map((searchResult) => (
                <ProductSection
                  key={searchResult.id}
                  id={searchResult.id}
                  name={searchResult.name}
                  brand={searchResult.brand}
                  price={searchResult.price}
                  imageUrl={searchResult.main_image}
                />
              ))}
          </ItemContainer>
          {searchResults && searchResults.length !== 0 ? (
            <PageBarContainer>
              <PageBar itemNum={itemNum} />
            </PageBarContainer>
          ) : (
            <Message
              text1={`"${searchTerm}" 에 대한 검색결과가 없습니다.`}
              color='black'
            />
          )}
        </Content>
      </Container>
    </>
  );

SearchPresenter.propTypes = {
  searchResults: PropTypes.array,
  itemNum: PropTypes.number,
};

export default SearchPresenter;
