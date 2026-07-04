---
name: Cyber-Minimalist Developer HUD
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#f8f4ff'
  on-tertiary: '#1000a9'
  tertiary-container: '#d7d6ff'
  on-tertiary-container: '#494bd7'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
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

Hệ thống thiết kế này tập trung vào ngôn ngữ **Cyber-Minimalist**, được tối ưu hóa cho các nhà phát triển công cụ AI và CLI. Mục tiêu là tạo ra một môi trường làm việc tập trung cao độ, mang lại cảm giác kỹ thuật, tinh vi nhưng vẫn giữ được sự tinh giản cần thiết.

Thẩm mỹ chủ đạo kết hợp giữa sự nghiêm ngặt của chủ nghĩa tối giản (Minimalism) với các điểm nhấn công nghệ tương lai. Giao diện sử dụng các lớp nền tối sâu (Deep Charcoal) để giảm mỏi mắt, kết hợp với các hiệu ứng ánh sáng neon tinh tế để chỉ dẫn hành động. Phản hồi cảm xúc hướng tới sự chuyên nghiệp, chính xác và tiên phong.

## Colors

Bảng màu được thiết kế để hoạt động tối ưu trong môi trường ánh sáng thấp, sử dụng độ tương phản cao tại các điểm tương tác.

- **Primary (Electric Blue - #00F0FF):** Màu chủ đạo cho các hành động chính, trạng thái active và các đường dẫn quan trọng. Mang lại cảm giác năng lượng và tốc độ.
- **Secondary (Emerald Green - #10B981):** Sử dụng cho các chỉ số thành công, trạng thái hoạt động của Agent và các thông báo tích cực.
- **Background (Deep Charcoal - #0F172A):** Lớp nền chính, tạo độ sâu và sự ổn định cho toàn bộ giao diện.
- **Surface:** Các lớp bề mặt (cards, panels) sử dụng biến thể của màu trung tính với độ sáng nhẹ để phân lớp.
- **Accents:** Sử dụng các hiệu ứng Glow (tỏa sáng) nhẹ với độ mờ cao cho các phần tử quan trọng nhất.

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
  - Lớp 0 (Base): #0F172A.
  - Lớp 1 (Cards/Sidebar): #1E293B.
  - Lớp 2 (Popovers/Tooltips): #334155.
- **Borders:** Sử dụng đường viền mảnh (1px) với độ mờ thấp (10-20% trắng hoặc màu Primary) thay vì bóng đổ nặng.
- **Active State Elevation:** Khi một phần tử được kích hoạt hoặc hover, sử dụng hiệu ứng "Neon Border" - một đường viền mảnh màu Primary với hiệu ứng drop-shadow cùng màu, độ mờ cực cao (spread thấp, blur trung bình).

## Shapes

Ngôn ngữ hình khối duy trì sự sắc sảo và chính xác.

- **Góc bo:** Sử dụng mức độ **Soft (0.25rem)** cho hầu hết các linh kiện. Điều này giữ cho giao diện trông hiện đại nhưng vẫn đủ "cứng" và mang tính kỹ thuật cao.
- **Containers:** Các khối chứa mã nguồn hoặc terminal nên sử dụng góc vuông hoàn toàn ở các cạnh ghép nối để tạo cảm giác hệ thống.
- **Interactive Elements:** Các nút bấm và inputs tuân thủ nghiêm ngặt chuẩn `rounded-sm` để tạo sự nhất quán.

## Components

- **Buttons:** 
  - *Primary:* Nền màu Primary, chữ đen hoặc tối đậm để tối đa tương phản. 
  - *Ghost:* Không nền, viền 1px màu Primary, hiệu ứng hover làm sáng viền và thêm glow nhẹ.
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