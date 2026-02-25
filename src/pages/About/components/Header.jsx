import { useState } from 'react';
import './Header.css';

const navLinks = [
    { label: 'Trang Chủ', href: '#' },
    { label: 'Giới thiệu', href: '#' },
    { label: 'Từ vựng', href: '#' },
    { label: 'Reading', href: '#' },
    { label: 'Listening', href: '#' },
    { label: 'Writing', href: '#' },
    { label: 'Speaking', href: '#' },
];

function Header() {
    const [active, setActive] = useState('Trang Chủ');
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="header__inner">
                {/* Logo */}
                <a href="#" className="header__logo">Aptis Practice</a>

                {/* Hamburger toggle (mobile) */}
                <button
                    className="header__toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Navigation */}
                <nav className={`header__nav${menuOpen ? ' open' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={active === link.label ? 'active' : ''}
                            onClick={() => {
                                setActive(link.label);
                                setMenuOpen(false);
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Header;