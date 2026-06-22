import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Download, ImagePlus, RotateCw, ShieldCheck, Sparkles, Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ComponentLoading, LoadingButton } from '@/components/LoadingStates';
import { OutfitCollage } from '@/components/OutfitCollage';
import { OUTFIT_SUGGESTIONS, TRY_ON_STATE, USER_PROFILE } from '@/const/mockData';

const generationSteps = ['Đang đọc ảnh cá nhân', 'Đang áp outfit', 'Đang tạo preview'];

export default function VirtualTryOnPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedOutfitId = location.state?.outfitId || TRY_ON_STATE.selectedOutfitId;
  const outfit = useMemo(
    () =>
      OUTFIT_SUGGESTIONS.find((suggestion) => suggestion.id === selectedOutfitId) ||
      OUTFIT_SUGGESTIONS[0],
    [selectedOutfitId]
  );

  const [faceImage, setFaceImage] = useState(null);
  const [activeStep, setActiveStep] = useState(-1);
  const [resultImage, setResultImage] = useState(null);

  const isGenerating = activeStep >= 0 && !resultImage;

  const handleFaceUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setFaceImage(URL.createObjectURL(file));
      setResultImage(null);
      setActiveStep(-1);
    }
  };

  const handleGenerate = () => {
    if (!faceImage || isGenerating) return;
    setResultImage(null);
    setActiveStep(0);
    window.setTimeout(() => setActiveStep(1), 650);
    window.setTimeout(() => setActiveStep(2), 1300);
    window.setTimeout(() => {
      setResultImage(USER_PROFILE.avatar);
      setActiveStep(-1);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <section className="rounded-[40px] border border-[#e2d8c9] bg-white p-6 md:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#006c49]">
              Virtual try-on
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-[#1c211d] md:text-5xl">
              Thử outfit trên ảnh của bạn
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#687167]">
              Upload ảnh có mặt cá nhân, Shelfy sẽ mock tạo preview 2D với outfit đã chọn.
            </p>
          </div>
          <Button
            onClick={() =>
              navigate('/suggestions', {
                state: { fromSuggestionFlow: true, source: 'virtual-try-on' },
              })
            }
            variant="outline"
            className="rounded-full border-[#d8cebe] px-5 py-3 font-black hover:bg-[#f4eee4]"
          >
            <RotateCw className="mr-2 h-4 w-4" />
            Chọn outfit khác
          </Button>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[430px_1fr]">
        <aside className="space-y-5">
          <section className="rounded-[36px] border border-[#e2d8c9] bg-white p-5">
            <OutfitCollage outfit={outfit} compact />
            <div className="mt-5">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-2xl font-black text-[#1c211d]">{outfit.title}</h2>
                <span className="rounded-full bg-[#102e24] px-3 py-1.5 text-xs font-black text-white">
                  {outfit.score}%
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#687167]">{outfit.reason}</p>
            </div>
          </section>

          <section className="rounded-[36px] border border-[#e2d8c9] bg-white p-5">
            <h3 className="text-lg font-black text-[#1c211d]">Item trong outfit</h3>
            <div className="mt-4 space-y-3">
              {outfit.items.filter(Boolean).map((item) => (
                <div key={item.id} className="flex items-center gap-3 rounded-3xl bg-[#fbf8f2] p-3">
                  <img
                    alt={item.name}
                    className="h-16 w-16 rounded-2xl object-cover"
                    src={item.image}
                  />
                  <div>
                    <p className="font-black text-[#1c211d]">{item.name}</p>
                    <p className="text-sm text-[#687167]">{item.color} · {item.tags[0]}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] border border-[#cde7d9] bg-[#e8f5ee] p-5">
            <div className="flex gap-3">
              <ShieldCheck className="h-5 w-5 shrink-0 text-[#006c49]" />
              <p className="text-sm font-medium leading-6 text-[#1c211d]">
                Ảnh cá nhân chỉ dùng để tạo preview trong prototype. Bản backend cần xử lý
                quyền riêng tư và xóa ảnh theo chính sách rõ ràng.
              </p>
            </div>
          </section>
        </aside>

        <section className="min-h-[680px] rounded-[40px] border border-[#e2d8c9] bg-white p-5 md:p-6">
          <div className="grid h-full gap-5 lg:grid-cols-[320px_1fr]">
            <div className="space-y-5">
              <div className="rounded-[32px] bg-[#fbf8f2] p-5">
                <h2 className="text-xl font-black text-[#1c211d]">Ảnh cá nhân</h2>
                <p className="mt-2 text-sm leading-6 text-[#687167]">
                  Dùng ảnh rõ mặt, ánh sáng tốt để preview dễ hình dung hơn.
                </p>

                <div className="mt-5 overflow-hidden rounded-[28px] border border-dashed border-[#c8bba9] bg-white">
                  {faceImage ? (
                    <div className="relative h-72">
                      <img src={faceImage} alt="Ảnh cá nhân" className="h-full w-full object-cover" />
                      <button
                        type="button"
                        aria-label="Xóa ảnh cá nhân"
                        onClick={() => {
                          setFaceImage(null);
                          setResultImage(null);
                          setActiveStep(-1);
                        }}
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#9f1d1d] shadow-sm"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex h-72 flex-col items-center justify-center p-5 text-center">
                      <ImagePlus className="h-10 w-10 text-[#006c49]" />
                      <p className="mt-3 text-sm font-bold text-[#1c211d]">
                        Chưa có ảnh cá nhân
                      </p>
                      <Label
                        htmlFor="face-upload"
                        className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#006c49] px-4 py-2.5 text-sm font-black text-white hover:bg-[#004f37]"
                      >
                        <Upload className="h-4 w-4" />
                        Upload ảnh
                      </Label>
                    </div>
                  )}
                </div>
                <input
                  id="face-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFaceUpload}
                  className="hidden"
                />

                {faceImage && (
                  <Label
                    htmlFor="face-upload"
                    className="mt-4 flex cursor-pointer items-center justify-center gap-2 rounded-full border border-[#d8cebe] px-4 py-2.5 text-sm font-black text-[#1c211d] hover:bg-white"
                  >
                    <Upload className="h-4 w-4" />
                    Đổi ảnh
                  </Label>
                )}
              </div>

              <LoadingButton
                onClick={handleGenerate}
                loading={isGenerating}
                loadingText="Đang tạo preview..."
                disabled={!faceImage || isGenerating}
                className="w-full rounded-full bg-[#102e24] py-3 font-black text-white hover:bg-[#1d4638] disabled:opacity-50"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Tạo ảnh thử đồ
              </LoadingButton>
            </div>

            <div className="relative overflow-hidden rounded-[34px] bg-[#f6efe5]">
              {resultImage ? (
                <div className="flex h-full min-h-[560px] items-center justify-center p-6">
                  <img
                    src={resultImage}
                    alt="Kết quả thử đồ ảo"
                    className="max-h-[620px] rounded-[30px] object-contain shadow-[0_24px_80px_rgba(31,36,31,0.18)]"
                  />
                  <div className="absolute bottom-5 right-5 flex gap-3">
                    <Button
                      onClick={handleGenerate}
                      variant="outline"
                      className="rounded-full border-white bg-white/90 px-4 py-2 font-black hover:bg-white"
                    >
                      <RotateCw className="mr-2 h-4 w-4" />
                      Tạo lại
                    </Button>
                    <Button className="rounded-full bg-[#006c49] px-4 py-2 font-black text-white hover:bg-[#004f37]">
                      <Download className="mr-2 h-4 w-4" />
                      Lưu kết quả
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex h-full min-h-[560px] flex-col items-center justify-center p-8 text-center">
                  {isGenerating ? (
                    <ComponentLoading
                      title="Đang tạo ảnh thử đồ"
                      description="Shelfy đang ghép outfit đã chọn vào ảnh cá nhân của bạn."
                      steps={generationSteps}
                      activeStep={activeStep}
                      className="w-full max-w-md border-0 bg-white shadow-sm"
                    />
                  ) : (
                    <>
                      <Sparkles className="h-12 w-12 text-[#006c49]" />
                      <h2 className="mt-5 text-2xl font-black text-[#1c211d]">
                        Preview sẽ xuất hiện tại đây
                      </h2>
                      <p className="mt-2 max-w-md text-sm leading-6 text-[#687167]">
                        Upload ảnh cá nhân rồi bấm tạo preview để xem outfit trên model 2D mock.
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
