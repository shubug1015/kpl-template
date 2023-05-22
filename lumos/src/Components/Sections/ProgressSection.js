import React, { useState } from 'react';
import styled from 'styled-components';
import ProgressContents from 'Components/ProgressContents';

const Container = styled.div`
  width: 100vw;
  margin: 120px 0;
`;

const TitleContainer = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100%;
`;

const Text1 = styled.div`
  font-size: 28px;
  font-weight: 900;
  color: ${(props) => props.theme.mainColor};
  padding: 20px 5px 10px 5px;
`;

const Text2 = styled.div`
  font-size: 20px;
  padding: 10px 0;
`;

const ListContainer = styled.div`
  ${(props) => props.theme.flexCenter};
  flex-wrap: wrap;
  padding: 30px 0px;
`;

const ListSection = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 200px;
  /* height: 180px; */
  /* background-color: ${(props) => props.theme.mainColor}; */
  margin: 20px 10px;
`;

const ListNum = styled.div`
  ${(props) => props.theme.flexCenter}
  width: ${(props) => (props.show ? '35px' : '22px')};
  height: ${(props) => (props.show ? '35px' : '22px')};
  font-size: ${(props) => (props.show ? '17px' : '12px')};
  /* background-color: yellow; */
  border: 2px solid ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.mainColor};
  border-radius: 999px;
  margin-bottom: 10px;
`;

const ListBox = styled.div`
  ${(props) => props.theme.columnCenter};
  justify-content: center;
  background-color: ${(props) => (props.show ? '#892cdc' : '#fafafa')};
  color: ${(props) => (props.show ? '#fafafa' : '#892cdc')};
  width: 100%;
  height: 150px;
  border: 2px solid ${(props) => props.theme.mainColor};
  border-radius: 10px;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;

const ListText1 = styled.div`
  font-size: 16px;
  font-weight: 700;

  padding: 5px 0;
`;

const ListText2 = styled.div`
  font-size: 16px;
  font-weight: 700;

  padding: 5px 0;
`;

const ProgressSection = () => {
  const list = [
    { id: 1, title1: '1:1 상담 및', title2: '컨설팅 계약' },
    { id: 2, title1: '브랜드 맞춤', title2: '타겟 설정' },
    { id: 3, title1: '타겟 맞춤', title2: '채널 설정' },
    { id: 4, title1: '컨텐츠 기획 및', title2: '실제 컨설팅 진행' },
  ];

  const [page, setPage] = useState(1);

  return (
    <Container>
      <TitleContainer>
        <Text1>LUMOS만의 디지털 마케팅!</Text1>
        <Text2>어떻게 진행 될까요?</Text2>
      </TitleContainer>
      <ListContainer>
        {list.map((l) => (
          <ListSection key={l.id}>
            <ListNum show={l.id === page}>{l.id}</ListNum>
            <ListBox onClick={() => setPage(l.id)} show={l.id === page}>
              <ListText1>{l.title1}</ListText1>
              <ListText2>{l.title2}</ListText2>
            </ListBox>
            {/* <UnderLine show={l.id === page} /> */}
          </ListSection>
        ))}
      </ListContainer>
      <ProgressContents page={page} />
    </Container>
  );
};

export default ProgressSection;
