import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  ${(props) => props.theme.columnCenter}
  justify-content: flex-start;
  background-color: #fafafa;
  width: 100%;
`;

const Title = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 25px;
  }
  ${(props) => props.theme.flexStartCenter}
  width: 95%;
  padding-bottom: 20px;
  margin-top: 50px;
  border-bottom: 3px solid black;
  font-size: 30px;
  font-weight: 400;
`;

const Content = styled.div`
  ${(props) => props.theme.flexStartCenter}
  align-items: flex-start;
  flex-wrap: wrap;
  width: 95%;
`;

const List = styled.div`
  @media only screen and (max-width: 900px) {
    width: 31%;
    margin: 30px 1.16%;
    font-size: 12px;
  }
  width: 20%;
  margin-top: 30px;
  font-size: 12px;
  font-weight: 400;
`;

const Item = styled.div`
  margin-bottom: 30px;
  :not(:first-child) {
    margin-bottom: 30px;
    opacity: 0.6;
    :hover {
      cursor: pointer;
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
  }
`;

const Footer = () => {
  const lists = [
    {
      id: 0,
      items: [
        '제품',
        '왜 Titans Note인가요',
        'Titans Note 베이직',
        'Titans Note 프리미엄',
        'Titans Note 비즈니스',
        '서비스 등급 비교',
        '학생 할인',
        '앱 다운로드',
      ],
    },
    {
      id: 1,
      items: [
        '기능',
        'Web Clipper',
        '템플릿',
        '스페이스',
        '통합 기능',
        '노트 동기화',
        'PDF & 문서 검색',
        '손글씨 검색',
        '문서 스캔',
        '노트북 & 태그',
      ],
    },
    {
      id: 2,
      items: [
        '커뮤니티',
        'Titans Note 커뮤니티',
        '공인 컨설턴트',
        '베타 프로그램',
        '개발자',
        '이벤트',
        '포럼',
      ],
    },
    {
      id: 3,
      items: ['지원', '지원 및 도움말', '문제 해결', '블로그'],
    },
    {
      id: 4,
      items: ['회사', 'Titans Note 회사 소개', '채용 정보', '지원 문의'],
    },
  ];

  return (
    <Container>
      <Title>Titan's Note</Title>
      <Content>
        {lists &&
          lists.length > 0 &&
          lists.map((list) => (
            <List key={list.id} id={list.id}>
              {list.items.map((item) => (
                <Item key={item}>{item}</Item>
              ))}
            </List>
          ))}
      </Content>
    </Container>
  );
};

export default Footer;
