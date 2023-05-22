import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  @media only screen and (max-width: 765px) {
    width: 50%;
    height: 25%;
  }
  ${(props) => props.theme.columnCenter};
  width: 25%;
  height: 50%;
  padding: 30px;
`;

const Num = styled.div`
  width: 100%;
  height: 10%;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.mainColor};
`;

const Image = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 100%;
  height: 40%;
  :hover {
    transform: scale(1.2);
  }
`;

const Title = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 100%;
  height: 20%;
  font-size: 17px;
  line-height: 30px;
`;

const Text = styled.div`
  ${(props) => props.theme.columnCenter};
  width: 100%;
  height: 30%;
  font-size: 13px;
  padding: 20px 0;
  word-break: keep-all;
`;

const Text1 = styled.div`
  padding: 3px 0;
  line-height: 150%;
`;

const Text2 = styled.div`
  padding: 3px 0;
  line-height: 150%;
`;

const IconBox = ({ id, num, image, title, text1 }) => {
  return (
    <Container>
      <Num>{num}</Num>
      <Image>{image}</Image>
      <Title>{title}</Title>
      <Text>
        <Text1>{text1}</Text1>
      </Text>
    </Container>
  );
};

export default IconBox;
