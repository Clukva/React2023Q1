import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render footer', () => {
  render(<App />);
  const linkElement = screen.getByText(/Yuri/i);
  expect(linkElement).toBeInTheDocument();
});

test('render header link', () => {
  render(<App />);
  const linkElement = screen.getByText(/About us/i);
  expect(linkElement).toBeInTheDocument();
});

test('render header link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('render placeholder element', async () => {
  render(<App />);
  const placeholderElement = await screen.findByPlaceholderText(/Search/i);
  expect(placeholderElement).toBeInTheDocument();
});

test('render year of prodaction', () => {
  render(<App />);
  const linkElement = screen.getByText(/React2023/i);
  expect(linkElement).toBeInTheDocument();
});
