import { Home, Shirt, UserRound } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/dashboard', icon: Home, label: 'Hôm nay' },
  { to: '/wardrobe', icon: Shirt, label: 'Tủ đồ' },
  { to: '/virtual-try-on', icon: UserRound, label: 'Thử' }
];

export const MobileNav = () => {
  return (
    <nav className="fixed inset-x-3 bottom-3 z-50 rounded-full border border-[#e2d8c9] bg-white/95 px-2 py-2 shadow-[0_18px_50px_rgba(31,36,31,0.16)] backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center rounded-full px-2 py-2 text-[11px] font-bold transition ${
                  isActive ? 'bg-[#006c49] text-white' : 'text-[#687167]'
                }`
              }
            >
              <Icon className="mb-1 h-4 w-4" />
              {item.label}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
