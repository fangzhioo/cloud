import React from 'react';
import { BackTop } from 'antd';

const Layout: React.FC = ({ children }) => (
  <>
    <h1>test</h1>
    <BackTop />
    <div>
      {children}
    </div>
  </>
);

export default Layout;
