import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  ${(props) => props.theme.columnCenter};
  width: 100%;
`;

const PurchaseContainer = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
  }
  ${(props) => props.theme.flexBetweenCenter};
  width: 80%;
  display: flex;
  padding: 50px 100px;
  border-bottom: 1px solid #dbdbdb;
`;

const Name = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
    margin-bottom: 30px;
  }
  ${(props) => props.theme.flexStartCenter};
  width: 50%;
  font-size: 32px;
  border-right: 1px solid black;
`;

const RightContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  ${(props) => props.theme.flexEndCenter};
  width: 50%;
`;

const PriceContainer = styled.div`
  ${(props) => props.theme.columnCenter};
`;

const Price1 = styled.div`
  font-size: 14px;
  margin-bottom: 15px;
`;

const Price2 = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

const PurchaseBtn = styled.div`
  background-color: ${(props) => props.theme.mainColor};
  padding: 20px 60px;
  color: #fafafa;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 50px;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const InfoContainer = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
    flex-direction: column-reverse;
  }
  display: flex;
  justify-content: center;
  width: 80%;
  padding: 50px 0;
`;

const InfoContainer2 = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
  }
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding-top: 50px;
  padding-bottom: 150px;
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
    height: auto;
  }
  ${(props) => props.theme.columnCenter};
  justify-content: center;
  width: 40%;
  height: 500px;
`;

const TextSection = styled.div`
  width: 100%;
`;

const Text = styled.div`
  font-size: 28px;
  padding: 5px 0;
`;

const SmallText = styled.div`
  font-size: 13px;
  color: #565555;
  padding: 3px;
`;

const Image = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  width: 50%;
  height: 500px;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center center;
`;

const InfoTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  padding: 10px 0;
`;

const InfoBlur = styled.div`
  font-size: 15px;
  /* font-weight: 700; */
  opacity: 0.6;
  padding: 10px 0 30px 0;
`;

const InfoSection = styled.div`
  display: flex;
  font-size: 18px;
  /* font-weight: 700; */
  opacity: 0.9;
  padding: 10px 0;
`;

const SectionTitle = styled.div`
  width: 200px;
`;

const SectionContent = styled.div``;

const Tomato = () => {
  return (
    <Container>
      <PurchaseContainer>
        <Name>디톡스 토마토 500ml</Name>
        <RightContainer>
          <PriceContainer>
            <Price1>단품가 4,900원</Price1>
            <Price2>구독가 3,900원</Price2>
          </PriceContainer>
          <PurchaseBtn>구매하기</PurchaseBtn>
        </RightContainer>
      </PurchaseContainer>
      <InfoContainer>
        <TextContainer>
          <TextSection>
            <Text>브라질 세라도 &</Text>
            <Text>몬테카멜로</Text>
            <Text
              style={{ fontSize: '30px', fontWeight: '700', padding: '10px 0' }}
            >
              디톡스 토마토
            </Text>
            <SmallText>토마토 추출액(생과일 오렌지 100%), 증류수</SmallText>
          </TextSection>
        </TextContainer>
        <Image bgUrl={require(`Components/assets/ProductInfo/product3.png`)} />
      </InfoContainer>
      <InfoContainer2>
        <Image
          bgUrl={require(`Components/assets/ProductInfo/product3_1.png`)}
        />
        <TextContainer>
          <TextSection>
            <InfoTitle>영양정보</InfoTitle>
            <InfoBlur>총 내용량당 영양성분(700ml)</InfoBlur>
            <InfoSection>
              <SectionTitle>열량</SectionTitle>
              <SectionContent>156 kcal</SectionContent>
            </InfoSection>
            <InfoSection>
              <SectionTitle>탄수화물</SectionTitle>
              <SectionContent>28 g</SectionContent>
            </InfoSection>
            <InfoSection>
              <SectionTitle>당류</SectionTitle>
              <SectionContent>19 g</SectionContent>
            </InfoSection>
            <InfoSection>
              <SectionTitle>지방</SectionTitle>
              <SectionContent>0.6 g</SectionContent>
            </InfoSection>
            <InfoSection>
              <SectionTitle>단백질</SectionTitle>
              <SectionContent>9 g</SectionContent>
            </InfoSection>
            <InfoSection>
              <SectionTitle>트렌스지방</SectionTitle>
              <SectionContent>0 g</SectionContent>
            </InfoSection>
            <InfoSection>
              <SectionTitle>포화지방</SectionTitle>
              <SectionContent>0.5 g</SectionContent>
            </InfoSection>
          </TextSection>
        </TextContainer>
      </InfoContainer2>
    </Container>
  );
};

export default Tomato;
