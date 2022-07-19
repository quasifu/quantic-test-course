import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { API_URL } from '../../utils/constants';
import axios from 'axios';
import Order from '.';
import OrderContext from '../../context/OrderContext';

describe('Test Order', () => {
  let orderName;
  let orderItems;
  beforeEach(() => {
    //Arrange:
    //Setup Order Context
    orderName = 'test-fun';
    orderItems = [
      { item: 'Test 1', quantity: 1 },
      { item: 'Test 2', quantity: 2 },
      { item: 'Test 3', quantity: 3 },
    ];
    //Mock API calls
    const mockGet = jest.spyOn(axios, 'get');
    mockGet.mockImplementation((url) => {
      switch (url) {
        case `${API_URL}/api/delivery/test-fun/0`:
          return Promise.resolve({
            data: {
              status: 'success',
              data: 5,
            },
          });
        case `${API_URL}/api/delivery/test-fun/5`:
          return Promise.resolve({
            data: {
              status: 'success',
              data: 7.5,
            },
          });
        case `${API_URL}/api/subtotal/test-fun`:
          return Promise.resolve({
            data: {
              status: 'success',
              data: 5,
            },
          });
        default:
          return Promise.resolve({
            data: {
              status: 'fail',
            },
          });
      }
    });
  });

  it('Test Delivery Fee', async () => {
    render(
      <OrderContext.Provider value={{ orderName, orderItems }}>
        <Order />
      </OrderContext.Provider>
    );

    await waitFor(() => {
      expect(screen.getAllByText('$5.00')).toHaveLength(2);
    });
    expect(screen.getAllByText('$10.00')).toHaveLength(1);
  });

  it('Test Update Delivery Fee', async () => {
    render(
      <OrderContext.Provider value={{ orderName, orderItems }}>
        <Order />
      </OrderContext.Provider>
    );

    userEvent.selectOptions(
      // Find the select element, like a real user would.
      screen.getByRole('combobox'),
      // Find and select the 5 mile option, like a real user would.
      screen.getByRole('option', { name: '5 miles' })
    );

    await waitFor(() => {
      expect(screen.getAllByText('$5.00')).toHaveLength(1);
    });
    expect(screen.getAllByText('$7.50')).toHaveLength(1);
    expect(screen.getAllByText('$12.50')).toHaveLength(1);
  });
});
