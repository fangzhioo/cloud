import React, { Component } from 'react'
import CodeMirror, { Editor } from '@uiw/react-codemirror';
import { LAYOUT_ID, MARKDOWN_THEME_ID, BOX_ID } from './util/constant';
import { markdownParserWechat, markdownParser, replaceStyle } from './util/helper';
import themeList from './theme';
import { Radio } from 'antd';
import './util/mdMirror.css';
import bindHotkeys, { betterTab, rightClick } from './util/hotkey';

class FzMdEditor extends Component {
  previewWrap: HTMLElement | null = null;
  previewContainer: HTMLElement | null = null;
  editor: Editor | undefined;
  scale: number = 1;
  index: number = 0;
  editorTop: number = 0;
  state = {
    value: '',
    focus: false, // 获得焦点
    isSyncScroll: true, // 编辑和预览，同步滑动
    themeId: 0, // 整体模版
    codeThemeId: 1, // 代码显示模版
  }

  handleCodeMirrorChange = (editor: Editor) => {
    if (this.state.focus) {
      const content = editor.getValue();
      this.setState({
        value: content
      })
    }
  }

  handleThemeChange = (item: any) => () => {
    const { themeId, css } = item;
    this.setState({ themeId });
    replaceStyle(MARKDOWN_THEME_ID, css);
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

  setCurrentIndex(index: number, e: any) {
    this.index = index;
  }

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
    const { value, themeId, codeThemeId } = this.state;
    const parseHtml =
      codeThemeId === 0
        ? markdownParserWechat.render(value)
        : markdownParser.render(value);

    const codeMirrorOptions = {
      mode: 'markdown',
      theme: "md-mirror",
      keyMap: "sublime",
      lineWrapping: true,
      lineNumbers: false,
      extraKeys: {
        ...bindHotkeys(value, {}),
        Tab: betterTab,
        RightClick: rightClick,
      }
    };
    debugger
    const themeListOptions = themeList.map(item => <Radio onClick={this.handleThemeChange(item)} value={item.themeId} key={item.themeId}>{item.name}</Radio>);

    return (
      <div>
        <div>
          <Radio.Group value={themeId} >
            {themeListOptions}
          </Radio.Group>
        </div>
        <div style={{ display: 'flex', border: '1px #efefef', height: '60vh', padding: 20 }}>
          <div style={{ width: '60%' }} onMouseOver={(e) => this.setCurrentIndex(1, e)}>
            <CodeMirror
              value={value}
              options={codeMirrorOptions}
              onChange={this.handleCodeMirrorChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              onDrop={this.handleDrop}
              onPaste={this.handlePaste}
              ref={this.getInstance}
            />
          </div>
          <div onMouseOver={(e) => this.setCurrentIndex(2, e)}>
            <div
              id={BOX_ID}
              onScroll={this.handleScroll}
              ref={(node) => {
                this.previewContainer = node;
              }}
              style={{ boxSizing: 'border-box', width: '40%' }}
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

        </div>

      </div>
    )
  }
}

export default FzMdEditor;