import { Effect, Reducer } from 'umi';

const defaultUserId = window.userId === '' ? undefined : window.userId;
const defaultNickName = window.nickName;
const defaultAvatar = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAIAAAC2BqGFAAAA6UlEQVR42u3ZSQ0AIAwAQfwHXCAQCWjghjCbCmjn21C0pYAANGiBBg1aoEELNOimYsrdAxo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo06HnQIwefwrpzZ9CgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCg/4MuDwYaNGjQoEGDBg0aNGjQoEGDBg0aNGjQoEGDBg0aNGitCTRo0AINGjQC0KAFGjRogQYt0KBBCzRogX4T2nPWFxw0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRr039CaFWjQoAUaNGgEoEEL9LVVrh8hMtqyYHgAAAAASUVORK5CYII=`;
export class CurrentUser {
  userId?: number | string = defaultUserId;
  userName?: string;
  nickName?: string = defaultNickName;
  avatar?: string = defaultAvatar;
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
