import React from 'react';
import {connect} from 'dva';
import {Article} from "@/models/article";
import {ConnectProps, ConnectState} from "@/models/connect";
import 'braft-editor/dist/output.css';
import {message, Divider} from "antd";
import {Comment} from "@/models/article";
import CommentList from "@/pages/article/components/CommentList";

interface Props extends ConnectProps{
  articleDetail: Article;
  articleCommentList: Comment[];
  loading: boolean;
}
class ArticleDetail extends React.Component<Props> {
  componentDidMount(): void {
    // @ts-ignore
    const {dispatch,match:{ params: { articleId }}} = this.props;
    if(articleId !== undefined){
      dispatch({
        type: 'article/fetchArticleById',
        payload: {id: articleId}
      })
      dispatch({
        type: 'article/fetchArticleCommentList',
        payload: {articleId}
      })
    }else{
      message.warning('找不到指定文章');
    }

  }

  render(){
    const {
      articleDetail:{
        title,
        subTitle,
        htmlContent,
      },
      articleCommentList = []
    } = this.props;
    return (
      <div style={{ padding: 24 }}>
        <h1 dangerouslySetInnerHTML={{__html: title}} />
        <Divider />
        <p dangerouslySetInnerHTML={{__html: subTitle}} />
        <Divider />
        <section dangerouslySetInnerHTML={{__html: htmlContent}} />
        <Divider />
        <CommentList data={articleCommentList} />
      </div>
    );
  }
}

export default connect(({article,loading}: ConnectState) => ({
  articleDetail: article.articleDetail,
  articleCommentList: article.articleCommentList,
  loading: loading.effects['article/fetchArticleById']
}))(ArticleDetail);
