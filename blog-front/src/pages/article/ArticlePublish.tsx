import React from 'react';
import {Button, Form, Input, message} from 'antd'
import {FormComponentProps} from 'antd/es/form'
import {connect} from 'dva'
import ArticleEditor from '@/pages/article/components/ArticleEditor';
import {ConnectState} from "@/models/connect";
import {AnyAction, Dispatch} from "redux";
import {ArticleModelState,Article} from "@/models/article";
import MarkLoading from "@/components/PageLoading/MarkLoading";
import router from "umi/router";

interface Props extends FormComponentProps{
  dispatch: Dispatch<AnyAction>;
  article: ArticleModelState;
  submitting: boolean;
}

class ArticlePublish extends React.Component<Props> {

  public handleArticleSubmit = () => {
    const {form: {validateFieldsAndScroll},dispatch} = this.props;
    validateFieldsAndScroll((err,values)=>{
      if(!err){
        const { content: {raw,html,text}} = values;
        const payload: Article = {
          ...values,
          content: raw,
          htmlContent: html,
          subTitle: text.substr(0,100),
          type: values.type || 'editor',
        };
        dispatch({
          type:'article/postArticle',
          payload,
          callback: (res)=>{
             if(res.code === 10000){
               message.success("发布成功");
               router.push('/article');
             }else{
               message.error(res.message);
             }
          }
        });
      }
    })
  };

  render() {
    const {form: {getFieldDecorator},submitting} = this.props;
    return (
      <div style={{position: "relative"}}>
        {
          submitting && <MarkLoading />
        }
        <Form onSubmit={this.handleArticleSubmit}>
          <Form.Item>
            {
              getFieldDecorator('title',{
                rules:[
                  {
                    required: true,
                    message: '标题不能为空'
                  }
                ]
              })(
                <Input placeholder="标题" />
              )
            }
          </Form.Item>
          <Form.Item>
            {
              getFieldDecorator('content',{
                rules: [
                  {
                    required: true,
                    message: "内容不能为空"
                  }
                ]
              })(
                <ArticleEditor placeholder="内容" />
              )
            }
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">提交</Button>
          </Form.Item>
        </Form>

      </div>
    );
  }
}

export default connect(({ article, loading }: ConnectState) => ({
  article: article,
  submitting: loading.effects['article/postArticle'],
}))(Form.create()(ArticlePublish));
