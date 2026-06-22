import { Loader2, Shirt, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FullScreenLoading({
  title = 'Shelfy đang chuẩn bị outfit',
  description = 'Đang mở phòng đồ và đồng bộ bối cảnh hôm nay...'
}) {
  return (
    <main
      className="flex min-h-screen items-center justify-center bg-[#f7f3ec] p-6 text-[#1c211d]"
      role="status"
      aria-live="polite"
    >
      <div className="w-full max-w-md rounded-[40px] border border-[#e2d8c9] bg-white p-8 text-center shadow-[0_30px_90px_rgba(31,36,31,0.12)]">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[28px] bg-[#102e24] text-white">
          <Shirt className="h-9 w-9" />
        </div>
        <div className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full bg-[#e8f5ee] px-4 py-2 text-sm font-black text-[#006c49]">
          <Loader2 className="h-4 w-4 animate-spin" />
          Loading
        </div>
        <h1 className="mt-5 text-3xl font-black tracking-tight">{title}</h1>
        <p className="mt-3 text-sm leading-6 text-[#687167]">{description}</p>
      </div>
    </main>
  );
}

export function ComponentLoading({
  title = 'Đang tải dữ liệu',
  description = 'Shelfy đang xử lý, vui lòng chờ trong giây lát.',
  steps = [],
  activeStep = 0,
  className = ''
}) {
  return (
    <div
      className={`flex min-h-[360px] flex-col items-center justify-center rounded-[32px] border border-[#e2d8c9] bg-[#fbf8f2] p-8 text-center ${className}`}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-[24px] bg-white text-[#006c49] shadow-sm">
        <Sparkles className="h-7 w-7" />
      </div>
      <h2 className="mt-5 text-2xl font-black text-[#1c211d]">{title}</h2>
      <p className="mt-2 max-w-md text-sm leading-6 text-[#687167]">{description}</p>

      {steps.length > 0 ? (
        <div className="mt-7 w-full max-w-md space-y-3 text-left">
          {steps.map((step, index) => {
            const isActive = index === activeStep;
            const isDone = index < activeStep;
            return (
              <div
                key={step}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition ${
                  isActive || isDone ? 'bg-white' : 'bg-[#f4eee4]'
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black ${
                    isActive || isDone ? 'bg-[#006c49] text-white' : 'bg-white text-[#687167]'
                  }`}
                >
                  {isDone ? '✓' : isActive ? <Loader2 className="h-4 w-4 animate-spin" /> : index + 1}
                </span>
                <span className="text-sm font-black text-[#1c211d]">{step}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <Loader2 className="mt-6 h-7 w-7 animate-spin text-[#006c49]" />
      )}
    </div>
  );
}

export function LoadingButton({
  loading = false,
  loadingText = 'Đang xử lý...',
  disabled,
  children,
  className = '',
  ...props
}) {
  return (
    <Button
      disabled={disabled || loading}
      aria-busy={loading}
      className={className}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </Button>
  );
}
