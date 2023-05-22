import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoIosHeartEmpty } from 'react-icons/io';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
  }
  display: flex;
  width: 90%;
  /* height: 600px; */
  margin: 0 5%;
  padding: 15px;
`;

const Image = styled.img`
  @media only screen and (max-width: 900px) {
    width: 75%;
    height: 50vw;
  }
  width: 40%;
  height: 500px;
  /* background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center; */
`;

const DetailContainer = styled.div`
  @media only screen and (max-width: 768px) {
    width: 90%;
    margin-top: 30px;
    border-top: ${(props) => props.theme.mainBorder};
    border-bottom: ${(props) => props.theme.mainBorder};
  }
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 50px;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 120px;
  ${(props) => props.theme.columnCenter};
  margin-bottom: 20px;
  /* background-color: red; */
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50%;
  font-size: 23px;
  font-weight: bold;
  padding-left: 20px;
`;

const EffectContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50%;
`;

const Effect = styled.div`
  @media only screen and (max-width: 900px) {
    width: 33%;
  }
  ${(props) => props.theme.flexCenter};
  height: 22px;
  border: ${(props) => props.theme.mainBorder};
  border-radius: 10px;
  padding: 7px;
  font-size: 11px;
  font-weight: bold;
  opacity: 0.6;
  margin-right: 10px;
`;

const MidContainer = styled.div`
  width: 100%;
  ${(props) => props.theme.columnCenter};
  margin-bottom: 30px;
  /* background-color: blue; */
`;

const SectionContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  margin: 10px 0px;
`;

const SectionTitle = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 12px;
`;

const SectionContent = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
`;

const SectionText = styled.div`
  margin: 3px 0;
`;

const Select = styled.div`
  ${(props) => props.theme.flexStartCenter}
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

const Option = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 43px;
  height: 40px;
  margin-right: 5%;
  font-size: 11px;
  cursor: pointer;
`;

const QtyNum = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 30px;
  height: 30px;
  font-weight: lighter;
`;

const QtyBtn = styled.div`
  text-align: center;
  line-height: 20px;
  width: 20px;
  height: 20px;
  padding: 0;
  color: black;
  font-weight: lighter;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const BottomContainer = styled.div`
  width: 100%;
  height: 100px;
  /* background-color: green; */
`;

const TotalPrice = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
`;

const TotalPriceTitle = styled.div`
  ${(props) => props.theme.flexCenter};
  font-size: 10px;
  padding: 0 10px;
`;

const TotalPriceText = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  padding: 0 10px;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60%;
`;

const PurchaseBtn = styled.div`
  ${(props) => props.theme.flexCenter}
  border: ${(props) => props.theme.mainBorder};
  color: #575757;
  width: 100px;
  height: 40px;
  margin-right: 10px;
  font-size: 12px;
  font-weight: 700;
`;

const CartBtn = styled.div`
  ${(props) => props.theme.flexCenter}
  background-color:  ${(props) => props.theme.mainColor};
  color: #575757;
  width: 100px;
  height: 40px;
  margin-right: 10px;
  font-size: 12px;
  font-weight: 700;
`;

const LikeBtn = styled.div`
  ${(props) => props.theme.flexCenter}
  border: ${(props) => props.theme.mainBorder};
  color: #808080;
  width: 50px;
  height: 40px;
  cursor: pointer;
`;

const SLink = styled(Link)`
  :hover {
    text-decoration: none;
  }
`;

const DetailSection = ({ detail }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [qty, setQty] = useState(1);

  const totalPrice = detail?.price * qty + 2500;

  const getOption = (option) => {
    setSelectedOption(option);
  };

  const plusQty = () => setQty(qty + 1);
  const minusQty = () => qty > 1 && setQty(qty - 1);

  const options = [
    { id: 0, name: '50ml' },
    { id: 1, name: '100ml' },
    { id: 2, name: '200ml' },
  ];

  return (
    <Container>
      <Image src={detail.main_image} alt={detail.name}></Image>
      <DetailContainer>
        <TopContainer>
          <Name>{detail.name}</Name>
          <EffectContainer>
            <Effect># 미백개선</Effect>
            <Effect># 주름개선</Effect>
            <Effect># 자외선차단</Effect>
          </EffectContainer>
        </TopContainer>
        <MidContainer>
          <SectionContainer>
            <SectionTitle>OPTION</SectionTitle>
            <Select>
              {options &&
                options.length > 0 &&
                options.map((option) => (
                  <Option
                    key={option.id}
                    value={option.name}
                    onClick={() => getOption(option.name)}
                    style={{
                      border:
                        selectedOption === option.name
                          ? '2px solid #9dfb9d'
                          : '1px solid #ccffcc',
                    }}
                  >
                    {option.name}
                  </Option>
                ))}
            </Select>
          </SectionContainer>
          <SectionContainer>
            <SectionTitle>가격</SectionTitle>
            <SectionContent>
              <SectionText>₩ {detail.price?.toLocaleString()}</SectionText>
            </SectionContent>
          </SectionContainer>
          <SectionContainer>
            <SectionTitle>수량</SectionTitle>
            <SectionContent>
              <QtyBtn onClick={minusQty}>-</QtyBtn>
              <QtyNum>{qty}</QtyNum>
              <QtyBtn onClick={plusQty}>+</QtyBtn>
            </SectionContent>
          </SectionContainer>
          <SectionContainer>
            <SectionTitle>배송비</SectionTitle>
            <SectionContent>
              <SectionText>₩ 2,500</SectionText>
            </SectionContent>
          </SectionContainer>
        </MidContainer>
        <BottomContainer>
          <TotalPrice>
            <TotalPriceTitle>TOTAL</TotalPriceTitle>
            <TotalPriceText>₩ {totalPrice.toLocaleString()}</TotalPriceText>
          </TotalPrice>
          <BtnContainer>
            <SLink to='/login'>
              <PurchaseBtn>구매하기</PurchaseBtn>
            </SLink>
            <SLink to='/login'>
              <CartBtn>장바구니</CartBtn>
            </SLink>
            <SLink to='/login'>
              <LikeBtn>
                <IoIosHeartEmpty size='22' />
              </LikeBtn>
            </SLink>
          </BtnContainer>
        </BottomContainer>
      </DetailContainer>
    </Container>
  );
};

export default DetailSection;
