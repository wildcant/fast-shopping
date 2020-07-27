import axios from 'axios';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter, render, screen, waitForElement } from 'test-utils';
import App from '../App';
import { productsPage } from '../fixtures';
import { MemoryRouter } from 'react-router-dom';

jest.mock('axios');

describe('App', () => {
  axios.get.mockReturnValue(
    new Promise((resolve) => {
      resolve({ data: productsPage });
    })
  );
  test('renders app and navigate routes', async () => {
    const { history } = renderWithRouter(<App />);
    screen.getByRole('heading', { name: /Fast Shopping/i });
    screen.getByRole('button', { name: 'cart' });
    history.push('/cart');
    renderWithRouter(<App />, { history });
    screen.getByRole('heading', { name: /Shopping Cart/i });
    history.push('/checkout');
    renderWithRouter(<App />, { history });
    screen.getByRole('heading', { name: /Customer Information/i });
    screen.getByRole('heading', { name: /Order Summary/i });
  });

  test('cart button icon displays amount of products added to cart', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    await waitForElement(() => screen.getAllByRole('list'));
    const add2CartButtons = screen.getAllByRole('button', {
      name: /Add to Cart/i,
    });
    userEvent.click(add2CartButtons[0]);
    userEvent.dblClick(add2CartButtons[1]);
    screen.getByRole('button', { name: /3/i });
  });
});

describe('navigation between pages', () => {
  test('navigate to cart route on cart button click', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const btn = screen.getByRole('button', { name: 'cart' });
    userEvent.click(btn);
    screen.getByText('Shopping Cart');
  });

  test('return to product list page from cart page', () => {
    render(
      <MemoryRouter initialEntries={['/cart']}>
        <App />
      </MemoryRouter>
    );
    const btn = screen.getByRole('link', { name: /Continue Shopping/i });
    userEvent.click(btn);
    screen.getByRole('button', { name: 'cart' });
  });

  test('go to checkout from cart page', () => {
    render(
      <MemoryRouter initialEntries={['/cart']}>
        <App />
      </MemoryRouter>
    );
    const checkoutBtns = screen.getAllByRole('button', { name: /Check Out/i });
    userEvent.click(checkoutBtns[0]);
    screen.getByRole('heading', { name: /Customer Information/i });
    screen.getByRole('heading', { name: /Order Summary/i });
  });
});
