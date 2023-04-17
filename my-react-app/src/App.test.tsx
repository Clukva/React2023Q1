import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/store';

test('render footer', () => {
  render(
    <Provider store={store}>
      {' '}
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Yuri/i);
  expect(linkElement).toBeInTheDocument();
});

test('render header link', () => {
  render(
    <Provider store={store}>
      {' '}
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/About us/i);
  expect(linkElement).toBeInTheDocument();
});

test('render header link', () => {
  render(
    <Provider store={store}>
      {' '}
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('render year of prodaction', () => {
  render(
    <Provider store={store}>
      {' '}
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/React2023/i);
  expect(linkElement).toBeInTheDocument();
});
