import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import BrandControll from 'Components/Sections/BrandControll';
import BrandStory from 'Components/Sections/BrandStory';
import BrandSNS from 'Components/Sections/BrandSNS';
import BrandStore from 'Components/Sections/BrandStore';

const Container = styled.div`
  ${(props) => props.theme.columnCenter};
  align-items: center;
  width: 100vw;
  padding: 50px 0;
  margin-top: ${(props) => props.theme.headerHeight};
`;

const Image = styled.div`
  width: 85%;
  height: 40vh;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
  }
  display: flex;
  justify-content: space-between;
  width: 85%;
  padding-top: 20px;
`;

const Section = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  width: 80%;
`;

const DetailPresenter = () => {
  const [brandOption, setBrandOption] = useState(0);
  const updateOption = (option) => {
    setBrandOption(option);
  };

  return (
    <>
      <Helmet>
        <title>BRAND</title>
      </Helmet>
      <Container>
        <Image bgUrl={require('Components/assets/BrandImg1.jpg')} />
        <Content>
          <BrandControll updateOption={updateOption} />
          <Section>
            {parseInt(brandOption) === 0 ? (
              <BrandStory />
            ) : parseInt(brandOption) === 1 ? (
              <BrandSNS />
            ) : (
              <BrandStore />
            )}
          </Section>
        </Content>
      </Container>
    </>
  );
};

export default DetailPresenter;
