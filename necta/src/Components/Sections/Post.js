import React, { useState } from 'react';
import styled from 'styled-components';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { GoPrimitiveDot } from 'react-icons/go';

const Container = styled.div`
  ${(props) => props.theme.columnCenter};
  width: 80%;
  padding: 100px 0;
`;

const Title = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 22px;
  }
  width: 95%;
  font-size: 32px;
  border-bottom: 2px solid #dddddd;
  padding-bottom: 30px;
`;

const SectionContainer = styled.div`
  width: 95%;
  padding-right: 20px;
  cursor: pointer;
  border-bottom: 1px solid #dddddd;
`;

const Section = styled.div`
  ${(props) => props.theme.flexBetweenCenter}
`;

const SectionTitle = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 16px;
  }
  padding: 30px 0;
  opacity: 0.8;
`;

const SectionDetail = styled.div`
  @media only screen and (max-width: 900px) {
    height: ${(props) => (props.open ? '250px' : '0px')};
  }
  /* display: ${(props) => (props.open ? 'flex' : 'none')}; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: ${(props) => (props.open ? '20px' : '0 20px')}; */
  height: ${(props) => (props.open ? '250px' : '0px')};
  overflow: hidden;
  transition: height 0.3s ease-in-out, padding 0.3s ease-in-out;
`;

const DetailText = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  padding: 5px 0;
  opacity: ${(props) => (props.open ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
`;

const Post = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handdleOpen1 = () => setOpen1(!open1);
  const handdleOpen2 = () => setOpen2(!open2);

  const list1 = [
    { id: 0, text: '배송 업체 : CJ대한통운' },
    { id: 1, text: '배송 지역 : 전국' },
    { id: 2, text: '배송비 : 무료배송' },
    { id: 3, text: '배송 소요일 : 출고일 기준 1~2일' },
    { id: 4, text: '업무일 기준 15시 이전 결제 시 : 당일 출고' },
    { id: 5, text: '업무일 기준 15시 이전 결제 시 : 익일 출고' },
  ];

  const list2 = [
    { id: 0, text: '제품에 하자가 있을 시 고객센터로 문의주세요.' },
    {
      id: 1,
      text: '당일 제조 되는 제품 특성상 단순 변심에 의한 환불은 불가능합니다.',
    },
    { id: 2, text: '출고건에 대해서는 취소가 불가능합니다.' },
    { id: 3, text: '이미 출고된 상품의 경우 배송지 변경이 불가능합니다.' },
  ];

  return (
    <Container>
      <Title>배송 안내</Title>
      <SectionContainer onClick={handdleOpen1}>
        <Section>
          <SectionTitle>주문 및 배송 안내</SectionTitle>
          {open1 ? (
            <RiArrowDropUpLine size={33} />
          ) : (
            <RiArrowDropDownLine size={33} />
          )}
        </Section>
        <SectionDetail open={open1}>
          {list1.map((l) => (
            <DetailText open={open1} key={l.id}>
              <GoPrimitiveDot style={{ marginRight: '10px' }} />
              {l.text}
            </DetailText>
          ))}
        </SectionDetail>
      </SectionContainer>
      <SectionContainer onClick={handdleOpen2}>
        <Section>
          <SectionTitle>교환 및 반품 안내</SectionTitle>
          {open2 ? (
            <RiArrowDropUpLine size={33} />
          ) : (
            <RiArrowDropDownLine size={33} />
          )}
        </Section>
        <SectionDetail open={open2}>
          {list2.map((l) => (
            <DetailText open={open2} key={l.id}>
              <GoPrimitiveDot style={{ marginRight: '10px' }} />
              {l.text}
            </DetailText>
          ))}
        </SectionDetail>
      </SectionContainer>
    </Container>
  );
};

export default Post;
