import { render, screen, waitFor } from '@testing-library/react';
import MyCharacter from './MyCharacter';

describe('Mycharacter', () => {
  test('renders input and button', () => {
    render(<MyCharacter />);

    const searchBut = screen.getByText(/Loading/i);
    expect(searchBut).toBeInTheDocument();
  });

  test('render search button', async () => {
    await waitFor(
      () => {
        render(<MyCharacter />);
        const searchBut = screen.queryByText('Search');
        expect(searchBut).not.toBeInTheDocument();
      },
      { timeout: 1000 }
    );
  });

  test('should display loading ring ', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => new Promise(() => {}));
    render(<MyCharacter />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
});
