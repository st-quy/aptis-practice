import React, { useEffect, useState } from 'react';
import { Layout, Menu, Typography } from 'antd';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  const navItems = [
    { key: 'home', label: 'Trang Chủ' },
    { key: 'intro', label: 'Giới thiệu' },
    { key: 'vocab', label: 'Từ Vựng' },
    { key: 'reading', label: 'Reading' },
    { key: 'listening', label: 'Listening' },
    { key: 'writingpart1', label: 'Writing' },
    { key: 'speaking', label: 'Speaking' },
  ];

  const getSelectedFromPath = () => {
    const p = window.location.pathname.replace(/^\//, '');
    return p === '' ? 'home' : p;
  };

  const [selected, setSelected] = useState(getSelectedFromPath());

  useEffect(() => {
    const onPop = () => setSelected(getSelectedFromPath());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return (
    <AntHeader style={{ background: '#FFCE99', padding: '0 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
        <div className="logo">
          <Title level={4} style={{ margin: 0, color: '#562F00' }}>
            APTIS LOGO
          </Title>
        </div>

        <Menu
          mode="horizontal"
          items={navItems}
          onClick={(e) => {
            const key = e.key === 'home' ? '/' : `/${e.key}`;
            window.history.pushState({}, '', key);
            setSelected(e.key);
            // also dispatch a popstate-like event for listeners
            window.dispatchEvent(new PopStateEvent('popstate'));
          }}
          selectedKeys={[selected]}
          style={{
            background: 'transparent',
            borderBottom: 'none',
            minWidth: 600,
            justifyContent: 'end'
          }}
          disabledOverflow
        />
      </div>
    </AntHeader>
  );
};

export default AppHeader;
