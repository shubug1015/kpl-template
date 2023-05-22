import React from 'react';
import styled from 'styled-components';
import { RiGooglePlayLine } from 'react-icons/ri';
import { AiOutlineApple } from 'react-icons/ai';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
    padding: 70px 0;
  }
  ${(props) => props.theme.flexCenter}
  background-color: #8c8c8c;
  width: 100%;
  color: #fafafa;
  font-family: 'Noto Sans KR', sans-serif;
`;

const TitleContainer = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
  }
  ${(props) => props.theme.flexCenter}
  justify-content:center;
`;

const Text1 = styled.div`
  @media only screen and (max-width: 900px) {
    padding: 10px 0;
  }
  ${(props) => props.theme.flexCenter}
  font-size: 15px;
  font-weight: 600;
  padding: 50px 20px;
`;

const Text2 = styled.div`
  @media only screen and (max-width: 900px) {
    padding: 20px 0;
  }
  ${(props) => props.theme.flexCenter}
  font-size: 25px;
  padding: 50px 20px;
`;

const BtnContainer = styled.div`
  @media only screen and (max-width: 900px) {
    padding: 40px 0;
  }
  ${(props) => props.theme.flexCenter}
`;

const GoogleBtn = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 12px;
  }
  ${(props) => props.theme.flexCenter}
  font-size: 15px;
  background-color: black;
  border: 2px solid #fafafa;
  border-radius: 20px;
  padding: 10px;
  margin: 0 10px;
  cursor: pointer;
`;

const AppStoreBtn = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 12px;
  }
  ${(props) => props.theme.flexCenter}
  font-size: 15px;
  background-color: black;
  font-weight: lighter;
  border: 2px solid #fafafa;
  border-radius: 20px;
  padding: 10px;
  margin: 0 10px;
  cursor: pointer;
`;

const AppSection = () => {
  return (
    <Container>
      <TitleContainer>
        <Text1>365일 24시간 이용 가능</Text1>
        <Text2>오렌지뱅크 App 다운 받기</Text2>
      </TitleContainer>
      <BtnContainer>
        <GoogleBtn>
          <RiGooglePlayLine style={{ marginRight: '5px' }} size={20} />
          Google Play
        </GoogleBtn>
        <AppStoreBtn>
          <AiOutlineApple style={{ marginRight: '5px' }} size={20} />
          App Store
        </AppStoreBtn>
      </BtnContainer>
    </Container>
  );
};

export default AppSection;
