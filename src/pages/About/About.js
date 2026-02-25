import React from 'react';
import { Typography } from 'antd';
import './About.scss';

const { Title, Paragraph, Text } = Typography;

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        {/* Page Intro */}
        <div className="page-intro">
          <Title level={1}>Giới Thiệu & Hướng Dẫn Sử Dụng</Title>
          <Paragraph className="intro-subtitle">
            Khám phá bố cục và cách tận dụng tối đa các công cụ trên Aptis Practice.
          </Paragraph>
        </div>

        <div className="about-content">
          {/* Section: Mục Tiêu */}
          <div className="section">
            <Title level={2}>Mục Tiêu Của Trang Web</Title>
            <Paragraph>
              <Text strong>Aptis Practice</Text> được xây dựng với mục tiêu cung cấp một môi trường
              luyện tập tương tác, bám sát phương pháp học "key" và "câu chuyện gợi nhớ". Trang web
              này không chỉ là nơi bạn làm bài, mà còn là nơi bạn hệ thống hóa kiến thức và rèn
              luyện các kỹ năng cần thiết để tự tin bước vào phòng thi.
            </Paragraph>
          </div>

          {/* Section: Bố Cục */}
          <div className="section">
            <Title level={2}>Bố Cục và Lộ Trình Ôn Tập Đề Xuất</Title>
            <Paragraph>
              Trang web được chia thành 5 khu vực chính, tương ứng với 5 tab trên trang chủ:
            </Paragraph>

            {/* 1. Hướng dẫn chung */}
            <div className="about-grid">
              <div className="about-text">
                <Title level={4}>1. 📖 Hướng dẫn chung</Title>
                <Paragraph>
                  Đây là điểm khởi đầu của bạn. Hãy dành thời gian đọc kỹ các mục trong phần này
                  để nắm vững cấu trúc bài thi, các mẹo làm bài quan trọng và các lỗi sai cần
                  tránh. Đặc biệt, các trang <code>Ngân hàng ý tưởng Speaking</code> và{' '}
                  <code>Phương pháp PEEL</code> là nền tảng cốt lõi cho kỹ năng Nói.
                </Paragraph>
              </div>
              <div className="about-image-container">
                <img
                  src={`${process.env.PUBLIC_URL}/screenshot/peel.png`}
                  alt="Hướng dẫn chung"
                  className="about-image"
                />
              </div>
            </div>

            {/* 2. Listening & Reading */}
            <div className="about-grid reverse">
              <div className="about-text">
                <Title level={4}>2. 🎧 Listening & 📖 Reading</Title>
                <Paragraph>Hai kỹ năng này có cấu trúc học tương tự:</Paragraph>
                <ul>
                  <li>
                    <Text strong>Các trang học "Key":</Text> Nơi bạn học và ghi nhớ đáp án.
                  </li>
                  <li>
                    <Text strong>Trang Cheatsheet:</Text> Hệ thống hóa các key dễ nhầm lẫn.
                  </li>
                  <li>
                    <Text strong>Trang "Làm bài Part X":</Text> Kiểm tra trí nhớ của bạn.
                  </li>
                  <li>
                    <Text strong>Thi thử Reading:</Text> Mô phỏng bài thi đầy đủ 5 phần.
                  </li>
                </ul>
              </div>
              <div className="about-image-container">
                <img
                  src={`${process.env.PUBLIC_URL}/screenshot/reading4.png`}
                  alt="Giao diện thi thử Reading"
                  className="about-image"
                />
              </div>
            </div>

            {/* 3. Speaking */}
            <div className="about-grid">
              <div className="about-text">
                <Title level={4}>3. 🗣️ Speaking</Title>
                <ul>
                  <li>
                    <Text strong>Các trang luyện tập:</Text> Cung cấp chủ đề, câu hỏi, và câu trả
                    lời mẫu có kèm audio.
                  </li>
                  <li>
                    <Text strong>Prepare to Test:</Text> Quiz ngắn củng cố kiến thức về sườn bài.
                  </li>
                  <li>
                    <Text strong>Thi thử Speaking:</Text> Giao diện mô phỏng phòng thi thật với
                    đồng hồ đếm ngược.
                  </li>
                </ul>
              </div>
              <div className="about-image-container">
                <img
                  src={`${process.env.PUBLIC_URL}/screenshot/speaking3.png`}
                  alt="Giao diện thi thử Speaking"
                  className="about-image"
                />
              </div>
            </div>

            {/* 4. Writing */}
            <div className="about-grid reverse">
              <div className="about-text">
                <Title level={4}>4. ✍️ Writing</Title>
                <ul>
                  <li>
                    <Text strong>Các trang luyện tập:</Text> Cung cấp đề bài và các công cụ hỗ trợ
                    như bộ đếm từ, tự động lưu bài.
                  </li>
                  <li>
                    <Text strong>Part 4 Structure Quiz:</Text> Trắc nghiệm giúp bạn thuộc lòng cấu
                    trúc câu mẫu.
                  </li>
                  <li>
                    <Text strong>Phân Tích Đề Bài:</Text> Công cụ giúp bạn đọc hiểu đúng yêu cầu
                    đề bài.
                  </li>
                  <li>
                    <Text strong>Luyện Gõ Chính Tả:</Text> Luyện gõ các câu mẫu để tăng tốc độ và
                    độ chính xác.
                  </li>
                </ul>
              </div>
              <div className="about-image-container">
                <img
                  src={`${process.env.PUBLIC_URL}/screenshot/writing.png`}
                  alt="Giao diện luyện tập Writing"
                  className="about-image"
                />
              </div>
            </div>
          </div>

          {/* Section: Chúc Bạn Học Tốt */}
          <div className="section">
            <Title level={2}>Chúc Bạn Học Tốt!</Title>
            <Paragraph>
              Hy vọng rằng với cấu trúc rõ ràng và các công cụ đa dạng, trang web này sẽ là một
              người bạn đồng hành hữu ích trên con đường chinh phục Aptis của bạn.
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
