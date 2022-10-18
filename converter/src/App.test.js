import { render, screen } from '@testing-library/react';
import App from './App';
import {solve} from "./solution";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Value conversion tests", () => {
  test('First test', () => {
    expect(Math.max(1, 5, 10)).toBe(10);
  });

  test('Test correct data from cm to cm', () => {
    expect(solve(1,1,1)).toBe(1);
  });

  test('Test correct data from cm to m', () => {
    expect(solve(50,100,1)).toBe(0.5);
  });

  test('Test correct data from km to cm', () => {
    expect(solve(100000,1,1)).toBe(100000);
  });

  test('Test correct data from cm to inch', () => {
    expect(solve(1,2.54,10)).toBe(3.9370078740157477);
  });

})

