import Thanks from 'components/Thanks';
import React from 'react';
import { renderWithRouter, screen } from 'test-utils';

describe('Thanks page', () => {
  test('render page properly', () => {
    renderWithRouter(<Thanks />, {
      initialState: { customer: { data: { name: 'John' } } },
    });
    screen.getByRole('heading', { name: /Thanks for your purchase/i });
  });
});
