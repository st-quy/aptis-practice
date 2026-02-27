<<<<<<< HEAD
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';
import AppHeader from './layout/Header';
import AppFooter from './layout/Footer';
import About from './pages/About/About';
import ListeningPart1 from './pages/Listening/ListeningPart1';
import ReadingPart1 from './pages/Reading/ReadingPart1';
import WritingPart1 from './pages/Writing/WritingPart1';
import Vocabulary from './pages/Vocabulary/Vocabulary';
import SpeakingPart1 from './pages/Speaking/SpeakingPart1';
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
          fontFamily: "'Be Vietnam Pro', sans-serif",
        },
      }}
    >
      <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <AppHeader />

        <Content style={{ flex: 1, background: '#FFFDF1' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/speaking-part1" element={<SpeakingPart1 />} />
            <Route path="/vocabulary" element={<Vocabulary />} />
            <Route path="/writing-part1" element={<WritingPart1 />} />
            <Route path="/about" element={<About />} />
            <Route path="/reading-part1" element={<ReadingPart1 />} />
            <Route path="/listening-part1" element={<ListeningPart1 />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Content>

        <AppFooter />
      </Layout>
    </ConfigProvider>
=======

import Layout from './layout/layout';
import ReadingPart2 from './pages/Reading/pages/ReadingPart2';

function App() {
  return (
    <Layout>
      <ReadingPart2 />
    </Layout>
>>>>>>> fbfe42a (Initial commit: React app with Reading Part 2 feature)
  );
}

export default App;
