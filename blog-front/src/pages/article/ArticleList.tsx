import React from 'react';
import { Row, Col } from 'antd';
import { connect } from 'dva';
import { ConnectState } from '@/models/connect';
import { ArticleModelState } from '@/models/article';
import ArticleCard from '@/pages/article/components/ArticleCard';
import PageLoading from '@/components/PageLoading';
import { AnyAction, Dispatch } from 'redux';

interface ArticleListProps {
  article: ArticleModelState;
  loading: boolean;
  dispatch: Dispatch<AnyAction>;
}

interface ArticleListState {}

class ArticleList extends React.Component<ArticleListProps, ArticleListState> {
  state: ArticleModelState = {};

  componentDidMount(): void {
    const { dispatch } = this.props;
    dispatch({
      type: 'article/fetchMyArticleList',
      payload: {},
    });
  }

  render():
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | string
    | number
    | {}
    | React.ReactNodeArray
    | React.ReactPortal
    | boolean
    | null
    | undefined {
    const {
      article: { articleList = [] },
      loading,
    } = this.props;
    if (loading) {
      return <PageLoading />;
    }
    return (
      <div style={{padding: 24}}>
        <Row gutter={16}>
          {articleList.map(item => (
            <Col style={{ paddingBottom: 20 }} span={8} key={item.id}>
              <ArticleCard data={item} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default connect(({ article, loading }: ConnectState) => ({
  article: article,
  loading: loading.effects['article/fetchMyArticleList'],
}))(ArticleList);
