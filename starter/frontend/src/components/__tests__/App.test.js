import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

test('renders Movie List heading', () => {
  render(<App />);

  const headingElement = screen.getByText('Movie List');

  expect(headingElement).toBeInTheDocument();
});
