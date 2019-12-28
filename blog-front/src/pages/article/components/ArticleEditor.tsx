import React, { Component } from 'react';
import BraftEditor from 'braft-editor';
import { EditorState, BraftEditorProps } from 'braft-editor/index';
import { RawDraftContentState } from 'draft-js';
// import { ContentUtils } from 'braft-utils'
// import { ImageUtils } from 'braft-finder'
import 'braft-editor/dist/index.css';
import 'braft-editor/dist/output.css';
import styles from './ArticleEditor.less';

export interface ArticleEditorProps extends BraftEditorProps {
  value?: Value;
  defaultValue?: Value;
}

export interface Value {
  raw: string | RawDraftContentState;
  html?: string;
  text?: string;
}

interface ArticleEditorState {
  editorState: EditorState;
  preview: boolean;
}

class ArticleEditor extends Component<ArticleEditorProps, ArticleEditorState> {
  static defaultProps = {
    className: '',
  };

  constructor(props: ArticleEditorProps) {
    super(props);
    const { value, defaultValue } = props;
    let raw = null;
    if (value) {
      raw = value.raw;
    } else if (defaultValue) {
      raw = defaultValue.raw;
    }
    this.state = {
      editorState: BraftEditor.createEditorState(raw),
      preview: false,
    };
  }

  handleChange = editorState => {
    this.setState({ editorState });
    const { onChange } = this.props;
    if (onChange) {
      onChange({
        raw: editorState.toRAW(),
        html: editorState.toHTML(),
        text: editorState.toText(),
      });
    }
  };

  handleControlsPreview = () => {
    const { preview } = this.state;
    this.setState({
      preview: !preview,
    });
  };

  render() {
    const {
      style,
      className,
      value,
      defaultValue,
      onChange,
      extendControls = [],
      ...restProps
    } = this.props;
    const myExtendControls = [
      {
        key: 'custom-button',
        type: 'button',
        text: this.state.preview ? '关闭' : '预览',
        className: this.state.preview ? 'active' : '',
        onClick: this.handleControlsPreview,
      },
      ...extendControls,
    ];

    return (
      <div style={style} className={`${styles.editorContainer} ${className}`}>
        <div className={styles.editorWrapper}>
          <div
            className={styles.editorContent}
            style={{ width: this.state.preview ? '50%' : '100%' }}
          >
            <BraftEditor
              value={this.state.editorState}
              onChange={this.handleChange}
              // @ts-ignore
              extendControls={myExtendControls}
              {...restProps}
            />
          </div>
          {this.state.preview && (
            <div className={styles.editorPreview}>
              <div
                className={styles.editorPreviewContent}
                dangerouslySetInnerHTML={{ __html: this.state.editorState.toHTML() }}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ArticleEditor;
