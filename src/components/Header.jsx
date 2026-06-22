import { CalendarDays, CloudRain, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DAILY_CONTEXT, USER_PROFILE } from '@/const/mockData';

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-[#e4dccf]/80 bg-[#f7f3ec]/90 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4">
        <div className="md:hidden">
          <p className="text-xl font-black tracking-tight text-[#006c49]">Shelfy</p>
          <p className="text-[11px] font-medium text-[#6d756c]">Hôm nay mặc gì?</p>
        </div>

        <label className="relative hidden w-full max-w-md md:block">
          <span className="sr-only">Tìm kiếm trong tủ đồ</span>
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#737b72]" />
          <input
            className="h-11 w-full rounded-full border border-[#e2d8c9] bg-white/80 pl-11 pr-4 text-sm text-[#1c211d] outline-none transition focus:border-[#006c49] focus:ring-4 focus:ring-[#10b981]/15"
            placeholder="Tìm áo sơ mi, sneaker, outfit công sở..."
            type="search"
          />
        </label>

        <div className="hidden items-center gap-2 lg:flex">
          <div className="flex items-center gap-2 rounded-full border border-[#e2d8c9] bg-white/75 px-3 py-2 text-xs font-semibold text-[#3e463e]">
            <CloudRain className="h-4 w-4 text-[#006c49]" />
            {DAILY_CONTEXT.weather.temp} · {DAILY_CONTEXT.weather.condition}
          </div>
          <div className="flex max-w-xs items-center gap-2 rounded-full border border-[#e2d8c9] bg-white/75 px-3 py-2 text-xs font-semibold text-[#3e463e]">
            <CalendarDays className="h-4 w-4 text-[#8a5a2b]" />
            <span className="truncate">{DAILY_CONTEXT.calendar.event}</span>
          </div>
        </div>

        <Link
          to="/profile"
          className="flex items-center gap-3 rounded-full border border-[#e2d8c9] bg-white/80 p-1.5 pr-3 transition hover:border-[#006c49]/40"
        >
          <img
            alt={`Ảnh đại diện của ${USER_PROFILE.name}`}
            className="h-9 w-9 rounded-full object-cover"
            src={USER_PROFILE.avatar}
          />
          <span className="hidden text-sm font-semibold text-[#1c211d] sm:inline">
            {USER_PROFILE.name}
          </span>
        </Link>
      </div>
    </header>
  );
};
