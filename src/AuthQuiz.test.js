import React from 'react';
import { render } from '@testing-library/react';
import AuthQuiz from './AuthQuiz';

test('renders learn react link', () => {
  const { getByText } = render(<AuthQuiz />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
