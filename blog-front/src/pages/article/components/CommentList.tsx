import React from "react";
import {Card, Divider} from "antd"
import {Comment} from "@/models/article";
import {CardProps} from "antd/es/card";
import CommentCard from "@/pages/article/components/CommentCard";

interface CommentListProps extends CardProps{
  data?: Comment[];
  onAgree?: (comment: Comment)=> void;

}

class CommentList extends React.Component<CommentListProps>{
  static defaultProps:CommentListProps = {
    data: []
  };

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const {
      data = [],
      onAgree,
      ...restProps
    } = this.props;
    return (
      <Card {...restProps}>
        {
          data.length === 0 ? <div>No Comments!</div> : data.map(item=> (
            <div key={item.id}>
              <CommentCard data={item} />
              <Divider/>
            </div>
          ))
        }
      </Card>
    );
  }
}

export default CommentList;
