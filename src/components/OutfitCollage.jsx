import { CATEGORY_LABELS } from '@/const/mockData';

export function OutfitCollage({ outfit, compact = false }) {
  const items = outfit?.items?.filter(Boolean) || [];
  const [hero, second, third, fourth] = items;

  if (!outfit || items.length === 0) {
    return (
      <div className="flex aspect-[4/5] items-center justify-center rounded-[28px] border border-dashed border-[#c9c4b8] bg-[#f7f2ea] text-sm text-[#70685c]">
        Chưa có outfit
      </div>
    );
  }

  return (
    <div
      className={`grid overflow-hidden rounded-[28px] border border-[#ddd6c8] bg-[#f6efe5] p-2 ${
        compact ? 'h-64 grid-cols-2 grid-rows-2 gap-2' : 'min-h-[420px] grid-cols-5 grid-rows-4 gap-3'
      }`}
    >
      <OutfitImage
        item={hero}
        className={compact ? 'col-span-1 row-span-2' : 'col-span-3 row-span-4'}
        priority
      />
      <OutfitImage
        item={second}
        className={compact ? '' : 'col-span-2 row-span-2'}
      />
      <OutfitImage
        item={third}
        className={compact ? '' : 'col-span-1 row-span-2'}
      />
      <OutfitImage
        item={fourth}
        className={compact ? 'hidden' : 'col-span-1 row-span-2'}
      />
    </div>
  );
}

function OutfitImage({ item, className = '', priority = false }) {
  if (!item) {
    return <div className={`rounded-[22px] bg-white/60 ${className}`} />;
  }

  return (
    <div className={`group relative overflow-hidden rounded-[22px] bg-white ${className}`}>
      <img
        src={item.image}
        alt={item.name}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-x-2 bottom-2 rounded-2xl bg-white/88 px-3 py-2 text-[#1f241f] shadow-sm backdrop-blur">
        <p className={`${priority ? 'text-sm' : 'text-xs'} line-clamp-1 font-semibold`}>
          {item.name}
        </p>
        <p className="mt-0.5 text-[11px] text-[#6f756d]">
          {CATEGORY_LABELS[item.category] || item.category}
        </p>
      </div>
    </div>
  );
}
