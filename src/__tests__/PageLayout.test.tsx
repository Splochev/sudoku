import { render, screen } from '@testing-library/react';
import PageLayout from '../components/layouts/PageLayout';
import { Provider } from 'react-redux';
import { store } from '../stores/store';
import { MemoryRouter } from 'react-router-dom';

describe('PageLayout', () => {
  it('renders and redirects to a page', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/start-game"]}>
          <PageLayout />
        </MemoryRouter>
      </Provider>
    );
    // Wait for Sudoku title to appear
    expect(await screen.findByText(/Sudoku/i, {}, { timeout: 5000 })).toBeInTheDocument();
  });
});
