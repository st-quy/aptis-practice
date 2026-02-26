import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import AppHeader from './layout/Header';
import AppFooter from './layout/Footer';
import HomePage from './pages/HomePage/HomePage';
import './styles/main.scss';

const { Content } = Layout;

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FF9644',
          colorTextBase: '#562F00',
          colorItemBgSelected: '#FFCE99',
        },
      }}
    >
      <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <AppHeader />

        <Content style={{ flex: 1, background: '#FFFDF1', padding: '24px' }}>
          <HomePage />
        </Content>

        <AppFooter />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
