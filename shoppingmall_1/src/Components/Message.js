import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
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
