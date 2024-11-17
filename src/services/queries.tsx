import { useQuery } from '@tanstack/react-query';
import { getTokenPrices, getTokenPrice } from './api';

export const useGetTokenPrices = () => {
  return useQuery({
    queryKey: ['tokenPrices'],
    queryFn: getTokenPrices,
  });
};

export const useGetTokenPriceInfo = (token: string | undefined) => {
  return useQuery({
    queryKey: ['tokenPrice', token],
    queryFn: () => {
      if (token) {
        return getTokenPrice(token);
      }
    },
  });
};