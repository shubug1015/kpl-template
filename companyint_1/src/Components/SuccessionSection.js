import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled(Link)`
  @media only screen and (max-width: 600px) {
    width: 46%;
    margin: 1% 2%;
  }
  &:hover,
  &:focus {
    text-decoration: none;
    opacity: 0.5;
  }
  width: 250px;
  height: 350px;
  margin: 20px;
  border: 0.5px solid #bcbcbc;
  border-radius: 7px;
`;

const Title = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 100%;
  height: 25%;
  font-size: 17px;
  font-weight: 600;
  background-color: #f7f7f7;
`;

const Text = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 100%;
  height: 50%;
  padding: 0px 20px;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center;
  filter: blur(5px);
`;

const Result = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 100%;
  height: 25%;
  font-size: 14px;
  font-weight: 600;
  background-color: #f7f7f7;
`;

const PageFrameSection = ({ id, title, text, result }) => {
  return (
    <Container
      to={{
        pathname: `/succession/${id}`,
        state: { id: id, title: title, text: text, result: result },
      }}
    >
      <Title>{title}</Title>
      <Text>{text.slice(0, 25)}...</Text>
      <Result>{result}</Result>
    </Container>
  );
};

PageFrameSection.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  result: PropTypes.string,
};

export default PageFrameSection;
