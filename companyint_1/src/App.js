import React, { Component } from 'react';
import Router from 'Components/Router';
import GlobalStyles from 'Components/Styles/GlobalStyles';
import Theme from 'Components/Styles/Theme';
import { ThemeProvider } from 'styled-components';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Router />
        <GlobalStyles />
      </ThemeProvider>
    );
  }
}
export default App;
