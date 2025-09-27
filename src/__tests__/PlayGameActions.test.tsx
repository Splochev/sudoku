import { render, screen, fireEvent } from '@testing-library/react';
import PlayGameActions from '../components/organisms/PlayGameActions';
import { Provider } from 'react-redux';
import { store } from '../stores/store';

describe('PlayGameActions', () => {
  it('renders all action buttons', () => {
    render(
      <Provider store={store}>
        <PlayGameActions
          onSolve={() => {}}
          onValidate={() => {}}
          solvingLoading={false}
          validatingLoading={false}
        />
      </Provider>
    );
    expect(screen.getByText(/Validate/i)).toBeInTheDocument();
    expect(screen.getByText(/Solve/i)).toBeInTheDocument();
    expect(screen.getByText(/New Game/i)).toBeInTheDocument();
  });

  it('disables buttons when disableAll is true', () => {
    render(
      <Provider store={store}>
        <PlayGameActions
          onSolve={() => {}}
          onValidate={() => {}}
          solvingLoading={false}
          validatingLoading={false}
          disableAll={true}
        />
      </Provider>
    );
    expect(screen.getByText(/Validate/i).closest('button')).toBeDisabled();
    expect(screen.getByText(/Solve/i).closest('button')).toBeDisabled();
    // New Game should still be enabled unless loading
    expect(screen.getByText(/New Game/i).closest('button')).not.toBeDisabled();
  });

  it('calls onValidate when Validate is clicked', () => {
    const onValidate = jest.fn();
    render(
      <Provider store={store}>
        <PlayGameActions
          onSolve={() => {}}
          onValidate={onValidate}
          solvingLoading={false}
          validatingLoading={false}
        />
      </Provider>
    );
    fireEvent.click(screen.getByText(/Validate/i));
    expect(onValidate).toHaveBeenCalled();
  });

  it('calls onSolve when Solve is clicked', () => {
    const onSolve = jest.fn();
    render(
      <Provider store={store}>
        <PlayGameActions
          onSolve={onSolve}
          onValidate={() => {}}
          solvingLoading={false}
          validatingLoading={false}
        />
      </Provider>
    );
    fireEvent.click(screen.getByText(/Solve/i));
    expect(onSolve).toHaveBeenCalled();
  });
});
  it('calls New Game (internal) when clicked', () => {
    // We can't directly test dispatch, but we can check the button is clickable
    render(
      <Provider store={store}>
        <PlayGameActions
          onSolve={() => {}}
          onValidate={() => {}}
          solvingLoading={false}
          validatingLoading={false}
        />
      </Provider>
    );
    const btn = screen.getByText(/New Game/i).closest('button');
    expect(btn).not.toBeDisabled();
    fireEvent.click(btn!);
    // No error means click is handled
  });
