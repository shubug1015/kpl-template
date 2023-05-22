import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosCheckmark } from 'react-icons/io';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  justify-content: center;
  width: 100%;
  padding: 150px 0;
`;

const BoxContainer = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
  }
  ${(props) => props.theme.flexCenter}
  width: 100%;
`;

const Box = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
    width: 90%;
    height: ${(props) => (props.focus ? '400px' : '120px')};
    padding-top: 10px;
    margin-bottom: 5px;
  }
  ${(props) => props.theme.columnCenter}
  border-radius: 5px;
  box-shadow: 1px 4px 12px 1px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => (props.focus ? '#00A82D' : '#EDEDED')};
  width: ${(props) => (props.focus ? '30%' : '28%')};
  height: ${(props) => (props.focus ? '520px' : '480px')};
  margin-right: 5px;
  color: ${(props) => (props.focus ? '#FAFAFA' : 'black')};
  cursor: ${(props) => props.focus === false && 'pointer'};
  transition: background-color 0.3s ease-in-out, width 0.3s ease-in-out,
    height 0.3s ease-in-out;
`;

const Name = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 28px;
    font-weight: 400;
  }
  margin-top: 30px;
  padding-bottom: 5px;
  font-size: 26px;
  font-weight: 400;
  opacity: 0.7;
  border-bottom: ${(props) =>
    props.focus ? '2px solid #FAFAFA' : '2px solid #3D3D3D'};
  transition: border-bottom 0.3s ease-in-out;
`;

const PricePerMonth = styled.div`
  @media only screen and (max-width: 900px) {
    margin: 15px 0;
  }
  ${(props) => props.theme.flexCenter}
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 20px;
`;

const Price = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: ${(props) => (props.focus ? '20px' : '14px')};
  }
`;

const Month = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: ${(props) => (props.focus ? '20px' : '14px')};
  }
  margin-top: 4px;
  margin-left: 5px;
  font-size: 16px;
  opacity: 0.7;
`;

const ContentContainer = styled.div`
  @media only screen and (max-width: 1200px) {
    width: 70%;
  }
  @media only screen and (max-width: 900px) {
    width: 90%;
    height: 60%;
    display: ${(props) => (props.focus ? '' : 'none')};
  }
  width: 50%;
`;

const Content = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
    margin-top: 20px;
    font-size: 13px;
  }
  @media only screen and (max-width: 760px) {
    font-size: 13px;
  }
  width: 100%;
  margin-top: ${(props) => (props.focus ? '30px' : '25px')};
  font-size: 16px;
  transition: margin-top 0.3s ease-in-out;
`;

const BoxSection = () => {
  const [focus, setFocus] = useState(1);

  const getFocus = (boxId) => {
    setFocus(boxId);
  };

  const boxLists = [
    {
      id: 0,
      name: 'Basic',
      price: '900₩',
      month: '/ Mon',
      contents: [
        '노트 10개',
        '업로드 용량 50MB',
        'pdf 제공',
        '템플릿',
        '무료 폰트',
        '슬라이드 10장',
        '강의 월 1회',
      ],
    },
    {
      id: 1,
      name: 'Premium',
      price: '1,500₩',
      month: '/ Mon',
      contents: [
        '노트 50개',
        '업로드 용량 50MB',
        'pdf 제공',
        '템플릿',
        '무료/유료 폰트',
        '슬라이드 40장',
        '강의 월 3회',
      ],
    },
    {
      id: 2,
      name: 'Business',
      price: '2,900₩',
      month: '/ Mon',
      contents: [
        '노트 무제한',
        '업로드 용량 무제한',
        'pdf 제공',
        '템플릿',
        '무료/유료 폰트',
        '슬라이드 100장',
        '강의 월 8회 제공',
      ],
    },
  ];

  return (
    <Container>
      <BoxContainer>
        {boxLists &&
          boxLists.length > 0 &&
          boxLists.map((list) => (
            <Box
              key={list.id}
              onClick={() => getFocus(list.id)}
              focus={focus === list.id}
            >
              <Name focus={focus === list.id}>{list.name}</Name>
              <PricePerMonth>
                <Price focus={focus === list.id}>{list.price}</Price>
                <Month focus={focus === list.id}>{list.month}</Month>
              </PricePerMonth>
              <ContentContainer focus={focus === list.id}>
                {list.contents.map((content) => (
                  <Content key={content} focus={focus === list.id}>
                    <IoIosCheckmark />
                    {content}
                  </Content>
                ))}
              </ContentContainer>
            </Box>
          ))}
      </BoxContainer>
    </Container>
  );
};

export default BoxSection;
