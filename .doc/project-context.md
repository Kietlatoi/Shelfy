# Shelfy Project Context

## Mục tiêu sản phẩm

Shelfy là một web/app giải quyết bài toán: **"Hôm nay mặc gì?"**

Ý tưởng cốt lõi là giúp người dùng số hóa tủ đồ cá nhân, sau đó dùng AI để gợi ý outfit phù hợp cho từng ngày dựa trên:

- Những trang phục người dùng đang thật sự sở hữu.
- Thời tiết hiện tại hoặc trong ngày.
- Sự kiện trong lịch cá nhân.
- Bối cảnh thủ công do người dùng chọn, ví dụ: đi học, đi làm, đi chơi, thuyết trình, hẹn hò, sự kiện.

Sản phẩm không chỉ là app quản lý quần áo. Shelfy là một **trợ lý phối đồ cá nhân theo ngữ cảnh**, lấy tủ đồ thật của người dùng làm nguồn dữ liệu chính.

## Trạng thái hiện tại của dự án

Dự án hiện đang ở giai đoạn **frontend prototype**.

Các dữ liệu hiện tại nên được hiểu là mock data:

- Tài khoản và đăng nhập là mô phỏng.
- Danh sách quần áo là dữ liệu mẫu.
- Gợi ý outfit là dữ liệu mẫu.
- Thời tiết là dữ liệu mẫu.
- Lịch cá nhân là dữ liệu mẫu.
- AI phân loại quần áo, AI phối đồ và AI thử đồ ảo chưa phải luồng backend thật.

Mục tiêu ở giai đoạn này là dựng đúng màn hình, luồng trải nghiệm, trạng thái UI và logic frontend trước khi nối API/backend thật.

## Tính năng chính

### 1. Quản lý tài khoản

Người dùng có thể tạo tài khoản và đăng nhập nhanh bằng Email hoặc Google.

Mục đích của tài khoản là lưu trữ và đồng bộ dữ liệu tủ đồ cá nhân, outfit đã lưu, lịch sử dùng app, lượt thử đồ ảo và các quyền lợi Premium.

Ở prototype hiện tại, đăng nhập chỉ điều hướng vào dashboard, chưa có xác thực thật.

### 2. Số hóa và phân loại tủ đồ

Người dùng có thể tải ảnh quần áo lên từ web/mobile hoặc chụp trực tiếp trên mobile.

Hệ thống về sau sẽ tự động nhận diện và phân loại item theo:

- Nhóm trang phục: áo, quần, váy, giày, phụ kiện.
- Màu sắc.
- Phong cách.
- Logo, mẫu mã hoặc đặc điểm nhận diện nếu có thể.

Người dùng có thể CRUD quần áo trong tủ đồ:

- Thêm item mới.
- Xem danh sách item.
- Cập nhật thông tin item.
- Xóa item khỏi tủ đồ.

Nếu hệ thống không nhận diện được khi chụp hoặc upload, người dùng vẫn có thể nhập thủ công, lọc thủ công, tìm kiếm theo logo/mẫu mã/phong cách/màu sắc để lưu item vào tủ đồ ảo.

### 3. Tích hợp bối cảnh thực tế

Shelfy cần hiểu bối cảnh trước khi gợi ý outfit.

Nguồn bối cảnh dự kiến gồm:

- Dữ liệu thời tiết từ API.
- Lịch cá nhân từ Google Calendar.
- Lựa chọn thủ công của người dùng.

Ví dụ bối cảnh:

- Đi học.
- Đi làm.
- Đi chơi.
- Thuyết trình.
- Dự tiệc.
- Hẹn hò.
- Sự kiện ngoài trời.
- Ngày mưa, nóng, lạnh hoặc cần di chuyển nhiều.

AI sẽ kết hợp các thông tin này để chọn outfit phù hợp hơn thay vì phối đồ ngẫu nhiên.

### 4. Gợi ý phối đồ AI

Tính năng trung tâm là **"Hôm nay mặc gì?"**.

