import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    width: 48%;
    margin: 20px 1%;
  }
  ${(props) => props.theme.flexCenter}
  width: 32.33%;
  margin: 2% 0.5%;
  cursor: crosshair;
`;

const Image = styled.div`
  ${(props) => props.theme.flexCenter}
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 30px;
  width: 95%;
  height: 40vw;
  opacity: 0.7;
  :hover {
    border-radius: 10px;
    opacity: 1;
    transition: opacity 0.5s ease-in-out, border-radius 0.5s ease-in-out;
  }
`;

const LookBookSection = ({ imageUrl }) => (
  <Container>
    <Image bgUrl={require('Components/assets/photo_2.jpg')} />
  </Container>
);

LookBookSection.propTypes = {
  imageUrl: PropTypes.string,
};

export default LookBookSection;
