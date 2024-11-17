import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="h-3 py-6 px-6">
      <Link to="/" className="font-bold text-xl hover:text-slate-700">
        WhaleApp
      </Link>
    </header>
  )
}