import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Lock, Mail, Shirt, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FullScreenLoading, LoadingButton } from "@/components/LoadingStates";
import { OutfitCollage } from "@/components/OutfitCollage";
import { DAILY_CONTEXT, OUTFIT_SUGGESTIONS } from "@/const/mockData";

export default function LoginPage() {
  const navigate = useNavigate();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const goToDashboard = () => {
    if (isLoggingIn) return;
    setIsLoggingIn(true);
    window.setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    goToDashboard();
  };

  return (
    <main className="min-h-screen bg-[#f7f3ec] p-4 text-[#1c211d] md:p-8">
      {isLoggingIn && (
        <div className="fixed inset-0 z-[100]">
          <FullScreenLoading
            title="Shelfy đang mở dashboard"
            description="Đang chuẩn bị outfit hôm nay, thời tiết và lịch cá nhân..."
          />
        </div>
      )}
      <div className="mx-auto grid min-h-[calc(100vh-2rem)] max-w-7xl overflow-hidden rounded-[42px] border border-[#e2d8c9] bg-white shadow-[0_30px_90px_rgba(31,36,31,0.12)] lg:grid-cols-[1.08fr_0.92fr] md:min-h-[calc(100vh-4rem)]">
        <section className="relative overflow-hidden bg-[#102e24] p-6 text-white md:p-10 lg:p-12">
          <div className="relative z-10 flex h-full flex-col">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#006c49]">
                <Shirt className="h-6 w-6" />
              </div>
              <div>
                <p className="text-3xl font-black tracking-tight">Shelfy</p>
                <p className="text-sm font-medium text-white/65">
                  Fashion concierge cá nhân
                </p>
              </div>
            </div>

            <div className="my-10 max-w-2xl lg:my-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white">
                <Sparkles className="h-4 w-4 text-[#f4c76b]" />
                Từ tủ đồ thật của bạn
              </div>
              <h1 className="mt-7 text-5xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
                Hôm nay mặc gì?
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/72">
                Upload quần áo của bạn, Shelfy đọc thời tiết và lịch cá nhân để
                gợi ý outfit phù hợp nhất cho ngày hôm nay.
              </p>
              <div className="mt-8 grid gap-3 text-sm font-semibold text-white/78 sm:grid-cols-3">
                <InfoPill>AI phối từ đồ bạn sở hữu</InfoPill>
                <InfoPill>Weather + Calendar</InfoPill>
                <InfoPill>Thử đồ ảo 2D</InfoPill>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/15 bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-bold text-white/70">Today brief</p>
              <p className="mt-2 text-lg font-black">
                {DAILY_CONTEXT.calendar.event}
              </p>
              <p className="mt-1 text-sm text-white/65">
                {DAILY_CONTEXT.weather.temp} · {DAILY_CONTEXT.weather.condition}
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center p-6 md:p-10 lg:p-12">
          <div className="mx-auto w-full max-w-md">
            <div className="mb-8 rounded-[34px] border border-[#e2d8c9] bg-[#fbf8f2] p-3">
              <OutfitCollage outfit={OUTFIT_SUGGESTIONS[0]} compact />
              <div className="p-3">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#006c49]">
                  Preview hôm nay
                </p>
                <p className="mt-1 text-lg font-black text-[#1c211d]">
                  {OUTFIT_SUGGESTIONS[0].title}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-3xl font-black tracking-tight text-[#1c211d]">
                Đăng nhập vào phòng đồ
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#687167]">
                Prototype hiện đi thẳng vào dashboard để demo flow frontend.
              </p>
            </div>

            <Button
              variant="outline"
              onClick={goToDashboard}
              disabled={isLoggingIn}
              className="h-12 w-full rounded-full border-[#d8cebe] bg-white font-black text-[#1c211d] hover:bg-[#f4eee4]"
            >
              Đăng nhập bằng Google
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <div className="my-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#e2d8c9]" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#9b9488]">
                hoặc
              </span>
              <div className="h-px flex-1 bg-[#e2d8c9]" />
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm font-black text-[#1c211d]">
                  Email
                </span>
                <span className="relative block">
                  <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#737b72]" />
                  <input
                    className="h-12 w-full rounded-full border border-[#e2d8c9] bg-[#fbf8f2] pl-11 pr-4 text-sm font-medium outline-none transition focus:border-[#006c49] focus:ring-4 focus:ring-[#10b981]/15"
                    placeholder="email@example.com"
                    type="email"
                    required
                  />
                </span>
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-black text-[#1c211d]">
                  Password
                </span>
                <span className="relative block">
                  <input
                    className="h-12 w-full rounded-full border border-[#e2d8c9] bg-[#fbf8f2] pl-11 pr-4 text-sm font-medium outline-none transition focus:border-[#006c49] focus:ring-4 focus:ring-[#10b981]/15"
                    type="password"
                    required
                  />
                </span>
              </label>
              <LoadingButton
                type="submit"
                loading={isLoggingIn}
                loadingText="Đang mở dashboard..."
                className="h-12 w-full rounded-full bg-[#006c49] font-black text-white hover:bg-[#004f37]"
              >
                Vào dashboard
              </LoadingButton>
            </form>

            <div className="mt-8 flex items-start gap-2 rounded-[24px] bg-[#f4eee4] p-4 text-sm leading-6 text-[#687167]">
              <Lock className="mt-0.5 h-4 w-4 shrink-0 text-[#006c49]" />
              Dữ liệu tủ đồ và ảnh cá nhân cần được bảo mật khi nối backend
              thật.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function InfoPill({ children }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-center">
      {children}
    </div>
  );
}
