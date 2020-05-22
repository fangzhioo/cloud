import React from 'react';
import FzMdEditor from '@/components/FzMdEditor';
import { Input, Form, message, Button } from 'antd';

interface ArtilcePublishPageProps {}

class ArtilcePublishPage extends React.Component<ArtilcePublishPageProps> {
  handleFormFinish = (values: any) => {
    console.log(values);
    const payload = {
      ...new defs.blog.BlogArticleDTO(),
      ...values,
    };
    API.blog.blogArticle.publishArticle.request({ data: { ...payload } }).then((res) => {
      if (res) {
        if (res.code === 10000) {
          message.success('发布成功');
        } else {
          message.error(res.data);
        }
      }
    });
    // "title": "string",
    // "subtitle": "string",
    // "cover": "string",
    // "cid": 0,
    // "editor": "string",
    // "editorTheme": "string",
    // "content": "string",
    // "editorContent": "string"
  };

  render() {
    return (
      <div>
        <Form onFinish={this.handleFormFinish} style={{ width: '100%', height: '100%' }}>
          <div>
            <Form.Item noStyle name="title" required>
              <Input size="large" placeholder="标题" />
            </Form.Item>
          </div>
          <div>
            <Form.Item noStyle name="content">
              <FzMdEditor />
            </Form.Item>
          </div>
          <div>
            <Form.Item noStyle>
              <Button htmlType="submit">发布</Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    );
  }
}

export default ArtilcePublishPage;
