import React from 'react';
// @ts-ignore
import InfiniteScroll from 'react-infinite-scroller';
import { List, Avatar, Space } from 'antd';
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import { Link } from 'umi';

const IconText = ({ icon, text }: any) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

class Props {
  dataSource?: defs.blog.BlogArticleVO[] = [];
  loading?: boolean = false;
  over?: boolean = false;
  onInfinite?: (page?: any) => void = () => null;
  pageStart?: number = 1;
}

const InfiniteScrollList: React.FC<Props> = (props) => {
  const { dataSource, loading, over, onInfinite, pageStart = 1 } = props;
  const handleInfiniteOnLoad = (page?: any) => {
    onInfinite && onInfinite(page);
  };

  return (
    <InfiniteScroll
      initialLoad={false}
      pageStart={pageStart}
      loadMore={handleInfiniteOnLoad}
      hasMore={!over}
      useWindow={true}
    >
      <List
        dataSource={dataSource}
        loading={loading}
        itemLayout="vertical"
        renderItem={(item: defs.blog.BlogArticleVO) => (
          <List.Item
            key={item.articleId}
            actions={[
              <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              <IconText icon={LikeOutlined} text={item.userLike} key="list-vertical-like-o" />,
              <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src={
                  item.cover
                    ? item.cover
                    : `https://i.picsum.photos/id/${item.articleId}/544/336.jpg`
                }
              />
            }
          >
            <Link to={`/article/detail?aid=${item.articleId}`}>
              <List.Item.Meta
                avatar={<Avatar src={item.authorAvatar} />}
                title={`${item.title}`}
                description={<div>{item.subtitle}</div>}
              />
              <div style={{ wordBreak: 'break-all', whiteSpace: 'normal' }}>{item.content}</div>
            </Link>
          </List.Item>
        )}
      ></List>
    </InfiniteScroll>
  );
};

export default InfiniteScrollList;
