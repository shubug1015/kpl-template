import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const ExchageSection = ({ id, main_image, name, option, qty, price, date }) => (
  <Container>{id + main_image + name + option + qty + price + date}</Container>
);

export default ExchageSection;
