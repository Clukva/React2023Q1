import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('render footer year', () => {
  render(<Footer />);
  const footerElement = screen.getByText(/2023/i);
  expect(footerElement).toBeInTheDocument();
});
