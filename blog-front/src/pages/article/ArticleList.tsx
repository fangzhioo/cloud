import React from 'react';
import {Row, Col, Card, Divider, Tag, Button} from 'antd'
import { connect } from 'dva';
import { ConnectState } from '@/models/connect';
import { ArticleModelState } from '@/models/article';
import Articles from "@/pages/article/components/Articles";
import PageLoading from '@/components/PageLoading';
import { AnyAction, Dispatch } from 'redux';
import styles from './Article.less';
import {Link} from "umi";

interface ArticleListProps {
  article: ArticleModelState;
  loading: boolean;
  dispatch: Dispatch<AnyAction>;
}

interface ArticleListState {}

class ArticleList extends React.Component<ArticleListProps, ArticleListState> {
  state: ArticleModelState = {};

  componentDidMount(): void {
    const { dispatch } = this.props;
    dispatch({
      type: 'article/fetchMyArticleList',
      payload: {},
    });
  }

  render():
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | string
    | number
    | {}
    | React.ReactNodeArray
    | React.ReactPortal
    | boolean
    | null
    | undefined {
    const {
      article: { articleList = [] },
      loading,
    } = this.props;
    if (loading) {
      return <PageLoading />;
    }
    return (
      <div style={{padding: 24}}>
        <Row gutter={24}>
          <Col lg={17} md={24}>
            <Card
              className={styles.tabsCard}
              bordered={false}
            >
              <Articles list={articleList}/>
            </Card>
          </Col>
          <Col lg={7} md={24}>
            <Card bordered={false} style={{ marginBottom: 24 }} >
              <div>
                <div className={styles.avatarHolder}>
                  <img alt="" src={"https://fangzhioo.oss-cn-hangzhou.aliyuncs.com/blog/images/27/20191224/dafa8c8b5b754168ab18381b8178450e.jpeg"} />
                  <div className={styles.name}>{"Kirito"}</div>
                  <div>{"海纳百川，有容乃大"}</div>
                </div>
                <div className={styles.detail}>
                  <p>
                    <i className={styles.title} />
                    前端开发
                  </p>
                  <p>
                    <i className={styles.group} />
                    阿里巴巴－某某平台部－前端开发
                  </p>
                  <p>
                    <i className={styles.address} />
                    浙江省 杭州市
                  </p>
                </div>
                <Divider dashed />
                <div className={styles.tags}>
                  <div className={styles.tagsTitle}>标签</div>
                  {["想法","科学","技术"].map(item => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
                <Divider style={{ marginTop: 16 }} dashed />
                <div className={styles.team}>
                  <div className={styles.teamTitle}>精选</div>
                  <ul>
                    <li>Generating unique operation named: publishUsingPOST_1</li>
                    <li>Generating unique operation named: publishUsingPOST_1</li>
                    <li>Generating unique operation named: publishUsingPOST_1</li>
                    <li>Generating unique operation named: publishUsingPOST_1</li>
                  </ul>
                </div>
                <Divider style={{ marginTop: 16 }} dashed />
                <div>
                  <Link to={`/article/publish`}><Button>发布文章</Button></Link>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default connect(({ article, loading }: ConnectState) => ({
  article: article,
  loading: loading.effects['article/fetchMyArticleList'],
}))(ArticleList);
