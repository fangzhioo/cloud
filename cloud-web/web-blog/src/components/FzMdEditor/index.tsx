import React, { Component } from 'react'
import CodeMirror, { Editor } from '@uiw/react-codemirror';
import { LAYOUT_ID, MARKDOWN_THEME_ID, BOX_ID, CODE_THEME_ID } from './util/constant';
import { markdownParser, replaceStyle } from './util/helper';
import themeList from './theme/theme';
import codeThemeLabel, { codeThemeList, macCodeThemeList } from './theme/codeTheme';
import TEMPLATE from './template';
import { Radio, Switch, message, Modal, Drawer,Tooltip } from 'antd';
import bindHotkeys, { betterTab, rightClick, handlePressHotkey, handleFormatDoc } from './util/hotkey';
// import "codemirror/addon/search/searchcursor";
// import "codemirror/keymap/sublime";
import './util/mdMirror.css';
import './index.css';
import classNames from 'classnames';
import AliyunOSSUpload from '../AliyunOSSUpload';
import {
  AppstoreOutlined, BoldOutlined, ItalicOutlined, HighlightOutlined, StrikethroughOutlined,
  // OrderedListOutlined, UnorderedListOutlined, LinkOutlined,
  FileImageOutlined, FormatPainterOutlined, EyeOutlined, EyeInvisibleOutlined, TableOutlined
} from '@ant-design/icons';
import TableBuildForm from './components/TableBuildForm';

const getPraseHtml = (value: string) => {
  try {
    return markdownParser.render(value);
  } catch (error) {
    console.error(error);
    return ''
  }
};

const defalutVal = TEMPLATE.content || '';

class FzMdEditor extends Component {
  previewWrap: HTMLElement | null = null;
  previewContainer: HTMLElement | null = null;
  editor: Editor | undefined;
  scale: number = 1;
  index: number = 0;
  editorTop: number = 0;
  state = {
    value: defalutVal,
    focus: false, // 获得焦点
    visibleTools: false, // 工具栏开关
    visibleImageUpload: false, // 图片上传
    visibleTableBuild: false, // 表格生成
    isPriview: true, // 是否打开预览
    isSyncScroll: true, // 编辑和预览，同步滑动
    themeId: 0, // 整体模版
    codeThemeId: 'macAtomOneDark', // 代码显示模版
    isMacCode: true, // 是否是mac风格
  }

  componentDidMount() {
    const { themeId, codeThemeId, isMacCode } = this.state;
    try {
      // 【主题】
      replaceStyle(MARKDOWN_THEME_ID, themeList[themeId].css);
      // 【代码主题】
      this.handleCodeThemeRender(codeThemeId, isMacCode);
    } catch (error) {
      message.warning('初始化样式失败！');
    }
  }

  // 编辑器的值改变时
  handleCodeMirrorChange = (editor: Editor) => {
    if (this.state.focus) {
      const content = editor.getValue();
      this.setState({
        value: content
      })
    }
  }

  // markdown主题变化,触发重新渲染
  handleThemeRender = (themeId: any) => {

  }

  // markdown主题变化
  handleThemeChange = (item: any) => () => {
    const { themeId, css } = item;
    this.setState({ themeId });
    replaceStyle(MARKDOWN_THEME_ID, css);
  }

  // 代码主题变化，触发主题渲染
  handleCodeThemeRender = (codeThemeId: string, isMacCode?: boolean) => {
    if (isMacCode) {
      replaceStyle(CODE_THEME_ID, TEMPLATE.macCode[codeThemeId]);
    } else {
      replaceStyle(CODE_THEME_ID, TEMPLATE.code[codeThemeId]);
    }
  }

  // 代码主题变化
  handleCodeThemeChange = (item: any) => () => {
    const { id } = item;
    const { isMacCode } = this.state;
    this.setState({ codeThemeId: id })
    this.handleCodeThemeRender(id, isMacCode);
  }

  // 代码风格是否为mac变换时
  handleMacCodeThemeChange = (checked: boolean) => {
    const { codeThemeId } = this.state;
    const newCodeThemeId = codeThemeLabel[codeThemeId];
    this.handleCodeThemeRender(newCodeThemeId, checked);
    this.setState({ isMacCode: checked, codeThemeId: newCodeThemeId })
  }

  // 拖拽文件时
  handleDrop = (editor: Editor, e: any) => {
    // e.preventDefault();
    // console.log(e.dataTransfer.files[0]);
    if (!(e.dataTransfer && e.dataTransfer.files)) {
      return;
    }
    for (let i = 0; i < e.dataTransfer.files.length; i++) {
      // console.log(e.dataTransfer.files[i]);
      // uploadAdaptor({ file: e.dataTransfer.files[i], content: this.props.content });
    }
  };

