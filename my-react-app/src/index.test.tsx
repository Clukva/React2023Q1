import { act } from 'react-test-renderer';
import { render, unmountComponentAtNode } from 'react-dom';
import App from './App';

describe('App', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    act(() => {
      render(<App />, div);
    });
    unmountComponentAtNode(div);
  });
});
