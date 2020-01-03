import React from 'react';
import { Avatar } from 'antd';

import styles from './index.less';

export interface ApplicationsProps {
  data: {
    subTitle?: string;
    authorAvatar?: string;
    authorName?: string;
    authorId?: string;
    createdTime? : string;
  };
}
const ArticleListContent: React.FC<ApplicationsProps> = ({
  data: { subTitle, authorAvatar, authorName, authorId, createdTime },
}) => (
  <div className={styles.listContent}>
    <div className={styles.description}>{subTitle}</div>
    <div className={styles.extra}>
      <Avatar src={authorAvatar} size="small" />
      <a>{authorName}</a> 发布于 <em>{createdTime}</em>
    </div>
  </div>
);

export default ArticleListContent;
