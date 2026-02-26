import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Layout, Menu, Flex, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Header: AntHeader } = Layout;
const { Title } = Typography;



const AppHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { key: 'home', label: <Link to="/">Trang Chủ</Link> },
    { key: 'intro', label: 'Giới thiệu' },
    { key: 'vocab', label: 'Từ Vựng' },
    { key: 'reading', label: <Link to="/reading-part1">Reading</Link> },
    { key: 'listening', label: <Link to="/listening-part1">Listening</Link> },
    { key: 'writing', label: 'Writing' },
    { key: 'speaking', label: 'Speaking' },
  ];

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  return (
    <AntHeader style={{ background: '#FFCE99', padding: '0 20px' }}>
      <Flex justify="space-between" align="center" style={{ height: '100%' }}>
        {/* Logo Section */}
        <div className="logo" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          <Title level={4} style={{ margin: 0, color: '#562F00' }}>
            APTIS LOGO
          </Title>
        </div>

        {/* Navigation Section */}
        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={navItems}
          onClick={handleMenuClick}
          style={{
            background: 'transparent',
            borderBottom: 'none',
            minWidth: 600,
            justifyContent: 'end',
          }}
          disabledOverflow
        />
      </Flex>
    </AntHeader>
  );
};

export default AppHeader;
