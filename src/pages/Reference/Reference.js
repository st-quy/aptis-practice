import React from 'react';
import { Typography, Card } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import './Reference.scss';

const { Title, Paragraph, Text } = Typography;

const resources = [
  {
    title: 'Nguồn Tài Liệu Chính (Thầy Thái Aptis)',
    description:
      'Đây là kho tài liệu gốc đã tạo nên nền tảng cho phần lớn nội dung và phương pháp học "key" trên trang web này. Toàn bộ kiến thức cốt lõi đều được tham khảo từ đây.',
    linkText: 'Truy cập Drive của Thầy Thái',
    url: 'https://drive.google.com/drive/folders/1-9PZT4SOY1xJYdtKhmJSBKm66C562WBc?usp=drive_link',
  },
  {
    title: 'Tài Liệu Tham Khảo Bổ Sung',
    description:
      'Một file Google Sheets tổng hợp thêm nhiều kiến thức và mẹo hữu ích khác mà mình đã sưu tầm được trong quá trình ôn luyện.',
    linkText: 'Truy cập Bảng tính tham khảo',
    url: 'https://docs.google.com/spreadsheets/d/1GyI1sPgCgrGI8kNYq0Ge3s2A6EEiIUVwTpMDKoHK7aA/edit?gid=0#gid=0',
  },
  {
    title: 'Trang Web Tham Khảo & Nguồn Cảm Hứng',
    description:
      'Đây là một trang web luyện thi Aptis rất hay và cũng là nguồn động lực lớn để mình bắt đầu xây dựng dự án Aptis Practice này. Bạn có thể tham khảo thêm các bài tập trên trang này nếu muốn mở rộng vốn kiến thức.',
    linkText: 'Ghé thăm AptisKey.com',
    url: 'https://www.aptiskey.com/',
  },
];

const Reference = () => {
  return (
    <div className="reference-page">
      <div className="container">
        {/* Page Intro */}
        <div className="page-intro">
          <Title level={1}>Tài Liệu Tham Khảo & Nguồn Cảm Hứng</Title>
          <Paragraph className="intro-subtitle">
            Tổng hợp các nguồn tài liệu hữu ích khác để bạn mở rộng kiến thức.
          </Paragraph>
        </div>

        {/* Explanation Box */}
        <div className="explanation-box">
          <Title level={3}>Học, học nữa, học mãi</Title>
          <Paragraph>
            Công cụ <Text strong>Aptis Practice</Text> được xây dựng để giúp bạn thực hành và ghi
            nhớ kiến thức một cách tương tác. Tuy nhiên, để có nền tảng vững chắc nhất, việc học hỏi
            từ nhiều nguồn tài liệu khác nhau là vô cùng quan trọng. Dưới đây là những nguồn tài
            liệu chính đã tạo nên nền tảng và cảm hứng cho dự án này.
          </Paragraph>
        </div>

        {/* Resource Cards */}
        <div className="resource-cards">
          {resources.map((resource, index) => (
            <Card key={index} className="resource-card">
              <div className="card-header">
                <Title level={4}>{resource.title}</Title>
              </div>
              <Paragraph>{resource.description}</Paragraph>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn"
              >
                <LinkOutlined /> {resource.linkText}
              </a>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reference;
