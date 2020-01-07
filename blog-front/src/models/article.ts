import { Effect } from 'dva';
import { Reducer } from 'redux';
import { PaginationProps } from 'antd/lib/pagination';
import { BlogCommentBO, BlogArticleBO } from '@/pont/baseClass'

export class Article extends BlogArticleBO {

}

export class Comment extends BlogCommentBO {

}

export interface ArticleModelState {
  articleList?: Article[];
  articleListPagination?: PaginationProps;
  articleDetail?: Article;
  articleCommentList?: Comment[];
  articleCommentListPagination?: PaginationProps;
}

export interface ArticleModelType {
  namespace: 'article';
  state: ArticleModelState;
  effects: {
    fetchMyArticleList: Effect;
    postArticle: Effect;
    fetchArticleById: Effect;
    fetchArticleCommentList: Effect;
  };
  reducers: {
    SAVE: Reducer<ArticleModelState>;
    SAVE_PAGINATION: Reducer<ArticleModelState>;
  };
}

const ArticleModel: ArticleModelType = {
  namespace: 'article',

  state: {
    articleList: [],
    articleListPagination: {
      current: 1,
    },
    articleDetail: new Article(),
    articleCommentList: [],
    articleCommentListPagination: {
      current: 1,
    }
  },

  effects: {
    *fetchMyArticleList({ payload }, { call, put }) {
      const response = yield call(API.article.list.request, payload);
      if (!response) {
        return;
      }
      const {
        page: { total = 0 },
      } = response;
      yield put({
        type: 'SAVE',
        payload: {
          articleList: response.data || [],
        },
      });
      yield put({
        type: 'SAVE_PAGINATION',
        payload: { total },
      });
    },
    *postArticle({ payload, callback }, { call }) {
      const response = yield call(API.article.publish.request, payload);
      if (!response) {
        return;
      }
      if (callback) {
        callback(response);
      }
    },
    *fetchArticleById({ payload }, { call, put }) {
      const response = yield call(API.article.getById.request, payload);
      if (!response) {
        return;
      }
      yield put({
        type: 'SAVE',
        payload: {
          articleDetail: response.data || {}
        }
      })
    },
    *fetchArticleCommentList({ payload }, { call, put }) {
      const response = yield call(API.comment.list.request, payload);
      if (!response) {
        return;
      }
      const {
        page: { total = 0 },
      } = response;
      yield put({
        type: 'SAVE',
        payload: {
          articleCommentList: response.data || []
        }
      })
      yield put({
        type: 'SAVE_PAGINATION',
        payload: { total },
      });
    },
  },

  reducers: {
    SAVE(state, action = { type: '', payload: {} }) {
      return {
        ...state,
        ...action.payload,
      };
    },
    SAVE_PAGINATION(state = { articleListPagination: {} }, action = { type: '', payload: {} }) {
      return {
        ...state,
        articleListPagination: {
          ...state.articleListPagination,
          ...action.payload,
        },
      };
    },
  },
};

export default ArticleModel;
