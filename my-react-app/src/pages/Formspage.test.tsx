import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Formspage from './Formspage';
import { store } from '../store/store';

describe('MyComponent', () => {
  it('should render text', () => {
    render(
      <Provider store={store}>
        <Formspage />
      </Provider>
    );
    expect(screen.getByText('Add form')).toBeInTheDocument();
  });
});
