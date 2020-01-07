/*
 * @Author: fz
 * @Date: 2019-12-28 20:20:32
 * @LastEditTime: 2020-01-07 21:08:37
 * @LastEditors: fz
 * @Description: description
 */
import { Effect } from 'dva';
import { Reducer } from 'redux';
import { BlogUserBO } from '@/pont/baseClass'

export class CurrentUser extends BlogUserBo {
  notifyCount?: number;
  unreadCount?: number;
  avatar?: string;
}

export interface UserModelState {
  currentUser?: CurrentUser;
}

export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    fetchCurrent: Effect;
  };
  reducers: {
    saveCurrentUser: Reducer<UserModelState>;
    changeNotifyCount: Reducer<UserModelState>;
  };
}

const UserModel: UserModelType = {
  namespace: 'user',

  state: {
    currentUser: {},
  },

  effects: {
    *fetchCurrent(_, { call, put }) {
      const response = yield call(API.user.currentUser.request);
      yield put({
        type: 'saveCurrentUser',
        payload: response.data,
      });
    },
  },

  reducers: {
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload || {},
      };
    },
    changeNotifyCount(
      state = {
        currentUser: {},
      },
      action,
    ) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount || 15,
          unreadCount: action.payload.unreadCount || 10,
          avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        },
      };
    },
  },
};

export default UserModel;
