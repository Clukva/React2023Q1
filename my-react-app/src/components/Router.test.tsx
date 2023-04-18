import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import AddRouter from './Router';
import { store } from '../store/store';

describe('addRouter', () => {
  it('should render MainPage', async () => {
    render(
      <Provider store={store}>
        {' '}
        <MemoryRouter initialEntries={['/']}>
          <AddRouter />
        </MemoryRouter>{' '}
      </Provider>
    );
    expect(screen.getByText('Loading')).toBeInTheDocument();
    const rrr = await screen.findByText('Search');
    expect(rrr).toBeInTheDocument();
  });
});
