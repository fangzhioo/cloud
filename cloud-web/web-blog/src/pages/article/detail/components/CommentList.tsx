import React, { Component, useState, createElement, Fragment } from 'react';
import { Avatar, Comment, Tooltip } from 'antd';
import './CommentList.css';
import { CommentProps } from 'antd/lib/comment';
import { LikeFilled, LikeOutlined } from '@ant-design/icons';
import moment from 'moment';

const mockData = [
  {
    id: 1,
    author: '桐人',
    content: ' We supply a series of design principles, practical pattern Axure).',
    reply: [
      {
        id: 2,
        author: '鸣人',
        content: ' We supply a series of design principles, ign resources (Sketch and Axure).',
        reply: [],
      },
      {
        id: 3,
        author: '佐助',
        content: ' We supply a series of design princquality design resources (Sketch and Axure).',
        reply: [],
      },
    ],
  },
  {
    id: 4,
    author: '悟空',
    content: ' We supply a series of design principles, practical patterns  Axure).',
    reply: [
      {
        id: 5,
        author: '佐助',
        content: ' We supply a series of design principles, practical paSketch and Axure).',
        reply: [
          {
            id: 6,
            author: '佐助',
            content:
              ' We supply ractical patterns and high quality design resources (Sketch and Axure).',
            reply: [],
          },
        ],
      },
    ],
  },
];

class ICommentProps {
  dataSource?: any = {};
}

const IComment: React.FC<ICommentProps & Partial<CommentProps>> = (props) => {
  const [liked, setLiked] = useState(false);
  const { dataSource, ...restProps } = props;
  const { author, likes = 0, content, avatar } = dataSource;
  const handleLiked = () => {
    setLiked(!liked);
  };
  const actions = [
    <span key="comment-basic-like">
      <Tooltip title={liked ? '取消' : '点赞'}>
        {createElement(liked ? LikeFilled : LikeOutlined, {
          onClick: handleLiked,
        })}
      </Tooltip>
      <span className="comment-action">{liked ? likes + 1 : likes}</span>
    </span>,
    <span key="comment-basic-reply-to">回复</span>,
  ];

  const datetime = (
    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
      <span>{moment().fromNow()}</span>
    </Tooltip>
  );

  return (
    <Comment
      avatar={
        <Avatar src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} alt="" />
      }
      author={author}
      content={content}
      actions={actions}
      datetime={datetime}
      {...restProps}
    />
  );
};
const ExampleComment: React.FC<{}> = () => (
  <Fragment>
    {mockData.map((item) => (
      <IComment key={`${item.id}`} dataSource={item}>
        {item.reply &&
          item.reply.length > 0 &&
          item.reply.map((cell) => <IComment key={`${item.id}-${cell.id}`} dataSource={cell} />)}
      </IComment>
    ))}
  </Fragment>
);

export default class CommentList extends Component {
  render() {
    return (
      <div className="article-comments-wapper">
        <ExampleComment />
      </div>
    );
  }
}
