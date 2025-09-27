import { render, screen } from '@testing-library/react';
import SudokuGrid from '../components/organisms/SudokuGrid';
import { Provider } from 'react-redux';
import { store } from '../stores/store';

describe('SudokuGrid', () => {
  it('renders grid with correct number of cells', () => {
    // Set up a 2x2 board for test
    store.dispatch({ type: 'board/setInitialBoard', payload: [[0,0],[0,0]] });
    store.dispatch({ type: 'board/setSolution', payload: [[0,0],[0,0]] });
    render(
      <Provider store={store}>
        <SudokuGrid numberToFill={{row:-1,col:-1,value:-1}} setNumberToFill={() => {}} actionsWidth={200} />
      </Provider>
    );
    // Should render 4 buttons
    expect(screen.getAllByRole('button').length).toBe(4);
  });
});
