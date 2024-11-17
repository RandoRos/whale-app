import { useNavigate } from 'react-router-dom';
import { useGetTokenPrices } from '../services/queries';

export default function TokenList() {
  const navigate = useNavigate();
  const {
    isLoading,
    data: tokens,
  } = useGetTokenPrices();

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
        <tr
          key={token}
          className="hover:bg-slate-100 hover:cursor-pointer text-center"
          onClick={() => navigate(`/tokens/${token.toLowerCase()}`)}
        >
          <td className="py-4 px-2 border-b">{token}</td>
          <td className="py-4 px-2 border-b">${price.toFixed(2)}</td>
          <td className="py-4 px-2 border-b">{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}