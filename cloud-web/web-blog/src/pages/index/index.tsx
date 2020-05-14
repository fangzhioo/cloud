import React, { useState, useEffect } from 'react'
import { BackTop, Card } from 'antd';
import InfiniteScrollList from '@/components/InfiniteScrollList';

const fakeDataUrl = 'https://randomuser.me/api/?results=10';

const HomePage: React.FC<{}> = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInfinite = () => {
    // handleInfinite
    console.log('handleInfinite');
    setLoading(true);
    fetch(fakeDataUrl, {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => {
      return res.json();
    }).then(resJson => {
      const newData = data.concat(resJson.results);
      setData(newData);
      setLoading(false);
    })
  }

  useEffect(() => {
    handleInfinite()
  }, [])

  return (
    <Card bordered={false}>
      <BackTop />
      <InfiniteScrollList dataSource={data} loading={loading} over={data.length > 100} onInfinite={handleInfinite} />
    </Card>
  )
}


export default HomePage;