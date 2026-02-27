# Writing Part 1 - Project Instructions

## Tech Stack

- **Framework:** ReactJS
- **Styling:** SCSS + Ant Design (antd)
- **Tour/Guide:** Driver.js
- **State:** localStorage (lưu bài làm)

## Color Palette

| Token       | Hex       | Usage                          |
|-------------|-----------|--------------------------------|
| `cream`     | `#FFFDF1` | Background chính               |
| `peach`     | `#FFCE99` | Accent nhẹ, hover, border      |
| `orange`    | `#FF9644` | Primary button, highlight       |
| `brown`     | `#562F00` | Text chính, heading, dark accent|

## Layout

- Header & Footer dùng chung component (`<Header />`, `<Footer />`), được load từ placeholder.
- Nội dung chính nằm trong `.content-pusher > .container`.

## Data Source

- File: `data-writing-part1.js`
- Export: `writingPart1Data` — mảng các topic, mỗi topic gồm:
  ```js
  {
    id: string,          // VD: 'wp1_topic1'
    title: string,       // Tiêu đề chủ đề
    questions: [
      { question: string, sample: string }  // 5 câu hỏi + đáp án mẫu
    ]
  }
  ```
- Hiện có 10 chủ đề, mỗi chủ đề 5 câu hỏi.

## Core Features

1. **Topic Selector Grid** — Grid nút chọn chủ đề, mỗi lần chỉ hiển thị 1 chủ đề (active).
2. **Writing Card** — Mỗi chủ đề tạo 1 card chứa:
   - Timer bar (3 phút đếm ngược)
   - 5 textarea (mỗi câu 1-10 từ, hard limit)
   - Word count hiển thị `n/10 words`, đỏ khi đạt giới hạn
   - Nút xem câu trả lời mẫu (toggle ẩn/hiện)
3. **Auto-start Timer** — Timer tự bắt đầu khi user gõ ký tự đầu tiên.
4. **Hard Word Limit** — Chặn nhập quá 10 từ (mô phỏng thi thật).
5. **Auto-save** — Bài làm lưu vào `localStorage` key: `writing_part1_{topicId}`.
6. **Driver.js Tour** — Hướng dẫn sử dụng, tự chạy lần đầu, nút `❓` để xem lại.

## Component Structure (ReactJS)

```
WritingPart1Page
├── ExplanationBox          // Hộp giải thích phương pháp
├── TopicSelectorGrid       // Grid nút chọn chủ đề
│   └── TopicButton[]
├── WritingCard              // Card bài tập (1 active tại 1 thời điểm)
│   ├── TimerBar             // Nút start + đồng hồ đếm ngược
│   ├── WritingPrompt[]      // Mỗi câu hỏi: label + textarea + word count
│   ├── ShowSampleButton     // Nút toggle đáp án mẫu
│   └── SampleAnswerList     // Danh sách câu trả lời mẫu
└── TourButton               // Nút ❓ kích hoạt lại tour
```

## SCSS Variables

```scss
$color-cream:  #FFFDF1;
$color-peach:  #FFCE99;
$color-orange: #FF9644;
$color-brown:  #562F00;

$font-main: 'Segoe UI', sans-serif;
$border-radius: 12px;
$card-shadow: 0 4px 16px rgba(86, 47, 0, 0.10);
```

## Ant Design Usage

- `Button` — cho topic selector, start timer, show sample
- `Card` — cho writing card
- `Input.TextArea` — cho textarea nhập liệu
- `Tag` / `Badge` — cho word count
- `Grid` (Row, Col) — cho topic selector grid
- `Typography` (Title, Paragraph) — cho heading, description
- `message` / `Modal` — cho alert hết giờ

## Important Rules

- Khi chuyển chủ đề: dừng timer cũ, reset timer display, giữ nguyên bài đã lưu.
- Textarea bị disable khi hết giờ.
- Word count chuyển đỏ + bold khi đạt 10 từ.
- Load bài từ localStorage khi mount.
- Tour chỉ tự chạy lần đầu (check `hasSeenWritingPart1Tour` trong localStorage).
