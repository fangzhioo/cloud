import { Effect, Reducer, Action } from 'umi';
import _ from 'lodash';
import { blog } from '@/services/blog/baseClass';
const { BlogArticleVO } = blog;

export class ArticleModelState {
  articleDetail: defs.blog.BlogArticleVO = new BlogArticleVO();
  articleQuery: API.blog.blogArticle.listArticleByQuery.Params = {};
  articleList: Array<defs.blog.BlogArticleVO> = [];
  articleCount: number = 0;
}

interface IAction extends Action<any> {
  payload: {
    [key: string]: any;
  };
}

export interface ArticleModelType {
  namespace: 'article';
  state: ArticleModelState;
  effects: {
    fetchArticleDetail: Effect;
    fetchArticleList: Effect;
    fetchArticleCount: Effect;
  };
  reducers: {
    SAVE_STATE: Reducer<ArticleModelState, IAction>;
    RESET_STATE: Reducer<ArticleModelState, IAction>;
    SAVE_INFINITE_LIST: Reducer<ArticleModelState, IAction>;
  };
}

const ArticleModel: ArticleModelType = {
  namespace: 'article',

  state: new ArticleModelState(),

  effects: {
    *fetchArticleDetail({ payload }, { call, put }) {
      const response = yield call(API.blog.blogArticle.getArticleById.request, payload);
      if (response) {
        yield put({
          type: 'SAVE_STATE',
          payload: {
            articleDetail: _.get(response, 'data', new BlogArticleVO()),
          },
        });
      }
    },
    *fetchArticleList({ payload }, { call, put }) {
      const response = yield call(API.blog.blogArticle.listArticleByQuery.request, payload);
      if (response) {
        const data: defs.blog.BlogArticleVO[] = _.get(response, 'data', []);
        if (data.length > 0) {
          yield put({
            type: 'SAVE_INFINITE_LIST',
            payload: data,
          });
        }
      }
    },
    *fetchArticleCount({ payload }, { call, put }) {
      const response = yield call(API.blog.blogArticle.countArticleByQuery.request, payload);
      if (response) {
        yield put({
          type: 'SAVE_STATE',
          payload: {
            articleCount: _.get(response, 'data', 0),
          },
        });
      }
    },
  },

  reducers: {
    SAVE_STATE(state = new ArticleModelState(), { payload = {} }) {
      return {
        ...state,
        ...payload,
      };
    },
    SAVE_INFINITE_LIST(state = new ArticleModelState(), { payload = [] }) {
      return {
        ...state,
        articleList: _.concat(state.articleList, payload),
      };
    },
    RESET_STATE(state = new ArticleModelState(), { payload = {} }) {
      return {
        ...new ArticleModelState(),
        ...payload,
      };
    },
  },
};

export default ArticleModel;
