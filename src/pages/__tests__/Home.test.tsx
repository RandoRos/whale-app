vi.mock('../../services/api', () => {
  return {
    getTokenPrices: async () => [
      {
        token: 'ETH',
        price: 1000,
      },
      {
        token: 'BTC',
        price: 50000,
      },
    ],
  };
});

import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { render, screen, renderHook, waitFor } from '@testing-library/react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { useGetTokenPrices } from '../../services/queries';
import Home from '../Home';

const queryClient = new QueryClient();
import { ReactNode } from 'react';

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

test('renders Home component', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </QueryClientProvider>
  );

  expect(screen.getByText('Available tokens')).toBeInTheDocument();
});

test('renders Home component with token prices', async () => {
  const { result } = renderHook(() => useGetTokenPrices(), { wrapper });
  
  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </QueryClientProvider>
  );
  
  await waitFor(() => result.current.isSuccess);

  expect(screen.getByText('ETH')).toBeInTheDocument();
  expect(screen.getByText('BTC')).toBeInTheDocument();
});
