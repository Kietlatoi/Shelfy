// Mock data for the Shelfy frontend prototype.

export const USER_PROFILE = {
  name: 'Tú',
  email: 'tu.nguyen@example.com',
  avatar:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBQcxTsHjK354MiZFEqT5aCDQDTAC56POb2WfRhgIV1SqwpjZdB_t8PANH3dGBbFL4gsi6BCjBaGp4E1SUFjQU5hfp0tPiYeRLl9k5t_Y3J_6NJCpI7Wvh16VFqabod__LNGJhHZl9EqTgjw1TT6Cc_NhMy2hjftF49zplpl7Kf-ws6fOextykxhZ_K69kMUy-2KdQ9yzQ-k0nOjVA34S1PGABDeHQLCpu-_Ni_dHyYVS9ed2k2BSK6ufTQC8eRBf91Q1DKHf6TlBM',
  stylePreferences: ['Smart casual', 'Công sở', 'Tối giản'],
  premium: false,
  tryOnCredits: 3,
  streakDays: 5
};

export const DAILY_CONTEXT = {
  selectedOccasion: 'Thuyết trình',
  weather: {
    temp: '29°C',
    condition: 'Mưa nhẹ',
    humidity: '76%',
    suggestion: 'Ưu tiên chất liệu thoáng, màu trung tính và giày dễ di chuyển.'
  },
  calendar: {
    event: 'Thuyết trình nhóm lúc 14:00',
    location: 'Đại học Kinh tế',
    suggestion: 'Cần outfit lịch sự nhưng vẫn thoải mái để đi cả ngày.'
  },
  updatedAt: 'Cập nhật 08:30'
};

export const OCCASIONS = [
  'Đi làm',
  'Đi học',
  'Đi chơi',
  'Thuyết trình',
  'Hẹn hò',
  'Sự kiện'
];

export const CATEGORIES = [
  { id: 'all', label: 'Tất cả', count: 9 },
  { id: 'tops', label: 'Áo', count: 3 },
  { id: 'bottoms', label: 'Quần', count: 2 },
  { id: 'dresses', label: 'Váy', count: 1 },
  { id: 'shoes', label: 'Giày', count: 2 },
  { id: 'accessories', label: 'Phụ kiện', count: 1 }
];

export const CATEGORY_LABELS = CATEGORIES.reduce((acc, category) => {
  acc[category.id] = category.label;
  return acc;
}, {});

export const COLORS = [
  { name: 'Trắng', hex: '#FFFFFF', class: 'bg-white border border-stone-300' },
  { name: 'Đen', hex: '#000000', class: 'bg-black' },
  { name: 'Xám', hex: '#6B7280', class: 'bg-gray-500' },
  { name: 'Xanh dương', hex: '#3B82F6', class: 'bg-blue-500' },
  { name: 'Be', hex: '#D8C4A8', class: 'bg-[#d8c4a8]' },
  { name: 'Nâu', hex: '#8A5A3B', class: 'bg-[#8a5a3b]' }
];

export const STYLES = [
  'Công sở',
  'Dạo phố',
  'Smart casual',
  'Tối giản',
  'Vintage',
  'Hẹn hò'
];

export const RECOGNITION_STATUSES = [
  { id: 'all', label: 'Tất cả' },
  { id: 'confirmed', label: 'Đã nhận diện' },
  { id: 'review', label: 'Cần xác nhận' },
  { id: 'missing', label: 'Thiếu thông tin' }
];

