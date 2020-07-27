import axios from 'axios';
import React from 'react';
import { render, screen, waitForElement } from 'test-utils';
import Home from 'components/home';
import { threeProductsPage, productsPage } from '../fixtures';
import userEvent from '@testing-library/user-event';

jest.mock('axios');
const mockAxiosGetResponse = (response) =>
  axios.get.mockReturnValueOnce(
    new Promise((resolve) => {
      resolve({ data: response });
    })
  );

describe('Home Page', () => {
  test('render product cards, no paginator with less than 20 products', async () => {
    mockAxiosGetResponse(threeProductsPage);
    render(<Home />);
    await waitForElement(() => screen.getAllByRole('list'));
    const productCards = await waitForElement(() =>
      screen.getAllByRole('listitem')
    );
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(productCards).toHaveLength(threeProductsPage.products.length);
    const {
      name,
      category,
      description,
      price,
    } = threeProductsPage.products[0];
    screen.getByText(name);
    category.split(' > ').forEach((ctg) => screen.getAllByText(ctg));
    screen.getByText(description);
    screen.getByText(`$${price}`);
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  test('render select filter, filter by lowest price', async () => {
    mockAxiosGetResponse(threeProductsPage);
    render(<Home />);
    await waitForElement(() => screen.getAllByRole('list'));
    screen.getByText('Order By:');
    const prices = screen.getAllByText(/\$[0-9]+(\.[0-9]*)/);
    // console.log(prices.map((price) => price.textContent));
    prices.forEach((price, id) =>
      expect(price.textContent).toBe(`$${threeProductsPage.products[id].price}`)
    );

    expect(axios.get).toHaveBeenCalledTimes(2);
    userEvent.click(screen.getByRole('button', { name: 'filter' })); // Click select filter
    screen.getByRole('listbox');
    const productsByPrice = { ...threeProductsPage };
    productsByPrice.products.sort((a, b) => a.price - b.price); // Sort by lowest price
    mockAxiosGetResponse(productsByPrice);
    userEvent.click(screen.getByRole('option', { name: /Lowest Price/i })); // click sort by lowest price
    expect(axios.get).toHaveBeenCalledTimes(3);

    await waitForElement(() => screen.getAllByRole('list'));
    const sortedPrices = screen.getAllByText(/\$[0-9]+(\.[0-9]*)/);
    // console.log(sortedPrices.map((price) => price.textContent));
    sortedPrices.forEach((price, id) =>
      expect(price.textContent).toBe(`$${productsByPrice.products[id].price}`)
    );
  });

  test('render paginator when there are 20 products', async () => {
    mockAxiosGetResponse(productsPage);
    render(<Home />);
    await waitForElement(() =>
      screen.getByRole('navigation', { name: 'pagination navigation' })
    );
  });
});
