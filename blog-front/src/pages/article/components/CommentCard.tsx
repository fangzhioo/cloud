import React from "react";
import {Avatar, Card} from "antd"
import {Comment} from "@/models/article";
import {CardProps} from "antd/es/card";


interface CommentCardProps extends CardProps{
  data?: Comment;
  onAgree?: (comment: Comment)=> void;

}

class CommentCard extends React.Component<CommentCardProps>{
  static defaultProps:CommentCardProps = {
    data: {}
  };

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const {
      data:{id,content,agree,author,authorAvatar},
      onAgree,
      ...restProps
    } = this.props;
    return (
      <Card {...restProps}>
        <Avatar src={authorAvatar}/>
        <div>{author}</div>
        <div>{content}</div>
        <div>{agree}</div>
      </Card>
    );
  }
}

export default CommentCard;
