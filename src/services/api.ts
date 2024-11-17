import axios from 'axios';
import type { TokenPriceResponse } from '../types';

const API_KEY = import.meta.env.VITE_API_KEY;
const whaleApi = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    'x-api-key': API_KEY,
  },
});

export const getTokenPrices = async () => {
  const response = await whaleApi.get<TokenPriceResponse[]>('/prices');
  return response.data;
};

export const getTokenPrice = async (token: string) => {
  const response = await whaleApi.get<TokenPriceResponse>(`/prices/${token}`);
  return response.data;
};
