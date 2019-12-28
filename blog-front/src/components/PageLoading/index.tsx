import React from 'react';
import { Spin } from 'antd';

// loading components from code split
// https://umijs.org/plugin/umi-plugin-react.html#dynamicimport
const PageLoading: React.FC = () => (
  <div style={{ paddingTop: 100, textAlign: 'center', minHeight: 200 }}>
    <Spin size="large" />
  </div>
);
export default PageLoading;
