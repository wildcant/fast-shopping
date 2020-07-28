import user from '@testing-library/user-event';
import axios from 'axios';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, renderWithRouter, screen, waitForElement } from 'test-utils';
import App from '../App';
import { cartInitialState, productsPage } from '../fixtures';

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
    renderWithRouter(<App />, {
      history,
      initialState: { customer: { data: { name: 'John' } } },
    });
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
    user.click(add2CartButtons[0]);
    user.dblClick(add2CartButtons[1]);
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
    user.click(btn);
    screen.getByText('Shopping Cart');
  });

  test('return to product list page from cart page', () => {
    render(
      <MemoryRouter initialEntries={['/cart']}>
        <App />
      </MemoryRouter>
    );
    const btn = screen.getByRole('link', { name: /Continue Shopping/i });
    user.click(btn);
    screen.getByRole('button', { name: 'cart' });
  });

  test('go to checkout from cart page', () => {
    render(
      <MemoryRouter initialEntries={['/cart']}>
        <App />
      </MemoryRouter>,
      { initialState: { cart: cartInitialState } }
    );
    const checkoutBtns = screen.getAllByRole('button', { name: /check out/i });
    user.click(checkoutBtns[1]);
    screen.getByRole('heading', { name: /customer information/i });
    screen.getByRole('heading', { name: /order summary/i });
  });

  test('go to home page from thanks', () => {
    render(
      <MemoryRouter initialEntries={['/thanks']}>
        <App />
      </MemoryRouter>,
      { initialState: { customer: { data: { name: 'John' } } } }
    );
    const startAgainBtn = screen.getByRole('button', { name: /start again/i });
    user.click(startAgainBtn);
    screen.getByRole('button', { name: 'cart' });
  });
});
