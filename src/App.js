import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import AppHeader from './layout/Header';
import AppFooter from './layout/Footer';
import './styles/main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListeningPart1 from './pages/Listening/ListeningPart1';

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
      <Router>
        <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <AppHeader />

          <Content style={{ flex: 1, background: '#FFFDF1', padding: '24px' }}>
            <Routes>
              <Route path="/" element={
                <div className="page-content">
                  <h1>Welcome to the Aptis Practice Portal</h1>
                  <p>Select a skill from the menu to get started.</p>
                </div>
              } />
              <Route path="/listening-part1" element={<ListeningPart1 />} />
            </Routes>
          </Content>

          <AppFooter />
        </Layout>
      </Router>
    </ConfigProvider>
  );
}

export default App;
