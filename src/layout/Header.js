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
    { key: '/about', label: <Link to="/about">Giới thiệu</Link> },
    { key: '/vocab', label: <Link to="/vocab">Từ Vựng</Link> },
    { key: '/reading-part1', label: <Link to="/reading-part1">Reading</Link> },
    { key: '/listening-part1', label: <Link to="/listening-part1">Listening</Link> },
    { key: '/writing-part1', label: <Link to="/writing-part1">Writing</Link> },
    { key: '/speaking-part1', label: <Link to="/speaking-part1">Speaking</Link> },
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
      </div>
    </AntHeader>
  );
};

export default AppHeader;
