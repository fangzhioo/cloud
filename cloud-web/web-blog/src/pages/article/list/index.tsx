import React, { useEffect } from 'react';
import { BackTop, Card } from 'antd';
import InfiniteScrollList from '@/components/InfiniteScrollList';
import { connect, ConnectProps } from 'umi';
import { ConnectState } from '@/models/connect';
import _ from 'lodash';

// const fakeDataUrl = 'https://randomuser.me/api/?results=5';

class Props {
  dataSource?: defs.blog.BlogArticleVO[] = [];
  loading?: boolean;
  listQuery?: API.blog.blogArticle.listArticleByQuery.Params = {};
  countQuery?: number = 0;
}

const ArticleListPage: React.FC<Props & ConnectProps> = (props) => {
  const { dataSource = [], countQuery = 0, loading, dispatch, listQuery } = props;
  const pageStart = _.get(listQuery, 'current', 1);
  const handleInfinite = (page: number) => {
    // handleInfinite
    console.log('handleInfinite', page);
    // setLoading(true);
    // fetch(fakeDataUrl, {
    //   headers: new Headers({
    //     'Content-Type': 'application/json'
    //   })
    // }).then(res => {
    //   return res.json();
    // }).then(resJson => {
    //   const newData = data.concat(resJson.results);
    //   setData(newData);
    //   setLoading(false);
    // })
    if (dispatch) {
      const articleQuery = {
        ...listQuery,
        current: page,
      };
      dispatch({
        type: 'article/fetchArticleList',
        payload: {
          params: articleQuery,
        },
      });
      dispatch({
        type: 'article/fetchArticleCount',
        payload: {
          params: articleQuery,
        },
      });
      dispatch({
        type: 'article/SAVE_STATE',
        payload: {
          articleQuery,
        },
      });
    }
  };

  useEffect(() => {
    handleInfinite(1);
  }, []);

  return (
    <Card bordered={false}>
      <BackTop />
      <InfiniteScrollList
        dataSource={dataSource}
        loading={loading}
        pageStart={pageStart}
        over={dataSource.length > countQuery}
        onInfinite={handleInfinite}
      />
    </Card>
  );
};

export default connect(({ article, loading }: ConnectState) => ({
  dataSource: article.articleList,
  listQuery: article.articleQuery,
  countQuery: article.articleCount,
  loading: loading.effects['article/fetchArticleList'],
}))(ArticleListPage);
