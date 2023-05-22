import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { RiArrowGoForwardFill, RiArrowGoBackFill } from 'react-icons/ri';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Container = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100%;
  height: 120vh;
`;

const Image = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
    width: 80%;
    height: 100%;
  }
  ${(props) => props.theme.flexCenter}
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 50%;
  height: 100%;
`;

const Arrow = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 10%;
  font-size: 50px;
  opacity: 0.3;
`;

const MagazineSection = ({ imageUrl }) => (
  <Container>
    <Arrow>
      <IoIosArrowBack />
    </Arrow>
    <Image bgUrl={require(`Components/assets/${imageUrl}`)} />
    <Arrow>
      <IoIosArrowForward />
    </Arrow>
  </Container>
);

MagazineSection.propTypes = {
  imageUrl: PropTypes.string,
};

export default MagazineSection;
