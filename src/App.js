import React, { useEffect, useState } from 'react';
import { ConfigProvider, Layout } from 'antd';
import AppHeader from './layout/Header';
import AppFooter from './layout/Footer';
import './styles/main.scss';
import WritingPart1 from './pages/WritingPart1';

const { Content } = Layout;

function App() {
  const getPageFromPath = () => {
    const p = window.location.pathname.replace(/^\//, '');
    return p === '' ? 'home' : p;
  };

  const [page, setPage] = useState(getPageFromPath());

  useEffect(() => {
    const onPop = () => setPage(getPageFromPath());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

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
          <div className="page-content">
            {page === 'writingpart1' ? (
              <WritingPart1 />
            ) : (
              <div>
                <h1>Welcome to the Aptis Practice Portal</h1>
                <p>Select a skill from the menu to get started.</p>
              </div>
            )}
          </div>
        </Content>

        <AppFooter />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
