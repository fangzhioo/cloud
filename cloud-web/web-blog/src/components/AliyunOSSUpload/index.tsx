import React from 'react';
import { Upload, message, Button, Spin } from 'antd';
import { UploadProps } from 'antd/lib/upload';
import { InboxOutlined } from '@ant-design/icons';
import { UploadFile } from 'antd/lib/upload/interface';

const { Dragger } = Upload;

interface AliyunOSSUploadProps extends UploadProps<any> {
  value?: any[];
  onChange?: (v: any) => void;
  onSuccess?: (url: string, name: string) => void;
}

interface OSSConfig {
  dir: string;
  expire: number;
  host: string;
  accessId: string;
  policy: string;
  signature: string;
}

class AliyunOSSUpload extends React.Component<AliyunOSSUploadProps> {
  state = {
    config: {} as OSSConfig,
    isReady: false,
  };

  async componentDidMount() {
    await this.init();
  }

  init = async () => {
    try {
      const res = await API.blog.aliyunOss.antdPolicy.request({});
      if (res) {
        if (res.code === 10000) {
          this.setState({
            isReady: true,
            config: { ...res.data },
          });
        } else {
          this.setState({
            isReady: false,
          });
          message.error(res.msg);
        }
      }
    } catch (error) {
      this.setState({
        isReady: false,
      });
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
    const files = value.filter((v) => v.url !== file.url);

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
    const {
      config: { expire },
    } = this.state;
    if (expire < Date.now()) {
      await this.init();
    }
    return true;
  };

  handleSuccess = (response: any, file: UploadFile<any>, xhr: any) => {
    const { onSuccess } = this.props;
    const url = `${xhr.responseURL}${file.url}`;
    onSuccess && onSuccess(url, file.name);
    console.log(url);
  };

  handleRetry = async () => {
    await this.init();
  };

  render() {
    const { value, ...restProps } = this.props;
    const { config, isReady } = this.state;
    const { host } = config;
    if (!isReady) {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 20 }}>
          <Spin />
        </div>
      );
    }
    if (host === undefined || host === null || host === '') {
      return (
        <p>
          获取Aliyun OSS config失败！{' '}
          <Button onClick={this.handleRetry} type="link">
            点击重试
          </Button>{' '}
        </p>
      );
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
      onSuccess: this.handleSuccess,
    };

    return (
      // @ts-ignore
      <Dragger {...props}>
        <p>
          {' '}
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
      </Dragger>
    );
  }
}

export default AliyunOSSUpload;
