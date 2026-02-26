import React, { useState, useEffect, useRef } from 'react';
import { Button, Typography, FloatButton, Tour, ConfigProvider } from 'antd';
import { PlayCircleOutlined, QuestionCircleOutlined, BulbOutlined } from '@ant-design/icons';
import './assets/App.scss';

// ColorHunt: #fffdf1 #ffce99 #ff9644 #562f00
const theme = { token: { colorPrimary: '#ff9644', colorTextBase: '#562f00' } };

const { Title, Text, Paragraph } = Typography;

const navItems = [
  { key: 'home', label: 'Trang Chủ' },
  { key: 'about', label: 'Giới thiệu' },
  { key: 'vocab', label: 'Từ vựng' },
  { key: 'reading', label: 'Reading' },
  { key: 'listening', label: 'Listening' },
  { key: 'writing', label: 'Writing' },
  { key: 'speaking', label: 'Speaking', active: true },
];

const practiceSteps = [
  { step: 1, text: 'Mở ứng dụng ghi âm trên điện thoại của bạn.' },
  { step: 2, text: 'Trên trang web, nhấn nút "Bắt đầu trả lời" và bắt đầu ghi âm trên điện thoại cùng lúc.' },
  { step: 3, text: 'Trả lời câu hỏi trong khoảng thời gian cho phép. Đồng hồ sẽ giúp bạn kiểm soát độ dài câu trả lời.' },
  { step: 4, text: 'Sau khi hoàn thành, bạn có thể tải file ghi âm (MP3) lên các công cụ AI như Google Studio, ChatGPT-4o, hoặc các dịch vụ sửa bài nói chuyên dụng để nhận feedback.' },
];

const part1Strategy = 'Bạn sẽ trả lời 3 câu hỏi cá nhân, mỗi câu trong 30 giây. Mục tiêu là trả lời trôi chảy và phát triển ý một cách tự nhiên.';

// Câu hỏi mẫu Part 1 (3 câu)
const part1Questions = [
  'What do you like to do in your free time?',
  'Do you prefer reading books or watching films? Why?',
  'How often do you use the internet?',
];

function App() {
  const [started, setStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isRunning, setIsRunning] = useState(false);
  const [openTour, setOpenTour] = useState(false);
  const refButton = useRef(null);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      if (currentQuestionIndex < part1Questions.length - 1) {
        setCurrentQuestionIndex((i) => i + 1);
        setTimeLeft(30);
      }
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, currentQuestionIndex]);

  const handleStartAnswer = () => {
    if (!started) {
      setStarted(true);
      setCurrentQuestionIndex(0);
      setTimeLeft(30);
      setIsRunning(true);
    } else {
      setTimeLeft(30);
      setIsRunning(true);
    }
  };

  const steps = [
    { title: 'Bắt đầu', description: 'Nhấn nút "Bắt đầu trả lời" và ghi âm trên điện thoại cùng lúc.', target: () => refButton.current },
  ];

  return (
    <ConfigProvider theme={theme}>
    <div className="app-wrapper">
      <header className="header">
        <div className="logo">Aptis Practice.</div>
        <nav className="nav">
          {navItems.map((item) => (
            <a
              key={item.key}
              href="#"
              className={`nav-link ${item.active ? 'active' : ''}`}
              onClick={(e) => item.active && e.preventDefault()}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="main">
        <Title level={1} className="section-title">
          Speaking - Part 1
        </Title>
        <Paragraph className="section-subtitle">
          Luyện tập trả lời câu hỏi với đồng hồ bấm giờ
        </Paragraph>

        <div className="box method-box">
          <div className="box-title">
            <BulbOutlined className="box-icon" />
            Phương pháp luyện tập hiệu quả
          </div>
          <Paragraph className="box-intro">
            Trang web mô phỏng điều kiện thi bằng cách đưa ra câu hỏi và đồng hồ đếm ngược. Vì trình duyệt hiện chưa hỗ trợ ghi âm trực tiếp, bạn vui lòng làm theo các bước sau:
          </Paragraph>
          <ul className="steps-list">
            {practiceSteps.map(({ step, text }) => (
              <li key={step}>
                <Text strong>Bước {step}:</Text> {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="box strategy-box">
          <div className="box-title">Chiến lược thi Part 1</div>
          <Paragraph>{part1Strategy}</Paragraph>
        </div>

        <div className="action-section" ref={refButton}>
          <Button
            type="primary"
            size="large"
            icon={<PlayCircleOutlined />}
            onClick={handleStartAnswer}
            disabled={isRunning && timeLeft > 0}
            className="start-btn"
          >
            {isRunning ? `Đang trả lời... ${timeLeft}s` : 'Bắt đầu trả lời'}
          </Button>
        </div>

        {started && (
          <div className="practice-block">
            <div className="question-label">
              Câu hỏi {currentQuestionIndex + 1}/{part1Questions.length}
            </div>
            <div className="question-text">{part1Questions[currentQuestionIndex]}</div>
            {!isRunning && timeLeft === 0 && currentQuestionIndex < part1Questions.length - 1 && (
              <Button type="primary" onClick={handleStartAnswer} style={{ marginTop: 12 }}>
                Câu tiếp theo
              </Button>
            )}
            {!isRunning && timeLeft === 0 && currentQuestionIndex === part1Questions.length - 1 && (
              <Paragraph className="done-msg">Bạn đã hoàn thành Part 1. Hãy gửi file ghi âm để nhận feedback.</Paragraph>
            )}
          </div>
        )}
      </main>

      <FloatButton
        icon={<QuestionCircleOutlined />}
        type="primary"
        className="help-float"
        onClick={() => setOpenTour(true)}
      />
      <Tour open={openTour} onClose={() => setOpenTour(false)} steps={steps} />
    </div>
    </ConfigProvider>
  );
}

export default App;
