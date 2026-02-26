import React from 'react';
import { Layout, Menu, Flex, Typography } from 'antd';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  const navItems = [
    { key: 'home', label: 'Trang Chủ' },
    { key: 'intro', label: 'Giới thiệu' },
    { key: 'vocab', label: 'Từ Vựng' },
    { key: 'reading', label: 'Reading' },
    { key: 'listening', label: 'Listening' },
    { key: 'writing', label: 'Writing' },
    { key: 'speaking', label: 'Speaking' },
  ];

  return (
    <AntHeader className="app-header">
      <div className="app-header-inner">
        <Flex justify="space-between" align="center" style={{ height: '100%' }}>
          <div className="logo">
            <Title level={4} className="logo-text">
              Aptis Practice
            </Title>
          </div>

          <Menu
            mode="horizontal"
            items={navItems}
            className="main-menu"
            disabledOverflow
          />
        </Flex>
      </div>
    </AntHeader>
  );
};

export default AppHeader;
