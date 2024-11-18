vi.mock('../services/api');

import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from '../App';

const queryClient = new QueryClient();

test('renders App component', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );

  expect(screen.getByText('WhaleApp')).toBeInTheDocument();
});
