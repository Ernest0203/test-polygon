import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import styled, { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Provider store={store}>
        <AppWrapper>
          <header className="App-header">
            Koa-postgres-cra
          </header>
        </AppWrapper>
      </Provider>
    </Fragment>
  );
}

const AppWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default App;