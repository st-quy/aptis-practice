import { useState } from "react";
import "../styles/navbar.scss";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="header-placeholder" />
      {/* fonts + icons */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />

      <div
        className={`mobile-menu-overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      <div className="container">
        <a href="/" className="logo">
          <span style={{ paddingLeft: 10 }}>Aptis Practice</span>
        </a>

        {/* Desktop nav */}
        <nav className="main-nav desktop-nav">
          <ul>
            <li>
              <a href="/">Trang Chủ</a>
            </li>
            <li>
              <a href="/about.html">Giới thiệu</a>
            </li>
            <li>
              <a href="/vocabulary.html">Từ vựng</a>
            </li>

            <li className="dropdown">
              <a href="/reading.html">Reading</a>
              <div className="dropdown-content">
                <a href="/reading_part1.html">Part 1</a>
                <a href="/reading_part2.html">Part 2</a>
                <a href="/reading_part3.html">Part 3</a>
                <a href="/reading_part4.html">Part 4</a>
                <a href="/reading_part5.html">Part 5</a>
                <a href="/select-test.html">Thi thử Reading</a>
              </div>
            </li>

            <li className="dropdown">
              <a href="/listening.html">Listening</a>
              <div className="dropdown-content">
                <a href="/listening_part1.html">Part 1 (1-13)</a>
                <a href="/listening_part14.html">Part 2 (14)</a>
                <a href="/listening_part15.html">Part 3 (15)</a>
                <a href="/listening_part1617.html">Part 4 (16-17)</a>
              </div>
            </li>

            <li className="dropdown">
              <a href="/writing.html">Writing</a>
              <div className="dropdown-content">
                <a href="/writing_part1.html">Part 1</a>
                <a href="/writing_part2.html">Part 2</a>
                <a href="/writing_part3.html">Part 3</a>
                <a href="/writing_part4.html">Part 4</a>
              </div>
            </li>

            <li className="dropdown">
              <a href="/speaking.html">Speaking</a>
              <div className="dropdown-content">
                <a href="/speaking_part1.html">Part 1</a>
                <a href="/speaking_part2.html">Part 2</a>
                <a href="/speaking_part3.html">Part 3</a>
                <a href="/speaking_part4.html">Part 4</a>
              </div>
            </li>
          </ul>
        </nav>

        {/* hamburger */}
        <div className="header-actions">
          <button className="hamburger-btn" onClick={() => setOpen(true)}>
            <i className="fas fa-bars" />
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <nav className={`mobile-side-menu ${open ? "open" : ""}`}>
        <div className="mobile-nav-header">
          <span className="menu-title">Aptis Practice</span>
          <button className="close-btn" onClick={() => setOpen(false)}>
            ×
          </button>
        </div>

        <ul>
          <li>
            <a href="/">Trang Chủ</a>
          </li>
          <li>
            <a href="/about.html">Giới thiệu</a>
          </li>
          <li>
            <a href="/vocabulary.html">Từ vựng</a>
          </li>
        </ul>

        <div className="mobile-nav-footer">
          <a
            href="https://github.com/TranHuuDat2004/aptis-practice"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github" /> GitHub
          </a>
        </div>
      </nav>
    </>
  );
}
