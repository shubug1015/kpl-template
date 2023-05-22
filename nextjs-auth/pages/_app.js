import GlobalStyles from 'styles/GlobalStyles';
import Theme from 'styles/Theme';
import { ThemeProvider } from 'styled-components';
import { wrapper } from 'store';
import Header from 'components/Header';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
