import React, { Component } from 'react';
import { Link } from 'umi';

export default class PageNav extends Component {
  render() {
    return (
      <div style={{ position: 'absolute', zIndex: 100 }}>
        <Link style={{ backgroundColor: 'none' }} to="/article">
          返回列表
        </Link>
      </div>
    );
  }
}
