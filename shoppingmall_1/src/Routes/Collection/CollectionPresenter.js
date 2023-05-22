import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import ProductSection from 'Components/Sections/ProductSection';
import PageBar from 'Components/PageBar';
import Filter from 'Components/Filter';
// import Message from 'Components/Message';
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

const CollectionPresenter = ({ items, itemNum, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>Hipster | COLLECTION</title>
      </Helmet>
      <Container>
        <SideMenu />
        <Content>
          <ItemContainer>
            <Filter itemNum={itemNum} />
            {items &&
              items.length > 0 &&
              items.map((item) => (
                <ProductSection
                  key={item.id}
                  imageUrl={item.main_image}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                />
              ))}
          </ItemContainer>
          <PageBarContainer>
            <PageBar itemNum={itemNum} />
          </PageBarContainer>
        </Content>
      </Container>
    </>
  );

CollectionPresenter.propTypes = {
  items: PropTypes.array,
  itemNum: PropTypes.number,
};

export default CollectionPresenter;
