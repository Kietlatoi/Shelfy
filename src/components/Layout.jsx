import { Header } from './Header';
import { MobileNav } from './MobileNav';
import { Sidebar } from './Sidebar';

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f7f3ec] font-sans text-[#1c211d]">
      <Sidebar />
      <div className="min-h-screen md:pl-72">
        <Header />
        <main className="mx-auto w-full max-w-[1500px] px-4 pb-28 pt-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
      <MobileNav />
    </div>
  );
};
