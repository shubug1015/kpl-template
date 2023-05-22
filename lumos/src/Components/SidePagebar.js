import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaCircle } from 'react-icons/fa';

const PageContainer = styled.div`
  ${(props) => props.theme.columnCenter}
  justify-content:space-around;
  position: fixed;
  right: 3vw;
  top: 30vh;
  width: 80px;
  height: 30vh;
  z-index: 2;
`;

const Section = styled.div`
  ${(props) => props.theme.flexBetweenCenter}
  width: 100%;
`;

const SectionTitle = styled.div`
  transition: 'opacity 0.5s ease-in-out';
`;

const SidePagebar = () => {
  const [pageName, setPageName] = useState('main');

  return (
    <PageContainer>
      <Section>
        <SectionTitle
          style={{
            opacity: pageName === 'main' ? '1' : '0.3',
          }}
        >
          Main
        </SectionTitle>
        <FaCircle
          size={10}
          style={{ cursor: 'pointer', opacity: '0.7' }}
          onClick={() => setPageName('main')}
        />
      </Section>
      <Section>
        <SectionTitle
          style={{
            opacity: pageName === 'about' ? '1' : '0.3',
          }}
        >
          About
        </SectionTitle>
        <FaCircle
          size={10}
          style={{ cursor: 'pointer', opacity: '0.7' }}
          onClick={() => setPageName('about')}
        />
      </Section>
      <Section>
        <SectionTitle
          style={{
            opacity: pageName === 'review' ? '1' : '0.3',
          }}
        >
          Review
        </SectionTitle>
        <FaCircle
          size={10}
          style={{ cursor: 'pointer', opacity: '0.7' }}
          onClick={() => setPageName('review')}
        />
      </Section>
      <Section>
        <SectionTitle
          style={{
            opacity: pageName === 'app' ? '1' : '0.3',
          }}
          onClick={() => setPageName('app')}
        >
          App
        </SectionTitle>
        <FaCircle
          size={10}
          style={{ cursor: 'pointer', opacity: '0.7' }}
          onClick={() => setPageName('app')}
        />
      </Section>
    </PageContainer>
  );
};

export default SidePagebar;
