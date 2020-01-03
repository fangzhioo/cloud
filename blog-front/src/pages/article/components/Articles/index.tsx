import { Icon, List, Tag } from 'antd';
import React, { Component } from 'react';
import ArticleListContent from '../ArticleListContent';
import styles from './index.less';
import {Article} from "@/models/article";
import Link from "umi/link";

export interface Props {
  list: Article[]
}

class Articles extends Component<Props> {
  render() {
    const { list = [] } = this.props;
    const IconText: React.FC<{
      type: string;
      text: React.ReactNode;
    }> = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );
    return (
      <List
        size="large"
        className={styles.articleList}
        rowKey="id"
        itemLayout="vertical"
        dataSource={list}
        renderItem={item => (
          <List.Item
            key={item.id}
            actions={[
              <IconText key="star" type="star-o" text={item.hits} />,
              <IconText key="like" type="like-o" text={item.hits} />,
              <IconText key="message" type="message" text={item.commentsNum} />,
            ]}
          >
            <List.Item.Meta
              title={
                <Link to={`/article/detail/${item.id}`}>
                  {item.title}
                </Link>
              }
              description={
                <span>
                  <Tag>想法</Tag>
                  <Tag>动画</Tag>
                  <Tag>技术</Tag>
                </span>
              }
            />
            <ArticleListContent data={item} />
          </List.Item>
        )}
      />
    );
  }
}

export default Articles;
