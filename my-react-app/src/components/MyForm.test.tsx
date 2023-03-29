import { render, screen } from '@testing-library/react';
import MyForm from './MyForm';

describe('MyComponent', () => {
  it('should render text in the the component', () => {
    render(<MyForm />);
    expect(screen.getByText('Birthday:')).toBeInTheDocument();
    expect(screen.getByText('Country:')).toBeInTheDocument();
  });
  it('should render text in the the component', () => {
    render(<MyForm />);
    expect(screen.getByText('Name:')).toBeInTheDocument();
    expect(screen.getByText('My Image:')).toBeInTheDocument();
  });
});
