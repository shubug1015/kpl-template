import React from 'react';
import styled from 'styled-components';
import { GiReceiveMoney } from 'react-icons/gi';

const Container = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 100%;
  padding: 70px 0;
`;

const Box = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnStartCenter};
    width: 100%;
    border-radius: 0px;
  }
  ${(props) => props.theme.flexBetweenCenter};
  width: 75%;
  border-radius: 7px;
  background: linear-gradient(to right, #edf0f4, #d3dae3);
  padding: 30px 100px 30px 60px;
`;

const LeftSection = styled.div`
  ${(props) => props.theme.columnStartCenter};
`;

const Text = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 25px;
    font-weight: 500;
    line-height: 30px;
  }
  font-size: 30px;
  font-weight: 700;
  line-height: 42px;
  color: #003399;
  :nth-child(4) {
    font-size: 14px;
    font-weight: 700;
    margin-top: 25px;
    color: #001a4f;
  }
  word-break: keep-all;
`;

const Btn = styled.div`
  @media only screen and (max-width: 1200px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 900px) {
    margin-top: 30px;
  }
  font-size: 19px;
  font-weight: 500;
  color: #003399;
  cursor: pointer;
`;

const Seventh = () => (
  <Container>
    <Box>
      <LeftSection>
        <GiReceiveMoney
          size={45}
          color={'#003399'}
          style={{ marginBottom: '30px' }}
        />
        <Text>하성에 70% 한도 최저금리 대출이</Text>
        <Text>있다는 것을 알고 계셨나요?</Text>
        <Text>하성과 함께 건축 자금 고민을 해결해보세요.</Text>
      </LeftSection>
      <Btn>자세히 보기{'>'}</Btn>
    </Box>
  </Container>
);

export default Seventh;
