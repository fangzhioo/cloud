import React from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import { List, Avatar, Space } from 'antd';
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import {Link} from 'umi';

const IconText = ({ icon, text }: any) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

interface InfiniteScrollListProps {
  dataSource?: any[];
  loading?: boolean;
  over?: boolean;
  onInfinite?: () => void;
}

const InfiniteScrollList: React.FC<InfiniteScrollListProps> = ({ dataSource = [], loading = false, over = false, onInfinite = () => null }) => {

  const handleInfiniteOnLoad = () => {
    onInfinite && onInfinite();
  };

  return (
    <InfiniteScroll
      initialLoad={false}
      pageStart={0}
      loadMore={handleInfiniteOnLoad}
      hasMore={!over}
      useWindow={true}
    >
      <List
        dataSource={dataSource}
        loading={loading}
        itemLayout="vertical"
        renderItem={(item: any) => (
          <List.Item
            key={item.email}
            actions={[
              <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
              <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src={`https://i.picsum.photos/id/${item.dob.age}/544/336.jpg`}
              />
            }
          >
            <Link to={`/article/detail?aid=4`}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.thumbnail} />}
                title={`${item.name.title} ${item.name.first} ${item.name.last}`}
                description={<div>{item.registered.date}</div>}
              />
              <div style={{ wordBreak: 'break-all', whiteSpace: 'normal' }}>
                {JSON.stringify(item.location)}
              </div>
            </Link>
          </List.Item>
        )}
      >
      </List>
    </InfiniteScroll>
  )
}

export default InfiniteScrollList;
