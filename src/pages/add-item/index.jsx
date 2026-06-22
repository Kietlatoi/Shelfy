import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ChevronRight, FileUp, ImagePlus, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ComponentLoading } from '@/components/LoadingStates';
import { CATEGORIES, COLORS, STYLES } from '@/const/mockData';

const steps = ['Upload ảnh', 'AI nhận diện', 'Xác nhận'];
const analyzingSteps = ['Đọc hình dáng item', 'Nhận diện màu chính', 'Gợi ý phong cách'];

export default function AddItemPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [dragActive, setDragActive] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [name, setName] = useState('Áo sơ mi trắng Oxford');
  const [category, setCategory] = useState('tops');
  const [color, setColor] = useState('Trắng');
  const [season, setSeason] = useState('Quanh năm');
  const [selectedStyles, setSelectedStyles] = useState(['Công sở', 'Tối giản']);

  const analyzeImage = (file) => {
    setPreviewImage(URL.createObjectURL(file));
    setIsAnalyzing(true);
    setStep(1);
    window.setTimeout(() => {
      setIsAnalyzing(false);
      setStep(2);
    }, 900);
  };

  const handleDrag = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(event.type === 'dragenter' || event.type === 'dragover');
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);
    const file = event.dataTransfer.files?.[0];
    if (file) analyzeImage(file);
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) analyzeImage(file);
  };

  const toggleStyle = (style) => {
    setSelectedStyles((prev) =>
      prev.includes(style) ? prev.filter((item) => item !== style) : [...prev, style]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/wardrobe');
  };

  return (
    <div className="space-y-6">
      <section className="rounded-[40px] border border-[#e2d8c9] bg-white p-6 md:p-8">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#006c49]">
          Số hóa tủ đồ
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-[#1c211d] md:text-5xl">
          Thêm trang phục mới
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-[#687167]">
          Upload hoặc chụp ảnh item. Shelfy sẽ mock nhận diện danh mục, màu sắc và phong cách
          để bạn xác nhận trước khi lưu vào tủ đồ.
        </p>
      </section>

      <div className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
        <section className="rounded-[36px] border border-[#e2d8c9] bg-white p-5 md:p-6">
          <div className="mb-6 space-y-3">
            {steps.map((label, index) => (
              <div
                key={label}
                className={`flex items-center gap-3 rounded-2xl px-3 py-2 ${
                  step === index ? 'bg-[#e8f5ee]' : 'bg-[#fbf8f2]'
                }`}
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-black ${
                    step > index
                      ? 'bg-[#006c49] text-white'
                      : step === index
                        ? 'bg-[#102e24] text-white'
                        : 'bg-white text-[#687167]'
                  }`}
                >
                  {step > index ? <CheckCircle2 className="h-4 w-4" /> : index + 1}
                </div>
                <span className="text-sm font-black text-[#1c211d]">{label}</span>
              </div>
            ))}
          </div>

          <div
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
            className={`relative flex min-h-[440px] flex-col items-center justify-center overflow-hidden rounded-[32px] border-2 border-dashed p-6 text-center transition ${
              dragActive
                ? 'border-[#006c49] bg-[#e8f5ee]'
                : 'border-[#d8cebe] bg-[#fbf8f2] hover:border-[#006c49]/60'
            }`}
          >
            {previewImage ? (
              <>
                <img src={previewImage} alt="Preview item" className="h-full w-full object-contain" />
                <button
                  type="button"
                  aria-label="Xóa ảnh preview"
                  onClick={() => {
                    setPreviewImage(null);
                    setStep(0);
                  }}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#9f1d1d] shadow-sm"
                >
                  <X className="h-5 w-5" />
                </button>
              </>
            ) : (
              <div className="max-w-sm">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[28px] bg-white text-[#006c49] shadow-sm">
                  <ImagePlus className="h-9 w-9" />
                </div>
                <h2 className="mt-5 text-2xl font-black text-[#1c211d]">Upload ảnh item</h2>
                <p className="mt-2 text-sm leading-6 text-[#687167]">
                  Kéo thả ảnh vào đây hoặc chọn file từ máy. Prototype hỗ trợ JPG/PNG.
                </p>
                <Label
                  htmlFor="file-upload"
                  className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#006c49] px-5 py-3 text-sm font-black text-white transition hover:bg-[#004f37]"
                >
                  <FileUp className="h-4 w-4" />
                  Chọn ảnh
                </Label>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            )}
          </div>
        </section>

        <section className="rounded-[36px] border border-[#e2d8c9] bg-white p-6 md:p-8">
          {step < 2 ? (
            <div className="flex min-h-[540px] flex-col items-center justify-center text-center">
              {isAnalyzing ? (
                <ComponentLoading
                  title="Shelfy đang nhận diện item"
                  description="Đang đọc hình dáng, màu sắc và phong cách để tạo metadata gợi ý."
                  steps={analyzingSteps}
                  activeStep={1}
                  className="min-h-[500px] w-full"
                />
              ) : (
                <>
                  <ChevronRight className="h-12 w-12 text-[#006c49]" />
                  <h2 className="mt-5 text-2xl font-black text-[#1c211d]">
                    Chờ ảnh đầu vào
                  </h2>
                  <p className="mt-2 max-w-md text-sm leading-6 text-[#687167]">
                    Sau khi upload, kết quả AI mock sẽ xuất hiện tại đây để bạn xác nhận.
                  </p>
                </>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="rounded-[28px] bg-[#e8f5ee] p-5">
                <p className="text-sm font-black text-[#006c49]">
                  AI nhận diện 86%: Áo sơ mi trắng
                </p>
                <p className="mt-2 text-sm leading-6 text-[#3e463e]">
                  Bạn có thể chỉnh lại metadata trước khi lưu. Dữ liệu này sẽ dùng để AI phối đồ.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="item-name" className="text-sm font-black text-[#1c211d]">
                  Tên trang phục
                </Label>
                <Input
                  id="item-name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="h-12 rounded-2xl border-[#e2d8c9] bg-[#fbf8f2] focus-visible:ring-[#10b981]/30"
                  required
                />
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <SelectField label="Danh mục" value={category} onChange={setCategory}>
                  {CATEGORIES.filter((item) => item.id !== 'all').map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </SelectField>
                <SelectField label="Màu chính" value={color} onChange={setColor}>
                  {COLORS.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </SelectField>
                <SelectField label="Mùa/thời tiết" value={season} onChange={setSeason}>
                  <option>Quanh năm</option>
                  <option>Hè</option>
                  <option>Nắng ráo</option>
                  <option>Ngày mưa</option>
                  <option>Trời lạnh</option>
                </SelectField>
              </div>

              <div>
                <Label className="text-sm font-black text-[#1c211d]">Phong cách</Label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {STYLES.map((style) => {
                    const isSelected = selectedStyles.includes(style);
                    return (
                      <button
                        key={style}
                        type="button"
                        onClick={() => toggleStyle(style)}
                        className={`rounded-full border px-4 py-2 text-sm font-black transition ${
                          isSelected
                            ? 'border-[#006c49] bg-[#e8f5ee] text-[#006c49]'
                            : 'border-[#e2d8c9] bg-[#fbf8f2] text-[#687167] hover:bg-[#f4eee4]'
                        }`}
                      >
                        {style}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-[#e2d8c9] pt-6 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => navigate('/wardrobe')}
                  className="rounded-full border border-[#d8cebe] px-6 py-3 text-sm font-black text-[#3e463e] hover:bg-[#f4eee4]"
                >
                  Hủy
                </button>
                <Button
                  type="submit"
                  className="rounded-full bg-[#006c49] px-6 py-3 font-black text-white hover:bg-[#004f37]"
                >
                  <Save className="mr-2 h-4 w-4" />
                  Lưu vào tủ đồ
                </Button>
              </div>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}

function SelectField({ label, value, onChange, children }) {
  const id = label.toLowerCase().replaceAll(' ', '-');
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-black text-[#1c211d]">
        {label}
      </Label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-2xl border border-[#e2d8c9] bg-[#fbf8f2] px-3 text-sm font-semibold text-[#1c211d] outline-none transition focus:border-[#006c49] focus:ring-4 focus:ring-[#10b981]/15"
      >
        {children}
      </select>
    </div>
  );
}
