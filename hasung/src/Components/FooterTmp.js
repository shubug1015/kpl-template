import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: ${(props) => (props.hidden ? 'none' : '')};
  ${(props) => props.theme.columnCenter};
  background-color: #f9fafb;
  padding: 50px 0;
`;

const Title = styled.div`
  width: 80%;
  letter-spacing: 1px;
  font-size: 20px;
  font-weight: 700;
`;

const ContentContainer = styled.div`
  @media only screen and (max-width: 1100px) {
    ${(props) => props.theme.columnCenter};
    margin-top: 50px;
  }
  display: flex;
  width: 100%;
`;

const Content = styled.div`
  @media only screen and (max-width: 1100px) {
    width: 100%;
    justify-content: flex-start;
  }
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px 0 30px 50px;
`;

const SectionContainer = styled.div`
  width: 120px;
  font-size: 13px;
  font-weight: 700;
  margin-right: 30px;
  margin-bottom: 30px;
`;

const SectionTitle = styled.div`
  margin-bottom: 20px;
  opacity: 0.7;
`;

const Section = styled.div`
  padding: 5px 0;
  cursor: pointer;
  opacity: 0.6;
  :hover {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
`;

const InfoContainer = styled.div`
  @media only screen and (max-width: 1100px) {
    width: 100%;
    padding-left: 50px;
  }
  ${(props) => props.theme.columnStartCenter};
  width: 40%;
  padding: 30px 0;
`;

const Info = styled.div`
  font-size: 12px;
  font-weight: 700;
  opacity: 0.6;
  padding: 3px 0;
  letter-spacing: 1px;
`;

const ListContainer = styled.div`
  ${(props) => props.theme.flexBetweenCenter};
  width: 80%;
  margin-top: 30px;
`;

const List = styled.div`
  font-size: 14px;
  font-weight: 700;
  opacity: 0.8;

  cursor: pointer;
`;

const Footer = () => {
  const loca = useLocation().pathname;

  const list = [
    {
      id: 0,
      name: 'Service',
      lists: [
        { id: 0, title: '설계하기' },
        { id: 1, title: '공사하기' },
        { id: 2, title: '방문 상담' },
      ],
    },
    {
      id: 1,
      name: 'Solutions',
      lists: [
        { id: 0, title: '공사비예측리포트' },
        { id: 1, title: '공사대금 안전관리' },
      ],
    },
    {
      id: 2,
      name: 'Others',
      lists: [
        { id: 0, title: '파일 업로드' },
        { id: 1, title: '수량산출서' },
        { id: 2, title: '건축사 검색' },
      ],
    },
    {
      id: 3,
      name: 'Customer',
      lists: [
        { id: 0, title: '온라인 문의' },
        { id: 1, title: '전화 문의' },
      ],
    },
    {
      id: 4,
      name: 'Company',
      lists: [
        { id: 0, title: '하성 NOTICE' },
        { id: 1, title: '하성 TEAM' },
      ],
    },
  ];

  return (
    <Container hidden={loca === '/user'}>
      <Title>하성건설</Title>
      <ContentContainer>
        <Content>
          {list.map((l) => (
            <SectionContainer key={l.id}>
              <SectionTitle>{l.name}</SectionTitle>
              {l.lists.map((s) => (
                <Section key={s.id}>{s.title}</Section>
              ))}
            </SectionContainer>
          ))}
        </Content>
        <InfoContainer>
          <Info>사업자등록번호:000-00-00000 | 대표:홍길동</Info>
          <Info>주소:서울00구000로00-000</Info>
          <ListContainer>
            <List>이용약관</List>
            <List>개인정보처리방침</List>
            <List>전자공고</List>
          </ListContainer>
        </InfoContainer>
      </ContentContainer>
    </Container>
  );
};

export default Footer;
