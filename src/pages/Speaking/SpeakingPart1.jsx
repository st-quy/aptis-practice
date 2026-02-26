import React, { useState, useEffect, useRef } from 'react';
import { Button, Typography, FloatButton, Tour } from 'antd';
import { PlayCircleOutlined, QuestionCircleOutlined, BulbOutlined } from '@ant-design/icons';
import '../../styles/SpeakingPart1.scss';

const { Title, Text, Paragraph } = Typography;

// DATA CONSTANTS (Moved out of component to keep it clean)
const practiceSteps = [
  { step: 1, text: 'Mở ứng dụng ghi âm trên điện thoại của bạn.' },
  { step: 2, text: 'Trên trang web, nhấn nút "Bắt đầu trả lời" và bắt đầu ghi âm trên điện thoại cùng lúc.' },
  { step: 3, text: 'Trả lời câu hỏi trong khoảng thời gian cho phép. Đồng hồ sẽ giúp bạn kiểm soát độ dài câu trả lời.' },
  { step: 4, text: 'Sau khi hoàn thành, bạn có thể tải file ghi âm (MP3) lên các công cụ AI để nhận feedback.' },
];

const part1Questions = [
  'What do you like to do in your free time?',
  'Do you prefer reading books or watching films? Why?',
  'How often do you use the internet?',
];

const part1Strategy = 'Bạn sẽ trả lời 3 câu hỏi cá nhân, mỗi câu trong 30 giây. Mục tiêu là trả lời trôi chảy và phát triển ý một cách tự nhiên.';

const SpeakingPart1 = () => {
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
        // Optional: Auto-advance could go here, or wait for user click
      }
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, currentQuestionIndex]);

  const handleStartAnswer = () => {
    setStarted(true);
    setIsRunning(true);
    setTimeLeft(30);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < part1Questions.length - 1) {
      setCurrentQuestionIndex((i) => i + 1);
      setTimeLeft(30);
      setIsRunning(true);
    }
  };

  const tourSteps = [
    {
      title: 'Bắt đầu',
      description: 'Nhấn nút "Bắt đầu trả lời" và ghi âm trên điện thoại cùng lúc.',
      target: () => refButton.current
    },
  ];

  return (
    <div className="speaking-part1-page">
      <main className="speaking-content">
        <Title level={1} className="section-title">
          Speaking - Part 1
        </Title>
        <Paragraph className="section-subtitle">
          Luyện tập trả lời câu hỏi với đồng hồ bấm giờ
        </Paragraph>

        {/* Practice Methods */}
        <div className="info-box method-box">
          <div className="box-title">
            <BulbOutlined className="box-icon" />
            Phương pháp luyện tập hiệu quả
          </div>
          <Paragraph className="box-intro">
            Trang web mô phỏng điều kiện thi thực tế. Vui lòng thực hiện theo các bước sau:
          </Paragraph>
          <ul className="steps-list">
            {practiceSteps.map(({ step, text }) => (
              <li key={step}>
                <Text strong>Bước {step}:</Text> {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Strategy Box */}
        <div className="info-box strategy-box">
          <div className="box-title">Chiến lược thi Part 1</div>
          <Paragraph>{part1Strategy}</Paragraph>
        </div>

        {/* Action Center */}
        <div className="action-section" ref={refButton}>
          <Button
            type="primary"
            size="large"
            icon={<PlayCircleOutlined />}
            onClick={handleStartAnswer}
            disabled={isRunning}
            className="start-btn"
          >
            {isRunning ? `Đang đếm ngược... ${timeLeft}s` : 'Bắt đầu trả lời'}
          </Button>
        </div>

        {/* Active Practice Area */}
        {started && (
          <div className="practice-card">
            <div className="question-header">
              Câu hỏi {currentQuestionIndex + 1} / {part1Questions.length}
            </div>
            <div className="question-display">
              {part1Questions[currentQuestionIndex]}
            </div>

            {!isRunning && timeLeft === 0 && (
              <div className="post-answer-actions">
                {currentQuestionIndex < part1Questions.length - 1 ? (
                  <Button type="primary" onClick={handleNextQuestion}>
                    Câu tiếp theo
                  </Button>
                ) : (
                  <Paragraph className="completion-msg">
                    🎉 Bạn đã hoàn thành Part 1! Hãy lưu file ghi âm để đối chiếu.
                  </Paragraph>
                )}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Help System */}
      <FloatButton
        icon={<QuestionCircleOutlined />}
        type="primary"
        className="help-btn"
        onClick={() => setOpenTour(true)}
      />
      <Tour open={openTour} onClose={() => setOpenTour(false)} steps={tourSteps} />
    </div>
  );
};

export default SpeakingPart1;
