import React from 'react';
import { Card} from 'antd';

export default (): React.ReactNode => (
  <Card>
    <div style={{ minHeight: 600,display:'flex',justifyContent:'center' }}>
      <iframe
  style={{width: '100%'}}
  src="//player.bilibili.com/player.html?aid=64669135&cid=112269092&page=1" scrolling="no" border="0"
  frameBorder="no" framespacing="0" allowFullScreen="true"/>
    </div>
  </Card>
);
