import { useParams } from 'react-router-dom';
import { useGetTokenPriceInfo } from '../services/queries';

export default function Token() {
  const { token } = useParams();
  const { data, isLoading } = useGetTokenPriceInfo(token);

  if (isLoading || !data) {
    return <div>Loading token data...</div>;
  }

  return (
    <div className="rounded-xl shadow-xl h-[400px] overflow-hidden">
      <div className="p-6 flex flex-col gap-4">
        <div>
          <div className="font-bold uppercase text-3xl">{data.token}</div>
          <div className="flex font-bold items-baseline gap-2">
            <div className="text-[54px]">${data.price.toFixed(2)}</div>
            <div className="text-2xl font-light hidden sm:block"> {data.currency}</div>
          </div>
          <span className="uppercase text-sm">{data.provider}</span>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="py-2 px-8 text-white font-bold rounded-md bg-green-600 hover:bg-green-700">
            Buy
          </button>
          <button className="py-2 px-8 text-white font-bold rounded-md bg-red-600 hover:bg-red-700">
            Sell
          </button>
        </div>
      </div>
    </div>
  );
}
