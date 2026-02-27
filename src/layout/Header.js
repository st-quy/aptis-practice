import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Layout, Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { key: '/home', label: <Link to="/">Trang Chủ</Link> },
    { key: '/about', label: <Link to="/about">Giới thiệu</Link> },
    { key: '/vocabulary', label: <Link to="/vocabulary">Từ Vựng</Link> },
    { 
      key: '/reading', 
      label: 'Reading',
      children: [
        { key: '/reading-part1', label: <Link to="/reading-part1">Reading Part 1</Link> },
        { key: '/reading-part2', label: <Link to="/reading-part2">Reading Part 2</Link> },
      ]
    },
    { key: '/listening-part1', label: <Link to="/listening-part1">Listening</Link> },
    { key: '/writing-part1', label: <Link to="/writing-part1">Writing</Link> },
    { key: '/speaking-part1', label: <Link to="/speaking-part1">Speaking</Link> },
  ];

  return (
    <AntHeader 
      style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000, 
        width: '100%',
        background: '#FFCE99', 
        padding: '0 20px',
        boxShadow: '0 2px 8px rgba(86, 47, 0, 0.15)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Logo Section */}
      <div className="logo" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginRight: '40px' }} onClick={() => navigate('/')}>
        <Title level={4} style={{ margin: 0, color: '#562F00', whiteSpace: 'nowrap' }}>
          APTIS PRACTICE
        </Title>
      </div>

      <Menu
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={navItems}
        style={{
          background: 'transparent',
          borderBottom: 'none',
          minWidth: 0,
          flex: 'auto',
          display: 'flex',
          justifyContent: 'flex-end',
          lineHeight: '64px'
        }}
        disabledOverflow
      />
    </AntHeader>
  );
};

export default AppHeader;