export const WARDROBE_ITEMS = [
  {
    id: 'item-1',
    name: 'Áo sơ mi trắng Oxford',
    category: 'tops',
    color: 'Trắng',
    colorHex: '#FFFFFF',
    tags: ['Công sở', 'Tối giản'],
    recognitionStatus: 'confirmed',
    confidence: 94,
    season: 'Quanh năm',
    usageCount: 12,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBoH0fJFBPlOR-7_VjIo7yBA47UtlMou91WxyPMBzl3ZmZMuXDaBqGOBHxOMwLCFoBmWPrMAXNVfTGOxMkZ0W2tsWojumXv1vi6FVvJtnVVP2KV6baE_lO4u3qZgAT-0K8_4C5vvX_zP4VBeUSRF5xKBgKhrg6CdVM4LHzsxJRT2gbSL2zFrD1gtqNlzgl7om6GHCfKy5HdFiKa30BvBOBe4-8nTzlqBiMfle0Q8ttvjq4XKCXDRsL4D_nQtcPIQME6iP60JuW87X8'
  },
  {
    id: 'item-2',
    name: 'Quần tây navy dáng đứng',
    category: 'bottoms',
    color: 'Xanh dương',
    colorHex: '#1E3A5F',
    tags: ['Công sở', 'Smart casual'],
    recognitionStatus: 'confirmed',
    confidence: 91,
    season: 'Quanh năm',
    usageCount: 8,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBYQsb2XzpH4JvGoG5tVErjw5a8RefiD-tW_aFBnxKzYDmbbL-XGZ8hLuN_c0Ur9IKXUYsrw_5c5XA2SHEziX8Bpct6-e2IqYu2Fq09bJ5z3ud8RXcsyb7IXlBw19MPchpzqE7deh8cAp0DUiM2m06d1jaSszyAfcDCjFH-aGMibSju2a0X811hEYxnZ1PqccuovhUHJowF_9CTN6Jo3gp2C32DwedO7mksI0EWxe-7rG0dsQzvVceRAUUMSrN4GVHjHBkUuwbj7Pg'
  },
  {
    id: 'item-3',
    name: 'Giày loafer da đen',
    category: 'shoes',
    color: 'Đen',
    colorHex: '#000000',
    tags: ['Công sở'],
    recognitionStatus: 'confirmed',
    confidence: 88,
    season: 'Quanh năm',
    usageCount: 6,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAe-xAgo9iHDOGxczpnC_EkbsANuh3RqQ_bLV_1UNQ0umAcCdQP1rneFVs97cxnZyDkenxBz2VyGHEUZDswNII6PGBvejfzE-lv6i4tQXWFqqv7d0laKsv4ZeAlIQt-mWWAiDccT4-xs5qfBA2kkVx2uWldV70vmJFLv1a670NTDrZtniw3qofuN9zUYBaSQIWTNod03YF8YljKcwbEKS3O_Q2N12tYulRb0Nh0jAOP_HFDbhKrS9awwNaZ1pf6zZYL0ZNiKMChDL0'
  },
  {
    id: 'item-4',
    name: 'Đồng hồ dây da nâu',
    category: 'accessories',
    color: 'Nâu',
    colorHex: '#8A5A3B',
    tags: ['Công sở', 'Vintage'],
    recognitionStatus: 'review',
    confidence: 78,
    season: 'Quanh năm',
    usageCount: 4,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAQO5T9UfGjEiwqkdmxOGzfXQOCUUALYBhHMzGAuVIPZNoWeJK1J4i_mc7VhwBN4NJIHtdSl95w_CMLNM_WkH53hyLzVJ6yJ4cziAksybHh14156cGmYODznrwZWMYKpXWPkk9JLEkbdqg8nt1iA0WHPZrEvK5rBzKEJucADrco6eNzoaoAK0iIqYdE1YhiU2ZFOZAR3mx8jeGkdOiXwsOQLhnTJ0I0JT2CJqacwGighuZ9KPIiQl_WZrODDo2EeqQG4YVPOpzlK_g'
  },
  {
    id: 'item-5',
    name: 'Áo sơ mi xanh nhạt oversized',
    category: 'tops',
    color: 'Xanh dương',
    colorHex: '#9CC7E8',
    tags: ['Dạo phố', 'Smart casual'],
    recognitionStatus: 'confirmed',
    confidence: 89,
    season: 'Hè',
    usageCount: 7,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBcSTcdItqZf8-c2PMQ-tzuwy9rCscMsp-Qob_j-bMw3etyVtu0mYRM8Txaxjkx8zJbf069n88Kp2veHHLyZdxN4d4wyonCXQS59TmEs83OCw7F6_fa_wAsgDvlIDfS9psFpNThfH80RVEdNqIdpNFC-1q60oH_RYID08BF2DcztwMMmVD6dTNSSJAszwTiUYJBT0yNyMkufbcNpwCtPQvGoCbY2wE_e9tapHCOVWKr03Hobr5B4VoeU2ZQlruQIKdt-qH53olNwRI'
  },
  {
    id: 'item-6',
    name: 'Quần jeans đen dáng đứng',
    category: 'bottoms',
    color: 'Đen',
    colorHex: '#111111',
    tags: ['Dạo phố', 'Smart casual'],
    recognitionStatus: 'confirmed',
    confidence: 92,
    season: 'Quanh năm',
    usageCount: 11,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBl21eop1q5VnpxnDo39cTBOV6T-ILhyayheUJSLL2y7mp7WNrm8VZmn7OCo2fv42Izhm9kbhA7LdVeC98S8mopmTRGF7BYpBGCr7iK0yNxBeSh1L_ux1wlm54KiAP6yXgazRzdzSxqI_92PNtdYt2H1uhrjfojf_kuAvJzyoCsVwYJwLrC0uVsTWKzjb8lFVQlZrjTpD0_CIr58KGK1LEZdlYfCm2fXN5TkTawzvewY-6mhNMVHNdtvdCGcw-ZvLz0sEha0mvtl6s'
  },
  {
    id: 'item-7',
    name: 'Sneaker trắng tối giản',
    category: 'shoes',
    color: 'Trắng',
    colorHex: '#FFFFFF',
    tags: ['Dạo phố', 'Tối giản'],
    recognitionStatus: 'missing',
    confidence: 63,
    season: 'Nắng ráo',
    usageCount: 13,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCipHLhJ2xKnqlSmrESfLUT_IJtkhrz-jAMi2Hj3h2ZcgT8a5qWQq6squL-USJde3dM4OJA22Z6opv-zImQDycNFG0GV5Wb3aGFQp6xm4PxwGs7cICzd2Y9i6B_AKWPN-yYznKqxxWQGuy69dgo2qmm-u__X9AyhpAZw4YC3pbbMPHPZYIoKRcWLNz3aRys0SdLt4krkN_hGT0_EM7pgGrZbfpWIeMXdCd6Gmm02D8t-W3VcDtg85-Jas-y-1lQkvODNETH2RaRpiY'
  },
  {
    id: 'item-8',
    name: 'Váy midi be linen',
    category: 'dresses',
    color: 'Be',
    colorHex: '#D8C4A8',
    tags: ['Hẹn hò', 'Vintage'],
    recognitionStatus: 'review',
    confidence: 81,
    season: 'Hè',
    usageCount: 3,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCfkKvWFsc3092nd3YFGMmruKl4FBSppAk3AiRDT-HhoKgXYghTky8sC7L2zrTBZ_VQEIhPhMYiubY4ezoMmIqpzCeNMX6RL5rHl76s0U9uNNFHXvEkDgS5EEJIdN802Vb6jsDCKD9rp9t9aMv0FS2jhGTPDVP-pq-GSg7bsuMtF2L9OM49V1Gya8NsPJfy4pe5aoenUkwKpmjqLm25e3ENdd-IJjUeyf3FpfZkCVpTS0BB169i5sIPMSvlauOwZSomJmgYo8HrRlE'
  },
  {
    id: 'item-9',
    name: 'Túi tote đen basic',
    category: 'accessories',
    color: 'Đen',
    colorHex: '#000000',
    tags: ['Dạo phố', 'Tối giản'],
    recognitionStatus: 'confirmed',
    confidence: 86,
    season: 'Quanh năm',
    usageCount: 9,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDBME4FDoTkQcaDmhFB3h-iQErb6uSfbSyauwriEkZmVZhkn7M-_PQ9vQKgQnv2OPOzOABvdD_q7PNcF0crcbdkT-0bvoNt_AfwdwUNvkSjXyTVan-nN1nyyMxBHqprMeEwwIZc3Ob_OP7Zw3kicFfFgIrAv5KcSKmKUkgHx4v800eC5-b63crlsvRksHP8mZXYJg78Y_lwZQctJoNv8nU5J9ZXNLOk0EXY0cCMIn-eJoJ9zxv3Xth1Jfy-OifDzV2GHNUa3SftSHs'
  }
];

