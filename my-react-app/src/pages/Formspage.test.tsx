import { render, screen } from '@testing-library/react';
import Formspage from './Formspage';

describe('MyComponent', () => {
  it('should render text', () => {
    render(<Formspage />);
    expect(screen.getByText('Add form')).toBeInTheDocument();
  });
});
