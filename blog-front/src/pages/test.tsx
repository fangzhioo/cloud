import React from 'react';
import AliyunOSSUpload from '@/components/AliyunOSSUpload';
import { Button, Form, Input, Icon, Divider } from 'antd';
import { FormComponentProps } from 'antd/es/form';
interface TestProps extends FormComponentProps {}
interface TestState {
  OSSConfig?: any;
}

class Test extends React.Component<TestProps, TestState> {
  constructor(props) {
    super(props);
    this.state = {
      OSSConfig: {},
    };
  }

  async componentDidMount() {
    const result = await API.file.policy.request({});
    this.setState({
      OSSConfig: result.data || {},
    });
  }

  handleSubmit = () => {
    const {
      form: { validateFieldsAndScroll },
    } = this.props;
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values);
        values['pic'].map(item => `${item['xhr']['responseURL']}${item.url}`);
        debugger;
      }
    });
  };

  render():
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | string
    | number
    | {}
    | React.ReactNodeArray
    | React.ReactPortal
    | boolean
    | null
    | undefined {
    const { OSSConfig } = this.state;
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <div>
        <h1>test</h1>
        <Divider />
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="title">
            {getFieldDecorator('title', {
              rules: [
                {
                  required: true,
                  message: 'title required',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="pic">
            {getFieldDecorator('pic', {
              rules: [
                {
                  required: true,
                  message: 'pic required',
                },
              ],
            })(
              <AliyunOSSUpload listType="picture-card" OSSConfig={OSSConfig}>
                <Icon type="upload" />
              </AliyunOSSUpload>,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create()(Test);
