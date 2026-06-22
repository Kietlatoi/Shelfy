import { CATEGORIES, COLORS, RECOGNITION_STATUSES, STYLES } from '@/const/mockData';

export const FilterPanel = ({
  activeCategory,
  setActiveCategory,
  activeColor,
  setActiveColor,
  activeStyles,
  toggleStyle,
  activeStatus,
  setActiveStatus
}) => {
  return (
    <aside className="space-y-5 rounded-[34px] border border-[#e2d8c9] bg-white p-5">
      <FilterSection title="Danh mục">
        <div className="space-y-1">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex w-full items-center justify-between rounded-2xl px-3 py-2.5 text-left text-sm font-bold transition ${
                  isActive
                    ? 'bg-[#102e24] text-white'
                    : 'text-[#3e463e] hover:bg-[#f4eee4]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    isActive ? 'bg-white/15 text-white' : 'bg-[#f4eee4] text-[#687167]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </FilterSection>

      <FilterSection title="Trạng thái AI">
        <div className="flex flex-wrap gap-2">
          {RECOGNITION_STATUSES.map((status) => (
            <button
              key={status.id}
              onClick={() => setActiveStatus(status.id)}
              className={`rounded-full px-3 py-2 text-xs font-black transition ${
                activeStatus === status.id
                  ? 'bg-[#006c49] text-white'
                  : 'bg-[#f8f4ee] text-[#687167] hover:bg-[#f0e7da]'
              }`}
            >
              {status.label}
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Màu sắc">
        <div className="flex flex-wrap gap-2">
          {COLORS.map((color) => {
            const isActive = activeColor === color.name;
            return (
              <button
                key={color.name}
                onClick={() => setActiveColor(isActive ? null : color.name)}
                title={color.name}
                aria-label={`Lọc màu ${color.name}`}
                className={`h-8 w-8 rounded-full transition focus:ring-4 focus:ring-[#10b981]/20 ${
                  color.class
                } ${isActive ? 'scale-110 ring-2 ring-[#006c49] ring-offset-2' : ''}`}
              />
            );
          })}
        </div>
      </FilterSection>

      <FilterSection title="Phong cách">
        <div className="flex flex-wrap gap-2">
          {STYLES.map((style) => {
            const isSelected = activeStyles.includes(style);
            return (
              <button
                key={style}
                onClick={() => toggleStyle(style)}
                className={`rounded-full border px-3 py-2 text-xs font-black transition ${
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
      </FilterSection>
    </aside>
  );
};

function FilterSection({ title, children }) {
  return (
    <section>
      <h3 className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#8a5a2b]">
        {title}
      </h3>
      {children}
    </section>
  );
}
