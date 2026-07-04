# CLAUDE.md

## Mục tiêu repo

Repo này chứa một static web page tiếng Việt để tra cứu các công cụ AI dùng trong workflow coding. Khi làm việc ở đây, ưu tiên:

1. Giữ nội dung rõ, thực dụng, dễ scan.
2. Giữ cấu trúc tĩnh và dễ bảo trì.
3. Chỉ thêm độ phức tạp khi nó thực sự cải thiện trải nghiệm tra cứu.

## Đọc gì trước khi sửa

1. `README.md`
2. `DESIGN.md`
3. `src/data/tools.js`
4. `src/main.js`
5. `src/styles.css`

Không sửa UI trước khi hiểu `DESIGN.md` và `src/data/tools.js`, vì hai file này là source of truth cho design và nội dung.

## Cách làm việc mong muốn

- Ưu tiên thay đổi nhỏ, chính xác.
- Nếu thêm tool mới, cập nhật dữ liệu trước, sau đó mới sửa UI nếu thật sự cần.
- Không đổi visual direction sang theme tối hoặc tím-trắng generic.
- Không thêm framework, bundler hay thư viện mới nếu không có lý do mạnh.
- Nếu cần animation, dùng nhẹ và có mục đích.

## Quy tắc nội dung

- Copy hiển thị bằng tiếng Việt.
- Tên tool, repo, command, slash command giữ nguyên.
- Mô tả phải trả lời được 3 câu:
  - Tool này là gì?
  - Dùng khi nào?
  - Lệnh nào cần nhớ?

## Quy tắc code

- `src/data/tools.js` giữ thuần dữ liệu, không nhét logic render vào đây.
- `src/main.js` chịu trách nhiệm render và tương tác nhẹ.
- `src/styles.css` là nơi duy nhất định nghĩa visual system.
- Nếu thêm state mới, giữ code đơn giản và tránh biến `main.js` thành framework tự chế.

## Khi cập nhật tool data

- Thêm hoặc chỉnh `sourceUrl` nếu nguồn thay đổi.
- Kiểm tra lại `keywords` để search hoạt động tốt.
- Giữ `quickCommands` có giá trị thực tế; tránh nhồi command chỉ để cho đủ.
- Nếu command chỉ là mnemonic thay vì shell command thật, ghi rõ trong `note`.

## QA bắt buộc

Sau mỗi thay đổi có ảnh hưởng tới UI:

1. Chạy local bằng `npm run dev`.
2. Kiểm tra desktop.
3. Kiểm tra mobile.
4. Test search.
5. Test filter.
6. Test nút copy command.

## Không nên làm

- Không chuyển project sang React/Vue chỉ để render danh sách.
- Không thêm build step nặng nếu static server hiện tại vẫn đủ.
- Không copy nguyên văn README dài từ repo nguồn vào UI.
- Không biến docs thành changelog dài dòng; ưu tiên hướng dẫn vận hành.

## Định nghĩa hoàn thành

Một thay đổi được xem là xong khi:

- UI vẫn chạy local.
- Nội dung đúng và dễ tra cứu.
- Docs liên quan còn đồng bộ.
- Không tạo thêm complexity không cần thiết.
