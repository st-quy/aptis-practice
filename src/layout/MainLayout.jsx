import React from 'react';
import { Layout } from 'antd';
import '../styles/MainLayout.scss';

const { Header, Footer, Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout className="page-wrapper">
      <Header className="high-spec-header">
        <div className="logo" style={{ color: '#562F00', fontWeight: 'bold', fontSize: '1.2rem' }}>
          APTIS PRACTICE
        </div>
        {/* Unified navigation handshake can pounce here later!! */}
      </Header>
      
      <Content className="main-content">
        <div className="content-container">
          {children}
        </div>
      </Content>
      
      <Footer className="high-spec-footer">
        DevPlus Aptis Practice ©2026 | High-Spec React Implementation
      </Footer>
    </Layout>
  );
};

export default MainLayout;
