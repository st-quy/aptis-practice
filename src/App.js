import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';
import AppHeader from './layout/Header';
import AppFooter from './layout/Footer';
import About from './pages/About/About';
import ListeningPart1 from './pages/Listening/ListeningPart1';
import ReadingPart1 from './pages/Reading/ReadingPart1';
import './styles/main.scss';

const { Content } = Layout;



function App() {
  return (
    <Router>
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

          <Content style={{ flex: 1, background: '#FFFDF1' }}>
            <Routes>
              <Route
                path="/"
                element={
                  <div className="page-content" style={{ padding: '24px' }}>
                    <h1>Welcome to the Aptis Practice Portal</h1>
                    <p>Select a skill from the menu to get started.</p>
                  </div>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/reading-part1" element={<ReadingPart1 />} />
              <Route path="/listening-part1" element={<ListeningPart1 />} />
            </Routes>
          </Content>

          <AppFooter />
        </Layout>
      </ConfigProvider>
    </Router>
  );
}

export default App;
