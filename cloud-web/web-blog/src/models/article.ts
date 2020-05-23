import { Effect, Reducer } from 'umi';
import _ from 'lodash';
import { blog } from '@/services/blog/baseClass';
const { BlogArticleVO } = blog;

export interface ArticleModelState {
  articleDetail: defs.blog.BlogArticleVO;
}

export interface ArticleModelType {
  namespace: 'article';
  state: ArticleModelState;
  effects: {
    fetchArticleDetail: Effect;
  };
  reducers: {
    SAVE_STATE: Reducer<ArticleModelState>;
  };
}

const ArticleModel: ArticleModelType = {
  namespace: 'article',

  state: {
    articleDetail: new BlogArticleVO(),
  },

  effects: {
    *fetchArticleDetail({ payload }, { call, put }) {
      const response = yield call(API.blog.blogArticle.getArticleById.request, payload);
      if (response) {
        yield put({
          type: 'SAVE_STATE',
          payload: _.get(response, 'data', new BlogArticleVO()),
        });
      }
    },
  },

  reducers: {
    SAVE_STATE(state, action) {
      return {
        ...state,
        articleDetail: action.payload || {},
      };
    },
  },
};

export default ArticleModel;
