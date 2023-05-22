import React, { Fragment } from 'react';
import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  background-color: #E0E2F9;
  width: 100%;
  padding: 100px 0;
`;

const TitleContainer = styled.div`
  ${(props) => props.theme.columnCenter}
  margin-bottom: 70px;
`;

const Title = styled.div`
  margin-bottom: 25px;
  font-size: 30px;
  font-weight: 700;
`;

const Content = styled.div`
  @media only screen and (max-width: 1100px) {
    font-size: 14px;
  }
  :not(:last-child) {
    margin-bottom: 7px;
  }
  opacity: 0.5;
`;

const BoxContainer = styled.div`
  @media only screen and (max-width: 1100px) {
    ${(props) => props.theme.columnCenter};
  }
  ${(props) => props.theme.flexBetweenCenter}
  width: 75%;
`;

const Box = styled.div`
  @media only screen and (max-width: 1100px) {
    width: 100%;
    margin-bottom: 30px;
  }
  ${(props) => props.theme.columnCenter}
  justify-content: center;
  background-color: #ffffff;
  border-radius: 10px;
  width: 49%;
  padding: 100px 0;
`;

const BoxTitleContainer = styled.div`
  ${(props) => props.theme.columnCenter}
  margin-bottom: 50px;
`;

const BoxTitle = styled.div`
  margin-bottom: 30px;
  color: ${(props) => props.theme.mainColor};
  font-size: 26px;
  font-weight: 700;
`;

const BoxSubtitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  opacity: 0.7;
  :last-child {
    font-weight: 400;
    margin-top: 10px;
    opacity: 0.5;
  }
`;

const BoxContentContainer = styled.div`
  @media only screen and (max-width: 1100px) {
    width: 90%;
  }
  ${(props) => props.theme.flexCenter}
  width: 80%;
`;

const BoxContent = styled.div`
  ${(props) => props.theme.columnStartCenter};
  margin: 0 20px;
`;

const BoxContentTitle = styled.div`
  margin-bottom: 20px;
  color: #7686a4;
  font-size: 14px;
  font-weight: 700;
`;

const BoxContentList = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 12px;
  }
  ${(props) => props.theme.flexCenter}
  :not(:last-child) {
    margin-bottom: 20px;
  }
  font-size: 15px;
  opacity: ${(props) => (props.except ? '0.2' : '0.7')};
`;

const Icon = styled.div`
  font-size: 20px;
