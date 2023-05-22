import React, { useState } from 'react';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import DetailNavber from 'Components/Mypage/DetailNavbar';
import Info from 'Components/Mypage/Info';
import Profile from 'Components/Mypage/Profile';
import Cart from 'Components/Mypage/Cart';
import Favs from 'Components/Mypage/Favs';
import Orders from 'Components/Mypage/Orders';

const Container = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 100vw;
`;

const Content = styled.div`
  @media screen and (max-width: 900px) {
    width: 90%;
  }
  width: 50%;
  margin-top: 100px;
`;

const Section = styled.div`
  width: 100%;
`;

const MyPagePresenter = ({
  user,
  cart,
  fav,
  purchase,
  exchange,
  refund,
  initialSection,
  loading,
}) => {
  const [brandOption, setBrandOption] = useState(initialSection);
  const updateOption = (option) => {
    setBrandOption(parseInt(option));
  };

  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Content>
        <DetailNavber
          updateOption={updateOption}
          initialSection={initialSection}
        />
        <Section>
          {brandOption === 0 ? (
            <Info />
          ) : brandOption === 1 ? (
            <Profile user={user} />
          ) : brandOption === 2 ? (
            <Cart cart={cart} />
          ) : brandOption === 3 ? (
            <Favs fav={fav} />
          ) : (
            <Orders purchase={purchase} exchange={exchange} refund={refund} />
          )}
        </Section>
      </Content>
    </Container>
  );
};

export default MyPagePresenter;
