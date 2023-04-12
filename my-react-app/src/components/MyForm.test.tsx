import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyForm1 from './MyForm';

describe('MyComponent', () => {
  it('should render text in the the component', () => {
    render(<MyForm1 />);
    expect(screen.getByText('Birthday:')).toBeInTheDocument();
    expect(screen.getByText('Country:')).toBeInTheDocument();
    expect(screen.getByText('Gender:')).toBeInTheDocument();
  });
  it('should render text in the the component', () => {
    render(<MyForm1 />);
    expect(screen.getByText('Birthday:')).toBeInTheDocument();
    expect(screen.getByText('Country:')).toBeInTheDocument();
    expect(screen.getByText('Gender:')).toBeInTheDocument();
  });
  it('should render text in the the component', () => {
    render(<MyForm1 />);
    expect(screen.getByText('Name:')).toBeInTheDocument();
    expect(screen.getByText('My Image:')).toBeInTheDocument();
  });

  test('MyForm renders', () => {
    render(<MyForm1 />);
  });

  test('nandle change input value and click button', () => {
    const { getByRole, getByLabelText } = render(<MyForm1 />);
    const inpName = getByLabelText(/name/i);
    fireEvent.change(inpName, { target: { value: 'John' } });
    const subButton = getByRole('button', { name: /submit/i });
    fireEvent.click(subButton);
  });

  test('check validation', () => {
    const { getByText } = render(<MyForm1 />);
    const inpName = getByText('Name:');
    const subInput = document.getElementById('id-input');
    if (subInput) {
      fireEvent.change(subInput, { target: { value: '123456789' } });
    }
    const subButton = document.getElementById('id-submit');
    if (subButton) {
      fireEvent.click(subButton);
    }
    expect(getByText(/Please write name correctly, example Stiven/i)).toBeInTheDocument();
    expect(subButton).not.toHaveStyle('width: 1500px');
    expect(inpName).not.toHaveStyle('width: 1500px');
  });

  test('should show error message when nameForm input is empty', async () => {
    render(<MyForm1 />);

    const inpName = screen.getByLabelText(/Name/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    userEvent.type(inpName, '');
    userEvent.click(submitButton);

    const errorMessage = screen.getByText(/Please write name correctly, example Stiven/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('should not show error message when nameForm input is not empty', () => {
    render(<MyForm1 />);

    const inpName = screen.getByLabelText(/Name/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    userEvent.type(inpName, 'Valers');
    userEvent.click(submitButton);

    const errMessage = screen.queryByText(/Valers/i);
    expect(errMessage).not.toBeInTheDocument();
  });
});
