import React, { useState } from 'react';
import styled from 'styled-components';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

const Container = styled.div`
  width: 100%;
  padding: 100px 0;
`;

const TextContainer = styled.div`
  ${(props) => props.theme.columnCenter}
`;

const BoldText = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 24px;
    word-spacing: -4px;
  }
  font-size: 32px;
  font-weight: 700;
  line-height: 50px;
  opacity: 0.9;
  :nth-child(2) {
    margin-bottom: 30px;
  }
`;

const LightText = styled.div`
  display: flex;
  line-height: 25px;
  color: #616772;
  /* padding: 3px 0; */
`;

const SectionContainer = styled.div`
  ${(props) => props.theme.columnCenter};
  padding: 50px 0;
`;

const Section = styled.div`
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  width: 75%;
  margin-bottom: 30px;
  padding: 15px 30px;
  border-radius: 7px;
  box-shadow: 1px 2px 12px 1px rgba(0, 0, 0, 0.2);
`;

const SectionText = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 15px;
  }
  ${(props) => props.theme.flexBetweenCenter};
  font-size: 20px;
  font-weight: 700;
  opacity: 0.85;
  cursor: pointer;
  padding: 20px 0;
  word-break: keep-all;
`;

const SectionDetail = styled.div`
  ${(props) => props.theme.flexStartCenter}
  height: ${(props) => (props.focus ? '70px' : '0px')};
  transition: height 0.3s ease-in-out, padding 0.3s ease-in-out;
  line-height: 25px;
  opacity: 0.7;
  overflow: hidden;
`;

const Second = () => {
  const [open, setOpen] = useState(null);

  const sections = [
    {
      id: 0,
      title: '건설사가 부도 나더라도 준공을 100% 책임져드립니다.',
      detail:
        '하성 안심작업제도는 건설사의 귀책으로 공사가 중단될 경우 책임지고 다른 건설사를 선정해서 준공을 보장해드리는 제도입니다.',
    },
    {
      id: 1,
      title: '공사비가 오르지 않게 계약서로 막아드립니다.',
      detail:
        '하성 표준계약서를 통해 계약된 금액 이상의 증약요청을 막아드립니다.',
    },
    {
      id: 2,
      title: '공사가 지연되지 않게 계약서로 지켜드립니다.',
      detail:
        '건설사가 공사를 지연하면 20% 이자를 지급하게 하는 지체상금률 규정으로 공사지연을 방지합니다.',
    },
  ];

  return (
    <Container>
      <TextContainer>
        <BoldText>공사현장에서 발생할지</BoldText>
        <BoldText>모르는 분쟁들이 걱정되시나요?</BoldText>
        <LightText>혹시 모를 문제를 고민하는데에 시간을 쏟지 마세요.</LightText>
        <LightText>
          하성만의 탄탄한{' '}
          <p
            style={{
              color: 'black',
              opacity: '0.9',
              marginLeft: '5px',
              fontSize: '15px',
            }}
          >
            표준 계약서
          </p>
          와
        </LightText>
        <LightText>
          <p
            style={{
              color: 'black',
              opacity: '0.9',
              marginLeft: '5px',
              fontSize: '15px',
            }}
          >
            계약이행증권
          </p>
          이 건축주를 보호해드립니다.
        </LightText>
      </TextContainer>
      <SectionContainer>
        {sections.map((s) => (
          <Section key={s.id}>
            <SectionText
              onClick={() => {
                open === s.id ? setOpen(null) : setOpen(s.id);
              }}
              focus={open === s.id}
            >
              {s.title}
              {open === s.id ? (
                <RiArrowDropUpLine size={33} />
              ) : (
                <RiArrowDropDownLine size={33} />
              )}
            </SectionText>
            <SectionDetail focus={open === s.id}>{s.detail}</SectionDetail>
          </Section>
        ))}
      </SectionContainer>
    </Container>
  );
};

export default Second;
