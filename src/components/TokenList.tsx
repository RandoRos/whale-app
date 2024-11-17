import { useGetTokenPrices } from '../services/queries';
import TokenListItem from './TokenListItem';

export default function TokenList() {
  const { isLoading, data: tokens } = useGetTokenPrices();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <table className="w-full py-10 text-lg text-gray-800 bg-gray-50">
      <thead>
        <tr className="bg-slate-500 text-gray-100">
          <th className="py-4 px-2">Token</th>
          <th>Price</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {tokens?.map(({ token, price, currency }) => (
          <TokenListItem token={token} price={price} currency={currency} />
        ))}
      </tbody>
    </table>
  );
}
