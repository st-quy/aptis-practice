import React, { useEffect, useState, useRef } from 'react';
import { Row, Col, Button, Card, Input, Tag, Typography, Space, Progress, Tooltip } from 'antd';
import {
  ClockCircleOutlined,
  ReloadOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  CheckCircleFilled,
  PlayCircleOutlined,
  BulbOutlined,
} from '@ant-design/icons';
import { writingPart1Data } from '../../js/data-writing-part1';
import '../../styles/WritingPart1.scss';

const { TextArea } = Input;
const { Title, Paragraph, Text } = Typography;

const WORD_LIMIT = 10;
const START_SECONDS = 180; // 3 minutes

const storageKey = (topicId) => `writing_part1_${topicId}`;

// Brand colors
const colors = {
  milkWhite: '#FFFDF1',
  lightOrange: '#FFCE99',
  brandOrange: '#FF9644',
  deepBrown: '#562F00',
  danger: '#ff4d4f',
};

export default function WritingPart1() {
  const [active, setActive] = useState(writingPart1Data[0].id);
  const [answers, setAnswers] = useState({});
  const [secondsLeft, setSecondsLeft] = useState(START_SECONDS);
  const [isRunning, setIsRunning] = useState(false);
  const [showSample, setShowSample] = useState(false);
  const timerRef = useRef(null);

  // BUG FIX: Reset answers, timer, and showSample when switching topics
  useEffect(() => {
    setAnswers({}); // Always clear answers when switching topics
    setSecondsLeft(START_SECONDS);
    setIsRunning(false);
    setShowSample(false);
    clearInterval(timerRef.current);
    return () => clearInterval(timerRef.current);
  }, [active]);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setSecondsLeft((s) => {
          if (s <= 1) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            return 0;
          }
          return s - 1;
        });
      }, 1000);
      return () => clearInterval(timerRef.current);
    }
  }, [isRunning]);

  const startTimer = () => {
    if (!isRunning && secondsLeft > 0) setIsRunning(true);
  };

  const onInput = (index, ev) => {
    const raw = ev.target.value;
    const words = raw.trim().split(/\s+/).filter(Boolean);
    let value = raw;
    if (words.length > WORD_LIMIT) {
      value = words.slice(0, WORD_LIMIT).join(' ');
    }
    const next = { ...answers, [index]: value };
    setAnswers(next);
    localStorage.setItem(storageKey(active), JSON.stringify(next));
  };

  const formatTime = (s) => {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  };

  const timerPercent = Math.round(((START_SECONDS - secondsLeft) / START_SECONDS) * 100);
  const activeTopic = writingPart1Data.find((t) => t.id === active);
  const activeIndex = writingPart1Data.findIndex((t) => t.id === active);

  // Count answered questions
  const answeredCount = activeTopic.questions.filter(
    (_, i) => (answers[i] || '').trim().length > 0
  ).length;

  return (
    <div className="writing-part1-container">
      {/* Page Header */}
      <div className="page-intro">
        <Title level={1} className="page-intro__title">
          Writing - Part 1
        </Title>
        <Paragraph className="page-intro__subtitle">
          Chọn chủ đề và viết câu trả lời ngắn (1–10 từ). Timer 3 phút.
        </Paragraph>
      </div>

      <Row gutter={[20, 20]}>
        {/* Tips & Notes */}
        <Col span={24}>
          <Card className="tips-card" styles={{ body: { padding: '24px' } }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${colors.brandOrange}, ${colors.lightOrange})`,
                  fontSize: 18,
                }}
              >
                💡
              </span>
              <Text strong style={{ color: colors.deepBrown, fontSize: 16 }}>
                Phương pháp học &amp; Lưu ý
              </Text>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div className="tip-item">
                <Text style={{ color: colors.deepBrown, fontSize: 13, lineHeight: 1.6 }}>
                  <BulbOutlined style={{ color: colors.brandOrange, marginRight: 6 }} />
                  Bạn có <strong>3 phút</strong> để trả lời <strong>5 câu hỏi</strong>. Lưu ý quan trọng:
                  Hệ thống thi thật sẽ ngăn bạn nhập tiếp khi số từ vượt quá giới hạn
                  (thường là 5 từ, ở đây là 10 từ).
                </Text>
              </div>

              <div className="tip-item">
                <Text style={{ color: colors.deepBrown, fontSize: 13, lineHeight: 1.6 }}>
                  <ClockCircleOutlined style={{ color: colors.brandOrange, marginRight: 6 }} />
                  <strong>Tính năng:</strong> Bấm nút <strong>Bắt đầu</strong> để khởi động đồng hồ đếm ngược.
                  Hệ thống cũng tự động lưu bài làm và cắt bớt nếu viết quá dài.
                </Text>
              </div>
            </div>
          </Card>
        </Col>

        {/* Topic Selector */}
        <Col span={24}>
          <Card className="topic-card">
            <Text strong style={{ color: colors.deepBrown, marginBottom: 12, display: 'block', fontSize: 13 }}>
              Chọn bộ đề luyện tập:
            </Text>
            <Space wrap size={[8, 8]}>
              {writingPart1Data.map((t, idx) => (
                <Tooltip title={t.title} key={t.id}>
                  <Button
                    type={t.id === active ? 'primary' : 'default'}
                    shape="round"
                    size="middle"
                    onClick={() => setActive(t.id)}
                    style={
                      t.id === active
                        ? {
                          background: colors.brandOrange,
                          borderColor: colors.brandOrange,
                          fontWeight: 600,
                          boxShadow: `0 2px 8px ${colors.brandOrange}44`,
                        }
                        : {
                          borderColor: colors.lightOrange,
                          color: colors.deepBrown,
                        }
                    }
                  >
                    {idx + 1}
                  </Button>
                </Tooltip>
              ))}
            </Space>
          </Card>
        </Col>

        {/* Main Content */}
        <Col span={24}>
          <Card className="main-quiz-card">
            {/* Card Header with Title + Timer */}
            <div className="card-banner">
              <div style={{ flex: 1, minWidth: 200 }}>
                <Text style={{ color: 'white', opacity: 0.85, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1 }}>
                  Chủ đề {activeIndex + 1}
                </Text>
                <Title level={4} style={{ color: 'white', margin: '4px 0 0', fontSize: 18 }}>
                  {activeTopic?.title.replace(/^Chủ đề \d+:\s*/, '')}
                </Title>
              </div>

              {/* Timer Section */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: 12,
                  padding: '8px 16px',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <ClockCircleOutlined style={{ color: 'white', fontSize: 18 }} />
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    fontFamily: 'monospace',
                    color: secondsLeft === 0 ? colors.danger : 'white',
                    minWidth: 60,
                    textAlign: 'center',
                  }}
                >
                  {formatTime(secondsLeft)}
                </div>
                {!isRunning && secondsLeft > 0 && (
                  <Button
                    icon={<PlayCircleOutlined />}
                    onClick={startTimer}
                    size="middle"
                    style={{
                      background: 'rgba(255,255,255,0.9)',
                      borderColor: 'transparent',
                      color: colors.brandOrange,
                      fontWeight: 700,
                      borderRadius: 8,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    }}
                  >
                    Bắt đầu
                  </Button>
                )}
              </div>
            </div>

            {/* Progress bar */}
            <Progress
              percent={timerPercent}
              showInfo={false}
              strokeColor={secondsLeft <= 30 ? colors.danger : colors.brandOrange}
              trailColor={colors.lightOrange + '44'}
              style={{ marginBottom: 0, lineHeight: 0 }}
              size={['100%', 4]}
            />

            {/* Action Buttons */}
            <div className="action-bar">
              <Space size={8}>
                <Tag
                  color={answeredCount === activeTopic.questions.length ? 'success' : 'default'}
                  style={{ borderRadius: 20, padding: '2px 12px' }}
                >
                  {answeredCount === activeTopic.questions.length && (
                    <CheckCircleFilled style={{ marginRight: 4 }} />
                  )}
                  {answeredCount}/{activeTopic.questions.length} câu đã trả lời
                </Tag>
              </Space>

              <Space size={8}>
                <Button
                  icon={showSample ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                  onClick={() => setShowSample((s) => !s)}
                  style={{
                    borderColor: colors.brandOrange,
                    color: showSample ? 'white' : colors.brandOrange,
                    background: showSample ? colors.brandOrange : 'transparent',
                    borderRadius: 8,
                    fontWeight: 500,
                  }}
                >
                  {showSample ? 'Ẩn đáp án' : 'Xem đáp án'}
                </Button>
                <Button
                  icon={<ReloadOutlined />}
                  onClick={() => {
                    setAnswers({});
                    localStorage.removeItem(storageKey(active));
                  }}
                  style={{
                    borderColor: colors.deepBrown,
                    color: colors.deepBrown,
                    borderRadius: 8,
                    fontWeight: 500,
                  }}
                >
                  Reset
                </Button>
              </Space>
            </div>

            {/* Questions */}
            <div className="questions-wrapper">
              {activeTopic.questions.map((q, i) => {
                const val = answers[i] || '';
                const count = val.trim().split(/\s+/).filter(Boolean).length;
                const reached = count >= WORD_LIMIT;

                return (
                  <div key={i} className="question-item">
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 8,
                      }}
                    >
                      <Text strong style={{ color: colors.deepBrown, fontSize: 14 }}>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            background: colors.brandOrange,
                            color: 'white',
                            fontSize: 12,
                            fontWeight: 700,
                            marginRight: 8,
                          }}
                        >
                          {i + 1}
                        </span>
                        {q.question}
                      </Text>
                      <Tag
                        color={reached ? 'error' : 'default'}
                        style={{
                          fontWeight: reached ? 700 : 400,
                          borderRadius: 20,
                          fontSize: 12,
                        }}
                      >
                        {count}/{WORD_LIMIT}
                      </Tag>
                    </div>
                    <TextArea
                      value={val}
                      onChange={(e) => onInput(i, e)}
                      disabled={secondsLeft === 0}
                      placeholder="Write your answer (1–10 words)"
                      autoSize={{ minRows: 2, maxRows: 4 }}
                      style={{
                        borderRadius: 8,
                        borderColor: colors.lightOrange,
                        fontSize: 14,
                      }}
                    />

                    {/* Sample answer inline */}
                    {showSample && (
                      <div
                        style={{
                          marginTop: 8,
                          padding: '8px 12px',
                          borderRadius: 8,
                          background: `linear-gradient(135deg, ${colors.lightOrange}33, ${colors.brandOrange}11)`,
                          border: `1px dashed ${colors.brandOrange}55`,
                        }}
                      >
                        <Text style={{ fontSize: 13, color: colors.deepBrown }}>
                          <strong style={{ color: colors.brandOrange }}>Mẫu:</strong> {q.sample}
                        </Text>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
