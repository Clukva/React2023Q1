/* import { act, render, screen, waitFor } from '@testing-library/react';
import MyCharacter from './MyCharacter';

describe('Mycharacter', () => {
  test('renders input and button', () => {
    render(<MyCharacter />);

    const searchBut = screen.getByText(/Loading/i);
    expect(searchBut).toBeInTheDocument();
  }); */

/*  test('render search button', async () => {
    await waitFor(
      () => {
        render(<MyCharacter />);
        const searchBut = screen.queryByText('Search');
        expect(searchBut).not.toBeInTheDocument();
      },
      { timeout: 1000 }
    );
  }); */

/*   test('should display loading ring ', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => new Promise(() => {}));
    render(<MyCharacter />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  }); */
/* }); */

/* jest.mock('node-fetch');

describe('MyCharacter component', () => {
  it('renders the component', async () => {
    const mockResponse = {
      results: [
        {
          id: 1,
          name: 'Rick Sanchez',
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          gender: 'Male',
          species: 'Human',
          type: '',
          status: 'Alive',
        },
      ],
    };

    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(mockResponse),
    });

    await act(async () => {
      render(<MyCharacter />);
    });

    await waitFor(
      () => {
        const searchButton = screen.getByRole('button', { name: /Search/i });
        expect(searchButton).toBeInTheDocument();
        const searchInput = screen.getByPlaceholderText('Search');
        expect(searchInput).toBeInTheDocument();
      },
      { timeout: 1500 }
    );

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
    });

    const characterCard = screen.getByText('Rick Sanchez');
    expect(characterCard).toBeInTheDocument();
  });
});
 */
