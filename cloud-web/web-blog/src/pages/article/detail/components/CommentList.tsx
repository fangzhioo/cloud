import React, { Component } from 'react';
import { Avatar, Comment } from 'antd';

const ExampleComment = ({ children }: any) => (
  <Comment
    actions={[<span key="comment-nested-reply-to">Reply to</span>]}
    author={<a>Han Solo</a>}
    avatar={
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    }
    content={
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure).
      </p>
    }
  >
    {children}
  </Comment>
);

export default class CommentList extends Component {
  render() {
    return (
      <div>
        <ExampleComment>
          <ExampleComment>
            <ExampleComment />
            <ExampleComment />
          </ExampleComment>
        </ExampleComment>
      </div>
    );
  }
}
