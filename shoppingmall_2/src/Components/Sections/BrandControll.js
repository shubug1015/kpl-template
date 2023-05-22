import React, { useState } from 'react';
import styled from 'styled-components';

const Sections = styled.div`
  @media only screen and (max-width: 900px) {
    flex-direction: row;
    width: 100%;
  }
  ${(props) => props.theme.columnCenter};
  align-items: center;
  width: 150px;
  height: 120px;
`;

const Section = styled.div`
  @media only screen and (max-width: 900px) {
    width: 33.33%;
    border-bottom: ${(props) => props.theme.mainBorder};
    border-left: none;
    :first-child {
      border-left: ${(props) => props.theme.mainBorder};
    }
  }
  ${(props) => props.theme.flexCenter};
  width: 150px;
  height: 40px;
  font-size: 11px;
  cursor: pointer;
  border: ${(props) => props.theme.mainBorder};
  border-bottom: none;
  :last-child {
    border-bottom: ${(props) => props.theme.mainBorder};
  }
`;

const BrandControll = ({ updateOption }) => {
  const sections = [
    { id: 0, name: 'Story' },
    { id: 1, name: 'SNS' },
    { id: 2, name: 'Store' },
  ];

  const [option, setOption] = useState(0);
  const handdleOption = (e) => {
    setOption(e.target.id);
    updateOption(e.target.id);
  };

  return (
    <Sections>
      {sections.map((section) => (
        <Section
          id={section.id}
          onClick={handdleOption}
          style={{
            backgroundColor: parseInt(option) === section.id && '#ccffcc',
          }}
        >
          {section.name}
        </Section>
      ))}
    </Sections>
  );
};

export default BrandControll;
