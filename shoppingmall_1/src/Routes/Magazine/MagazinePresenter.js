import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import MagazineSection from 'Components/Sections/MagazineSection';
import Loader from 'Components/Loader';
import FlipPage from 'react-flip-page';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100vw;
  height: 120vh;
  margin: 5vh 0;
`;

const MagazinePresenter = ({ items, loading }) => {
  const flipPageSettings = {
    orientation: 'horisontal',
    responsive: true,
    uncutPages: false,
    animationDuration: 350,
    treshold: 3,
    pageBackground: 'transparent',
    flipOnTouch: true,
  };
  return loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>Hipster | MAGAZINE </title>
      </Helmet>
      <Container>
        <FlipPage {...flipPageSettings}>
          {items &&
            items.length > 0 &&
            items.map((item) => (
              <MagazineSection
                key={item.id}
                id={item.id}
                imageUrl={item.main_image}
              />
            ))}
        </FlipPage>
      </Container>
    </>
  );
};

export default MagazinePresenter;
