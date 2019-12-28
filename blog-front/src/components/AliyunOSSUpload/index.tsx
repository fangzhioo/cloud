import React from "react";
import { Upload } from 'antd';
import {UploadProps} from "antd/lib/upload";

interface AliyunOSSUploadProps extends UploadProps{
  value?: any[];
  onChange?: (info: any) => void;
  onExpire?: (info: any) => void;
  OSSConfig?: OSSConfig;
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

  onChange = ({ fileList = [] }) => {
    const { onChange } = this.props;
    console.log('Aliyun OSS:', fileList);
    if (onChange) {
      onChange([...fileList]);
    }
  };

  onRemove = file => {
    const { value, onChange } = this.props;

    const files = value.filter(v => v.url !== file.url);

    if (onChange) {
      onChange(files);
    }
  };

  transformFile = file => {
    const { OSSConfig } = this.props;

    const suffix = file.name.slice(file.name.lastIndexOf('.'));
    const filename = Date.now() + suffix;
    file.url = OSSConfig.dir + filename;

    return file;
  };

  getExtraData = file => {
    const { OSSConfig } = this.props;
    return {
      key: file.url,
      OSSAccessKeyId: OSSConfig.accessId,
      policy: OSSConfig.policy,
      Signature: OSSConfig.signature,
    };
  };

  beforeUpload = async () => {
    const { OSSConfig, onExpire } = this.props;
    const expire = OSSConfig.expire;
    if (expire < Date.now()) {
      if(onExpire){
        onExpire(expire);
        return false;
      }
    }
    return true;
  };

  render() {
    const {
      value,
      OSSConfig,
      ...restProps
    } = this.props;
    const props = {
      ...restProps,
      name: 'file',
      fileList: value,
      action: OSSConfig.host,
      onChange: this.onChange,
      onRemove: this.onRemove,
      transformFile: this.transformFile,
      data: this.getExtraData,
      beforeUpload: this.beforeUpload,
    };

    return (
      // @ts-ignore
      <Upload {...props} />
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
