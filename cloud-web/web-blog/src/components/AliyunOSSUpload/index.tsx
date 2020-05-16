import React from "react";
import { Upload, message } from 'antd';
import { UploadProps } from "antd/lib/upload";
import { queryAntdPolicy } from '@/services/article'
import { UploadOutlined } from '@ant-design/icons';

interface AliyunOSSUploadProps extends UploadProps<any> {
  value?: any[];
  onChange?: (v: any) => void;
}

interface OSSConfig {
  dir: string,
  expire: number,
  host: string,
  accessId: string,
  policy: string,
  signature: string,
}

class AliyunOSSUpload extends React.Component<AliyunOSSUploadProps> {
  state = {
    config: {} as OSSConfig
  }

  async componentDidMount() {
    await this.init();
  }

  init = async () => {
    try {
      const res = await queryAntdPolicy();
      if (res.code === 10000) {
        this.setState({
          config: { ...res.data }
        })
      } else {
        message.error(res.msg);
      }
    } catch (error) {
      message.error(error);
    }
  };

  onChange = ({ fileList }: any) => {
    const { onChange } = this.props;
    // console.log('Aliyun OSS:', fileList);
    if (onChange) {
      onChange([...fileList]);
    }
  };

  onRemove = (file: any) => {
    const { value, onChange } = this.props;
    if (value === undefined) {
      return;
    }
    const files = value.filter(v => v.url !== file.url);

    if (onChange) {
      onChange(files);
    }
  };

  transformFile = (file: any) => {
    const { config } = this.state;
    // const suffix = file.name.slice(file.name.lastIndexOf('.'));
    const filename = Date.now() + file.name;
    file.url = config.dir + filename;

    return file;
  };

  getExtraData = (file: any) => {
    const { config } = this.state;
    return {
      key: file.url,
      OSSAccessKeyId: config.accessId,
      policy: config.policy,
      Signature: config.signature,
    };
  };

  beforeUpload = async () => {
    const { config: { expire } } = this.state;
    if (expire < Date.now()) {
      await this.init();
    }
    return true;
  };

  render() {
    const {
      value,
      ...restProps
    } = this.props;
    const { config } = this.state;
    const { host } = config;
    if (host === undefined || host === null || host === '') {
      return 'policy config error !!! host is void !!!'
    }
    const props = {
      ...restProps,
      name: 'file',
      fileList: value,
      action: host,
      onChange: this.onChange,
      onRemove: this.onRemove,
      transformFile: this.transformFile,
      data: this.getExtraData,
      beforeUpload: this.beforeUpload,
    };

    return (
      // @ts-ignore
      <Upload {...props} ><UploadOutlined /></Upload>
    );
  }
}

export default AliyunOSSUpload;
// class FormPage extends React.Component {
//   render() {
//     const { getFieldDecorator } = this.props.form;
//     return (
//       <Form onSubmit={this.handleSubmit} labelCol={{ span: 4 }}>
//         <Form.Item label="Photos">{getFieldDecorator('photos')(<AliyunOSSUpload />)}</Form.Item>
//       </Form>
//     );
//   }
// }
//
// const WrappedFormPage = Form.create()(FormPage);
//
// ReactDOM.render(<WrappedFormPage />, mountNode);
