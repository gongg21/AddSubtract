import React from 'react';
import { render, fireEvent, getByPlaceholderText, getByText } from '@testing-library/react';
import App from './App.js';

test('renders AddSubtract component', () => {
  render(<App />);

  expect(getByText('Add or Subtract!')).toBeInTheDocument();
  expect(getByText('+')).toBeInTheDocument();
  expect(getByText('-')).toBeInTheDocument();
});

test('adds numbers correctly', () => {
  render(<App />);
  fireEvent.change(getByPlaceholderText('First:'), { target: { value: '1' } });
  fireEvent.change(getByPlaceholderText('Second:'), { target: { value: '100' } });
  fireEvent.click(getByText('+'));
  expect(getByText('101')).toBeInTheDocument();
});

test('subtracts numbers correctly', () => {
  render(<App />);
  fireEvent.change(getByPlaceholderText('First:'), { target: { value: '1' } });
  fireEvent.change(getByPlaceholderText('Second:'), { target: { value: '100' } });
  fireEvent.click(getByText('-'));
  expect(getByText('-99')).toBeInTheDocument();
});

test('render invalid inputs correctly', () => {
  render(<App />);
  fireEvent.change(getByPlaceholderText('First:'), { target: { value: 'abc' } });
  fireEvent.change(getByPlaceholderText('Second:'), { target: { value: '100' } });
  fireEvent.click(getByText('+'));
  expect(getByText('Error')).toBeInTheDocument();
});
