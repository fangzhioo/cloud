import React from 'react';
import { Card, Divider } from 'antd';
import RichEditor from '@/components/RichEditor';
import AliyunOSSUpload from '@/components/AliyunOSSUpload';
import { UploadOutlined } from '@ant-design/icons';

interface ArtilcePublishPageProps {

}

const ArtilcePublishPage: React.FC<ArtilcePublishPageProps> = () => {

  return (
    <Card bordered={false}>
      <h1>editor</h1>
      <div>
        <Divider>slate-react rich editor</Divider>
        <Card>
          <RichEditor />
        </Card>
        <Divider>AliyunOSSUpload</Divider>
        <AliyunOSSUpload listType="picture-card">
          <UploadOutlined />
        </AliyunOSSUpload>
      </div>
    </Card>
  )
}

export default ArtilcePublishPage;