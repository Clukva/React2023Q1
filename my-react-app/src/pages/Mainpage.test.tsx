import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Mainpage from './Mainpage';
import { store } from '../store/store';

describe('Mainpage', () => {
  it('should render text', async () => {
    const mainPage = render(
      <Provider store={store}>
        {' '}
        <Mainpage />
      </Provider>
    );
    expect(mainPage.getByText('Loading')).toBeInTheDocument();
    const rrr = await screen.findByText('Search');
    expect(rrr).toBeInTheDocument();
  });
});
