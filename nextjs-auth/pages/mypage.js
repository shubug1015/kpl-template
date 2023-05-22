import styled from 'styled-components';
import { wrapper, login } from 'store';
import cookies from 'next-cookies';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  justify-content: center;
  width: 100vw;
  height: calc(100vh - 70px);
  font-size: 24px;
`;

const Home = () => <Container>마이페이지</Container>;

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  const { token } = cookies(ctx);
  const store = await ctx.store;

  if (token && token.length) {
    store.dispatch(login({ token, logged: true }));
    return { props: { logged: true } };
  } else {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
});

export default Home;
