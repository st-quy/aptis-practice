import React from 'react';
import { Collapse, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const FAQ_ITEMS = [
  {
    key: '1',
    label: 'Mục đích chính của trang web này là gì?',
    children: (
      <Paragraph>
        <strong>Aptis Practice</strong> được xây dựng để giúp bạn luyện tập và ghi nhớ các &quot;key&quot;
        {' '}
        và cấu trúc câu quan trọng cho kỳ thi Aptis ESOL, đặc biệt theo phương pháp học story-based. Trang
        web tập trung vào việc tạo ra các bài tập tương tác mô phỏng điều kiện thi thật.
      </Paragraph>
    ),
  },
  {
    key: '2',
    label: 'Trang web này có phải là đề thi thật không?',
    children: (
      <Paragraph>
        <strong>Không.</strong> Toàn bộ nội dung trên trang web này (câu hỏi, đáp án, bài mẫu) đều được
        tổng hợp và biên soạn từ các nguồn tài liệu ôn thi công khai. Chúng chỉ mang tính chất tham khảo
        và luyện tập, không phải là đề thi thật từ Hội đồng Anh.
      </Paragraph>
    ),
  },
  {
    key: '3',
    label: 'Tại sao trang "Làm bài Part 1" (Listening) lại yêu cầu ghi nhớ key?',
    children: (
      <Paragraph>
        Phần thi Listening Part 1 (Câu 1-13) có một ngân hàng câu hỏi và đáp án tương đối cố định. Việc
        học thuộc &quot;key&quot; (đáp án đúng) cho các bối cảnh phổ biến là một chiến lược hiệu quả để
        tối đa hóa điểm số ở phần này. Trang &quot;Làm bài Part 1&quot; được thiết kế để bạn kiểm tra
        khả năng ghi nhớ các key đó.
      </Paragraph>
    ),
  },
  {
    key: '4',
    label: 'Làm thế nào để luyện tập Speaking hiệu quả với trang web?',
    children: (
      <>
        <Paragraph>Vì trình duyệt không thể ghi âm trực tiếp, cách tốt nhất là:</Paragraph>
        <ol className="faq-steps">
          <li>Mở ứng dụng ghi âm trên điện thoại của bạn.</li>
          <li>
            Trên trang Thi thử Speaking, nhấn nút &quot;Bắt đầu trả lời&quot; và bắt đầu ghi âm cùng lúc.
          </li>
          <li>
            Sau khi hoàn thành, bạn có thể nghe lại file ghi âm của mình để tự đánh giá hoặc gửi cho bạn
            bè/giáo viên để nhận feedback.
          </li>
        </ol>
      </>
    ),
  },
  {
    key: '5',
    label: 'Tại sao trang "Phân Tích Đề Bài" (Writing) lại quan trọng?',
    children: (
      <Paragraph>
        Lỗi sai nghiêm trọng nhất trong Writing Part 4 là &quot;lạc đề&quot; (trả lời không đúng yêu
        cầu). Trang &quot;Phân Tích Đề Bài&quot; cung cấp các bài quiz ngắn giúp bạn rèn luyện kỹ năng
        đọc hiểu và xác định TẤT CẢ các nhiệm vụ mà đề bài yêu cầu, đảm bảo bạn không bỏ sót bất kỳ ý
        nào.
      </Paragraph>
    ),
  },
  {
    key: '6',
    label: 'Tôi có thể đóng góp câu hỏi hoặc báo lỗi ở đâu?',
    children: (
      <Paragraph>
        Cảm ơn bạn đã quan tâm! Đây là một dự án cá nhân và rất hoan nghênh sự đóng góp. Nếu bạn phát
        hiện lỗi hoặc có ý tưởng mới, vui lòng tạo một{' '}
        <a
          href="https://github.com/TranHuuDat2004/aptis-practice/issues"
          target="_blank"
          rel="noreferrer"
        >
          &quot;Issue&quot; trên trang GitHub của dự án
        </a>
        .
      </Paragraph>
    ),
  },
];

export default function Faq() {
  return (
    <div className="reading-container" style={{ paddingBottom: '80px' }}>
      <div className="page-intro">
        <Title level={1} className="page-intro__title">
          Câu Hỏi Thường Gặp (FAQ)
        </Title>
        <Paragraph className="page-intro__subtitle">
          Giải đáp các thắc mắc phổ biến về chức năng và phương pháp học trên trang web.
        </Paragraph>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Collapse
          accordion
          bordered={false}
          items={FAQ_ITEMS}
          expandIconPosition="end"
          style={{ 
            background: 'transparent',
          }}
        />
      </div>
    </div>
  );
}

