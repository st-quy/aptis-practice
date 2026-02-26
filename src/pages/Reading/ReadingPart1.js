import React, { useState } from 'react';
import { Card, Radio, Button, Typography, Space } from 'antd';
import { BulbOutlined } from '@ant-design/icons';
import '../../styles/ReadingPart1.scss';

const { Title, Paragraph, Text } = Typography;

// DATA FULL 13 ĐỀ 
const readingPart1Data = [
    { id: '1', title: 'Đề 1: Contract Details', questions: [
        { text: "1. The contract is a very important document. The whole contract has 55 pages. It is very ___.", options: ["long", "red", "tall"], answer: "long" },
        { text: "2. Can you read it carefully and check every ___.", options: ["work", "job", "detail"], answer: "detail" },
        { text: "3. I will print it and give you a ___.", options: ["information", "copy", "paper"], answer: "copy" },
        { text: "4. I am very ___ and don't have any free time.", options: ["busy", "table", "round"], answer: "busy" },
        { text: "5. I will have meetings with my ___.", options: ["neighbor", "wife", "client"], answer: "client" }
    ]},
    { id: '2', title: 'Đề 2: Daily Routine', questions: [
        { text: "1. I am never ___.", options: ["late", "soon", "early"], answer: "late" },
        { text: "2. In the mornings, I attend ___.", options: ["meetings", "dinner", "breakfast"], answer: "meetings" },
        { text: "3. I have lunch in the ___.", options: ["park", "city", "village"], answer: "park" },
        { text: "4. I buy food from the ___.", options: ["shop", "window", "car"], answer: "shop" },
        { text: "5. I always ___ dinner for myself.", options: ["cook", "drink", "breathe"], answer: "cook" }
    ]},
    { id: '3', title: 'Đề 3: Office Day', questions: [
        { text: "1. My colleague is not at work today because he was ___.", options: ["sick", "black", "origin"], answer: "sick" },
        { text: "2. I am going to ___ three reports this afternoon.", options: ["read", "eat", "drink"], answer: "read" },
        { text: "3. I have an important ___ with a client later.", options: ["meeting", "sleep", "remote"], answer: "meeting" },
        { text: "4. The phone in my office is ___ all the time.", options: ["ringing", "cooking", "singing"], answer: "ringing" },
        { text: "5. I need to take a break and ___ coffee.", options: ["drink", "eat", "watch"], answer: "drink" }
    ]},
    { id: '4', title: 'Đề 4: Work Day', questions: [
        { text: "1. I start ___ in the morning at 7 a.m.", options: ["sleep", "early", "angry"], answer: "early" },
        { text: "2. I have ___ at the cafe near the office.", options: ["lunch", "bed", "tutor"], answer: "lunch" },
        { text: "3. I ___ the office at 5 p.m.", options: ["go", "leave", "return"], answer: "leave" },
        { text: "4. I go home in my new ___.", options: ["bag", "jeans", "car"], answer: "car" },
        { text: "5. I go to bed when I feel ___.", options: ["sleepy", "angry", "alert"], answer: "sleepy" }
    ]},
    { id: '5', title: 'Đề 5: Social Life', questions: [
        { text: "1. Everyone is so ___.", options: ["friendly", "melty", "noisy"], answer: "friendly" },
        { text: "2. I am living in a small flat near my university so I can ___ to my class.", options: ["train", "sleep", "walk"], answer: "walk" },
        { text: "3. I met Lesly for the ___ time.", options: ["very", "first", "one"], answer: "first" },
        { text: "4. She can ___ 5 languages.", options: ["talk", "say", "speak"], answer: "speak" },
        { text: "5. Last night, we went out for dinner ___.", options: ["toward", "together", "another"], answer: "together" }
    ]},
    { id: '6', title: 'Đề 6: Movie Night', questions: [
        { text: "1. Guess what? We are going to watch a movie tonight. I don't want you to ___ this happiness.", options: ["love", "remember", "miss"], answer: "miss" },
        { text: "2. I ___ you earlier but you were not there.", options: ["called", "told", "said"], answer: "called" },
        { text: "3. Can you be ___ before 7pm?", options: ["early", "sleepy", "ready"], answer: "ready" },
        { text: "4. I can ___ you at your place then.", options: ["hold", "meet", "miss"], answer: "meet" },
        { text: "5. Don't have too much ___ because we're going to eat cake.", options: ["talk", "pencil", "dinner"], answer: "dinner" }
    ]},
    { id: '7', title: 'Đề 7: Financial Report', questions: [
        { text: "1. The budget doesn't ___.", options: ["work", "count", "balance"], answer: "balance" },
        { text: "2. Could you get the financial ___?", options: ["department", "statement", "accountant"], answer: "statement" },
        { text: "3. I ___ it will help.", options: ["sure", "assure", "think"], answer: "think" },
        { text: "4. Read the information ___ not quickly.", options: ["beautifully", "fluently", "slowly"], answer: "slowly" },
        { text: "5. Send me the results ___ you go home, not after.", options: ["when", "before", "between"], answer: "before" }
    ]},
    { id: '8', title: 'Đề 8: Living Together', questions: [
        { text: "1. I ___ in an apartment near the city centre.", options: ["go", "live", "walk"], answer: "live" },
        { text: "2. I ___ it with my friend.", options: ["share", "drink", "hold"], answer: "share" },
        { text: "3. We are in the same ___.", options: ["door", "class", "chair"], answer: "class" },
        { text: "4. We ___ to work.", options: ["drive", "smile", "say"], answer: "drive" },
        { text: "5. In the evening we like to ___ dinner.", options: ["hold", "cook", "melt"], answer: "cook" }
    ]},
    { id: '9', title: 'Đề 9: A Holiday Day', questions: [
        { text: "1. The water is ___.", options: ["sour", "clear", "see"], answer: "clear" },
        { text: "2. The ___ is out.", options: ["wind", "dust", "sun"], answer: "sun" },
        { text: "3. I have an ___ holiday.", options: ["tired", "enjoyable", "good"], answer: "enjoyable" },
        { text: "4. After ___ so hard.", options: ["working", "sleeping", "eating"], answer: "working" },
        { text: "5. I hope to ___ your letter.", options: ["tell", "read", "forward"], answer: "read" }
    ]},
    { id: '10', title: 'Đề 10: Shopping Day', questions: [
        { text: "1. I saw some shoes in the ___ of one store.", options: ["market", "window", "shoe"], answer: "window" },
        { text: "2. I didn't ___ it.", options: ["eat", "drink", "buy"], answer: "buy" },
        { text: "3. I buy some food at the ___.", options: ["classroom", "park", "market"], answer: "market" },
        { text: "4. I ate ___.", options: ["watch", "door", "cake"], answer: "cake" },
        { text: "5. I ___ a program on TV.", options: ["ate", "saw", "watched"], answer: "watched" }
    ]},
    { id: '11', title: 'Đề 11: A Trip', questions: [
        { text: "1. The weather is ___.", options: ["cheap", "expensive", "great"], answer: "great" },
        { text: "2. We are on the ___.", options: ["city", "countryside", "boat"], answer: "boat" },
        { text: "3. We eat dinner ___ we go to church.", options: ["after", "then", "before"], answer: "then" },
        { text: "4. We are going to ___ around.", options: ["drive", "see", "talk"], answer: "drive" },
        { text: "5. I hope the weather isn't ___ hot.", options: ["too", "to", "on"], answer: "too" }
    ]},
    { id: '12', title: 'Đề 12: Living with a Family', questions: [
        { text: "1. I am living with a family ___ the city.", options: ["next", "near", "under"], answer: "near" },
        { text: "2. The children are ___ to me.", options: ["cruel", "noisy", "friendly"], answer: "friendly" },
        { text: "3. Seamus and Agnes ___ speaking English with me.", options: ["read", "hold", "practise"], answer: "practise" },
        { text: "4. Sometimes, I ___ Seamus and Agnes.", options: ["see", "read", "say"], answer: "read" },
        { text: "5. I hate the food, ___ yesterday I ate out.", options: ["then", "so", "also"], answer: "so" }
    ]},
    { id: '13', title: 'Đề 13: The Perfect Gift', questions: [
        { text: "1. It is ___ what I like.", options: ["yet", "not", "just"], answer: "just" },
        { text: "2. And it is the perfect color, ___.", options: ["so", "too", "to"], answer: "too" },
        { text: "3. I am going to wear it ___ my birthday party.", options: ["to", "on", "at"], answer: "to" },
        { text: "4. I will save you ___ cake.", options: ["many", "none", "some"], answer: "some" },
        { text: "5. ___ my love to everyone.", options: ["Give", "Hold", "Receive"], answer: "Give" }
    ]}
];

