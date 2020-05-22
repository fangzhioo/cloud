import React, { Component } from 'react';
import { markdownParser, handleThemeRender, handleCodeThemeRender } from './util/helper';
import { BOX_ID, LAYOUT_ID } from './util/constant';
import './FzmdPriviewParser.css';

class Props {
  content?: string = ''; // 内容
  themeId?: string = 'normal'; // 整体模版
  codeThemeId?: string = 'macAtomOneDark'; // 代码显示模版
}

class State {}

export const getParseHtml = (value: string = '') => {
  try {
    return markdownParser.render(value);
  } catch (error) {
    console.error(error);
    return '';
  }
};

class FzmdPriviewParser extends Component<Props, State> {
  public static defaultProps = new Props();
  constructor(props: Props) {
    super(props);
    this.state = new State();
  }

  componentDidMount() {
    handleThemeRender(this.props.themeId);
    handleCodeThemeRender(this.props.codeThemeId);
  }

  componentDidUpdate(prevProps: Props) {
    // 主题改变时
    if (prevProps.themeId !== this.props.themeId) {
      handleThemeRender(this.props.themeId);
    }
    // 代码主题改变时
    if (prevProps.codeThemeId !== this.props.codeThemeId) {
      handleCodeThemeRender(this.props.codeThemeId);
    }
  }

  render() {
    const { content } = this.props;
    const parseHtml = getParseHtml(content);

    return (
      <div id={BOX_ID} className="fzmd-editor-parser">
        <section
          id={LAYOUT_ID}
          dangerouslySetInnerHTML={{
            __html: parseHtml,
          }}
        />
      </div>
    );
  }
}

export default FzmdPriviewParser;
