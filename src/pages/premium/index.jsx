import { Award, History, Sparkles, UserRound, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: UserRound,
    title: 'Thêm lượt thử đồ ảo',
    copy: 'Tạo nhiều preview hơn trước khi quyết định mặc thật.'
  },
  {
    icon: Sparkles,
    title: 'AI outfit nâng cao',
    copy: 'Gợi ý nhiều biến thể hơn theo lịch, thời tiết và gu cá nhân.'
  },
  {
    icon: History,
    title: 'Lịch sử outfit',
    copy: 'Lưu lại những set đã mặc để tránh lặp lại trong tuần.'
  },
  {
    icon: Zap,
    title: 'Streak rewards',
    copy: 'Duy trì chuỗi mặc đẹp để mở thêm đặc quyền.'
  }
];

export default function PremiumPage() {
  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-[40px] bg-[#102e24] p-6 text-white md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold">
              <Award className="h-4 w-4 text-[#f4c76b]" />
              Shelfy Premium
            </div>
            <h1 className="mt-6 max-w-2xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Thêm tự tin trước khi bước ra khỏi nhà.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
              Premium tập trung vào những thứ làm Shelfy hữu ích hơn: thêm lượt thử đồ ảo,
              gợi ý AI sâu hơn và lịch sử outfit cá nhân.
            </p>
            <Button className="mt-7 rounded-full bg-white px-6 py-3 font-black text-[#006c49] hover:bg-[#f4eee4]">
              Mở khóa Premium
            </Button>
          </div>
          <div className="rounded-[32px] border border-white/15 bg-white/10 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Prototype offer
            </p>
            <p className="mt-5 text-5xl font-black">+20</p>
            <p className="mt-2 text-white/75">lượt thử đồ ảo mỗi tháng</p>
            <div className="mt-6 rounded-3xl bg-white p-5 text-[#1c211d]">
              <p className="text-sm font-bold text-[#006c49]">Phù hợp nếu bạn</p>
              <p className="mt-2 text-sm leading-6 text-[#687167]">
                hay thử nhiều outfit trước các buổi thuyết trình, đi chơi hoặc sự kiện quan trọng.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <article
              key={benefit.title}
              className="rounded-[32px] border border-[#e2d8c9] bg-white p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f5ee] text-[#006c49]">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-lg font-black text-[#1c211d]">{benefit.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#687167]">{benefit.copy}</p>
            </article>
          );
        })}
      </section>
    </div>
  );
}
