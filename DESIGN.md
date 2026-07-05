---
name: Tony-AIHub Dark Docs
colors:
  surface: '#1c1a19'
  surface-dim: '#171514'
  surface-bright: '#2a2724'
  surface-container-lowest: '#111110'
  surface-container-low: '#151413'
  surface-container: '#1c1a19'
  surface-container-high: '#23211f'
  surface-container-highest: '#2a2724'
  on-surface: '#f5efe6'
  on-surface-variant: '#c7bdae'
  inverse-surface: '#f5efe6'
  inverse-on-surface: '#171514'
  outline: '#93897b'
  outline-variant: '#4a433c'
  surface-tint: '#d6bf98'
  primary: '#d6bf98'
  on-primary: '#161311'
  primary-container: '#eadbc0'
  on-primary-container: '#47351f'
  inverse-primary: '#977954'
  secondary: '#b89a73'
  on-secondary: '#161311'
  secondary-container: '#7b6140'
  on-secondary-container: '#f5efe6'
  tertiary: '#efe6d7'
  on-tertiary: '#251d15'
  tertiary-container: '#c2a57a'
  on-tertiary-container: '#1b150f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#eadbc0'
  primary-fixed-dim: '#d6bf98'
  on-primary-fixed: '#161311'
  on-primary-fixed-variant: '#47351f'
  secondary-fixed: '#ceb08a'
  secondary-fixed-dim: '#b89a73'
  on-secondary-fixed: '#161311'
  on-secondary-fixed-variant: '#4b3824'
  tertiary-fixed: '#efe6d7'
  tertiary-fixed-dim: '#d9c7aa'
  on-tertiary-fixed: '#251d15'
  on-tertiary-fixed-variant: '#5b4630'
  background: '#171514'
  on-background: '#f5efe6'
  surface-variant: '#2a2724'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '450'
    lineHeight: '1.7'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 20px
  container-max: 1440px
---

## Brand & Style

Hệ thống thiết kế này tập trung vào ngôn ngữ **Dark Documentation Dashboard**, được tối ưu cho việc tra cứu tool và command liên tục trong terminal workflow. Mục tiêu là giữ cảm giác tài liệu vận hành: tối, tĩnh, rõ thứ bậc, ít nhiễu nhưng vẫn đủ sắc để nhận biết trạng thái active.

Thẩm mỹ chủ đạo nghiêng về dark docs shell tương tự các trang tài liệu sản phẩm hiện đại: nền than ấm, bề mặt trung tính, text ngà sáng và điểm nhấn cát ấm thay cho neon. Phản hồi cảm xúc hướng tới sự điềm tĩnh, chính xác và tập trung dài hơi.

## Colors

Bảng màu được thiết kế để hoạt động tối ưu trong môi trường ánh sáng thấp, sử dụng độ tương phản cao tại các điểm tương tác.

