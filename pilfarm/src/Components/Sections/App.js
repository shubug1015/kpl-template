import React from 'react';

import styled from 'styled-components';
import { RiGooglePlayLine } from 'react-icons/ri';
import { AiOutlineApple } from 'react-icons/ai';

const Container = styled.div`
  background-color: ${(props) => props.theme.mainColor};
  width: 100%;
  color: #fafafa;
  padding: 70px 0;
`;

const TitleContainer = styled.div`
  ${(props) => props.theme.columnCenter}
  justify-content:center;
  width: 100%;
`;

const Text1 = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 24px;
  }
  ${(props) => props.theme.flexCenter}
  width: 100%;
  font-size: 28px;
  font-weight: 900;
`;

const Text2 = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 38px;
  }
  ${(props) => props.theme.flexCenter}
  width: 100%;
  font-size: 18px;
  margin-top: 15px;
`;

const BtnContainer = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100%;
  margin-top: 30px;
`;

const GoogleBtn = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 11px;
    padding: 5px 10px;
  }
  ${(props) => props.theme.flexCenter}
  font-size: 15px;
  border: 2px solid #fafafa;
  border-radius: 25px;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
`;

const AppStoreBtn = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 11px;
    padding: 5px 10px;
  }
  ${(props) => props.theme.flexCenter}
  font-size: 15px;
  border: 2px solid #fafafa;
  border-radius: 25px;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
`;

const AppSection = () => {
  return (
    <Container>
      <TitleContainer>
        <Text1>No.1 모바일 건강식품 플랫폼, 필팜</Text1>
        <Text2>앱으로 만나보세요!</Text2>
      </TitleContainer>
      <BtnContainer>
        <GoogleBtn>
          <RiGooglePlayLine style={{ marginRight: '3px' }} size={20} />
          Google Play
        </GoogleBtn>
        <AppStoreBtn>
          <AiOutlineApple style={{ marginRight: '3px' }} size={20} />
          App Store
        </AppStoreBtn>
      </BtnContainer>
    </Container>
  );
};

export default AppSection;
