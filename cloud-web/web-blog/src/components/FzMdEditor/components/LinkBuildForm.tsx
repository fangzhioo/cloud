import React, {useState} from 'react';
import { Input, Button, message } from 'antd';
import { isUrl } from '@/utils/utils';

interface Props {
  onCancel?: () => void;
  onSuccess?: (formatText: string) => void;
}

const LinkBuildForm: React.FC<Props> = (props)=>{
  const [url, setUrl]  = useState('');
  const {onCancel,onSuccess} = props;
 const handleChange = (e: any) => {
    const nv = e.target.value;
    setUrl(nv);
  }

  const handleCancel = () =>{
   onCancel && onCancel();
  }

  const handleSuccess = () => {
    if(isUrl(url)){
      onSuccess && onSuccess(url);
    }else{
      message.error('链接不符合规范！')
    }
  }

  return (
    <div>
      <div style={{display: 'flex',padding: 10}}>
        <div>链接地址：</div>
        <div>
          <Input value={url} onChange={handleChange} />
        </div>
      </div>

      <div style={{display: 'flex',padding: 10}}>
        <Button onClick={handleCancel} style={{marginRight: 30}}>取消</Button>
        <Button onClick={handleSuccess} type="primary">确定</Button>
      </div>
    </div>
  )
}

export default LinkBuildForm;
