import React, { useState } from 'react';
import { Typography, Table, Button, Card, Space } from 'antd';
import '../../styles/ReadingPart2.scss'; // Reusing standard page container styles

const { Title, Paragraph, Text } = Typography;

const skillsData = [
  {
    key: "speaking",
    label: "Nói",
    title: "I. Kỹ năng Nói (12 phút)",
    columns: [
        { title: 'Phần', dataIndex: 'part', key: 'part', width: '80px' },
        { title: 'Bố cục', dataIndex: 'layout', key: 'layout' },
        { title: 'Nội dung', dataIndex: 'content', key: 'content' },
        { title: 'Thời gian', dataIndex: 'time', key: 'time' },
    ],
    dataSource: [
        { key: 's1', part: '1', layout: 'Thông tin cá nhân', content: 'Trả lời 3 câu hỏi cá nhân', time: '30s mỗi câu' },
        { key: 's2', part: '2', layout: 'Mô tả, quan điểm', content: 'Mô tả tranh + câu hỏi', time: '45s mỗi câu' },
        { key: 's3', part: '3', layout: 'So sánh', content: '2 tranh + quan điểm', time: '45s mỗi câu' },
        { key: 's4', part: '4', layout: 'Thảo luận', content: 'Chủ đề mở rộng', time: '1’ chuẩn bị + 2’ nói' },
    ],
  },
  {
    key: "listening",
    label: "Nghe",
    title: "II. Kỹ năng Nghe (40 phút)",
    columns: [
        { title: 'Phần', dataIndex: 'part', key: 'part', width: '80px' },
        { title: 'Bố cục', dataIndex: 'layout', key: 'layout' },
        { title: 'Nội dung', dataIndex: 'content', key: 'content' },
        { title: 'Hình thức', dataIndex: 'format', key: 'format' },
    ],
    dataSource: [
        { key: 'l1', part: '1', layout: 'Thông tin ngắn', content: '13 đoạn hội thoại', format: 'Trắc nghiệm' },
        { key: 'l2', part: '2', layout: '4 người nói', content: 'Nối ý kiến', format: 'Matching' },
        { key: 'l3', part: '3', layout: '2 người nói', content: 'Quan điểm', format: 'Matching' },
        { key: 'l4', part: '4', layout: 'Độc thoại dài', content: 'Suy luận', format: 'Trắc nghiệm' },
    ],
  },
  {
    key: "grammar",
    label: "Ngữ pháp & Từ vựng",
    title: "III. Ngữ pháp & Từ vựng (25 phút)",
    columns: [
        { title: 'Phần', dataIndex: 'part', key: 'part', width: '80px' },
        { title: 'Bố cục', dataIndex: 'layout', key: 'layout' },
        { title: 'Nội dung', dataIndex: 'content', key: 'content' },
        { title: 'Hình thức', dataIndex: 'format', key: 'format' },
    ],
    dataSource: [
        { key: 'g1', part: '1', layout: 'Grammar', content: 'Điền từ', format: 'MCQ' },
        { key: 'g2', part: '2', layout: 'Vocabulary', content: 'Nối từ/định nghĩa', format: 'Matching' },
    ],
  },
  {
    key: "reading",
    label: "Đọc",
    title: "IV. Kỹ năng Đọc (35 phút)",
    columns: [
        { title: 'Phần', dataIndex: 'part', key: 'part', width: '80px' },
        { title: 'Bố cục', dataIndex: 'layout', key: 'layout' },
        { title: 'Nội dung', dataIndex: 'content', key: 'content' },
        { title: 'Hình thức', dataIndex: 'format', key: 'format' },
    ],
    dataSource: [
        { key: 'r1', part: '1', layout: 'Đọc câu', content: 'Chọn nghĩa đúng', format: 'MCQ' },
        { key: 'r2', part: '2/3', layout: 'Sắp xếp', content: 'Tạo đoạn văn', format: 'Drag drop' },
        { key: 'r3', part: '4', layout: 'Quan điểm', content: 'Nối ý kiến', format: 'Matching' },
        { key: 'r4', part: '5', layout: 'Đoạn văn dài', content: 'Chọn chủ đề', format: 'Matching' },
    ],
  },
  {
    key: "writing",
    label: "Viết",
    title: "V. Kỹ năng Viết (50 phút)",
    columns: [
        { title: 'Phần', dataIndex: 'part', key: 'part', width: '80px' },
        { title: 'Bố cục', dataIndex: 'layout', key: 'layout' },
        { title: 'Yêu cầu', dataIndex: 'requirement', key: 'requirement' },
    ],
    dataSource: [
        { key: 'w1', part: '1', layout: 'Viết câu', requirement: 'Hoàn thành 5 câu (1-5 từ)' },
        { key: 'w2', part: '2', layout: 'Đoạn ngắn', requirement: 'Điền đơn (20-30 từ)' },
        { key: 'w3', part: '3', layout: '3 câu', requirement: 'Chat Room (30-40 từ)' },
        { key: 'w4', part: '4', layout: 'Email', requirement: 'Thân mật (50 từ) + Trang trọng (120-150 từ)' },
    ],
  },
];

export default function Structure() {
  const [activeTab, setActiveTab] = useState("all");

  const tabItems = [
    { key: "all", label: "TẤT CẢ" },
    ...skillsData.map(s => ({ key: s.key, label: s.label.toUpperCase() }))
  ];

  const filteredSkills = activeTab === "all" ? skillsData : skillsData.filter(s => s.key === activeTab);

  return (
    <div className="reading-container">
      <div className="page-intro">
        <Title level={1} className="page-intro__title">Cấu trúc bài thi Aptis ESOL</Title>
        <Paragraph className="page-intro__subtitle">
          Tổng quan các phần thi, thời gian và hình thức làm bài
        </Paragraph>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
        <Space size="middle" wrap>
          {tabItems.map(item => (
            <Button 
              key={item.key} 
              type={activeTab === item.key ? "primary" : "default"}
              onClick={() => setActiveTab(item.key)}
              shape="round"
            >
              {item.label}
            </Button>
          ))}
        </Space>
      </div>

      <div className="structure-content">
        {filteredSkills.map(skill => (
          <Card 
            key={skill.key} 
            title={<Title level={4} style={{ margin: 0 }}>{skill.title}</Title>}
            style={{ marginBottom: '32px', borderRadius: '12px', overflow: 'hidden' }}
            variant="outlined"
          >
            <Table 
              columns={skill.columns} 
              dataSource={skill.dataSource} 
              pagination={false} 
              size="middle"
              bordered
            />
          </Card>
        ))}

        <div style={{ textAlign: 'center', fontStyle: 'italic', opacity: 0.7, marginTop: '40px', paddingBottom: '60px' }}>
          <Text>“Thành công không phải là ngẫu nhiên. Nó là làm việc chăm chỉ, kiên trì, học hỏi và yêu những gì bạn đang làm.” – Pelé</Text>
        </div>
      </div>
    </div>
  );
}
