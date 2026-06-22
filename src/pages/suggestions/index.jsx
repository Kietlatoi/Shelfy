import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import {
  Bookmark,
  BookmarkCheck,
  CalendarDays,
  CheckCircle2,
  CloudRain,
  RotateCw,
  Sparkles,
  UserRound
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OutfitCollage } from '@/components/OutfitCollage';
import { DAILY_CONTEXT, OUTFIT_SUGGESTIONS } from '@/const/mockData';

export default function OutfitSuggestionsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [outfits, setOutfits] = useState(OUTFIT_SUGGESTIONS);
  const [activeId, setActiveId] = useState(
    OUTFIT_SUGGESTIONS.find((outfit) => outfit.isTodayPick)?.id || OUTFIT_SUGGESTIONS[0].id
  );

  const activeOutfit = outfits.find((outfit) => outfit.id === activeId) || outfits[0];
  const alternatives = outfits.filter((outfit) => outfit.id !== activeOutfit.id);

  const toggleSave = (id) => {
    setOutfits((prev) =>
      prev.map((outfit) =>
        outfit.id === id ? { ...outfit, saved: !outfit.saved } : outfit
      )
    );
  };

  const rotateOutfit = () => {
    const currentIndex = outfits.findIndex((outfit) => outfit.id === activeOutfit.id);
    setActiveId(outfits[(currentIndex + 1) % outfits.length].id);
  };

  const tryOn = (outfitId = activeOutfit.id) => {
    navigate('/virtual-try-on', { state: { outfitId } });
  };

  if (!location.state?.fromSuggestionFlow) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[40px] border border-[#e2d8c9] bg-white p-6 md:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#e8f5ee] px-4 py-2 text-sm font-bold text-[#006c49]">
              <Sparkles className="h-4 w-4" />
              AI results
            </div>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-[#1c211d] md:text-5xl">
              Gợi ý outfit hôm nay
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#687167]">
              Các outfit này được phối từ tủ đồ của bạn, có xét thời tiết, lịch cá nhân
              và bối cảnh hôm nay.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <ContextBadge icon={CloudRain}>
              {DAILY_CONTEXT.weather.temp} · {DAILY_CONTEXT.weather.condition}
            </ContextBadge>
            <ContextBadge icon={CalendarDays}>{DAILY_CONTEXT.calendar.event}</ContextBadge>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[40px] border border-[#e2d8c9] bg-white p-4 md:p-5">
          <OutfitCollage outfit={activeOutfit} />
        </div>
        <article className="rounded-[40px] border border-[#e2d8c9] bg-white p-6 md:p-8">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-[#102e24] px-3 py-1.5 text-xs font-black text-white">
              Best match · {activeOutfit.score}%
            </span>
            {activeOutfit.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#f4eee4] px-3 py-1.5 text-xs font-bold text-[#8a5a2b]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#1c211d]">
            {activeOutfit.title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#687167]">{activeOutfit.reason}</p>

          <div className="mt-6 space-y-3">
            {activeOutfit.contextReasons.map((reason) => (
              <div key={reason} className="flex gap-3 rounded-[24px] bg-[#f8f4ee] p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#006c49]" />
                <p className="text-sm font-medium leading-6 text-[#3e463e]">{reason}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <Button
              onClick={() => tryOn(activeOutfit.id)}
              className="rounded-full bg-[#102e24] py-3 font-black text-white hover:bg-[#1d4638]"
            >
              <UserRound className="mr-2 h-4 w-4" />
              Thử đồ ảo
            </Button>
            <Button
              onClick={() => toggleSave(activeOutfit.id)}
              variant="outline"
              className="rounded-full border-[#d8cebe] py-3 font-black text-[#1c211d] hover:bg-[#f4eee4]"
            >
              {activeOutfit.saved ? (
                <BookmarkCheck className="mr-2 h-4 w-4" />
              ) : (
                <Bookmark className="mr-2 h-4 w-4" />
              )}
              {activeOutfit.saved ? 'Đã lưu' : 'Lưu'}
            </Button>
            <Button
              onClick={rotateOutfit}
              variant="outline"
              className="rounded-full border-[#d8cebe] py-3 font-black text-[#1c211d] hover:bg-[#f4eee4] sm:col-span-2"
            >
              <RotateCw className="mr-2 h-4 w-4" />
              Đổi outfit chính
            </Button>
          </div>
        </article>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-black text-[#1c211d]">Phương án khác</h2>
            <p className="mt-1 text-sm text-[#687167]">
              Ít phù hợp hơn outfit chính, nhưng có thể hợp tâm trạng hoặc lịch sau giờ học.
            </p>
          </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {alternatives.map((outfit) => (
            <article
              key={outfit.id}
              className="grid gap-4 rounded-[34px] border border-[#e2d8c9] bg-white p-4 md:grid-cols-[220px_1fr]"
            >
              <OutfitCollage outfit={outfit} compact />
              <div className="flex flex-col p-1">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#f4eee4] px-3 py-1 text-xs font-black text-[#8a5a2b]">
                    {outfit.score}% match
                  </span>
                  {outfit.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#f8f4ee] px-3 py-1 text-xs font-bold text-[#687167]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 text-xl font-black text-[#1c211d]">{outfit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#687167]">{outfit.reason}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  <Button
                    onClick={() => setActiveId(outfit.id)}
                    className="rounded-full bg-[#006c49] px-4 py-2 text-sm font-black text-white hover:bg-[#004f37]"
                  >
                    Mặc hôm nay
                  </Button>
                  <Button
                    onClick={() => tryOn(outfit.id)}
                    variant="outline"
                    className="rounded-full border-[#d8cebe] px-4 py-2 text-sm font-black hover:bg-[#f4eee4]"
                  >
                    Thử đồ ảo
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function ContextBadge({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#e2d8c9] bg-[#fbf8f2] px-4 py-2 text-sm font-bold text-[#3e463e]">
      <Icon className="h-4 w-4 text-[#006c49]" />
      {children}
    </span>
  );
}
