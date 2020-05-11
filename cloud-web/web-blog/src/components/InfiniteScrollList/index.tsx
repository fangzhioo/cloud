import React from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import { List, Avatar } from 'antd';

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
        renderItem={(item: any) => (
          <List.Item key={item.email}>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a href="https://ant.design">{item.name.last}</a>}
              description={item.email}
            />
            <div>Content</div>
          </List.Item>
        )}
      >
      </List>
    </InfiniteScroll>
  )
}

export default InfiniteScrollList;