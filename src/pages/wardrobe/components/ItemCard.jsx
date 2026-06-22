import { Edit3, Sparkles, Trash2, Wand2 } from 'lucide-react';
import { CATEGORY_LABELS } from '@/const/mockData';

const statusCopy = {
  confirmed: { label: 'Đã nhận diện', className: 'bg-[#e8f5ee] text-[#006c49]' },
  review: { label: 'Cần xác nhận', className: 'bg-[#fff4d6] text-[#8a5a2b]' },
  missing: { label: 'Thiếu thông tin', className: 'bg-[#fee2e2] text-[#9f1d1d]' }
};

export const ItemCard = ({ item, onDelete, onUseForOutfit }) => {
  const status = statusCopy[item.recognitionStatus] || statusCopy.confirmed;

  return (
    <article className="group overflow-hidden rounded-[32px] border border-[#e2d8c9] bg-white transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(31,36,31,0.12)]">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f6efe5]">
        <img
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          src={item.image}
          alt={item.name}
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-black ${status.className}`}>
            {status.label}
          </span>
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-black text-[#1c211d] backdrop-blur">
            {item.confidence}% AI
          </span>
        </div>
        <div className="absolute right-3 top-3 flex gap-2 opacity-0 transition group-hover:opacity-100">
          <button
            type="button"
            aria-label={`Chỉnh sửa ${item.name}`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#1c211d] backdrop-blur hover:bg-[#f4eee4]"
          >
            <Edit3 className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label={`Xóa ${item.name}`}
            onClick={() => onDelete?.(item.id)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#9f1d1d] backdrop-blur hover:bg-[#fee2e2]"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="space-y-4 p-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8a5a2b]">
            {CATEGORY_LABELS[item.category]}
          </p>
          <h4 className="mt-1 truncate text-lg font-black text-[#1c211d]">{item.name}</h4>
          <p className="mt-1 text-sm text-[#687167]">
            {item.color} · {item.season} · đã mặc {item.usageCount} lần
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#f4eee4] px-3 py-1 text-xs font-bold text-[#687167]"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onUseForOutfit?.(item)}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#102e24] px-4 py-2.5 text-sm font-black text-white transition hover:bg-[#1d4638]"
        >
          <Wand2 className="h-4 w-4" />
          Dùng để phối
          <Sparkles className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
};
