import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  border: 2px solid #dddddd;
  cursor: pointer;
  margin: 80px 20px;
`;

const IdTitle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
`;

const Title = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100%;
  height: 100%;
  font-size: 12px;
  font-weight: bold;
`;
const Reply = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100%;
  line-height: 150%;
  padding: 0 20px;
  font-size: 13px;
  font-weight: bold;
  background-color: lightgray;
`;

const QnASection = ({ id, title, reply }) => {
  const [openReply, setOpenReply] = useState(false);
  const toggleOpen = () => {
    setOpenReply(!openReply);
  };

  return (
    <Container onClick={toggleOpen}>
      <IdTitle>
        <Title>{title}</Title>
      </IdTitle>
      <Reply
        style={{
          visibility: openReply ? 'visible' : 'hidden',
          height: openReply ? '150px' : '0px',
          transition: 'height 0.5s ease-in-out',
        }}
      >
        {reply}
      </Reply>
    </Container>
  );
};

export default QnASection;
