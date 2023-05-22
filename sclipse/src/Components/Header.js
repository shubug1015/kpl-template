import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.header`
  ${(props) => props.theme.flexStartCenter}
  position: absolute;
  top: 0;
  background-color: ${(props) => props.theme.bgColor};
  /* border-bottom: 1px solid #ececec; */
  width: 100vw;
  height: ${(props) => props.theme.headerHeight};
  z-index: 1;
  color: ${(props) => props.theme.mainColor};
`;

const Title = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  width: 100px;
  height: 50px;
  margin-left: 6%;
`;

// const UserList = styled.div`
//   ${(props) => props.theme.flexCenter}
//   width: 150px;
//   height: 100%;
//   font-size: 12px;
//   font-weight: 400;
//   color: black;
// `;

// const UserItem = styled(Link)`
//   margin-right: 15px;
//   :hover {
//     opacity: 0.7;
//     transition: opacity 0.3s ease-in-out;
//   }
// `;

const Header = () => (
  <Container>
    <Title bgUrl={require('Components/assets/logo.png')} />
    {/* <UserList>
      <UserItem to='/'>로그인</UserItem>
      <UserItem to='/'>회원가입</UserItem>
    </UserList> */}
  </Container>
);

export default Header;
