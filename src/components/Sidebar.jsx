import { Award, Home, Shirt, User, UserRound } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { USER_PROFILE } from '@/const/mockData';

const primaryNav = [
  { to: '/dashboard', icon: Home, label: 'Hôm nay' },
  { to: '/wardrobe', icon: Shirt, label: 'Tủ đồ' },
  { to: '/virtual-try-on', icon: UserRound, label: 'Thử đồ ảo' }
];

const secondaryNav = [
  { to: '/premium', icon: Award, label: 'Premium' },
  { to: '/profile', icon: User, label: 'Hồ sơ' }
];

export const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden w-72 border-r border-[#e2d8c9] bg-[#fbf8f2] px-5 py-6 md:flex md:flex-col">
      <NavLink to="/dashboard" className="mb-8 block px-2">
        <p className="text-4xl font-black tracking-tight text-[#006c49]">Shelfy</p>
        <p className="mt-1 text-sm font-semibold text-[#687167]">Fashion concierge cá nhân</p>
      </NavLink>

      <div className="rounded-[28px] border border-[#e2d8c9] bg-white p-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a5a2b]">
          Today brief
        </p>
        <p className="mt-2 text-lg font-bold text-[#1c211d]">Thuyết trình lúc 14:00</p>
        <p className="mt-1 text-sm leading-relaxed text-[#6d756c]">
          Trời mưa nhẹ. Shelfy ưu tiên outfit sáng, gọn và dễ di chuyển.
        </p>
      </div>

      <nav className="mt-7 flex flex-col gap-2">
        {primaryNav.map((item) => (
          <SidebarLink key={item.to} {...item} />
        ))}
      </nav>

      <div className="mt-auto space-y-4">
        <div className="rounded-[28px] bg-[#006c49] p-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
            Lượt thử đồ
          </p>
          <div className="mt-3 flex items-end justify-between">
            <div>
              <p className="text-3xl font-black">{USER_PROFILE.tryOnCredits}</p>
              <p className="text-xs text-white/75">lượt còn lại hôm nay</p>
            </div>
            <NavLink
              to="/premium"
              className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#006c49]"
            >
              Nâng cấp
            </NavLink>
          </div>
        </div>
        <nav className="flex flex-col gap-1">
          {secondaryNav.map((item) => (
            <SidebarLink key={item.to} {...item} subtle />
          ))}
        </nav>
      </div>
    </aside>
  );
};

function SidebarLink({ to, icon: Icon, label, subtle = false }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
          isActive
            ? 'bg-[#0f2e24] text-white'
            : subtle
              ? 'text-[#6d756c] hover:bg-[#f1eadf] hover:text-[#1c211d]'
              : 'text-[#3e463e] hover:bg-[#f1eadf] hover:text-[#006c49]'
        }`
      }
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </NavLink>
  );
}
