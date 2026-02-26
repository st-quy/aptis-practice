import React from 'react';
import { Tabs } from 'antd';
import './HomePage.scss';

// ── Card data per tab ──

const guideCards = [
  { title: 'Giới thiệu', desc: 'Cấu trúc bài thi Aptis ESOL' },
  { title: 'Giới thiệu trang web', desc: 'Hướng dẫn sử dụng web ôn tập' },
  { title: 'Tổng hợp Từ vựng', desc: 'Từ vựng theo chủ đề Nơi chốn và Con người' },
  { title: 'Những điều cần nhớ', desc: 'Lời khuyên giúp bạn tự tin và làm bài tốt' },
  { title: 'Tài liệu tham khảo', desc: 'Nguồn tài liệu chính và tài liệu tham khảo thêm' },
  { title: 'Câu hỏi thường gặp', desc: 'Giúp bạn hiểu hơn ý nghĩa của trang web này' },
  { title: 'Câu chuyện đằng sau (Tùy chọn)', desc: 'Một công cụ được tạo ra từ chính trải nghiệm của một người ôn thi.' },
];

const speakingCards = [
  { title: 'Giới thiệu', desc: 'Tổng quan về Kỹ năng Nói' },
  { title: 'Part 1', desc: 'Personal Questions' },
  { title: 'Part 2', desc: 'Describe a Picture' },
  { title: 'Part 3', desc: 'Compare Pictures' },
  { title: 'Part 4', desc: 'Discuss a Topic' },
  { title: 'Ngân hàng ý tưởng', desc: 'Lên ý tưởng cho các câu hỏi quan điểm' },
  { title: 'Phương pháp PEEL', desc: 'Cấu trúc trả lời câu hỏi Speaking' },
  { title: 'Prepare to Test', desc: 'Kiểm tra ghi nhớ sườn bài & mẹo.' },
  { title: 'Thi thử Speaking', desc: 'Mô phỏng bài thi thật', highlight: true },
];

const listeningCards = [
  { title: 'Giới thiệu', desc: 'Tổng quan về Kỹ năng Nghe' },
  { title: 'Part 1 (Câu 1-13)', desc: 'Nhận biết thông tin' },
  { title: 'Part 2 (Câu 14)', desc: 'Nối thông tin' },
  { title: 'Part 3 (Câu 15)', desc: 'Xác định quan điểm' },
  { title: 'Part 4 (Câu 16-17)', desc: 'Nghe hiểu & Suy luận' },
  { title: 'Cheatsheet', desc: 'Bảng tổng hợp Key' },
  { title: 'Làm bài Part 1', desc: 'Kiểm tra ghi nhớ key', highlight: true },
  { title: 'Làm bài Part 4', desc: 'Kiểm tra ghi nhớ key', highlight: true },
];

const readingCards = [
  { title: 'Giới thiệu', desc: 'Tổng quan về kỹ năng đọc' },
  { title: 'Part 1', desc: 'Word Matching' },
  { title: 'Part 2', desc: 'Sentence Jumble' },
  { title: 'Part 3', desc: 'Sentence Jumble (Advanced)' },
  { title: 'Part 4', desc: 'Opinion Matching' },
  { title: 'Part 5', desc: 'Matching Headings' },
  { title: 'Thi thử Reading', desc: 'Mô phỏng bài thi thật', highlight: true },
];

const writingCards = [
  { title: 'Giới thiệu', desc: 'Tổng quan về kỹ năng viết' },
  { title: 'Part 1', desc: 'Trả lời câu hỏi cá nhân' },
  { title: 'Part 2', desc: 'Điền đơn & Trả lời câu hỏi' },
  { title: 'Part 3', desc: 'Trò chuyện trong Chat Room' },
  { title: 'Part 4', desc: 'Viết Email' },
  { title: 'Các lỗi sai khi viết email', desc: 'Sửa lỗi một vài chủ đề' },
  { title: 'Các lỗi sai ngữ pháp', desc: 'Tổng hợp các lỗi sai cơ bản' },
  { title: 'Lỗi sai câu trả lời ngắn', desc: 'Tổng hợp các câu trả lời CLB' },
  { title: 'Typing', desc: 'Luyện tốc độ đánh máy', highlight: true },
  { title: 'Phân Tích Đề Bài', desc: 'Kiểm tra đọc hiểu yêu cầu', highlight: true },
];

// ── Reusable card grid renderer ──
const renderCardGrid = (cards) => (
  <div className="home-page__grid">
    {cards.map((card, idx) => (
      <div
        className={`home-page__card${card.highlight ? ' home-page__card--highlight' : ''}`}
        key={idx}
      >
        <div className="home-page__card-title">{card.title}</div>
        <p className="home-page__card-desc">{card.desc}</p>
      </div>
    ))}
  </div>
);

// ── Tab icon helper ──
const tabIcon = (emoji) => <span style={{ marginRight: 6 }}>{emoji}</span>;

const tabItems = [
  {
    key: 'guide',
    label: <span>{tabIcon('📖')}Hướng dẫn chung</span>,
    children: renderCardGrid(guideCards),
  },
  {
    key: 'speaking',
    label: <span>{tabIcon('🗣️')}Speaking</span>,
    children: renderCardGrid(speakingCards),
  },
  {
    key: 'listening',
    label: <span>{tabIcon('🎧')}Listening</span>,
    children: renderCardGrid(listeningCards),
  },
  {
    key: 'reading',
    label: <span>{tabIcon('📚')}Reading</span>,
    children: renderCardGrid(readingCards),
  },
  {
    key: 'writing',
    label: <span>{tabIcon('✍️')}Writing</span>,
    children: renderCardGrid(writingCards),
  },
];

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="home-page__title">Aptis Practice</h1>
      <p className="home-page__subtitle">
        Chọn một kỹ năng để bắt đầu luyện tập
      </p>

      <Tabs
        defaultActiveKey="guide"
        centered
        items={tabItems}
        size="large"
      />
    </div>
  );
};

export default HomePage;
