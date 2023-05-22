import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import RecentSection from 'Components/Sections/RecentSection';

const RecentContainer = styled.div`
  width: 75%;
  height: 350px;
`;

const NavTitle = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100%;
  height: 60px;
  font-size: 12px;
  font-weight: 700;
`;

const Recent = styled.div`
  ${(props) => props.theme.flexStartCenter}
  border-top: ${(props) => props.theme.blackBorder};
  border-bottom: ${(props) => props.theme.blackBorder};
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const RecentProduct = ({ products }) => {
  return (
    <RecentContainer>
      <NavTitle>최근 본 상품</NavTitle>
      <Recent>
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <RecentSection
              key={product.id}
              id={product.id}
              imageUrl={product.main_image}
              name={product.name}
              brand={product.brand}
              price={product.price}
            />
          ))}
      </Recent>
    </RecentContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.product,
  };
};

export default connect(mapStateToProps, null)(RecentProduct);
