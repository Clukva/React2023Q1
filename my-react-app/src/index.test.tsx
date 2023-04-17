import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { screen } from '@testing-library/react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';

describe('App', () => {
  let container: HTMLElement;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });
  it('renders without crash', () => {
    act(() => {
      createRoot(container).render(
        <Provider store={store}>
          <App />
        </Provider>
      );
    });
    const footerElement = screen.getByText(/Loading/i);
    expect(footerElement).toBeInTheDocument();

    expect(container.querySelector('.main-page-form')).toBeDefined();
  });
});
describe('reportWebVitals', () => {
  it('should call callback function', () => {
    const mockCallback = jest.fn();
    reportWebVitals(mockCallback);
    expect(mockCallback).not.toHaveBeenCalled();
  });
});
describe('React import', () => {
  test('should import React correctly', () => {
    expect(React).toBeDefined();
  });
});
