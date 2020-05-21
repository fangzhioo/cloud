import { Effect, Reducer } from 'umi';

export class CurrentUser {
  userId?: string;
  userName?: string;
  nickName?: string = 'guest';
  avatar?: string = '';
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
  };
}

const UserModel: UserModelType = {
  namespace: 'user',

  state: {
    currentUser: new CurrentUser(),
  },

  effects: {
    *fetchCurrent(_, { call, put }) {
      const response = yield call(API.blog.user.currentUser.request, {});
      if (response) {
        yield put({
          type: 'saveCurrentUser',
          payload: response.data,
        });
      }
    },
  },

  reducers: {
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload || {},
      };
    },
  },
};

export default UserModel;
