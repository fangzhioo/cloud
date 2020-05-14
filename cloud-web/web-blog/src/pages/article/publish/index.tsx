import React from 'react';
import { Card } from 'antd';
import RichEditor from '@/components/RichEditor';

interface ArtilcePublishPageProps {

}

const ArtilcePublishPage: React.FC<ArtilcePublishPageProps> = () => {

  return (
    <Card bordered={false}>
      <h1>rich editor</h1>
      <div>

        <RichEditor />
      </div>
    </Card>
  )
}

export default ArtilcePublishPage;