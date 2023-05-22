import React from 'react';
import styled from 'styled-components';
import Main from 'Components/Home/Main';
import OurWork from 'Components/Home/OurWork';
import OurStory from 'Components/Home/OurStory';
import OurService from 'Components/Home/OurService';
import People from 'Components/Home/People';
import { Helmet } from 'react-helmet';
import { useHomeRef, useScroll, useController } from 'utils';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  padding-top: ${(props) => props.theme.headerHeight};
`;

const Home = () => {
  const homeRef = useHomeRef();
  const { y } = useScroll();
  const controller = useController(homeRef, y);

  return (
    <Container>
      <Helmet>
        <title>TITLE</title>
      </Helmet>
      <Main mainRef={homeRef.mainRef} />
      <OurWork ourWorkRef={homeRef.ourWorkRef} controller={controller} />
      <OurStory ourStoryRef={homeRef.ourStoryRef} controller={controller} />
      <OurService
        ourServiceRef={homeRef.ourServiceRef}
        controller={controller}
      />
      <People />
    </Container>
  );
};

export default Home;
