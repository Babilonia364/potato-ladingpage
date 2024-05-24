import React from 'react';
import { render, screen } from '@testing-library/react';
import BuyItNow from '.';

test('renders the BuyItNow component', () => {
  render(<BuyItNow />);

  const titleElement = screen.getByText(/Order one \(or more\) today!/i);
  expect(titleElement).toBeInTheDocument();

  const liteOrderElement = screen.getByText(/lite/i);
  const proOrderElement = screen.getByText(/pro/i);
  const teamOrderElement = screen.getByText(/team/i);
  expect(liteOrderElement).toBeInTheDocument();
  expect(proOrderElement).toBeInTheDocument();
  expect(teamOrderElement).toBeInTheDocument();
});
