import React, { useState, useEffect } from 'react'
import VirtualizedInfiniteList from '@/components/VirtualizedInfiniteList';

const fakeDataUrl = 'https://randomuser.me/api/?results=5';

const Text: React.FC<{}> = () => {
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
    <div>
      <VirtualizedInfiniteList dataSource={data} loading={loading} over={data.length > 300} onInfinite={handleInfinite} />
    </div>
  )
}


export default Text;