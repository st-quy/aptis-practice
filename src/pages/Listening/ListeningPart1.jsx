import React, { useState } from 'react';
import { Button, Card, Typography, List, Pagination } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import '../../styles/ListeningPart1.scss';

const { Title, Text, Paragraph } = Typography;

// Mock data based on the reference structure!! owo
const listeningPart1Data = Array.from({ length: 39 }, (_, i) => ({
  number: i + 1,
  answer: `Sample Answer Key ${i + 1} - The high-spec way!! 🐾`
}));

const ListeningPart1 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allVisible, setAllVisible] = useState(false);
  const pageSize = 13;

  const startIndex = (currentPage - 1) * pageSize;
  const currentData = listeningPart1Data.slice(startIndex, startIndex + pageSize);

  return (
    <div className="listening-part1">
        <div className="page-intro">
          <Title level={1} className="page-intro__title">Listening - Part 1 (Câu 1-13)</Title>
          <Text className="page-intro__subtitle">Luyện tập ghi nhớ đáp án</Text>
        </div>

        <div className="explanation-box">
          <Title level={3}>💡 Phương pháp học hiệu quả</Title>
          <Paragraph>
            Trong bài thi thật, các câu hỏi và đáp án từ 18 bộ đề gốc sẽ được <strong>xáo trộn hoàn toàn</strong>. 
            Vì vậy, việc học thuộc lòng theo số thứ tự là không khả thi.
          </Paragraph>
          <Paragraph>
            <strong>Chiến lược hiệu quả nhất là "nhận diện mặt chữ":</strong>
          </Paragraph>
          <ul>
            <li>Mục tiêu: Ghi nhớ hình ảnh và nội dung của các đáp án đúng nhiều nhất có thể.</li>
            <li>Cách học: Lướt qua các trang đáp án nhiều lần. Đừng cố nhớ "Câu 3 là gì?".</li>
          </ul>
        </div>

        <Card className="quiz-card">
          <div className="card-header">
            <Title level={4}>Đáp án {startIndex + 1} - {Math.min(startIndex + pageSize, listeningPart1Data.length)}</Title>
            <Button 
              type="primary" 
              icon={allVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
              onClick={() => setAllVisible(!allVisible)}
              style={{ backgroundColor: '#FF9644', borderColor: '#FF9644' }}
            >
              {allVisible ? 'Ẩn tất cả' : 'Hiển thị tất cả'}
            </Button>
          </div>

          <List
            className="key-list"
            dataSource={currentData}
            renderItem={(item) => (
              <List.Item>
                <div className="key-number">{item.number}</div>
                <div className={`answer-text ${allVisible ? '' : 'hidden'}`}>
                  {item.answer}
                </div>
              </List.Item>
            )}
          />

          <div className="pagination-controls">
            <Pagination
              current={currentPage}
              total={listeningPart1Data.length}
              pageSize={pageSize}
              onChange={(page) => setCurrentPage(page)}
              showSizeChanger={false}
            />
          </div>
        </Card>

        {/* Floating Help Button handshake!! */}
        <Button 
          shape="circle" 
          icon={<QuestionCircleOutlined />} 
          style={{ position: 'fixed', bottom: 20, right: 20, width: 50, height: 50, fontSize: 24 }}
        />
      </div>
  );
};

export default ListeningPart1;
