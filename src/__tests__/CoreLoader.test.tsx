import { render, screen } from '@testing-library/react';
import CoreLoader from '../components/atoms/CoreLoader';

describe('CoreLoader', () => {
  it('renders horizontal loader by default', () => {
    render(<CoreLoader />);
    // Should render 5 colored boxes
    expect(screen.getAllByTestId('arcade-loader-dot').length).toBe(5);
  });
  it('renders circular loader', () => {
    render(<CoreLoader variant="circular" />);
    // Should render 5 colored circles
    expect(screen.getAllByTestId('arcade-loader-dot').length).toBe(5);
  });
});
