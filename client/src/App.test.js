import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the main component', () => {
  const rendered = render(<App />);
  expect(rendered.baseElement).toBeInTheDocument();
});
