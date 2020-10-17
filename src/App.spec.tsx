import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import App from './App';

let container: any = null;

beforeEach(() => {
  // configurar o elemento do DOM como o alvo da renderização

  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // Limpar ao sair

  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// eslint-disable-next-line no-console
console.log('testing');

it('renders with or without a name', () => {
  act(() => {
    render(<App />, container);
  });
  expect(container.textContent).toBe('Hey, stranger');

  act(() => {
    render(<App name="Jenny" />, container);
  });
  expect(container.textContent).toBe('Hello, Jenny!');

  act(() => {
    render(<App name="Margaret" />, container);
  });
  expect(container.textContent).toBe('Hello, Margaret!');
});