const ReadingPart1 = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // Lưu đáp án: {questionIndex: value}
  const [showResult, setShowResult] = useState(false);

  const currentTopic = readingPart1Data[currentIdx];

  const handleSelect = (qIdx, val) => {
    setUserAnswers({ ...userAnswers, [qIdx]: val });
    setShowResult(false);
  };

  const checkAnswers = () => {
    setShowResult(true);
  };

  const changeTopic = (newIdx) => {
    setCurrentIdx(newIdx);
    setUserAnswers({});
    setShowResult(false);
  };

  return (
    <div className="reading-container">
      <div className="page-intro">
        <Title level={1} className="page-intro__title">Reading - Part 1 Quiz</Title>
        <Paragraph className="page-intro__subtitle">Luyện tập chọn từ phù hợp</Paragraph>
      </div>

      <Card className="instruction-card">
        <Space><BulbOutlined style={{color: '#ff9c6e'}}/> <Text strong>Phương pháp làm bài</Text></Space>
        <Paragraph style={{marginTop: 10, color: '#595959'}}>
          Mỗi bộ 5 câu hỏi sẽ điền 5 từ cho sẵn. Hãy đọc kỹ ngữ cảnh của từng câu để chọn ra đáp án phù hợp nhất.
        </Paragraph>
      </Card>

      <div className="questions-section">
        <Title level={4} align="center" style={{marginBottom: 30}}>{currentTopic.title}</Title>
        
        {currentTopic.questions.map((q, i) => {
          const isCorrect = userAnswers[i] === q.answer;
          let cardClass = "question-box"; // Đổi từ question-card sang question-box để khớp SCSS
          if (showResult) {
            cardClass += isCorrect ? " correct" : " incorrect";
          }

          return (
            <div key={i} className={cardClass}>
              <Text strong className="q-text">{q.text}</Text>
              <Radio.Group 
                onChange={(e) => handleSelect(i, e.target.value)} 
                value={userAnswers[i]}
                disabled={showResult}
                style={{ width: '100%' }}
              >
                <Space direction="vertical" style={{ width: '100%' }}>
                  {q.options.map(opt => (
                    <div key={opt} className={`opt-item ${showResult && opt === q.answer ? 'is-answer' : ''}`}>
                      <Radio value={opt}>{opt}</Radio>
                    </div>
                  ))}
                </Space>
              </Radio.Group>
              {showResult && (
                <div className="result-text">
                  {isCorrect ? 
                    <Text style={{color: '#52c41a'}}>Chính xác!</Text> : 
                    <Text style={{color: '#ff4d4f'}}>Sai rồi! Đáp án đúng là: {q.answer}</Text>
                  }
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="pagination-footer">
        <Paragraph strong>Danh sách đề (1-13):</Paragraph>
        <div className="btn-grid">
          {readingPart1Data.map((_, i) => (
            <Button 
              key={i} 
              className={`num-btn ${currentIdx === i ? 'active' : ''}`}
              onClick={() => changeTopic(i)}
            >
              {i + 1}
            </Button>
          ))}
        </div>
        
        <div className="submit-wrapper">
          <Button 
            type="primary" 
            size="large" 
            className="big-orange-btn"
            onClick={checkAnswers}
          >
            Kiểm tra đáp án
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReadingPart1;