`;

const Eighth = () => {
  const list = [
    {
      id: 0,
      title: '베이직',
      subtitle_1: '당장 설계가 필요하다면',
      subtitle_2: '빠르게 비교하고 계약하세요.',
      content: [
        {
          id: 0,
          title: '설계 준비',
          list: [
            {
              id: 0,
              name: '건축 컨설팅',
            },
            {
              id: 1,
              name: '건축사 모집',
            },
            {
              id: 2,
              name: '예비 건축사 미팅',
            },
            {
              id: 3,
              name: '기획설계 수령',
            },
            {
              id: 4,
              name: '공사 예산 비교',
            },
          ],
        },
        {
          id: 1,
          title: '설계 계약 ~ 착공',
          list: [
            {
              id: 5,
              name: '계약 가이드 제공',
            },
            {
              id: 6,
              name: '설계 협의 시스템',
            },
            {
              id: 7,
              name: '단계별 공사비 예측',
            },
            {
              id: 8,
              name: '최종 도면 검토',
            },
            {
              id: 9,
              name: '책임 공사제 적용',
            },
          ],
        },
      ],
    },
    {
      id: 1,
      title: 'PRO',
      subtitle_1: '건물 디자인도 비교하고 싶다면',
      subtitle_2: '기획설계 받아보고 계약하세요.',
      content: [
        {
          id: 0,
          title: '설계 준비',
          list: [
            {
              id: 10,
              name: '건축 컨설팅',
            },
            {
              id: 11,
              name: '건축사 모집',
            },
            {
              id: 12,
              name: '예비 건축사 미팅',
            },
            {
              id: 13,
              name: '기획설계 수령',
            },
            {
              id: 14,
              name: '공사 예산 비교',
            },
          ],
        },
        {
          id: 1,
          title: '설계 계약 ~ 착공',
          list: [
            {
              id: 15,
              name: '계약 가이드 제공',
            },
            {
              id: 16,
              name: '설계 협의 시스템',
            },
            {
              id: 17,
              name: '단계별 공사비 예측',
            },
            {
              id: 18,
              name: '최종 도면 검토',
            },
            {
              id: 19,
              name: '책임 공사제 적용',
            },
          ],
        },
      ],
    },
  ];
  return (
    <Container>
      <TitleContainer>
        <Title>요금별 진행 과정 안내</Title>
        <Content>
          기획설계 진행 여부에 따라 설계 계약 과정과 비용에 차이가 있습니다.
        </Content>
      </TitleContainer>
      <BoxContainer>
        {list.map((l) => (
          <Box key={l.id}>
            <BoxTitleContainer>
              <BoxTitle>{l.title}</BoxTitle>
              <BoxSubtitle>{l.subtitle_1}</BoxSubtitle>
              <BoxSubtitle>{l.subtitle_2}</BoxSubtitle>
            </BoxTitleContainer>
            <BoxContentContainer>
              {l.content.map((c) => (
                <BoxContent key={`content${c.id}`}>
                  <BoxContentTitle>{c.title}</BoxContentTitle>
                  {c.list.map((l) => (
                    <Fragment key={`list${l.id}`}>
                      <BoxContentList
                        except={l.id === 3 || l.id === 4 || l.id === 9}
                      >
                        <Icon>
                          <AiOutlineCheck
                            size={15}
                            style={{ color: '#7579E7', marginRight: '5px' }}
                          />
                        </Icon>
                        {l.name}
                      </BoxContentList>
                    </Fragment>
                  ))}
                </BoxContent>
              ))}
            </BoxContentContainer>
          </Box>
        ))}
        {/* <Box>
          <BoxTtitleContainer>
            <BoxTitle>베이직</BoxTitle>
            <BoxSubtitle>당장 설계가 필요하다면</BoxSubtitle>
            <BoxSubtitle>빠르게 비교하고 계약하세요.</BoxSubtitle>
          </BoxTtitleContainer>
          <BoxContentContainer>
            <BoxContent>
              <BoxContentTitle>설계 준비</BoxContentTitle>
              <BoxContentList>건축 사업성 컨설팅</BoxContentList>
              <BoxContentList>건축사 공개모집</BoxContentList>
              <BoxContentList>예비 건축사 미팅</BoxContentList>
              <BoxContentList>기획설계 수령</BoxContentList>
              <BoxContentList>공사 예산 비교</BoxContentList>
            </BoxContent>
            <BoxContent>
              <BoxContentTitle>설계 계약 ~ 착공</BoxContentTitle>
              <BoxContentList>설계 계약 가이드</BoxContentList>
              <BoxContentList>설계 협의 시스템</BoxContentList>
              <BoxContentList>단계별 공사비 예측</BoxContentList>
              <BoxContentList>최종 도면 검토</BoxContentList>
              <BoxContentList>책임 공사제 적용</BoxContentList>
            </BoxContent>
          </BoxContentContainer>
        </Box>
        <Box>
          <BoxTtitleContainer>
            <BoxTitle>PRO</BoxTitle>
            <BoxSubtitle>건물 디자인도 비교하고 싶다면</BoxSubtitle>
            <BoxSubtitle>기획설계 받아보고 계약하세요.</BoxSubtitle>
          </BoxTtitleContainer>
          <BoxContent>
            <BoxContent>
              <BoxContentTitle>설계 준비</BoxContentTitle>
              <BoxContentList>건축 사업성 컨설팅</BoxContentList>
              <BoxContentList>건축사 공개모집</BoxContentList>
              <BoxContentList>예비 건축사 미팅</BoxContentList>
              <BoxContentList>기획설계 수령</BoxContentList>
              <BoxContentList>공사 예산 비교</BoxContentList>
            </BoxContent>
            <BoxContent>
              <BoxContentTitle>설계 계약 ~ 착공</BoxContentTitle>
              <BoxContentList>설계 계약 가이드</BoxContentList>
              <BoxContentList>설계 협의 시스템</BoxContentList>
              <BoxContentList>단계별 공사비 예측</BoxContentList>
              <BoxContentList>최종 도면 검토</BoxContentList>
              <BoxContentList>책임 공사제 적용</BoxContentList>
            </BoxContent>
          </BoxContent>
        </Box> */}
      </BoxContainer>
    </Container>
  );
};

export default Eighth;
