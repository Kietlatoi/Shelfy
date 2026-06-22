import { CalendarDays, CloudRain, Mail, Sparkles, UserRound } from 'lucide-react';
import { DAILY_CONTEXT, USER_PROFILE } from '@/const/mockData';

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[36px] border border-[#e2d8c9] bg-white p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <img
              alt={`Ảnh đại diện của ${USER_PROFILE.name}`}
              className="h-24 w-24 rounded-[28px] object-cover"
              src={USER_PROFILE.avatar}
            />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#006c49]">
                Hồ sơ phong cách
              </p>
              <h1 className="mt-2 text-3xl font-black tracking-tight text-[#1c211d]">
                {USER_PROFILE.name}
              </h1>
              <p className="mt-1 flex items-center gap-2 text-sm text-[#687167]">
                <Mail className="h-4 w-4" />
                {USER_PROFILE.email}
              </p>
            </div>
          </div>
          <div className="rounded-[28px] bg-[#f4eee4] px-5 py-4">
            <p className="text-sm font-semibold text-[#687167]">Chuỗi mặc đẹp</p>
            <p className="mt-1 text-3xl font-black text-[#8a5a2b]">
              {USER_PROFILE.streakDays} ngày
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-5 lg:grid-cols-3">
        <ProfileCard title="Gu ưu tiên" icon={Sparkles}>
          <div className="flex flex-wrap gap-2">
            {USER_PROFILE.stylePreferences.map((preference) => (
              <span
                key={preference}
                className="rounded-full bg-[#e8f5ee] px-3 py-1.5 text-sm font-bold text-[#006c49]"
              >
                {preference}
              </span>
            ))}
          </div>
        </ProfileCard>
        <ProfileCard title="Dịch vụ đã kết nối" icon={CloudRain}>
          <div className="space-y-3 text-sm font-semibold text-[#3e463e]">
            <p className="flex items-center gap-2">
              <CloudRain className="h-4 w-4 text-[#006c49]" />
              Weather API · {DAILY_CONTEXT.weather.condition}
            </p>
            <p className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-[#8a5a2b]" />
              Google Calendar · {DAILY_CONTEXT.calendar.event}
            </p>
          </div>
        </ProfileCard>
        <ProfileCard title="Thử đồ ảo" icon={UserRound}>
          <p className="text-sm text-[#687167]">Bạn còn</p>
          <p className="mt-1 text-3xl font-black text-[#1c211d]">
            {USER_PROFILE.tryOnCredits} lượt
          </p>
          <p className="mt-2 text-sm text-[#687167]">
            Lượt dùng mock cho prototype, sẽ đồng bộ theo tài khoản ở bản backend.
          </p>
        </ProfileCard>
      </div>
    </div>
  );
}

function ProfileCard({ title, icon: Icon, children }) {
  return (
    <section className="rounded-[32px] border border-[#e2d8c9] bg-white p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f4eee4] text-[#006c49]">
          <Icon className="h-5 w-5" />
        </div>
        <h2 className="text-lg font-black text-[#1c211d]">{title}</h2>
      </div>
      {children}
    </section>
  );
}
