import React from 'react';
import { renderWithRouter } from 'test-utils';
import Checkout from 'components/checkout';
import { customer, cartInitialState } from '../fixtures';
import user from '@testing-library/user-event';
import axios from 'axios';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';

jest.mock('axios');

describe('Checkout Page', () => {
  test('render table with order summary', () => {
    renderWithRouter(<Checkout />, {
      initialState: { cart: cartInitialState },
    });
    const orderProducts = cartInitialState.products;
    screen.getByRole('table');
    expect(screen.getAllByRole('columnheader')).toHaveLength(4);
    const tableBody = screen.getAllByRole('rowgroup')[1];
    expect(tableBody.children).toHaveLength(orderProducts.length);
  });
  test('old customer, find user by email and be able to lookup again', async () => {
    axios.get.mockReturnValueOnce(
      new Promise((resolve) => resolve({ data: customer }))
    );
    renderWithRouter(<Checkout />);
    user.click(screen.getByRole('radio', { name: /existing customer/i }));
    const fakeEmail = 'sample.mail@test.com';
    user.type(screen.getByLabelText(/email/i), fakeEmail);
    user.click(screen.getByRole('button', { name: /lookup/i }));
    expect(axios.get).toHaveBeenCalledWith(`/api/users?email=${fakeEmail}`);
    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
    const lookupAgain = screen.getByText(
      `Not ${customer.name.split(' ')[0]}? Lookup again`
    );
    user.click(lookupAgain);
    screen.getByLabelText(/email/i);
  });
  test('new customer, fill form', async () => {
    axios.post.mockReturnValueOnce(new Promise((resolve) => resolve()));
    const fakeCustomerData = {
      name: 'John Doe',
      id: 123456,
      address: 'Main Street, #100-200, Wonderland',
      phone: '0000 000 000',
      email: 'johndoe@email.com',
    };
    renderWithRouter(<Checkout />);
    user.type(screen.getByLabelText(/name/i), fakeCustomerData.name);
    user.type(screen.getByLabelText(/id/i), fakeCustomerData.id);
    user.type(screen.getByLabelText(/address/i), fakeCustomerData.address);
    user.type(screen.getByLabelText(/phone/i), fakeCustomerData.phone);
    user.type(screen.getByLabelText(/email/i), fakeCustomerData.email);
  });
});
