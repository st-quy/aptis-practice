import React from 'react';
import { Layout, Menu, Flex, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Header: AntHeader } = Layout;
const { Title } = Typography;



const AppHeader = () => {
  const navItems = [
    { key: 'home', label: <Link to="/">Trang Chủ</Link> },
    { key: 'intro', label: 'Giới thiệu' },
    { key: 'vocab', label: 'Từ Vựng' },
    { key: 'reading', label: <Link to="/reading-part1">Reading</Link> },
    { key: 'listening', label: 'Listening' },
    { key: 'writing', label: 'Writing' },
    { key: 'speaking', label: 'Speaking' },
  ];

  return (
    <AntHeader style={{ background: '#FFCE99', padding: '0 20px' }}>
      <Flex justify="space-between" align="center" style={{ height: '100%' }}>
        {/* Logo Section */}
        <div className="logo">
          <Title level={4} style={{ margin: 0, color: '#562F00' }}>
            APTIS LOGO
          </Title>
        </div>

        {/* Navigation Section */}
        <Menu
          mode="horizontal"
          items={navItems}
          style={{
            background: 'transparent',
            borderBottom: 'none',
            minWidth: 600,
            justifyContent: 'end'
          }}
          disabledOverflow // Keeps items from hiding in a "..." menu
        />
      </Flex>
    </AntHeader>
  );
};

export default AppHeader;
