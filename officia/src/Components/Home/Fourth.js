import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  @media only screen and (max-width: 1100px) {
    ${(props) => props.theme.columnCenter}
  }
  display: flex;
  justify-content: center;
  background-color: black;
  width: 100%;
  padding: 200px 0;
  color: #ffffff;
`;

const LeftContent = styled.div`
  @media only screen and (max-width: 1100px) {
    ${(props) => props.theme.columnCenter}
    width: 80%;
    padding: 30px 0;
  }
  width: 25%;
  padding-top: 50px;
  padding-left: 100px;
`;

const RightContent = styled.div`
  @media only screen and (max-width: 1100px) {
    width: 90%;
  }
  width: 75%;
`;

const Title = styled.div`
  @media only screen and (max-width: 1100px) {
    ${(props) => props.theme.columnCenter}
  }
  width: 200px;
  font-family: 'Lato', sans-serif;
  font-size: 50px;
`;

const Btn = styled.div`
  @media only screen and (max-width: 1100px) {
    margin-top: 20px;
    width: 130px;
    height: 38px;
    font-size: 17px;
  }
  ${(props) => props.theme.flexCenter}
  margin-top: 80px;
  width: 234px;
  height: 63px;
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  font-weight: 700;
  border-radius: 50px;
  border: 1px solid #ffffff;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const List = styled.div`
  width: 100%;
  ${(props) => props.theme.flexCenter}
  flex-wrap: wrap;
`;

const Item = styled.div`
  @media only screen and (max-width: 900px) {
    width: 46%;
    height: 30vw;
    margin: 20px 2%;
  }
  position: relative;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  width: 25%;
  height: 15vw;
  margin: 1.5%;
  cursor: pointer;
`;

const Cover = styled.div`
  @media only screen and (max-width: 900px) {
    height: 30vw;
  }
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  width: ${(props) => (props.focus ? '100%' : 0)};
  height: 15vw;
  transition: width 0.4s ease-in-out;
  cursor: pointer;
`;

const Fourth = ({ ref4 }) => {
  const [focus, setFocus] = useState(false);

  const getId = (id) => setFocus(id);

  const list = [
    {
      id: 0,
      image: require('Components/assets/fourth_1.png'),
    },
    {
      id: 1,
      image: require('Components/assets/fourth_2.png'),
    },
    {
      id: 2,
      image: require('Components/assets/fourth_3.png'),
    },
    {
      id: 3,
      image: require('Components/assets/fourth_4.png'),
    },
    {
      id: 4,
      image: require('Components/assets/fourth_5.png'),
    },
    {
      id: 5,
      image: require('Components/assets/fourth_6.png'),
    },
  ];

  return (
    <Container ref={ref4}>
      <LeftContent>
        <Title>OFFICIA </Title>
        <Btn>Instagram {'>'}</Btn>
      </LeftContent>
      <RightContent>
        <List>
          {list.map((l) => (
            <Item
              key={l.id}
              bgUrl={l.image}
              onMouseEnter={() => getId(l.id)}
              onMouseLeave={() => getId(false)}
            >
              <Cover focus={l.id === focus} />
            </Item>
          ))}
        </List>
      </RightContent>
    </Container>
  );
};

export default Fourth;
