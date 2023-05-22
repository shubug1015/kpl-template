import React from 'react';
import styled from 'styled-components';
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from 'react-icons/ai';

const Container = styled.div`
  width: 100%;
`;

const Title = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 100%;
  height: 50px;
`;

const Contents = styled.div`
  ${(props) => props.theme.spaceAround};
  border: ${(props) => props.theme.mainBorder};
  width: 100%;
  height: 150px;
`;

const Section = styled.div`
  ${(props) => props.theme.columnCenter};
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 120px;
`;

const SectionTitle = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 100px;
  height: 20px;
  font-size: 11px;
`;

const SectionImg = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 50px;
  height: 50px;
`;

const BrandSNS = () => {
  return (
    <Container>
      <Title>SNS</Title>
      <Contents>
        <Section>
          <SectionImg>
            <AiOutlineInstagram size={35} color={'#A552A0'} />
          </SectionImg>
          <SectionTitle>Instagram</SectionTitle>
        </Section>
        <Section>
          <SectionImg>
            <AiFillFacebook size={35} color={'#3B5998'} />
          </SectionImg>
          <SectionTitle>Facebook</SectionTitle>
        </Section>
        <Section>
          <SectionImg>
            <AiFillTwitterCircle size={35} color={'#2AA9E0'} />
          </SectionImg>
          <SectionTitle>Twitter</SectionTitle>
        </Section>
      </Contents>
    </Container>
  );
};

export default BrandSNS;
