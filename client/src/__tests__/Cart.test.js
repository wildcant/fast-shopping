import React from 'react';
import { renderWithRouter, screen } from 'test-utils';
import Cart from 'components/cart';
import { cartInitialState } from '../fixtures';
import userEvent from '@testing-library/user-event';

describe('Cart Page', () => {
  const renderCart = () =>
    renderWithRouter(<Cart />, {
      initialState: { cart: cartInitialState },
    });

  test('renders cart with list of added products', () => {
    renderCart();
    cartInitialState.products.forEach(({ name }) =>
      screen.getByRole('heading', { name })
    );
  });

  test('customer able to delete product', () => {
    renderCart();
    const numberOfProducts = cartInitialState.products.length;
    expect(screen.getAllByRole('listitem')).toHaveLength(numberOfProducts);
    screen.getByText(`Total: $${cartInitialState.total}`);
    userEvent.click(screen.getAllByRole('button', { name: 'delete' })[0]); // Remove first element
    expect(screen.getAllByRole('listitem')).toHaveLength(numberOfProducts - 1);
    const newTotal =
      cartInitialState.total - cartInitialState.products[0].price;
    screen.getByText(`Total: $${newTotal.toFixed(2)}`);
  });

  test('customer able to increase or decrease the quantity', () => {
    renderCart();
    const product = cartInitialState.products[0];
    const productTotal = product.price * product.amount;
    screen.getByRole('heading', { name: `$ ${productTotal}` });
    screen.getByRole('heading', { name: `Total: $ ${cartInitialState.total}` });
    const select = screen.getAllByDisplayValue('1')[0];
    userEvent.selectOptions(select, ['5']); // change quantity of first product from 1 to 5
    screen.getByRole('heading', { name: `$ ${product.price * 5}` });
    const newTotal = cartInitialState.total - productTotal + product.price * 5;
    screen.getByRole('heading', { name: `Total: $ ${newTotal.toFixed(2)}` });
  });
});