- **Primary (Warm Sand - #D6BF98):** Màu chủ đạo cho CTA, active state và các điểm neo cần nhận biết nhanh mà không chói mắt.
- **Secondary (Muted Bronze - #B89A73):** Dùng cho các chi tiết phụ, metadata nổi bật và nhịp màu trong ribbon hoặc badges.
- **Background (Charcoal Ink - #171514):** Lớp nền chính, đủ tối để đọc lâu nhưng vẫn có sắc ấm thay vì đen lạnh.
- **Surface:** Các lớp bề mặt (cards, panels) sử dụng biến thể của màu trung tính với độ sáng nhẹ để phân lớp.
- **Accents:** Chỉ dùng wash hoặc glow rất nhẹ, ưu tiên viền, độ sáng bề mặt và chênh sắc thay vì neon rõ nét.

## Typography

Hệ thống typography ưu tiên sự rõ ràng và tính kỹ thuật. 

- **Inter** được sử dụng cho phần lớn giao diện nhờ khả năng hiển thị xuất sắc ở các kích thước nhỏ và độ trung tính cao.
- **JetBrains Mono** được dành riêng cho các khối mã nguồn (code snippets), thông số CLI và các nhãn (labels) mang tính dữ liệu. Khoảng cách dòng trong code block được nới rộng để tăng khả năng đọc quét.
- Cấu trúc phân cấp thông tin (Information Hierarchy) được duy trì thông qua sự tương phản rõ rệt giữa trọng lượng chữ (font weight) và màu sắc (Primary vs Dimmed text).

## Layout & Spacing

Hệ thống sử dụng **Fluid Grid** dựa trên đơn vị 4px để đảm bảo sự chặt chẽ về mặt toán học.

- **Desktop:** 12 cột, margin 40px, gutter 20px. Nội dung tập trung vào Dashboard theo dạng module.
- **Tablet:** 8 cột, margin 24px. Các card thông tin sẽ stack linh hoạt.
- **Mobile:** 4 cột, margin 16px. Menu điều hướng chuyển sang dạng Drawer hoặc Bottom Bar.
- **Spacing Rhythm:** Sử dụng khoảng cách lớn (`lg`, `xl`) giữa các khối chức năng chính và khoảng cách nhỏ (`xs`, `sm`) cho các phần tử bên trong card để tạo sự nhóm chặt chẽ.

## Elevation & Depth

Trong môi trường tối, chiều sâu không được tạo ra bởi bóng đổ đen truyền thống mà bởi **Tonal Layering** và **Inner Glows**.

- **Surface Levels:** 
  - Lớp 0 (Base): #171514.
  - Lớp 1 (Cards/Sidebar): #1C1A19.
  - Lớp 2 (Popovers/Tooltips): #2A2724.
- **Borders:** Sử dụng đường viền mảnh (1px) với độ mờ thấp (10-20% trắng hoặc màu Primary) thay vì bóng đổ nặng.
- **Active State Elevation:** Khi một phần tử được kích hoạt hoặc hover, ưu tiên đổi sắc bề mặt, tăng viền và thêm highlight ấm rất nhẹ thay vì neon border mạnh.

## Shapes

Ngôn ngữ hình khối duy trì sự sắc sảo và chính xác.

- **Góc bo:** Sử dụng mức độ **Soft (0.25rem)** cho hầu hết các linh kiện. Điều này giữ cho giao diện trông hiện đại nhưng vẫn đủ "cứng" và mang tính kỹ thuật cao.
- **Containers:** Các khối chứa mã nguồn hoặc terminal nên sử dụng góc vuông hoàn toàn ở các cạnh ghép nối để tạo cảm giác hệ thống.
- **Interactive Elements:** Các nút bấm và inputs tuân thủ nghiêm ngặt chuẩn `rounded-sm` để tạo sự nhất quán.

## Components

- **Buttons:** 
  - *Primary:* Nền màu Primary, chữ đen hoặc tối đậm để tối đa tương phản. 
  - *Ghost:* Không nền, viền 1px mờ và hover bằng chênh sắc bề mặt thay vì glow mạnh.
- **Cards (Feature & Code):** 
  - Nền tối hơn lớp Base một chút hoặc sử dụng viền mờ. 
  - Header của card chứa tiêu đề (Inter) và trạng thái Agent (Status dot). 
  - Phần thân chứa Code Snippet với nền đen hoàn toàn (#000000).
- **Chips/Badges:** 
  - Kích thước nhỏ, bo góc 2px. Sử dụng JetBrains Mono cho text bên trong. Thường dùng để hiển thị Model AI (ví dụ: GPT-4, Claude 3).
- **Input Fields:** 
  - Background dạng "Inset" (đổ sâu vào trong), viền chỉ xuất hiện rõ khi Focus bằng màu Primary. Cursor có thể tùy biến thành dạng khối (block cursor) để tăng cảm giác terminal.
- **Lists:** 
  - Các item ngăn cách bởi đường kẻ mảnh 0.5px. Hover state làm thay đổi màu nền sang xám xanh rất nhẹ.
- **Status Indicators:** 
  - Sử dụng các vòng tròn nhỏ có hiệu ứng "Pulse" (nhịp đập) cho các Agent đang xử lý dữ liệu thực tế.
