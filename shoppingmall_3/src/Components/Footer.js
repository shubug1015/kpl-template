import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
  }
  position: absolute;
  ${(props) => props.theme.flexCenter}
  background-color: #fafafa;
  width: 100vw;
  /* height: 250px; */
  z-index: 1;
  margin-top: 50px;
`;

const Content = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
    flex-wrap: wrap;
  }
  display: flex;
  justify-content: space-around;
  width: 50%;
`;

const List = styled.div`
  @media only screen and (max-width: 900px) {
    width: 50%;
    margin-bottom: 20px;
  }
  ${(props) => props.theme.columnCenter}
`;

const Type = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  width: 120px;
`;

const Item = styled.div`
  width: 120px;
  margin-top: 7px;
  font-size: 12px;
  opacity: 0.7;
  :hover {
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Info = styled.div`
  @media only screen and (max-width: 900px) {
    display: none;
  }
  ${(props) => props.theme.columnEndCenter}
  justify-content: center;
  border-left: 1px solid #dbdbdb;
  width: 50%;
  margin-left: 80px;
  padding-left: 40px;
`;

const Text = styled.div`
  width: 100%;
  font-size: 12px;
  opacity: 0.7;
  :not(:first-child) {
    margin-top: 20px;
  }
  :nth-child(2) {
    margin-top: 25px;
  }
`;

const Footer = () => {
  const list = [
    {
      id: 0,
      type: 'Information',
      items: ['About us', '이용약관', '개인정보처리방침'],
    },
    {
      id: 1,
      type: 'Customer Service',
      items: ['문의', '배송 안내', '상담', '교환 및 환불 규정', '주문 조회'],
    },
    {
      id: 2,
      type: 'SNS',
      items: ['Instagram', 'Facebook', 'Blog'],
    },
    {
      id: 3,
      type: '02-000-0000',
      items: [
        '평일 오전 9시 - 오후 6시',
        '점심시간 오후 12 - 1시',
        '주말, 공휴일 휴무',
      ],
    },
  ];

  return (
    <Container>
      <Content>
        {list &&
          list.length > 0 &&
          list.map((l) => (
            <List key={l.id} id={l.id}>
              <Type>{l.type}</Type>
              {l.items.map((i) => (
                <Item key={i}>{i}</Item>
              ))}
            </List>
          ))}
      </Content>
      <Info>
        <Text>(주)엡페토</Text>
        <Text>
          서울 강남구 영동대로 OOO길 OO [OO, Yeongdongdae-ro OOO-gil,
          Gangnam-gu, Seoul, Korea]
        </Text>
        <Text>
          사업자 등록번호. OOO-OO-OOOOO . 통신판매업. 신고번호 제
          OOOO-서울강남-OOOOO호
        </Text>
        <Text>
          개인정보관리책임자 . 웹페토 [OOOO_@OOOOO.co.kr] . TEL. 02-000-0000 .
        </Text>
        <Text>Copylight(c) 2020 Webpetto. All Right Reserved.</Text>
      </Info>
    </Container>
  );
};

export default Footer;
