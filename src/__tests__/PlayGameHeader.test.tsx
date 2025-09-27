import { render, screen } from '@testing-library/react';
import PlayGameHeader from '../components/organisms/PlayGameHeader';

describe('PlayGameHeader', () => {
  it('shows difficulty', () => {
    render(<PlayGameHeader difficulty="easy" status="solving" />);
    expect(screen.getByText(/easy/i)).toBeInTheDocument();
  });
  it('shows status label for solved', () => {
    render(<PlayGameHeader difficulty="easy" status="solved" />);
    expect(screen.getByText(/solved/i)).toBeInTheDocument();
  });
  it('shows status label for unsolvable', () => {
    render(<PlayGameHeader difficulty="easy" status="unsolvable" />);
    expect(screen.getByText(/unsolvable/i)).toBeInTheDocument();
  });
});