const item = (id) => WARDROBE_ITEMS.find((wardrobeItem) => wardrobeItem.id === id);

export const OUTFIT_SUGGESTIONS = [
  {
    id: 'outfit-1',
    number: '#1',
    title: 'Lịch sự khi thuyết trình',
    description: 'Một set công sở gọn, sáng và đủ chỉn chu cho phần trình bày lúc 14:00.',
    tags: ['Best match', 'Lịch sự', 'Ngày mưa'],
    score: 96,
    isTodayPick: true,
    saved: true,
    itemIds: ['item-1', 'item-2', 'item-3', 'item-4'],
    contextReasons: [
      'Áo sơ mi trắng giúp tổng thể sáng và chuyên nghiệp khi thuyết trình.',
      'Quần navy và loafer đen giữ form lịch sự nhưng vẫn dễ di chuyển trong ngày mưa.',
      'Đồng hồ dây da là điểm nhấn vừa đủ, không làm outfit bị rối.'
    ],
    reason:
      'Phù hợp nhất vì hôm nay có thuyết trình lúc 14:00, trời mưa nhẹ và bạn cần một outfit sáng, gọn, chuyên nghiệp.',
    items: [item('item-1'), item('item-2'), item('item-3'), item('item-4')]
  },
  {
    id: 'outfit-2',
    number: '#2',
    title: 'Smart casual năng động',
    description: 'Cân bằng giữa đi học, làm việc nhóm và cafe sau giờ học.',
    tags: ['Năng động', 'Đi cả ngày'],
    score: 88,
    isTodayPick: false,
    saved: false,
    itemIds: ['item-5', 'item-6', 'item-7', 'item-9'],
    contextReasons: [
      'Sơ mi xanh nhạt giữ vẻ lịch sự nhẹ.',
      'Jeans đen và tote đen hợp lịch trình di chuyển nhiều.',
      'Sneaker trắng thoải mái, nhưng cần cân nhắc nếu mưa lớn.'
    ],
    reason:
      'Hợp nếu bạn muốn thoải mái hơn sau phần thuyết trình, nhưng sneaker trắng kém an toàn hơn khi trời mưa.',
    items: [item('item-5'), item('item-6'), item('item-7'), item('item-9')]
  },
  {
    id: 'outfit-3',
    number: '#3',
    title: 'Phóng khoáng sau giờ làm',
    description: 'Nhẹ nhàng hơn cho buổi hẹn hoặc cafe tối.',
    tags: ['Thư giãn', 'Hẹn hò'],
    score: 78,
    isTodayPick: false,
    saved: false,
    itemIds: ['item-8', 'item-4', 'item-7'],
    contextReasons: [
      'Tông be tạo cảm giác mềm và thân thiện.',
      'Phụ kiện nâu giúp outfit có điểm nhấn vintage.',
      'Ít phù hợp nhất với bối cảnh thuyết trình trang trọng.'
    ],
    reason:
      'Đẹp cho lịch cá nhân sau giờ học, nhưng chưa phải lựa chọn tối ưu cho phần thuyết trình chính trong ngày.',
    items: [item('item-8'), item('item-4'), item('item-7')]
  }
];

export const TRY_ON_STATE = {
  selectedOutfitId: 'outfit-1',
  generationStatus: 'idle',
  resultImage: USER_PROFILE.avatar
};

export const WEATHER_DATA = {
  temp: DAILY_CONTEXT.weather.temp,
  condition: DAILY_CONTEXT.weather.condition,
  suggestion: DAILY_CONTEXT.weather.suggestion
};

export const CALENDAR_DATA = {
  event: DAILY_CONTEXT.calendar.event,
  suggestion: DAILY_CONTEXT.calendar.suggestion
};
