import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import AppHeader from './layout/Header';
import AppFooter from './layout/Footer';
import './styles/main.scss';

const { Content } = Layout;

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FF9644',
          colorTextBase: '#562F00',
          // Customizing Menu colors to match your theme
          colorItemBgSelected: '#FFCE99',
        },
      }}
    >
      <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <AppHeader />

        <Content style={{ flex: 1, background: '#FFFDF1', padding: '24px' }}>
          {/* This is where your individual pages will render later */}
          <div className="page-content">
            <h1>Welcome to the Aptis Practice Portal</h1>
            <p>Select a skill from the menu to get started.</p>
          </div>
        </Content>

        <AppFooter />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
