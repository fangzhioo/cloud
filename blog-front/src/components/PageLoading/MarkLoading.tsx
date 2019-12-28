import React from 'react';
import { Spin } from 'antd';

// loading components from code split
// https://umijs.org/plugin/umi-plugin-react.html#dynamicimport
const MarkLoading: React.FC = () => (
  <div style={{ paddingTop: 100, textAlign: 'center',position:"absolute",top:0,bottom:0,left:0,right:0 }}>
    <Spin size="large" />
  </div>
);
export default MarkLoading;
