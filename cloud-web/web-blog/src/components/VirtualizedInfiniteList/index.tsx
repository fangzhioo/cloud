import React from 'react'
import { List, Avatar, Spin, message, Divider } from 'antd';

// import reqwest from 'reqwest';

import WindowScroller from 'react-virtualized/dist/commonjs/WindowScroller';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import VList from 'react-virtualized/dist/commonjs/List';
import InfiniteLoader from 'react-virtualized/dist/commonjs/InfiniteLoader';

interface VirtualizedInfiniteListProps {
  dataSource?: any[];
  loading?: boolean;
  over?: boolean;
  onInfinite?: () => void;
}

const VirtualizedInfiniteList: React.FC<VirtualizedInfiniteListProps> = ({ dataSource = [], loading = false, over = false, onInfinite = () => null }) => {

  const loadedRowsMap = {};

  const isRowLoaded = ({ index }: any) => !!loadedRowsMap[index];

  const handleInfiniteOnLoad = ({ startIndex, stopIndex }: any) => {
    for (let i = startIndex; i <= stopIndex; i++) {
      // 1 means loading
      loadedRowsMap[i] = 1;
    }

    if (over === true) {
      message.warning('list is over');
      return;
    }

    onInfinite && onInfinite();
  };

  const renderItem = ({ index, key, style }: any) => {
    const item = dataSource[index];
    return (
      <List.Item key={key} style={style}>
        <List.Item.Meta
          avatar={<Avatar src={item.picture.large} />}
          title={<a>{item.name.last}</a>}
          description={item.email}
        />
        <div>{JSON.stringify(item.name)}</div>
      </List.Item>
    );
  };

  const vlist = ({ height, isScrolling, onChildScroll, scrollTop, onRowsRendered, width }: any) => (
    <VList
      autoHeight
      height={height}
      isScrolling={isScrolling}
      onScroll={onChildScroll}
      overscanRowCount={2}
      rowCount={dataSource.length}
      rowHeight={150}
      rowRenderer={renderItem}
      onRowsRendered={onRowsRendered}
      scrollTop={scrollTop}
      width={width}
    />
  );
  const autoSize = ({ height, isScrolling, onChildScroll, scrollTop, onRowsRendered }: any) => (
    <AutoSizer disableHeight>
      {({ width }: any) =>
        vlist({
          height,
          isScrolling,
          onChildScroll,
          scrollTop,
          onRowsRendered,
          width,
        })
      }
    </AutoSizer>
  );
  const infiniteLoader = ({ height, isScrolling, onChildScroll, scrollTop }: any) => (
    <InfiniteLoader
      isRowLoaded={isRowLoaded}
      loadMoreRows={handleInfiniteOnLoad}
      rowCount={dataSource.length}
    >
      {({ onRowsRendered }: any) =>
        autoSize({
          height,
          isScrolling,
          onChildScroll,
          scrollTop,
          onRowsRendered,
        })
      }
    </InfiniteLoader>
  );

  return (
    <Spin spinning={loading}>
      <List>
        {dataSource.length > 0 && <WindowScroller>{infiniteLoader}</WindowScroller>}
      </List>
      {over === true && <Divider style={{ padding: '60px 0 100px 0' }}>没有更多内容了</Divider>}
    </Spin>
  )

}

export default VirtualizedInfiniteList;