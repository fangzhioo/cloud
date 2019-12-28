import { Avatar, Icon, Menu, Spin } from 'antd';
import { ClickParam } from 'antd/es/menu';
import { FormattedMessage } from 'umi-plugin-react/locale';
import React from 'react';
import { connect } from 'dva';
import router from 'umi/router';

import { ConnectProps, ConnectState } from '@/models/connect';
import { CurrentUser } from '@/models/user';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

export interface GlobalHeaderRightProps extends ConnectProps {
  currentUser?: CurrentUser;
  currentUserLoading?: boolean;
  menu?: boolean;
}

class AvatarDropdown extends React.Component<GlobalHeaderRightProps> {
  onGuestMenuClick = (event: ClickParam) => {
    const { key } = event;
    if (key === 'login') {
      router.push(`/user/login`);
    }
  };

  onMenuClick = (event: ClickParam) => {
    const { key } = event;

    if (key === 'logout') {
      const { dispatch } = this.props;
      if (dispatch) {
        dispatch({
          type: 'login/logout',
        });
      }

      return;
    }
    router.push(`/account/${key}`);
  };

  render(): React.ReactNode {
    const { currentUser = { avatar: '', username: '' }, currentUserLoading } = this.props;
    if (currentUserLoading) {
      return <Spin size="small" style={{ marginLeft: 8, marginRight: 8 }} />;
    }
    if (currentUser && currentUser.username) {
      const menuHeaderDropdown = (
        <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
          <Menu.Item key="center">
            <Icon type="user" />
            <FormattedMessage id="menu.account.center" defaultMessage="account center" />
          </Menu.Item>
          <Menu.Item key="settings">
            <Icon type="setting" />
            <FormattedMessage id="menu.account.settings" defaultMessage="account settings" />
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="logout">
            <Icon type="logout" />
            <FormattedMessage id="menu.account.logout" defaultMessage="logout" />
          </Menu.Item>
        </Menu>
      );
      return (
        <HeaderDropdown overlay={menuHeaderDropdown}>
          <span className={`${styles.action} ${styles.account}`}>
            <Avatar size="small" className={styles.avatar} src={currentUser.avatar} alt="avatar" />
            <span className={styles.name}>{currentUser.username}</span>
          </span>
        </HeaderDropdown>
      );
    }
    const guestMenuHeaderDropdown = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.onGuestMenuClick}>
        <Menu.Item key="login">
          <Icon type="user" />
          登陆
        </Menu.Item>
      </Menu>
    );

    return (
      <HeaderDropdown overlay={guestMenuHeaderDropdown}>
        <span className={`${styles.action} ${styles.account}`}>
          <Avatar
            size="small"
            className={styles.avatar}
            src="'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'"
            alt="avatar"
          />
          <span className={styles.name}>Guest</span>
        </span>
      </HeaderDropdown>
    );
  }
}
export default connect(({ user, loading }: ConnectState) => ({
  currentUser: user.currentUser,
  currentUserLoading: loading.effects['user/fetchCurrent'],
}))(AvatarDropdown);
