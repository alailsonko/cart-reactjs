import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Home from '..';

let container: any = null;

beforeEach(() => {
  // configurar o elemento do DOM como o alvo da renderização

  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // Limpar ao sair - limpar

  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Home page tests', () => {
  test('should render home page', () => {
    expect(render(<Home />, container)).toEqual(render(<Home />, container));
  });
});

it('renders with or without a name', () => {
  act(() => {
    render(<Home />, container);
  });
  expect(container.textContent).toBe('noXSSMLXLsome title for the productR$ 99.00');

  act(() => {
    render(<Home />, container);
  });
  expect(container.textContent).toBe('noXSSMLXLsome title for the productR$ 99.00');

  act(() => {
    render(<Home />, container);
  });
  expect(container.textContent).toBe('noXSSMLXLsome title for the productR$ 99.00');
});
