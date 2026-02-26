import { useState } from "react";

export default function Footer() {
  const [open, setOpen] = useState(null);

  const toggle = (name) => {
    setOpen(open === name ? null : name);
  };

  return (
    <footer>
      <div style={{ paddingTop: 30 }} className="container footer-grid">
        {/* ===== Col 1 ===== */}
        <div className="footer-col">
          <a href="/" className="footer-logo">
            <span>Aptis Practice</span>
          </a>

          <p className="footer-bio">
            Công cụ hỗ trợ ôn thi Aptis ESOL, dự án được xây dựng cho mục đích
            học tập cá nhân, dựa trên phương pháp và các "key" được cung cấp bởi
            Thầy Thái Aptis. Toàn bộ bản quyền nội dung thuộc về tác giả gốc.
          </p>
        </div>

        {/* ===== Col 2 ===== */}
        <div className="footer-col">
          <h4>Điều hướng</h4>

          <ul className="footer-links">
            <li><a href="/about.html"><i className="fas fa-info-circle" /> Giới thiệu</a></li>
            <li><a href="/reference.html"><i className="fas fa-lightbulb" /> Tài liệu tham khảo</a></li>
            <li><a href="/vocabulary.html"><i className="fas fa-book" /> Từ vựng</a></li>
            <li><a href="/speaking_test.html"><i className="fas fa-microphone-alt" /> Thi thử Speaking</a></li>
            <li><a href="/select-test.html"><i className="fas fa-book-reader" /> Thi thử Reading</a></li>
          </ul>
        </div>

        {/* ===== Col 3 (Dropdown skills) ===== */}
        <div className="footer-col">
          <h4>Các Kỹ năng</h4>

          {/* Reading */}
          <div className={`footer-dropdown ${open === "reading" ? "active" : ""}`}>
            <a
              href="#"
              className="dropdown-trigger"
              onClick={(e) => {
                e.preventDefault();
                toggle("reading");
              }}
            >
              <i className="fas fa-book-reader" /> Reading
            </a>

            <div className="dropdown-content">
              <a href="/reading_part1.html">Part 1</a>
              <a href="/reading_part2.html">Part 2</a>
              <a href="/reading_part3.html">Part 3</a>
              <a href="/reading_part4.html">Part 4</a>
              <a href="/reading_part5.html">Part 5</a>
            </div>
          </div>

          {/* Listening */}
          <div className={`footer-dropdown ${open === "listening" ? "active" : ""}`}>
            <a
              href="#"
              className="dropdown-trigger"
              onClick={(e) => {
                e.preventDefault();
                toggle("listening");
              }}
            >
              <i className="fas fa-headphones" /> Listening
            </a>

            <div className="dropdown-content">
              <a href="/listening_part1.html">Part 1</a>
              <a href="/listening_part14.html">Part 2</a>
              <a href="/listening_part15.html">Part 3</a>
              <a href="/listening_part1617.html">Part 4</a>
            </div>
          </div>

          {/* Writing */}
          <div className={`footer-dropdown ${open === "writing" ? "active" : ""}`}>
            <a
              href="#"
              className="dropdown-trigger"
              onClick={(e) => {
                e.preventDefault();
                toggle("writing");
              }}
            >
              <i className="fas fa-keyboard" /> Writing
            </a>

            <div className="dropdown-content">
              <a href="/writing_part1.html">Part 1</a>
              <a href="/writing_part2.html">Part 2</a>
              <a href="/writing_part3.html">Part 3</a>
              <a href="/writing_part4.html">Part 4</a>
            </div>
          </div>

          {/* Speaking */}
          <div className={`footer-dropdown ${open === "speaking" ? "active" : ""}`}>
            <a
              href="#"
              className="dropdown-trigger"
              onClick={(e) => {
                e.preventDefault();
                toggle("speaking");
              }}
            >
              <i className="fas fa-microphone" /> Speaking
            </a>

            <div className="dropdown-content">
              <a href="/speaking_part1.html">Part 1</a>
              <a href="/speaking_part2.html">Part 2</a>
              <a href="/speaking_part3.html">Part 3</a>
              <a href="/speaking_part4.html">Part 4</a>
            </div>
          </div>
        </div>

        {/* ===== Col 4 ===== */}
        <div className="footer-col">
          <h4>Thông tin</h4>

          <ul className="footer-contact">
            <li><i className="fas fa-user" /> Trần Hữu Đạt</li>
            <li><i className="fas fa-book-open" /> Cập nhật: 10/08/2025</li>
            <li><i className="fas fa-code-branch" /> Version: 11/12/2025</li>
          </ul>

          <div className="footer-social">
            <a
              href="https://github.com/TranHuuDat2004/aptis-practice"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="footer-bottom">
        <div className="container">
          <p>© 2025 - Aptis Practice Tool. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}