  // 粘贴时
  handlePaste = (editor: Editor, e: any) => {
    const cbData = e.clipboardData;

    const insertPasteContent = (cm: any, content: any) => {
      const { length } = cm.getSelections();
      cm.replaceSelections(Array(length).fill(content));
      this.setState(
        {
          focus: true,
        },
        () => {
          this.handleCodeMirrorChange(cm);
        }
      );
    };

    // 如果是文件时
    if (e.clipboardData && e.clipboardData.files) {
      for (let i = 0; i < e.clipboardData.files.length; i++) {
        // uploadAdaptor({ file: e.clipboardData.files[i], content: this.props.content });
      }
    }

    // html时或者文本时
    if (cbData) {
      const html = cbData.getData("text/html");
      const text = cbData.getData("TEXT");
      insertPasteContent(editor, text);
      if (html) {
        // this.props.footer.setPasteHtmlChecked(true);
        // this.props.footer.setPasteHtml(html);
        // this.props.footer.setPasteText(text);
      } else {
        // this.props.footer.setPasteHtmlChecked(false);
      }
    }
  };

  // 下拉时
  handleScroll = () => {
    if (this.state.isSyncScroll) {
      const cmData = this.editor.getScrollInfo();
      const editorToTop = cmData.top;
      const editorScrollHeight = cmData.height - cmData.clientHeight;
      if (this.previewWrap === undefined || this.previewWrap === null || this.previewContainer === undefined || this.previewContainer === null) {
        return;
      }
      this.scale = (this.previewWrap.offsetHeight - this.previewContainer.offsetHeight + 55) / editorScrollHeight;
      if (this.index === 1) {
        this.previewContainer.scrollTop = editorToTop * this.scale;
      } else {
        this.editorTop = this.previewContainer.scrollTop / this.scale;
        this.editor.scrollTo(null, this.editorTop);
      }
    }
  };

  // 记录当前是 editor 还是 priview
  setCurrentIndex(index: number, e: any) {
    this.index = index;
  }

  // 处理焦点
  handleFocus = () => {
    this.setState({
      focus: true,
    });
  };
  handleBlur = () => {
    this.setState({
      focus: false,
    });
  };

  // 处理热键按钮 加粗等
  handleHotKeysEvent = (type: string) => () => {
    handlePressHotkey(type,this.editor, this.handleHotKeysFinish);
  }

  // 图片上传弹窗关闭
  handleImageUploadCancel = () => {
    this.setState({visibleImageUpload: false})
  }
  // 图片上传弹窗打开
  handleImageUploadDialogOpen = () => {
    this.setState({visibleImageUpload: true})
  }

  // 图片上传回调
  handleImageUploadSuccess = (url: string,name:string) => {
    this.handleImageUploadCancel();
    const text = `![${name}](${url})`;
    const cursor = this.editor.getCursor();
    this.editor.replaceSelection(text, cursor);
    const newValue = this.editor.getValue();
    this.setState({
      value: newValue
    })
  }

  // 表格生成弹窗取消
  handleTableBuildCancel = () => {
    this.setState({visibleTableBuild: false});
  }

  // 表格生成弹窗打开
  handleTableBuildDialogOpen = () => {
    this.setState({visibleTableBuild: true});
  }

  // 表单生成回调
  handleTableBuildSuccess = (formatText: string) => {
    const cursor = this.editor.getCursor();

    this.editor.replaceSelection(formatText, cursor);

    const content =  this.editor.getValue();

    this.setState({value: content})

    this.handleTableBuildCancel();
    cursor.ch += 2;
    this.editor.setCursor(cursor);
    this.editor.focus();
  }

  // 部分热键回调
  handleHotKeysFinish = (newValue: any) => {
    if(newValue){
      this.setState({
        value: newValue
      })
    }
  }

  // 格式化代码
  handleDocFormat = () => {
    const {value} = this.state;
    handleFormatDoc(value,(formatText)=>{
      message.success("格式化文档成功！")
      this.setState({
        value: formatText
      })
    })
  }

  // 获取编辑器实例
  getInstance = (instance: any) => {
    instance.editor.on("inputRead", function (cm: any, event: any) {
      if (event.origin === "paste") {
        var text = event.text[0]; // pasted string
        var new_text = ""; // any operations here
        cm.refresh();
        const { length } = cm.getSelections();
        // my first idea was
        // note: for multiline strings may need more complex calculations
        cm.replaceRange(new_text, event.from, { line: event.from.line, ch: event.from.ch + text.length });
        // first solution did'nt work (before i guess to call refresh) so i tried that way, works too
        if (length === 1) {
          cm.execCommand("undo");
        }
        // cm.setCursor(event.from);
        cm.replaceSelection(new_text);
      }
    });
    if (instance) {
      this.editor = instance.editor;
    }
  };


