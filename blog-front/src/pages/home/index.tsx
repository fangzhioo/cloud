import React from 'react';
import {Button, Card} from 'antd';
import {Link} from "umi";

export default (): React.ReactNode => (
  <Card>
    <div style={{ height: 5000 }}>
      <Link to={`/article/publish`}><Button type="primary">发布文章</Button></Link>
      <Link to={`/article`}><Button type="primary">文章列表</Button></Link>
    </div>
  </Card>
);
