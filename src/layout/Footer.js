import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const AppFooter = () => {
  const year = new Date().getFullYear();

  return (
    <AntFooter className="app-footer">
      <div className="footer-inner">
        <div className="footer-columns">
          <div className="footer-col">
            <h4 className="footer-title">Aptis Practice</h4>
            <p className="footer-text">
              Công cụ tự ôn thi Aptis ESOL, dựa trên phương pháp học tập hiện đại, giúp luyện phương pháp
              và các "key" được tổng hợp bởi Thầy Thái Aptis. Toàn bộ nội dung được sưu tầm và biên soạn.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Điều hướng</h4>
            <ul className="footer-links">
              <li>Giới thiệu</li>
              <li>Tài liệu tham khảo</li>
              <li>Từ vựng</li>
              <li>Thi thử Speaking</li>
              <li>Thi thử Reading</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Các Kỹ năng</h4>
            <ul className="footer-links">
              <li>Reading</li>
              <li>Listening</li>
              <li>Writing</li>
              <li>Speaking</li>
            </ul>
          </div>

          <div className="footer-col footer-info">
            <h4 className="footer-title">Thông tin</h4>
            <ul className="footer-links">
              <li>Triển khai phần mềm: Trần Hữu Đạt</li>
              <li>Tài liệu cung cấp: Anh Thái Aptis</li>
              <li>Cập nhật tài liệu: 10/08/2025</li>
              <li>Phiên bản mới nhất: 11/12/2025</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} - Aptis Practice. All Rights Reserved.</span>
        </div>
      </div>
    </AntFooter>
  );
};

export default AppFooter;
