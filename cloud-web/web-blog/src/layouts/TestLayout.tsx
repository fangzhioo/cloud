import React from 'react';
import { BackTop } from 'antd';

const Layout: React.FC = ({ children }) => (
  <>
    <BackTop />
    <div>
      {children}
    </div>
  </>
);

export default Layout;
