# Tony-AIHub

Trang web tiếng Việt để gom các công cụ AI đang dùng trong workflow coding hằng ngày vào một chỗ: mô tả ngắn, điểm mạnh, command cheatsheet và guide cho agent tiếp quản repo.

## Mục tiêu

- Có một landing page/app tĩnh, mở nhanh trong local để tra cứu.
- Không phụ thuộc framework nặng để agent khác có thể sửa nhanh.
- Dữ liệu tool được tách riêng, dễ cập nhật.
- Có đủ docs để Claude, Codex hoặc agent khác tiếp tục làm việc mà không cần đoán cấu trúc repo.

## Chạy local

Yêu cầu: `node >= 18`

```bash
npm run dev
```

Server mặc định chạy tại `http://127.0.0.1:4173`.

Nếu muốn đúng port cố định để QA:

```bash
npm run preview
```

## Cấu trúc repo

```text
.
├── index.html
├── src/
│   ├── data/tools.js
│   ├── main.js
│   └── styles.css
├── scripts/
│   └── dev-server.mjs
├── README.md
├── CLAUDE.md
├── AGENTS.md
├── DESIGN.md
└── AGENT.md
```

## Nguồn dữ liệu chính

`src/data/tools.js` là source of truth cho nội dung trang.

`DESIGN.md` là source of truth cho visual direction, layout shell và component rules.

Mỗi object tool nên giữ các trường sau:

- `name`, `host`, `category`
- `summary`
- `bestFor`
- `highlights`
- `quickCommands`
- `sourceUrl`
- `keywords`

Nếu cần thêm tool mới:

1. Thêm object mới vào `tools`.
2. Nếu là category mới, thêm vào `categories`.
3. Kiểm tra lại phần hero metrics, grid filter và command board sau khi render.
4. Chạy local và QA trên desktop + mobile.

## Quy ước nội dung

- Tất cả copy trên UI viết bằng tiếng Việt.
- Tên tool, command, slash command giữ nguyên theo ngôn ngữ gốc.
- Nếu command chỉ đúng cho một host cụ thể, ghi rõ trong `note`.
- Ưu tiên mô tả thực dụng: tool dùng khi nào, mạnh ở đâu, command nào đáng nhớ.

## Quy ước giao diện

- Visual direction: tối, docs-style, tương phản mềm kiểu operator dashboard; không dùng tím làm màu chủ đạo.
- Typography chính: `Space Grotesk` cho heading, `IBM Plex Sans` cho body, `IBM Plex Mono` cho code.
- Thẻ command phải copy được bằng nút `Copy`.
- Không biến trang thành danh sách card đồng dạng vô hồn; giữ nhịp giữa hero, library, command center và docs.

## Checklist trước khi merge

```text
[ ] Chạy local thành công
[ ] Search/filter hoạt động
[ ] Nút copy hoạt động
[ ] Không có overflow trên mobile
[ ] Command snippets hiển thị đúng host/use case
[ ] Docs còn đồng bộ với source hiện tại
```

## Gợi ý mở rộng sau này

- Thêm trạng thái "ưu tiên hôm nay" hoặc "tool đang hot".
- Cho phép pin/favorite tool vào localStorage.
- Thêm chế độ mở command cheatsheet theo host đang dùng.
- Bổ sung ảnh minh họa, screenshot hoặc flow diagram cho từng tool.

## Nguồn tham khảo nội dung

Nội dung được chuẩn hóa từ docs/README chính thức của:

- Claude Code docs
- OpenAI Codex docs
- Understand Anything
- hermes-agent
- free-claude-code
- RTK
- agent-skills
- agency-agents
- gstack
- andrej-karpathy-skills
- superpowers
- ui-ux-pro-max-skill
- AI for Beginners (Microsoft)
