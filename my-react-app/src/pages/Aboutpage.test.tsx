import React from 'react';
import { render, screen } from '@testing-library/react';
import Aboutpage from './Aboutpage';

test('render about page title', () => {
  render(<Aboutpage />);
  const pageElement = screen.getByText(/dimensions/i);
  expect(pageElement).toBeInTheDocument();
});
