import React from 'react';
import Router from 'Components/Router';
import GlobalStyles from 'Components/Styles/GlobalStyles';
import Theme from 'Components/Styles/Theme';
import 'Components/Styles/font.css';
import { ThemeProvider } from 'styled-components';

const App = () => (
  <ThemeProvider theme={Theme}>
    <Router />
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
