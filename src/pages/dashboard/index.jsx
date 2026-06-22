import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Bookmark,
  CalendarDays,
  CheckCircle2,
  CloudRain,
  RotateCw,
  Shirt,
  Sparkles,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { OutfitCollage } from "@/components/OutfitCollage";
import {
  DAILY_CONTEXT,
  OCCASIONS,
  OUTFIT_SUGGESTIONS,
  USER_PROFILE,
  WARDROBE_ITEMS,
} from "@/const/mockData";

export default function DashboardPage() {
  const navigate = useNavigate();
  const [occasion, setOccasion] = useState(DAILY_CONTEXT.selectedOccasion);
  const [outfitIndex, setOutfitIndex] = useState(0);
  const [saved, setSaved] = useState(OUTFIT_SUGGESTIONS[0].saved);

  const outfit = OUTFIT_SUGGESTIONS[outfitIndex];
  const recentItems = useMemo(() => WARDROBE_ITEMS.slice(0, 4), []);

  const handleRefresh = () => {
    const nextIndex = (outfitIndex + 1) % OUTFIT_SUGGESTIONS.length;
    setOutfitIndex(nextIndex);
    setSaved(OUTFIT_SUGGESTIONS[nextIndex].saved);
  };

  const goTryOn = () => {
    navigate("/virtual-try-on", { state: { outfitId: outfit.id } });
  };

  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-[42px] border border-[#e2d8c9] bg-white">
        <div className="grid gap-0 xl:grid-cols-[0.92fr_1.08fr]">
          <div className="p-6 md:p-9 xl:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#e8f5ee] px-4 py-2 text-sm font-bold text-[#006c49]">
              <Sparkles className="h-4 w-4" />
              Shelfy đã xem tủ đồ, thời tiết và lịch hôm nay
            </div>

            <h1 className="mt-7 max-w-2xl text-4xl font-black leading-[1.02] tracking-tight text-[#1c211d] md:text-6xl">
              Hôm nay mặc gì ?
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#687167]">
              Shelfy chọn một outfit sáng, gọn và đủ lịch sự cho buổi thuyết
              trình, đồng thời vẫn thoải mái khi trời mưa nhẹ.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <ContextCard icon={CloudRain} title="Thời tiết">
                {DAILY_CONTEXT.weather.temp} · {DAILY_CONTEXT.weather.condition}
                <span className="block text-xs font-medium text-[#687167]">
                  {DAILY_CONTEXT.weather.suggestion}
                </span>
              </ContextCard>
              <ContextCard icon={CalendarDays} title="Lịch cá nhân">
                {DAILY_CONTEXT.calendar.event}
                <span className="block text-xs font-medium text-[#687167]">
                  {DAILY_CONTEXT.calendar.location}
                </span>
              </ContextCard>
            </div>

            <div className="mt-7">
              <p className="text-sm font-black text-[#1c211d]">
                Bối cảnh hôm nay
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {OCCASIONS.map((option) => (
                  <button
                    key={option}
                    onClick={() => setOccasion(option)}
                    className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                      occasion === option
                        ? "bg-[#102e24] text-white"
                        : "bg-[#f4eee4] text-[#4d554c] hover:bg-[#e9dfd0]"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#f6efe5] p-4 md:p-6">
            <div className="rounded-[36px] bg-white p-3 shadow-[0_24px_80px_rgba(38,31,24,0.12)]">
              <OutfitCollage outfit={outfit} />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <article className="rounded-[36px] border border-[#e2d8c9] bg-white p-6 md:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#102e24] px-3 py-1.5 text-xs font-black text-white">
                  {outfit.score}% match
                </span>
                <span className="rounded-full bg-[#f4eee4] px-3 py-1.5 text-xs font-bold text-[#8a5a2b]">
                  {occasion}
                </span>
              </div>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#1c211d]">
                {outfit.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#687167]">
                {outfit.reason}
              </p>
            </div>
            <Button
              onClick={() =>
                navigate("/suggestions", {
                  state: { fromSuggestionFlow: true, source: "dashboard" },
                })
              }
              className="rounded-full bg-[#006c49] px-5 py-3 font-black text-white hover:bg-[#004f37]"
            >
              Xem tất cả gợi ý
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {outfit.contextReasons.map((reason) => (
              <div key={reason} className="rounded-[24px] bg-[#f8f4ee] p-4">
                <CheckCircle2 className="h-5 w-5 text-[#006c49]" />
                <p className="mt-3 text-sm font-medium leading-6 text-[#3e463e]">
                  {reason}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button
              onClick={goTryOn}
              className="rounded-full bg-[#102e24] px-6 py-3 font-black text-white hover:bg-[#1d4638]"
            >
              <UserRound className="mr-2 h-4 w-4" />
              Thử đồ ảo
            </Button>
            <Button
              onClick={() => setSaved((value) => !value)}
              variant="outline"
              className="rounded-full border-[#d8cebe] px-6 py-3 font-black text-[#1c211d] hover:bg-[#f4eee4]"
            >
              <Bookmark className="mr-2 h-4 w-4" />
              {saved ? "Đã lưu outfit" : "Lưu outfit"}
            </Button>
            <Button
              onClick={handleRefresh}
              variant="outline"
              className="rounded-full border-[#d8cebe] px-6 py-3 font-black text-[#1c211d] hover:bg-[#f4eee4]"
            >
              <RotateCw className="mr-2 h-4 w-4" />
              Đổi gợi ý
            </Button>
          </div>
        </article>

        <aside className="space-y-5">
          <div className="rounded-[32px] border border-[#e2d8c9] bg-white p-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8a5a2b]">
              Chuỗi mặc đẹp
            </p>
            <p className="mt-3 text-5xl font-black text-[#1c211d]">
              {USER_PROFILE.streakDays}
              <span className="ml-2 text-base font-bold text-[#687167]">
                ngày
              </span>
            </p>
            <p className="mt-3 text-sm leading-6 text-[#687167]">
              Chọn outfit hôm nay để giữ streak và nhận thêm lượt thử đồ ảo.
            </p>
          </div>
          <div className="rounded-[32px] border border-[#e2d8c9] bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-black text-[#1c211d]">Món đồ gần đây</h2>
              <button
                onClick={() => navigate("/wardrobe")}
                className="text-sm font-bold text-[#006c49] hover:underline"
              >
                Mở tủ đồ
              </button>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {recentItems.map((item) => (
                <div key={item.id} className="rounded-3xl bg-[#f8f4ee] p-2">
                  <img
                    alt={item.name}
                    className="h-28 w-full rounded-2xl object-cover"
                    src={item.image}
                  />
                  <p className="mt-2 truncate px-1 text-xs font-bold text-[#1c211d]">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => navigate("/add-item")}
            className="flex w-full items-center justify-center gap-2 rounded-[28px] border border-dashed border-[#c8bba9] bg-[#fbf8f2] px-5 py-5 text-sm font-black text-[#006c49] transition hover:bg-white"
          >
            <Shirt className="h-5 w-5" />
            Thêm đồ vào tủ
          </button>
        </aside>
      </section>
    </div>
  );
}

function ContextCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-[26px] border border-[#e2d8c9] bg-[#fbf8f2] p-4">
      <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#8a5a2b]">
        <Icon className="h-4 w-4" />
        {title}
      </div>
      <p className="text-sm font-bold leading-6 text-[#1c211d]">{children}</p>
    </div>
  );
}
