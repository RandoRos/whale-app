import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from '../App';

vi.mock('../services/api');

const queryClient = new QueryClient();

test('renders App component', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
  screen.debug();
  expect(screen.getByText('WhaleApp')).toBeInTheDocument();
});
