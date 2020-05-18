import React from 'react';
import { Card, Tabs } from 'antd';
import RichEditor from '@/components/RichEditor';
import AliyunOSSUpload from '@/components/AliyunOSSUpload';

interface ArtilcePublishPageProps {

}

const ArtilcePublishPage: React.FC<ArtilcePublishPageProps> = () => {

  return (
    <Card bordered={false}>
      <Tabs>
        <Tabs.TabPane tab="rich editor" key="1">
          <RichEditor />
        </Tabs.TabPane>
        <Tabs.TabPane tab="AliyunOSSUpload" key="2">
          <AliyunOSSUpload />
        </Tabs.TabPane>
      </Tabs>
    </Card>
  )
}

export default ArtilcePublishPage;
