import React from 'react';
import { render, screen } from '@testing-library/react';
import Errorpage from './Errorpage';

test('render error page title', () => {
  render(<Errorpage />);
  const ErrorpageElement = screen.getByText(/404/i);
  expect(ErrorpageElement).toBeInTheDocument();
});