AI sẽ đề xuất các outfit được phối sẵn từ chính những món đồ người dùng đang sở hữu trong tủ đồ.

Người dùng có thể:

- Xem nhiều outfit gợi ý.
- Đọc lý do vì sao outfit đó phù hợp.
- Lưu lại outfit yêu thích.
- Yêu cầu đổi hoặc tạo gợi ý khác.
- Chọn một outfit để chuyển sang thử đồ ảo.

Các gợi ý cần dựa trên:

- Danh sách item trong tủ đồ.
- Thời tiết.
- Lịch cá nhân.
- Bối cảnh người dùng chọn.
- Phong cách cá nhân và lịch sử lựa chọn nếu có.

### 5. Thử đồ ảo

Sau khi AI gợi ý outfit, người dùng có thể chọn một bộ đồ để thử.

Luồng dự kiến:

1. Người dùng chọn outfit muốn thử.
2. Người dùng upload một ảnh có mặt cá nhân.
3. AI tạo ảnh minh họa/model 2D, ghép người dùng với outfit đã chọn.
4. Hệ thống trả kết quả preview để người dùng dễ hình dung trước khi mặc thật.

Tính năng này giúp người dùng tự tin hơn khi chọn outfit.

Ở prototype hiện tại, luồng thử đồ ảo mới mô phỏng bằng upload ảnh, loading giả lập và ảnh kết quả mẫu.

### 6. Gamification: Streak chuỗi mặc đẹp

Shelfy có tính năng streak để tạo thói quen quay lại app mỗi ngày.

Người dùng duy trì chuỗi sử dụng bằng cách nhận gợi ý, lưu outfit, hoặc chọn outfit mặc trong ngày.

Streak có thể gắn với phần thưởng như:

- Thêm lượt thử đồ ảo.
- Đặc quyền Premium.
- Badge/thành tích.
- Ưu đãi hoặc tính năng nâng cao.

## Các màn hình/luồng chính nên có

- Login/Register.
- Dashboard trả lời nhanh câu hỏi "Hôm nay mặc gì?".
- Tủ đồ cá nhân.
- Thêm/chỉnh sửa item quần áo.
- Bộ lọc/tìm kiếm quần áo.
- Trang gợi ý outfit.
- Trang thử đồ ảo.
- Hồ sơ người dùng.
- Premium hoặc quản lý lượt thử đồ ảo.

## Nguyên tắc khi AI khác làm tiếp dự án

- Ưu tiên giữ đúng bài toán sản phẩm: giúp người dùng chọn đồ hôm nay nhanh và tự tin.
- Khi chưa có backend, tiếp tục dùng mock data nhưng phải giữ flow gần với sản phẩm thật.
- UI nên thể hiện rõ rằng outfit đến từ đồ trong tủ của chính người dùng.
- Gợi ý AI cần có lý do, không chỉ trả danh sách quần áo.
- Thử đồ ảo phải gắn với outfit đã chọn, không phải một tính năng rời rạc.
- Tủ đồ là dữ liệu nền quan trọng nhất của hệ thống.
- Weather API và Google Calendar là nguồn bối cảnh chính trong tương lai.
- Premium/gamification là lớp tăng engagement, không phải luồng cốt lõi ban đầu.

## Ghi chú kỹ thuật hiện tại

Codebase hiện là React + Vite frontend.

Một số implementation hiện tại:

- Routing dùng `react-router-dom`.
- UI dùng Tailwind CSS và các component kiểu shadcn.
- Dữ liệu mẫu nằm trong `src/const/mockData.js`.
- Route `/ai-outfit` đã được bỏ page trung gian và redirect thẳng sang `/suggestions`.
- Chưa có backend/API thật.
- Chưa có auth thật.
- Chưa có lưu trữ persistent cho wardrobe/outfit.
- Chưa có tích hợp thời tiết thật.
- Chưa có tích hợp Google Calendar thật.
- Chưa có AI generation thật.
