import React from 'react';
import styled from 'styled-components';
import { AiTwotoneStar } from 'react-icons/ai';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    width: 48%;
  }
  ${(props) => props.theme.columnCenter};
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  width: 23%;
  height: 600px;
  margin: 20px 1%;
  padding-bottom: 30px;
`;

const Image = styled.div`
  @media only screen and (max-width: 900px) {
    width: 150px;
    height: 150px;
  }
  width: 100%;
  height: 350px;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center center;
`;

const Content = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
    font-size: 13px;
    line-height: 20px;
    margin-bottom: 20px;
  }
  width: 90%;
  margin: 50px 0;
  font-size: 14px;
  line-height: 25px;
`;

const Rating = styled.div`
  margin-bottom: 30px;
`;

const Name = styled.div`
  font-size: 13px;
  opacity: 0.8;
`;

const ReviewSection = ({ id, product, content, name }) => {
  const arrayEx = [1, 2, 3, 4, 5];

  return (
    <Container>
      <Image bgUrl={require(`Components/assets/Review/review${id}.jpg`)} />
      <Content>{content}</Content>
      <Rating>
        {arrayEx.map((index) => (
          <AiTwotoneStar color={'#FFCA28'} key={index} />
        ))}
      </Rating>
      <Name>{name}</Name>
    </Container>
  );
};

export default ReviewSection;
