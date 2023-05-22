import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import LookBookSection from 'Components/Sections/LookBookSection';
import SideMenu from 'Components/SideMenu';
import Loader from 'Components/Loader';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100vw;
`;

const ItemContainer = styled.div`
  @media screen and (max-width: 900px) {
    width: 100%;
    margin-left: 0;
  }
  ${(props) => props.theme.flexStartCenter}
  flex-wrap: wrap;
  width: 80%;
  margin-left: 20%;
`;

const LookBookPresenter = ({ items, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>Hipster | LOOKBOOK</title>
      </Helmet>
      <Container>
        <SideMenu />
        <ItemContainer>
          {items &&
            items.length > 0 &&
            items.map((item) => (
              <LookBookSection
                key={item.id}
                id={item.id}
                imageUrl={item.main_image}
              />
            ))}
        </ItemContainer>
      </Container>
    </>
  );

LookBookPresenter.propTypes = {
  items: PropTypes.array,
  itemNum: PropTypes.number,
};

export default LookBookPresenter;
