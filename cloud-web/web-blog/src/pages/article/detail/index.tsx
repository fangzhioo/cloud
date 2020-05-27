import React, { Component } from 'react';
import { FzmdPriviewParser } from '@/components/FzMdEditor';
import { getUrlParam } from '@/utils/utils';
import * as _ from 'lodash';
import { Empty, Row, Col, Skeleton, Avatar, BackTop } from 'antd';
import CommentList from './components/CommentList';
import './index.css';
import getMKTitles from '@/utils/getMarkDownTOC';
import MdTocAnchor from './components/MdTocAnchor';
import { connect, ConnectProps } from 'umi';
import { ConnectState } from '@/models/connect';
import PageNav from './components/PageNav';

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
  articleDetail?: defs.blog.BlogArticleVO;
  loading?: boolean;
}
class State {}

class ArticleDetailPage extends Component<Props & ConnectProps, State> {
  public state = new State();

  componentDidMount() {
    const { location, dispatch } = this.props;
    const articleId = Number(getUrlParam('aid', location));
    if (dispatch) {
      dispatch({
        type: 'article/fetchArticleDetail',
        payload: {
          params: { articleId },
        },
      });
    }
  }

  render() {
    const { articleDetail, loading } = this.props;
    const articleId = Number(getUrlParam('aid', location));
    const aHtml = _.get(articleDetail, 'content', null);
    const { themeId, codeThemeId } = getArticleTheme(
      _.get(articleDetail, 'editorTheme', DEFAULT_MD_THEME),
    );
    if (aHtml === null) {
      return <Empty description="没有找到文章哟～～" />;
    }
    const cover = _.get(articleDetail, 'cover');
    const defaultCover =
      cover === null ? `https://i.picsum.photos/id/${articleId || '521'}/1900/875.jpg` : cover;
    const title = _.get(articleDetail, 'title', '');
    const authorAvatar = _.get(articleDetail, 'authorAvatar', '');
    const authorNickname = _.get(articleDetail, 'authorNickname', '');
    const gmtCreate = _.get(articleDetail, 'gmtCreate', '');
    const toc = getTOC(aHtml);

    return (
      <div className="article-detail-wapper">
        <div className="article-detail-header" style={{ backgroundImage: `url(${defaultCover})` }}>
          <PageNav />
          <div className="article-detail-header-mark">
            <div className="article-detail-title">{title}</div>
            <div className="article-detail-author">
              <Avatar size="small" src={authorAvatar} />
              <div className="article-detail-author-nickname"> {authorNickname}</div>
              <div className="article-detail-created">{gmtCreate}</div>
            </div>
          </div>
        </div>
        <div className="article-detail-content">
          <Row gutter={24}>
            <Col lg={18} md={24}>
              <Skeleton active loading={loading}>
                <FzmdPriviewParser content={aHtml} themeId={themeId} codeThemeId={codeThemeId} />
              </Skeleton>
              <Skeleton active loading={loading}>
                <CommentList />
              </Skeleton>
            </Col>
            <Col lg={6} md={24}>
              <Skeleton active loading={loading}>
                <MdTocAnchor toc={toc} />
              </Skeleton>
            </Col>
          </Row>
          <BackTop />
        </div>
        <div className="article-detail-footer"></div>
      </div>
    );
  }
}

export default connect(({ article, loading }: ConnectState) => ({
  articleDetail: article.articleDetail,
  loading: loading.effects['article/fetchArticleDetail'],
}))(ArticleDetailPage);
