import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import AboutSection from 'Components/Sections/AboutSection';
import Message from 'Components/Message';
import Loader from 'Components/Loader';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100vw;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const Backdrop = styled.div`
  position: absolute;
  top: ${(props) => props.theme.headerHeight};
  left: 0;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100vw;
  filter: blur(5px);
`;

const ItemContainer = styled.div`
  ${(props) => props.theme.flexCenter}
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const AboutPresenter = ({ items, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>Magnificent | ABOUT</title>
      </Helmet>
      <Container bgUrl={require('Components/assets/photo_2.jpg')}>
        {/* <Backdrop bgUrl={require('Components/assets/photo_2.jpg')} /> */}
        <ItemContainer>
          {items &&
            items.length > 0 &&
            items.map((item) => (
              <AboutSection
                key={item.id}
                id={item.id}
                name={item.name}
                imageUrl={item.product_image}
              />
            ))}
        </ItemContainer>
        {error && <Message color='e74c3c' text={error} />}
      </Container>
    </>
  );

export default AboutPresenter;
