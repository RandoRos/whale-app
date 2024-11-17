import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  return (
    <div className="bg-slate-50">
      <Header />
      <div className="flex justify-center items-center min-h-screen font-montserrat">
        <main className="w-[90%]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
