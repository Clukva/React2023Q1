import React from 'react';
import { render } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  it('should not render ', () => {
    const onClose = jest.fn();
    const { container } = render(
      <Modal open={false} onClose={onClose}>
        <div>Test content</div>
      </Modal>
    );
    expect(container.firstChild).toBe(null);
  });

  it('should render if open', () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <Modal open onClose={onClose}>
        <div>Test content</div>
      </Modal>
    );
    expect(getByText('Test content')).toBeInTheDocument();
  });
});
