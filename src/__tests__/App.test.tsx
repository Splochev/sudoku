import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import { store } from '../stores/store';

describe('App', () => {
  it('renders Sudoku title', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    // Wait for Sudoku title to appear
    expect(await screen.findByText(/Sudoku/i, {}, { timeout: 5000 })).toBeInTheDocument();
  });
});
