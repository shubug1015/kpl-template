import React from 'react';
import styled from 'styled-components';
import { RiGooglePlayLine } from 'react-icons/ri';
import { AiOutlineApple } from 'react-icons/ai';

const Container = styled.div`
  background-color: #ededed;
  width: 100%;
  /* color: #fafafa; */
  border-top: 1px solid black;
  margin-top: 70px;
  padding: 30px 0;
`;

const TitleContainer = styled.div`
  ${(props) => props.theme.columnCenter}
  justify-content:center;
  width: 100%;
  height: 70%;
  font-weight: 600;
`;

const Text1 = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 16px;
  }
  ${(props) => props.theme.flexCenter}
  width: 100%;
  font-size: 19px;
`;

const Text2 = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 28px;
  }
  ${(props) => props.theme.flexCenter}
  width: 100%;
  font-size: 30px;
  margin: 20px 0;
  color: ${(props) => props.theme.mainColor};
`;

const BtnContainer = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100%;
  margin-top: 30px;
`;

const AppBtn = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 10px;
  }
  ${(props) => props.theme.flexCenter}
  font-size: 12px;
  font-weight: 600;
  border: 1px solid black;
  border-radius: 20px;
  padding: 10px;
  margin: 0 10px;
  cursor: pointer;
`;

const AppSection = () => {
  return (
    <Container>
      <TitleContainer>
        <Text1>No.1 디지털 마케팅</Text1>
        <Text2>LUMOS</Text2>
        <Text1>앱으로도 만나보세요!</Text1>
      </TitleContainer>
      <BtnContainer>
        <AppBtn>
          <RiGooglePlayLine style={{ marginRight: '5px' }} size={20} />
          Google Play
        </AppBtn>
        <AppBtn>
          <AiOutlineApple style={{ marginRight: '5px' }} size={20} />
          App Store
        </AppBtn>
      </BtnContainer>
    </Container>
  );
};

export default AppSection;
