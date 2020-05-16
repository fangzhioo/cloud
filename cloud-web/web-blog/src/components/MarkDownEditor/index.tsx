import React, { Component } from 'react'
import MarkdownNice from "markdown-nice";

// 编辑器默认的内容
const defaultText = `编辑器默认的内容`;
// 标题，是一个字符串
const defaultTitle = "标题";

// 自定义图床参数
const useImageHosting = {
  name: "自定义图床名称",
  url: "自定义图床URL",
  isSmmsOpen: false,
  isQiniuyunOpen: false,
  isAliyunOpen: true,
};

class MarkDownEditor extends Component {
  render() {
    return (
      <MarkdownNice
        defaultTitle={defaultTitle}
        defaultText={defaultText}
        onTextChange={t => console.log("text => ", t)}
        useImageHosting={useImageHosting}
      />
    )
  }
}


export default MarkDownEditor;