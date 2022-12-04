import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  /* eslint-disable */
  render(<Counter />); 
  /* eslint-enable */
})

test('renders counter message', () => {
  
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initVal = screen.getByText(/0/i);
  expect(initVal).toBeInTheDocument();
  //expect(initialVal).toEqual(0);
});

test('clicking + increments the count', () => {
  // fire event of increment
  const incBtn = screen.queryByTestId('plus');
  userEvent.click(incBtn);
  const incVal = screen.getByText(/1/i);
  expect(incVal).toBeInTheDocument();
  //const incVal = screen.queryByTestId('count');
  //expect(incVal).toEqual(1);
});

test('clicking - decrements the count', () => {
  // fire event of decrement
  const incBtn = screen.queryByTestId('minus');
  userEvent.click(incBtn);
  const decVal = screen.getByText(/-1/i);
  expect(decVal).toBeInTheDocument();
  //expect(incVal).toEqual(-1);
});
