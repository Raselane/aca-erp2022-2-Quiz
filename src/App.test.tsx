import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Quiz App title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Quiz App/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Username label', () => {
  render(<App />);
  const labelElement = screen.getByText(/Username/i);
  expect(labelElement).toBeInTheDocument();
});

test('renders Username input field', () => {
  render(<App />);
  const inputElement = screen.getByTestId('username-input');
  expect(inputElement).toBeInTheDocument();
});

test('renders start exam button', () => {
  render(<App />);
  const startButton = screen.getByTestId('startQuiz')
  expect(startButton).toBeInTheDocument();
});
