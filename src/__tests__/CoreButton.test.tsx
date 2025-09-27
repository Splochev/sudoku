import { render, screen } from '@testing-library/react';
import CoreButton from '../components/atoms/CoreButton';

describe('CoreButton', () => {
  it('renders children', () => {
    render(<CoreButton>Test Button</CoreButton>);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });
  it('shows loader when loading', () => {
    render(<CoreButton loading>Loading</CoreButton>);
    expect(screen.getByText('Loading')).toBeInTheDocument();
    // Loader is present (by role or style)
    // The span wrapping children gets the opacity style
    const span = screen.getByText('Loading');
    expect(span).toHaveStyle('opacity: 0.2');
  });
});
