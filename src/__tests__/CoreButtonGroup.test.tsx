import { render, screen, fireEvent } from '@testing-library/react';
import CoreButtonGroup from '../components/atoms/CoreButtonGroup';

describe('CoreButtonGroup', () => {
  it('renders all button labels', () => {
    const labels = [
      { id: 1, label: 'One' },
      { id: 2, label: 'Two' },
    ];
    render(
      <CoreButtonGroup
        value={1}
        buttonLabels={labels}
        onChange={() => {}}
      />
    );
    expect(screen.getByText('One')).toBeInTheDocument();
    expect(screen.getByText('Two')).toBeInTheDocument();
  });
  it('calls onChange when clicked', () => {
    const labels = [
      { id: 1, label: 'One' },
      { id: 2, label: 'Two' },
    ];
    const onChange = jest.fn();
    render(
      <CoreButtonGroup
        value={1}
        buttonLabels={labels}
        onChange={onChange}
      />
    );
    fireEvent.click(screen.getByText('Two'));
    expect(onChange).toHaveBeenCalledWith(2);
  });
});
