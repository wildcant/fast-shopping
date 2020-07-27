/* eslint-disable react/prop-types */
import { ThemeProvider } from '@material-ui/core/styles';
import { render as rtlRender } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import theme from '../theme';

function render(
  ui,
  {
    initialState = {},
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    );
  }
  return { ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }) };
}

function renderWithRouter(
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
    initialState = {},
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router history={history}>{children}</Router>
        </ThemeProvider>
      </Provider>
    );
  }
  return { ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }), history };
}

export * from '@testing-library/react';
export { render, renderWithRouter };
