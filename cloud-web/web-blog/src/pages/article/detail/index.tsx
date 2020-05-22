import React, { Component } from 'react';
import { FzmdPriviewParser } from '@/components/FzMdEditor';
import { getUrlParam } from '@/utils/utils';
import * as _ from 'lodash';
import { message, Empty, Row, Col, Anchor } from 'antd';
import CommentList from './components/CommentList';
import './index.css';
import { GridContent } from '@ant-design/pro-layout';
import getMKTitles from '@/utils/getMarkDownTOC';
import MdTocAnchor from './components/MdTocAnchor';

const DEFAULT_MD_THEME = 'normal|macAtomOneDark';

const getTOC = (content: string) => {
  try {
    return getMKTitles(content);
  } catch (error) {
    return [];
  }
};

const getArticleTheme = (aTheme: string = DEFAULT_MD_THEME) => {
  const arr = aTheme.split('|');
  return {
    themeId: _.get(arr, '0'),
    codeThemeId: _.get(arr, '1'),
  };
};

class Props {
  location?: any;
}
class State {
  articleDetail: defs.blog.BlogArticleVO = new defs.blog.BlogArticleVO();
}

export default class ArticleDetailPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = new State();
  }

  componentDidMount() {
    const { location } = this.props;
    const articleId = Number(getUrlParam('aid', location));
    API.blog.blogArticle.getArticleById
      .request({ params: { articleId } })
      .then((res) => {
        this.setState({
          articleDetail: _.get(res, 'data', new defs.blog.BlogArticleVO()),
        });
      })
      .catch((e) => {
        message.error(e);
      });
  }

  renderTOC = (mdText: string) => {
    return (
      <Anchor>
        <Anchor.Link href="#开发环境准备" title="开发环境准备" />
        <Anchor.Link href="#components-anchor-demo-static" title="Static demo" />
        <Anchor.Link
          href="#components-anchor-demo-basic"
          title="Basic demo with Target"
          target="_blank"
        />
        <Anchor.Link href="#API" title="API">
          <Anchor.Link href="#Anchor-Props" title="Anchor Props" />
          <Anchor.Link href="#Link-Props" title="Link Props" />
        </Anchor.Link>
      </Anchor>
    );
  };

  render() {
    const { articleDetail } = this.state;
    const aHtml = _.get(articleDetail, 'content', null);
    const { themeId, codeThemeId } = getArticleTheme(
      _.get(articleDetail, 'editorTheme', DEFAULT_MD_THEME),
    );
    if (aHtml === null) {
      return <Empty description="没有找到文章哟～～" />;
    }
    const cover = _.get(
      articleDetail,
      'cover',
      `https://i.picsum.photos/id/${articleDetail.articleId || '521'}/1200/300.jpg`,
    );
    const title = _.get(articleDetail, 'title', '');
    const authorAvatar = _.get(articleDetail, 'authorAvatar', '');
    const authorNickname = _.get(articleDetail, 'authorNickname', '');
    const toc = getTOC(aHtml);

    return (
      <GridContent>
        <div className="article-detail-wapper">
          <div className="article-detail-header" style={{ backgroundImage: `url(${cover})` }}>
            <div>{title}</div>
          </div>
          <div className="article-detail-content">
            <Row gutter={24}>
              <Col lg={17} md={24}>
                <FzmdPriviewParser content={aHtml} themeId={themeId} codeThemeId={codeThemeId} />
              </Col>
              <Col lg={7} md={24}>
                <MdTocAnchor toc={toc} />
              </Col>
            </Row>
          </div>
          <div className="article-detail-footer">
            <CommentList />
          </div>
        </div>
      </GridContent>
    );
  }
}
