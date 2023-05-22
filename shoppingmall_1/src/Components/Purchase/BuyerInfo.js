import React from 'react';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';
import { buyerInfo } from 'Components/Lists';
import { FaCircle } from 'react-icons/fa';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    width: 95vw;
  }
  ${(props) => props.theme.columnCenter};
  width: 85vw;
`;

const TitleContainer = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 100%;
  margin-bottom: 30px;
`;

const Title = styled.div`
  ${(props) => props.theme.flexCenter}
  background:black;
  width: 200px;
  height: 18px;
  color: white;
  font-size: 15px;
  font-weight: 400;
`;

const Icon = styled.div`
  font-size: 12px;
  font-weight: 700;
  margin-left: 10px;
`;

const InfoContainer = styled.div`
  width: 100%;
`;

const Section = styled.div`
  ${(props) => props.theme.flexCenter}
  border: ${(props) => props.theme.mainBorder};
  width: 100%;
  height: 70px;
`;

const Type = styled.div`
  @media only screen and (max-width: 900px) {
    width: 20%;
  }
  ${(props) => props.theme.flexCenter}
  border-right: ${(props) => props.theme.mainBorder};
  width: 30%;
  font-size: 11px;
  font-weight: 700;
`;

const Content = styled.div`
  @media only screen and (max-width: 900px) {
    width: 70%;
  }
  display: flex;
  flex-direction: ${(props) => (props.address ? 'row' : 'column')};
  background-color: ${(props) => props.theme.whiteColor};
  width: 40%;
  padding: 10px;
`;

const InputContainer = styled.div`
  ${(props) => props.theme.columnCenter};
  width: 60%;
`;

const Input = styled.input`
  @media only screen and (max-width: 900px) {
    width: 150px;
  }
  margin-bottom: ${(props) => (props.address ? '5px' : '0')};
  border: 1px solid black;
  /* border-radius: 4px; */
  width: 200px;
  height: 27px;
  padding-left: 5px;
  font-size: 11px;
  outline: none;
`;

const BtnContainer = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 40%;
`;

const Btn = styled.div`
  @media only screen and (max-width: 900px) {
    width: 48%;
    margin: 0 1%;
  }
  border: ${(props) => props.theme.blackBorder};
  border-radius: 4px;
  padding: 5px;
  margin: 5px;
  font-size: 11px;
`;

const DaumPostContainer = styled.div``;

const BuyerInfo = ({
  user,
  open,
  handleName,
  handleMainAddress,
  handleDetailAddress,
  handlePostcode,
  handlePhoneNum,
  handleEmail,
  handleMessage,
  // Daum 주소 검색 함수
  openAddress,
  completeAddress,
  initAddress,
}) => {
  const data = [
    user.name,
    user.mainAddress,
    user.detailAddress,
    user.postcode,
    user.phone_number,
    user.email,
    user.message,
  ];
  const handleFunc = [
    handleName,
    handleMainAddress,
    handleDetailAddress,
    handlePostcode,
    handlePhoneNum,
    handleEmail,
    handleMessage,
  ];
  return (
    <Container>
      {open && (
        <DaumPostContainer>
          <DaumPostcode onComplete={completeAddress} />
        </DaumPostContainer>
      )}
      <TitleContainer>
        <Title>배송 정보</Title>
        <Icon>
          <FaCircle size={3} color={'red'} /> 필수 입력 정보
        </Icon>
      </TitleContainer>
      <InfoContainer>
        {buyerInfo &&
          buyerInfo.length > 0 &&
          buyerInfo.map((info) => (
            <Section key={info.id}>
              <Type>
                {info.id !== 4 && info.id !== 5 && (
                  <FaCircle size={3} color={'red'} />
                )}
                {info.title}
              </Type>
              <Content address={info.id === 1}>
                <InputContainer>
                  {info.input.map((i) => (
                    <Input
                      key={i.num}
                      type='text'
                      placeholder={data[i.num]}
                      value={data[i.num]}
                      onChange={handleFunc[i.num]}
                      address={info.id === 1}
                    />
                  ))}
                </InputContainer>
                {info.id === 1 && (
                  <BtnContainer>
                    <Btn onClick={openAddress}>주소검색</Btn>
                    <Btn onClick={initAddress}>초기화</Btn>
                  </BtnContainer>
                )}
              </Content>
            </Section>
          ))}
      </InfoContainer>
    </Container>
  );
};

export default BuyerInfo;
