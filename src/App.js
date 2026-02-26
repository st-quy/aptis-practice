import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import AppHeader from './layout/Header';
import AppFooter from './layout/Footer';
import Faq from './pages/Faq';
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

        <Content style={{ flex: 1, background: '#FFFDF1', padding: '40px 24px' }}>
          <Faq />
        </Content>

        <AppFooter />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
