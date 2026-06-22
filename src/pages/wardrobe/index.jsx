import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImagePlus, Search, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FilterPanel } from './components/FilterPanel';
import { ItemCard } from './components/ItemCard';
import { WARDROBE_ITEMS } from '@/const/mockData';

export default function WardrobePage() {
  const navigate = useNavigate();
  const [items, setItems] = useState(WARDROBE_ITEMS);
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeColor, setActiveColor] = useState(null);
  const [activeStyles, setActiveStyles] = useState([]);
  const [activeStatus, setActiveStatus] = useState('all');

  const toggleStyle = (style) => {
    setActiveStyles((prev) =>
      prev.includes(style) ? prev.filter((item) => item !== style) : [...prev, style]
    );
  };

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return items.filter((item) => {
      if (activeCategory !== 'all' && item.category !== activeCategory) return false;
      if (activeColor && item.color !== activeColor) return false;
      if (activeStatus !== 'all' && item.recognitionStatus !== activeStatus) return false;
      if (activeStyles.length > 0 && !item.tags.some((tag) => activeStyles.includes(tag))) {
        return false;
      }
      if (
        normalizedQuery &&
        ![item.name, item.color, item.category, ...item.tags]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery)
      ) {
        return false;
      }
      return true;
    });
  }, [activeCategory, activeColor, activeStatus, activeStyles, items, query]);

  return (
    <div className="space-y-6">
      <section className="rounded-[40px] border border-[#e2d8c9] bg-white p-6 md:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#006c49]">
              Closet library
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-[#1c211d] md:text-5xl">
              Tủ đồ cá nhân
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#687167]">
              Quản lý đồ thật của bạn. Shelfy dùng những item này để phối outfit,
              không gợi ý từ đồ bạn không sở hữu.
            </p>
          </div>
          <Button
            onClick={() => navigate('/add-item')}
            className="rounded-full bg-[#006c49] px-5 py-3 font-black text-white hover:bg-[#004f37]"
          >
            <ImagePlus className="mr-2 h-4 w-4" />
            Thêm quần áo
          </Button>
        </div>

        <div className="mt-7 grid gap-3 lg:grid-cols-[1fr_auto]">
          <label className="relative block">
            <span className="sr-only">Tìm kiếm quần áo</span>
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#737b72]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-12 w-full rounded-full border border-[#e2d8c9] bg-[#fbf8f2] pl-11 pr-4 text-sm font-medium text-[#1c211d] outline-none transition focus:border-[#006c49] focus:ring-4 focus:ring-[#10b981]/15"
              placeholder="Tìm theo tên, màu, phong cách, logo..."
              type="search"
            />
          </label>
          <div className="flex items-center gap-2 rounded-full border border-[#e2d8c9] bg-[#fbf8f2] px-4 py-2 text-sm font-bold text-[#687167]">
            <SlidersHorizontal className="h-4 w-4" />
            {filteredItems.length}/{items.length} item
          </div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <FilterPanel
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activeColor={activeColor}
          setActiveColor={setActiveColor}
          activeStyles={activeStyles}
          toggleStyle={toggleStyle}
          activeStatus={activeStatus}
          setActiveStatus={setActiveStatus}
        />

        {filteredItems.length > 0 ? (
          <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredItems.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onDelete={handleDelete}
                onUseForOutfit={() =>
                  navigate('/suggestions', {
                    state: { fromSuggestionFlow: true, source: 'wardrobe', itemId: item.id },
                  })
                }
              />
            ))}
          </section>
        ) : (
          <section className="flex min-h-[420px] flex-col items-center justify-center rounded-[36px] border border-dashed border-[#c8bba9] bg-[#fbf8f2] p-8 text-center">
            <ImagePlus className="h-12 w-12 text-[#006c49]" />
            <h2 className="mt-4 text-2xl font-black text-[#1c211d]">Không tìm thấy item</h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-[#687167]">
              Thử bỏ bớt bộ lọc hoặc thêm ảnh quần áo mới để Shelfy có nhiều dữ liệu phối đồ hơn.
            </p>
            <Button
              onClick={() => navigate('/add-item')}
              className="mt-5 rounded-full bg-[#006c49] px-5 py-3 font-black text-white hover:bg-[#004f37]"
            >
              Upload/chụp ảnh mới
            </Button>
          </section>
        )}
      </div>
    </div>
  );
}
