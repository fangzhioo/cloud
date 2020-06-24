import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Link } from 'umi';
import './index.css';
import { Carousel, Typography } from 'antd';

const imageApi = `https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1`;
const imageWeek = `https://api.xygeng.cn/Bing/week/`;

const HomePage: React.FC<{}> = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(imageWeek, {
      // mode: 'no-cors',
      // headers: new Headers({
      //   'Content-Type': 'application/json',
      // }),
    })
      .then((res: any) => {
        if (res) {
          if (res.status >= 200 && res.status < 300) {
            return res.json();
          }
        }
        return null;
      })
      .then((res) => {
        if (res && res.data) {
          setImages(res.data);
        }
      });
  }, []);

  const imgs = _.map(images, (item: any) => (
    <div className="image-cell" key={item}>
      <img src={item} alt="" width="100%" height="100%" />
    </div>
  ));

  return (
    <div className="home-page">
      <div className="page-container">
        <Link to="/article">文章</Link>
      </div>
      <Carousel className="one-image" effect="fade" autoplay dots={false}>
        {imgs}
      </Carousel>
    </div>
  );
};

export default HomePage;
