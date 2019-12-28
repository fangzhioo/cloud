import React from 'react';
import { Article } from '@/models/article';
import { Card, Avatar } from 'antd';
import Link from "umi/link";

const { Meta } = Card;

interface Props {
  data?: Article;
}

class ArticleCard extends React.Component<Props> {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null {
    const { data: { title = '', categories = '',id = 0 } = {} } = this.props;
    return (
      <Link to={`/article/detail/${id}`}>
        <Card
          hoverable
          bordered={false}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
        >
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={title}
            description={categories}
          />
        </Card>
      </Link>
    );
  }
}

export default ArticleCard;