  render() {
    const { value, themeId, codeThemeId, isMacCode, isPriview,visibleImageUpload,visibleTools,visibleTableBuild } = this.state;
    const parseHtml = getPraseHtml(value);
    const hotKeysAction = {
      setImageOpen: () => {
        this.handleImageUploadDialogOpen();
      }
    }
    const extraKeys = {
      ...bindHotkeys(this.editor, hotKeysAction, this.handleHotKeysFinish),
      Tab: betterTab,
      RightClick: rightClick,
    };
    const codeMirrorOptions = {
      mode: 'markdown',
      theme: "md-mirror",
      // keyMap: "sublime",
      lineWrapping: true,
      lineNumbers: false,
      extraKeys
    };

    const themeListOptions = themeList.map(item => <Radio onClick={this.handleThemeChange(item)} value={item.themeId} key={item.themeId}>{item.name}</Radio>);

    const codeThemeListOptions =
      isMacCode ?
        macCodeThemeList.map(item => <Radio onClick={this.handleCodeThemeChange(item)} value={item.id} key={item.id}>{item.name}</Radio>)
        :
        codeThemeList.map(item => <Radio onClick={this.handleCodeThemeChange(item)} value={item.id} key={item.id}>{item.name}</Radio>);

    const editorContainerClass = classNames({
      'fzmd-editor-container': true,
      'fzmd-editor-container-nopriview': !isPriview
    })

    return (
      <div className="fzmd-editor">
        <div className={"fz-editor-tools-warpper"}>
          <Tooltip title="加粗"><BoldOutlined onClick={this.handleHotKeysEvent('Blod')} /></Tooltip>
          <Tooltip title="斜体"><ItalicOutlined onClick={this.handleHotKeysEvent('Italic')} /></Tooltip>
          <Tooltip title="删除线"><StrikethroughOutlined onClick={this.handleHotKeysEvent('Del')} /></Tooltip>
          <Tooltip title="代码"><HighlightOutlined onClick={this.handleHotKeysEvent('Code')} /></Tooltip>
          <Tooltip title="表格"><TableOutlined onClick={this.handleTableBuildDialogOpen} /></Tooltip>
          {/*<Tooltip title="无序列表"><UnorderedListOutlined onClick={this.handleHotKeysEvent('')} /></Tooltip>*/}
          {/*<Tooltip title="超链接"><LinkOutlined onClick={this.handleHotKeysEvent('')} /></Tooltip>*/}
          <Tooltip title="图片"><FileImageOutlined onClick={this.handleImageUploadDialogOpen} /></Tooltip>
          <Tooltip title="格式化"><FormatPainterOutlined onClick={this.handleDocFormat} /></Tooltip>
          <Tooltip title="主题">
            <AppstoreOutlined onClick={()=>{this.setState({visibleTools: true})}} />
          </Tooltip>
          <Tooltip title={isPriview ? '预览关闭' : '预览开启'}>
            {isPriview ? <EyeOutlined onClick={()=>{this.setState({isPriview: false})}} /> :  <EyeInvisibleOutlined onClick={()=>{this.setState({isPriview: true})}} />}
          </Tooltip>
        </div>
        <div className="fzmd-editor-warpper">
          <div className={editorContainerClass} onMouseOver={(e) => this.setCurrentIndex(1, e)}>
            <CodeMirror
              value={value}
              options={codeMirrorOptions}
              onChange={this.handleCodeMirrorChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              onDrop={this.handleDrop}
              onPaste={this.handlePaste}
              onScroll={this.handleScroll}
              ref={this.getInstance}
            />
          </div>
          {
            isPriview &&
            <div className="fzmd-editor-priview" onMouseOver={(e) => this.setCurrentIndex(2, e)}>
              <div
                id={BOX_ID}
                className="fzmd-editor-priview-container"
                onScroll={this.handleScroll}
                ref={(node) => {
                  this.previewContainer = node;
                }}
              >
                <section
                  id={LAYOUT_ID}
                  dangerouslySetInnerHTML={{
                    __html: parseHtml,
                  }}
                  ref={(node) => {
                    this.previewWrap = node;
                  }}
                />
              </div>
            </div>
          }
        </div>

        <Drawer
          title="tools"
          placement="left"
          closable={false}
          onClose={()=> this.setState({visibleTools: false})}
          visible={visibleTools}
        >
          <div className="fzmd-editor-tools">
            <div className="fzmd-editor-tools-item">
              <div>md主题</div>
              <Radio.Group value={themeId} >
                {themeListOptions}
              </Radio.Group>
            </div>
            <div className="fzmd-editor-tools-item">
              <div>代码主题 </div>
              <Radio.Group value={codeThemeId} >
                {codeThemeListOptions}
              </Radio.Group>
            </div>
            <div className="fzmd-editor-tools-item fzmd-editor-tools-item-flex">
              <div>mac代码</div>
              <Switch checked={isMacCode} onChange={this.handleMacCodeThemeChange} />
            </div>
          </div>
        </Drawer>
        <Modal
          title="插入图片"
          visible={visibleImageUpload}
          footer={null}
          onCancel={this.handleImageUploadCancel}
          destroyOnClose
        >
          <AliyunOSSUpload onSuccess={this.handleImageUploadSuccess}/>
        </Modal>
        <Modal
          title=""
          visible={visibleTableBuild}
          footer={null}
          onCancel={this.handleTableBuildCancel}
        >
          <TableBuildForm onCancel={this.handleTableBuildCancel} onSuccess={this.handleTableBuildSuccess} />
        </Modal>
      </div>
    )
  }
}

export default FzMdEditor;
