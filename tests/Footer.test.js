/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer, { motivationalPhrases } from '../src/components/Footer';

describe('Footer', () => {
  test('renders Footer component without crashing', () => {
    render(<Footer userData={{ goal: 'Stay Fit' }} />);
  });

  for (const goal in motivationalPhrases) {
    test(`displays the correct motivational phrase for goal: ${goal}`, () => {
      render(<Footer userData={{ goal }} />);
      expect(screen.getByText(new RegExp(motivationalPhrases[goal], 'i'))).toBeInTheDocument();
    });
  }
});

