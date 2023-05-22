import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 20%;
  height: 22vw;
`;

const Title = styled.div`
  ${(props) => props.theme.flexCenter}
  border: 1px solid black;
  background-color: white;
  width: 100%;
  height: 10%;
  font-size: 12px;
`;

const Image = styled.div`
  ${(props) => props.theme.flexCenter}
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 90%;
  opacity: 1;
  :hover {
    opacity: 0.7;
    transition: opacity 0.5s ease-in-out;
  }
`;

const AboutSection = ({ id, name, imageUrl }) => (
  <Container
    style={{
      width: `${Math.ceil(Math.random() * (30 - 15) + 15)}%`,
      height: `${Math.ceil(Math.random() * (30 - 10) + 10)}vw`,
      marginTop: `${Math.ceil(Math.random() * 8)}vh`,
      marginLeft: `${Math.ceil(Math.random() * 15)}vw`,
    }}
  >
    <Title>{name}</Title>
    <Image bgUrl={require('Components/assets/photo_1.jpg')} />
  </Container>
);

AboutSection.propTypes = {
  imageUrl: PropTypes.string,
};

export default AboutSection;
