import styled from 'styled-components';
import Link from 'next/link';
import axios from 'axios';
import { connect } from 'react-redux';
import { login } from 'store';

const Container = styled.header`
  ${(props) => props.theme.flexCenter}
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: 1px 2px 12px 1px rgba(0, 0, 0, 0.1);
  width: 100vw;
  height: 70px;
  z-index: 99;
`;

const Item = styled.div`
  font-size: 14px;
  margin: 0 50px;
  cursor: pointer;
`;

const Header = ({ user: { logged }, dispatch }) => {
  const logout = async (e) => {
    e.preventDefault();
    await axios.post('/api/logout');
    dispatch(login({ token: null, logged: false }));
    // redux_saveUserInfo({ token: null, logged: false });
  };

  return (
    <Container>
      <Link href='/'>
        <Item>홈</Item>
      </Link>
      {logged ? (
        <>
          <Item onClick={logout}>로그아웃</Item>
          <Link href='/mypage'>
            <Item>마이페이지</Item>
          </Link>
        </>
      ) : (
        <>
          <Link href='/login'>
            <Item>로그인</Item>
          </Link>
          <Link href='/mypage'>
            <Item>마이페이지</Item>
          </Link>
          {/* <Link href='/unlogged'>
            <Item>테스트 (Unlogged)</Item>
          </Link> */}
        </>
      )}
    </Container>
  );
};

export default connect((state) => state)(Header);
