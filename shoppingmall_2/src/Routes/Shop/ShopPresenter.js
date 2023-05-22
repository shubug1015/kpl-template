import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Message from 'Components/Message';
import PageBar from 'Components/PageBar';
import Filter from 'Components/Filter';
import Loader from 'Components/Loader';
import ShopSection from 'Components/Sections/ShopSection';

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
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 80%;
`;

const PaginationContainer = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 100%;
  height: 50px;
  margin-top: 20px;
`;

const ShopPresenter = ({ items, itemNum, error, loading }) => {
  return loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>BLING | SHOP</title>
      </Helmet>
      <Container>
        <Content>
          <Filter itemNum={itemNum} />
          <ItemContainer>
            {items &&
              items.length > 0 &&
              items.map((item) => (
                <ShopSection
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
        </Content>
        {error && <Message color='e74c3c' text={error} />}
      </Container>
    </>
  );
};

ShopPresenter.propTypes = {
  items: PropTypes.array,
  itemNum: PropTypes.number,
  error: PropTypes.string,
};

export default ShopPresenter;
