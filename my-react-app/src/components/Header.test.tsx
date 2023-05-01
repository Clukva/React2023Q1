import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import MyHeader from './Header';

describe('Header', () => {
  it('should renders two links', () => {
    render(
      <MemoryRouter>
        <MyHeader />
      </MemoryRouter>
    );
    const firstLink = screen.getByText('Home');
    expect(firstLink).toBeInTheDocument();
  });
});
