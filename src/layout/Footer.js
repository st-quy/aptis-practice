import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const AppFooter = () => {
  return (
    <AntFooter style={{
      textAlign: 'center',
      background: '#FFCE99',
      color: '#562F00',
      padding: '20px'
    }}>
      Aptis Practice Devplus ©{new Date().getFullYear()}
    </AntFooter>
  );
};

export default AppFooter;
