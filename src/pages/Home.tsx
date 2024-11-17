import TokenList from '../components/TokenList';

export default function Home() {
  return (
    <div className="space-y-5">
      <h1 className="text-xl font-bold">Available tokens</h1>
      <div className="overflow-hidden">
        <TokenList />
      </div>
    </div>
  );
}
