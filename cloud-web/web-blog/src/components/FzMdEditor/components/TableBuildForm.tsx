import React, {useState} from 'react';
import { InputNumber, Button, message } from 'antd';

interface Props {
  onCancel?: () => void;
  onSuccess?: (formatText: string) => void;
}

const enterKey = /windows|win32/i.test(navigator.userAgent) ? "\r\n" : "\n";

const buildRow = (rowNum: number, columnNum: number) => {
  let appendText = "|";
  if (rowNum === 1) {
    appendText += " --- |";
    for (let i = 0; i < columnNum - 1; i++) {
      appendText += " --- |";
    }
  } else {
    appendText += "     |";
    for (let i = 0; i < columnNum - 1; i++) {
      appendText += "     |";
    }
  }
  return appendText + enterKey;
};

const buildFormFormat = (rowNum: number, columnNum: number) => {
  let formFormat = "";
  for (let i = 0; i < 3; i++) {
    formFormat += buildRow(i, columnNum);
  }
  for (let i = 3; i <= rowNum; i++) {
    formFormat += buildRow(i, columnNum);
  }
  return formFormat;
};

const TableBuildForm: React.FC<Props> = (props) => {
  const [row, setRow] = useState(1);
  const [col, setCol] = useState(2)
  const {onCancel,onSuccess} = props;

  const handleCancel = () => {
      onCancel && onCancel();
  }

  const handleSuccess = () => {
    if(row < 1){
      message.warning('行数不能小于2');
      return
    }
    if(col < 2){
      message.warning('列数不能小于1');
      return
    }

    const text = buildFormFormat(row,col);
    onSuccess && onSuccess(text);
  }

  return (
    <div>
      <div style={{display: 'flex',padding: 10}}>
        <div>列数：</div>
        <div><InputNumber min={2} max={1000} value={col} onChange={(val) => {setCol(val===undefined ? 2: val )}} /> </div>
      </div>
      <div style={{display: 'flex',padding: 10}}>
        <div>行数：</div>
        <div><InputNumber min={1} max={1000} value={row} onChange={(val) => {setRow(val===undefined ? 1: val )}} /> </div>
      </div>
      <div style={{display: 'flex',padding: 10}}>
        <Button onClick={handleCancel} style={{marginRight: 30}}>取消</Button>
        <Button onClick={handleSuccess} type="primary">确定</Button>
      </div>
    </div>
  )
}

export default TableBuildForm;
