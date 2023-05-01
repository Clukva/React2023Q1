import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import MyForm1 from './MyForm';
import { store } from '../store/store';

describe('MyComponent', () => {
  it('should render text in the the component', () => {
    render(
      <Provider store={store}>
        <MyForm1 />
      </Provider>
    );
    expect(screen.getByText('Birthday:')).toBeInTheDocument();
    expect(screen.getByText('Country:')).toBeInTheDocument();
    expect(screen.getByText('Gender:')).toBeInTheDocument();
    expect(screen.getByText('Consent to my personal data')).toBeInTheDocument();
    expect(screen.getByText('Subscribe to the newsletter (required field)')).toBeInTheDocument();
    expect(screen.getByText('My Image:')).toBeInTheDocument();

    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Surname/i)).toBeInTheDocument();
  });

  it('should render text in the the component', () => {
    render(
      <Provider store={store}>
        <MyForm1 />
      </Provider>
    );
    expect(screen.getByText('Name:')).toBeInTheDocument();
    expect(screen.getByText('My Image:')).toBeInTheDocument();
  });

  test('MyForm renders', () => {
    render(
      <Provider store={store}>
        <MyForm1 />
      </Provider>
    );
  });

  test('nandle change input value and click button', () => {
    const { getByRole, getByLabelText } = render(
      <Provider store={store}>
        <MyForm1 />
      </Provider>
    );
    const inpName = getByLabelText(/name/i);
    fireEvent.change(inpName, { target: { value: 'John' } });
    const subButton = getByRole('button', { name: /submit/i });
    fireEvent.click(subButton);
  });

  test('check validation', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MyForm1 />
      </Provider>
    );
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
    render(
      <Provider store={store}>
        <MyForm1 />
      </Provider>
    );

    const submitButton = screen.getByRole('button', { name: /submit/i });

    userEvent.click(submitButton);

    const errorMessage = screen.getByText(/Please write name correctly, example Stiven/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('should not show error message when nameForm input is not empty', () => {
    render(
      <Provider store={store}>
        <MyForm1 />
      </Provider>
    );

    const inpName = screen.getByLabelText(/Name/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    userEvent.type(inpName, 'Valers');
    userEvent.click(submitButton);

    const errMessage = screen.queryByText(/Valers/i);
    expect(errMessage).not.toBeInTheDocument();
  });

  it('adds a new form card when submitted', async () => {
    render(
      <Provider store={store}>
        <MyForm1 />
      </Provider>
    );

    const nameInput = screen.getByPlaceholderText('Enter your name');
    fireEvent.change(nameInput, { target: { value: 'John' } });

    const surnameInput = screen.getByPlaceholderText('Enter your surname');
    fireEvent.change(surnameInput, { target: { value: 'Doe' } });

    const dataInput = screen.getByPlaceholderText('Enter your birthday');
    fireEvent.change(dataInput, { target: { value: '01/01/1990' } });

    const countryInput = screen.getByTestId('country-select');
    fireEvent.change(countryInput, { target: { value: 'USA' } });

    const newsInput = screen.getByTestId('news-subscribe');
    fireEvent.click(newsInput);

    const genderInput = screen.getByTestId('gender-select');
    fireEvent.change(genderInput, { target: { value: 'Male' } });

    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);
  });

  test('displays error message when name input is not valid', async () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <MyForm1 />
      </Provider>
    );

    const inputName = getByLabelText(/name/i);
    fireEvent.change(inputName, { target: { value: '123' } });
    fireEvent.blur(inputName);

    expect(getByText(/Please write name correctly, example Stiven/i)).toBeInTheDocument();
  });

  test('displays error message when surname input is not valid', () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <MyForm1 />
      </Provider>
    );

    const inputSurname = getByLabelText(/surname/i);
    fireEvent.change(inputSurname, { target: { value: '456' } });
    fireEvent.blur(inputSurname);

    expect(getByText(/Please write surname correctly example Sigal/i)).toBeInTheDocument();
  });

  test('submits form data and updates state', async () => {
    render(
      <Provider store={store}>
        <MyForm1 />
      </Provider>
    );

    const nameInput = screen.getByLabelText(/Name/i);
    const surnameInput = screen.getByLabelText(/Surname/i);

    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(surnameInput, { target: { value: 'Doe' } });
  });
  test('submitting form with invalid data shows error messages', () => {
    render(
      <Provider store={store}>
        <MyForm1 />
      </Provider>
    );

    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    expect(screen.getByText(/Data has been saved !/i)).toBeInTheDocument();
  });
});
