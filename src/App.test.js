import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dissertation defense landing page', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: /phd dissertation defense/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /english/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /français/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /عربي/i })).toBeInTheDocument();
});
