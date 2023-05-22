import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
    padding-top: 50px;
  }
  ${(props) => props.theme.flexCenter}
  width: 90%;
  padding: 80px 0;
`;

const Image = styled.div`
  @media only screen and (max-width: 900px) {
    width: 90%;
    height: 65vw;
  }
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  width: 70%;
  height: 50vw;
`;

const Lists = styled.div`
  ${(props) => props.theme.columnStartCenter}
  width: 400px;
  padding-left: 80px;
`;

const Item = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Content = styled.div`
  margin-bottom: 10px;
  font-size: 15px;
`;

const Second = () => {
  const list = [
    {
      id: 0,
      title: '어디서나 작업하세요',
      content1: '노트를 모든 장치에 동기화해 중요한',
      content2: '정보를 간편하게 이용하세요.',
    },
    {
      id: 1,
      title: '중요한 자료를 캡쳐하세요',
      content1: '텍스트, 이미지, 오디오, 스캔, PDF, 문서를',
      content2: '노트에 추가하세요.',
    },
    {
      id: 2,
      title: '원하는대로 노트를 만드세요',
      content1: '생각의 흐름대로 필기할 수 있게 도와주는표현하세요.',
      content2: '서식 지정 도구들을 이용해 자유롭게',
      content3: '표현하세요',
    },
    {
      id: 3,
      title: '빠르게 찾으세요',
      content1: '필요한 때에 필요한 정보를 찾으세요 검색',
      content2: '제안 기능으로 원하는 결과가 표시됩니다.',
    },
  ];
  return (
    <Container>
      <Image bgUrl={require('Components/assets/main_1.png')} />
      <Lists>
        {list.map((l) => (
          <Item key={l.id}>
            <Title>{l.title}</Title>
            <Content>{l.content1}</Content>
            <Content>{l.content2}</Content>
            <Content>{l.content3}</Content>
          </Item>
        ))}
      </Lists>
    </Container>
  );
};

export default Second;
