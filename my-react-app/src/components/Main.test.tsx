import React from 'react';
import { render, screen } from '@testing-library/react';
import AddMain from './Main';

test('render footer year', () => {
  render(<AddMain />);
  const footerElement = screen.getByText(/2023/i);
  expect(footerElement).toBeInTheDocument();
});
