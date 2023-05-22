import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 50vh;
  margin-top: 100px;
`;

const Text = styled.div`
  padding: 15px;
  font-size: 12px;
`;

const Message = ({ text1, color }) => (
  <Container>
    <Text color={color}>{text1}</Text>
  </Container>
);

Message.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string.isRequired,
};

export default Message;
