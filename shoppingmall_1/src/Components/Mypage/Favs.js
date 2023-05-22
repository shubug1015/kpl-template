import React from 'react';
import styled from 'styled-components';
import FavsSection from 'Components/Sections/FavsSection';

const Container = styled.div`
  ${(props) => props.theme.columnCenter};
  padding: 40px 20px;
`;

const Title = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 600;
`;

const Contents = styled.div`
  ${(props) => props.theme.flexStartCenter}
  flex-wrap: wrap;
  width: 100%;
  padding: 40px 0px;
`;

const Favs = ({ fav }) => {
  return (
    <Container>
      <Title>FAVS</Title>
      <Contents>
        {fav &&
          fav.length > 0 &&
          fav.map((item) => (
            <FavsSection
              id={item.product.id}
              imageUrl={item.product.main_image}
              name={item.product.name}
              price={item.product.price}
            />
          ))}
      </Contents>
    </Container>
  );
};

export default Favs;
