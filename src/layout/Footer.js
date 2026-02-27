import React from 'react';
import { Layout, Row, Col, Typography, Space } from 'antd';
import { Link } from 'react-router-dom';

const { Footer: AntFooter } = Layout;
const { Title, Text, Paragraph } = Typography;

const AppFooter = () => {
  const year = new Date().getFullYear();

  return (
    <AntFooter style={{
      background: '#FFCE99',
      color: '#562F00',
      padding: '48px 20px 24px',
      borderTop: '3px solid #FF9644'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={24} md={8}>
            <Title level={4} style={{ color: '#562F00', marginBottom: 16 }}>Aptis Practice DevPlus</Title>
            <Paragraph style={{ color: 'rgba(86, 47, 0, 0.85)', fontSize: '14px' }}>
              Nền tảng luyện thi Aptis ESOL chuyên sâu, cung cấp các bộ đề dự đoán và phương pháp
              học "Story-based" độc quyền. Chúng tôi giúp học viên tối ưu hóa thời gian ôn luyện
              và đạt kết quả cao nhất thông qua các bài tập tương tác thực tế.
            </Paragraph>
          </Col>

          <Col xs={12} sm={8} md={5}>
            <Title level={5} style={{ color: '#562F00', marginBottom: 16 }}>Khám phá</Title>
            <Space direction="vertical" size="small">
              <Link to="/about" style={{ color: 'rgba(86, 47, 0, 0.75)' }}>Về chúng tôi</Link>
              <Link to="/faq" style={{ color: 'rgba(86, 47, 0, 0.75)' }}>Giải đáp thắc mắc</Link>
              <Link to="/vocabulary" style={{ color: 'rgba(86, 47, 0, 0.75)' }}>Kho từ vựng</Link>
              <Link to="/reading-part2" style={{ color: 'rgba(86, 47, 0, 0.75)' }}>Reading Part 2</Link>
            </Space>
          </Col>

          <Col xs={12} sm={8} md={5}>
            <Title level={5} style={{ color: '#562F00', marginBottom: 16 }}>Kỹ năng mục tiêu</Title>
            <Space direction="vertical" size="small">
              <Link to="/reading-part1" style={{ color: 'rgba(86, 47, 0, 0.75)' }}>Luyện kỹ năng Đọc</Link>
              <Link to="/listening-part1" style={{ color: 'rgba(86, 47, 0, 0.75)' }}>Luyện kỹ năng Nghe</Link>
              <Link to="/writing-part1" style={{ color: 'rgba(255, 253, 241, 0.8)' }}>
                <span style={{ color: 'rgba(86, 47, 0, 0.75)' }}>Luyện kỹ năng Viết</span>
              </Link>
              <Link to="/speaking-part1" style={{ color: 'rgba(86, 47, 0, 0.75)' }}>Luyện kỹ năng Nói</Link>
            </Space>
          </Col>

          <Col xs={24} sm={8} md={6}>
            <Title level={5} style={{ color: '#562F00', marginBottom: 16 }}>Hỗ trợ & Liên hệ</Title>
            <Space direction="vertical" size="small">
              <Text style={{ color: 'rgba(86, 47, 0, 0.75)', fontSize: '13px' }}>Phát Triển: Devplus</Text>
              <Text style={{ color: 'rgba(86, 47, 0, 0.75)', fontSize: '13px' }}>Nội dung: Thái Aptis & Cộng sự</Text>
              <Text style={{ color: 'rgba(86, 47, 0, 0.75)', fontSize: '13px' }}>Hệ thống bài tập: Cập nhật 2026</Text>
              <Text style={{ color: 'rgba(86, 47, 0, 0.75)', fontSize: '13px' }}>Trạng thái: Đang hoạt động</Text>
            </Space>
          </Col>
        </Row>

        <div style={{
          marginTop: 48,
          paddingTop: 24,
          borderTop: '1px solid rgba(86, 47, 0, 0.1)',
          textAlign: 'center'
        }}>
          <Text style={{ color: 'rgba(86, 47, 0, 0.6)', fontSize: '12px' }}>
            © {year} - Aptis Practice DevPlus. All Rights Reserved.
            Mọi nội dung đều thuộc bản quyền của đội ngũ phát triển và các bên cộng tác.
          </Text>
        </div>
      </div>
    </AntFooter>
  );
};

export default AppFooter;
