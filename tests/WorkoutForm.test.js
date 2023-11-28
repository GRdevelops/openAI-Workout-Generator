import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import WorkoutForm from './WorkoutForm';

describe('WorkoutForm', () => {
  it('calls onSubmit prop when form is submitted', () => {
    const handleSubmit = jest.fn();
    const { getByRole } = render(<WorkoutForm onSubmit={handleSubmit} />);

    fireEvent.submit(getByRole('form'));

    expect(handleSubmit).toHaveBeenCalled();
  });
});