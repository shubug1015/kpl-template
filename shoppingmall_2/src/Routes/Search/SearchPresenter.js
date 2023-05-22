import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import ShopSection from 'Components/Sections/ShopSection';
import PageBar from 'Components/PageBar';
import Filter from 'Components/Filter';
import Message from 'Components/Message';
import Loader from 'Components/Loader';

// const Container = styled.div`
//   margin-top: ${(props) => props.theme.headerHeight};
//   width: 100vw;
// `;

// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 80%;
// `;

// const ItemContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   width: 80%;
// `;

const Container = styled.div`
  margin-top: ${(props) => props.theme.headerHeight};
  width: 100vw;
`;

const Content = styled.div`
  ${(props) => props.theme.columnCenter};
  align-items: center;
  width: 100%;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
`;

const PaginationContainer = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 100%;
  height: 50px;
  margin-top: 20px;
`;

const SearchPresenter = ({
  searchTerm,
  searchResults,
  itemNum,
  error,
  loading,
}) => {
  const helmetTerm = searchTerm;
  return loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>{`BLING | ${helmetTerm}`}</title>
      </Helmet>
      <Container>
        <Content>
          <Filter itemNum={itemNum} />
          <ItemContainer full={searchResults.length == 0}>
            {searchResults &&
              searchResults.length > 0 &&
              searchResults.map((searchResult) => (
                <ShopSection
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
            <PaginationContainer>
              <PageBar itemNum={itemNum} />
            </PaginationContainer>
          ) : (
            <Message
              text1={`"${searchTerm}" 에 대한 검색결과가 없습니다.`}
              color='black'
            />
          )}
        </Content>
        {error && <Message color='e74c3c' text={error} />}
      </Container>
    </>
  );
};

// SearchPresenter.propTypes = {
//   searchResults: PropTypes.array,
//   itemNum: PropTypes.number,
//   error: PropTypes.string,
// };

export default SearchPresenter;
