import { useState } from 'react';
import { useRouter } from 'next/router';
// import { connect } from 'react-redux';
import { wrapper, login } from 'store';
import Login from 'components/Login';
import axios from 'axios';
import cookies from 'next-cookies';

const Home = () => {
  const [userData, setUserData] = useState({
    id: '',
    pw: '',
  });

  const router = useRouter();

  const loginFunc = {
    handleId: (e) => {
      const id = e.target.value;
      setUserData({
        ...userData,
        id,
      });
    },
    handlePw: (e) => {
      const pw = e.target.value;
      setUserData({
        ...userData,
        pw,
      });
    },
    handleSubmit: async (e) => {
      e.preventDefault();
      try {
        await axios.post('/api/login', { id: userData.id, pw: userData.pw });
        router.back();
        // router.push('/');
      } catch {
        alert('아이디 및 비밀번호가 일치하지 않습니다.');
      }
    },
  };

  return <Login {...userData} {...loginFunc} />;
};

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  const { token } = cookies(ctx);
  const store = await ctx.store;

  if (token && token.length) {
    store.dispatch(login({ token, logged: true }));
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
});

export default Home;
