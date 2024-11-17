import { useNavigate } from 'react-router-dom';

type TokenListItemProps = {
  token: string;
  price: number;
  currency: string;
};

export default function TokenListItem({
  token,
  price,
  currency,
}: TokenListItemProps) {
  const navigate = useNavigate();
  return (
    <tr
      key={token}
      className="hover:bg-slate-100 hover:cursor-pointer text-center"
      onClick={() => navigate(`/tokens/${token.toLowerCase()}`)}
    >
      <td className="py-4 px-2 border-b">{token}</td>
      <td className="py-4 px-2 border-b">${price.toFixed(2)}</td>
      <td className="py-4 px-2 border-b">{currency}</td>
    </tr>
  );
}
