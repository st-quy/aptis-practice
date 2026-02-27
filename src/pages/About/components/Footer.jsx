import './Footer.css';

const navLinks = [
    { label: 'Giới thiệu', icon: '📋' },
    { label: 'Tài liệu tham khảo', icon: '📚' },
    { label: 'Từ vựng', icon: '📝' },
    { label: 'Thi thử Speaking', icon: '🎤' },
    { label: 'Thi thử Reading', icon: '📖' },
];

const skills = [
    { label: 'Reading',   badge: 'skill-badge--reading',   icon: '📖' },
    { label: 'Listening', badge: 'skill-badge--listening', icon: '🎧' },
    { label: 'Writing',   badge: 'skill-badge--writing',   icon: '✍️' },
    { label: 'Speaking',  badge: 'skill-badge--speaking',  icon: '🎤' },
];

const infoItems = [
    { icon: '👤', text: 'Triển khai phần mềm Trần Hữu Đạt' },
    { icon: '📚', text: 'Tài liệu cung cấp Anh Thái Aptis' },
    { icon: '📅', text: 'Cập nhật nội dung 01/06/2025' },
    { icon: '🔄', text: 'Phiên bản mới nhất: 1/12/2025' },
];

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">

                {/* Column 1 – Brand */}
                <div className="footer__brand">
                    <a href="#" className="footer__brand-logo">Aptis Practice</a>
                    <p className="footer__brand-desc">
                        Công cụ hỗ trợ thi Aptis ESOL, giúp người học tiếp cận các chủ đề học hiệu quả,
                        chuẩn bị kỹ càng với các dạng bài phong phú. Nội dung "thực" được cung cấp bởi
                        Thầy Thái Aptis. Toàn bộ bản quyền nội dung thuộc về tác giả gốc.
                    </p>
                </div>

                {/* Column 2 – Navigation */}
                <div>
                    <h4 className="footer__heading">Điều hướng</h4>
                    <ul className="footer__links">
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a href="#">
                                    <span className="link-icon">{item.icon}</span>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3 – Skills */}
                <div>
                    <h4 className="footer__heading">Các Kỹ năng</h4>
                    <ul className="footer__skills">
                        {skills.map((skill) => (
                            <li key={skill.label}>
                                <a href="#">
                                    <span className={`skill-badge ${skill.badge}`}>
                                        {skill.icon} {skill.label}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 4 – Info */}
                <div>
                    <h4 className="footer__heading">Thông tin</h4>
                    <ul className="footer__info">
                        {infoItems.map((item, idx) => (
                            <li key={idx}>
                                <span className="info-icon">{item.icon}</span>
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="footer__bottom">
                &copy; 2025 &ndash; Aptis Practice Tool. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;