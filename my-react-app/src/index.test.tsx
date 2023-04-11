import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import App from './App';
import reportWebVitals from './reportWebVitals';

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
      createRoot(container).render(<App />);
    });
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
