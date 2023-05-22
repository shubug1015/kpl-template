import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 200px;
  margin: 0 30px;
`;

const Item = styled.div`
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 200px;
  height: 250px;
`;

const Name = styled.div`
  margin-top: 7px;
  font-size: 11px;
`;

const Price = styled.div`
  margin-top: 10px;
  font-size: 12px;
  opacity: 0.8;
`;

const SLink = styled(Link)`
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const RecentSection = ({ id, imageUrl, name, price }) => {
  return (
    <Container>
      <SLink to={`/products/${id}`}>
        <Item>
          <Image bgUrl={`${imageUrl}`} />
          <Name>{name}</Name>
          <Price>₩ {price}</Price>
        </Item>
      </SLink>
    </Container>
  );
};

RecentSection.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

export default RecentSection;
