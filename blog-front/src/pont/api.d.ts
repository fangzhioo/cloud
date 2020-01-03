type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export class BasePages {
    /** code */
    code?: number;

    /** data */
    data?: object;

    /** message */
    message?: string;

    /** page */
    page?: defs.PageBo;
  }

  export class BaseResult {
    /** code */
    code?: number;

    /** data */
    data?: object;

    /** message */
    message?: string;
  }

  export class BlogArticleBO {
    /** allowComment */
    allowComment?: boolean;

    /** allowFeed */
    allowFeed?: boolean;

    /** allowPing */
    allowPing?: boolean;

    /** authorAvatar */
    authorAvatar?: string;

    /** authorId */
    authorId?: number;

    /** authorName */
    authorName?: string;

    /** categories */
    categories?: string;

    /** commentsNum */
    commentsNum?: number;

    /** content */
    content?: string;

    /** createdTime */
    createdTime?: string;

    /** hits */
    hits?: number;

    /** htmlContent */
    htmlContent?: string;

    /** id */
    id?: number;

    /** status */
    status?: string;

    /** subTitle */
    subTitle?: string;

    /** tags */
    tags?: string;

    /** title */
    title?: string;

    /** type */
    type?: string;

    /** updateTime */
    updateTime?: string;
  }

  export class BlogCategoryBO {
    /** cateId */
    cateId?: number;

    /** desc */
    desc?: string;

    /** name */
    name?: string;

    /** parentId */
    parentId?: number;

    /** sort */
    sort?: number;

    /** type */
    type?: string;
  }

  export class BlogCommentBO {
    /** agree */
    agree?: number;

    /** articleId */
    articleId?: number;

    /** author */
    author?: string;

    /** authorAvatar */
    authorAvatar?: string;

    /** authorId */
    authorId?: number;

    /** content */
    content?: string;

    /** createdTime */
    createdTime?: string;

    /** id */
    id?: number;

    /** ip */
    ip?: string;

    /** mail */
    mail?: string;

    /** ownerId */
    ownerId?: number;

    /** parentId */
    parentId?: number;

    /** status */
    status?: string;
  }

  export class BlogConfigBO {
    /** createdEmp */
    createdEmp?: string;

    /** id */
    id?: number;

    /** key */
    key?: string;

    /** lastEmp */
    lastEmp?: string;

    /** value */
    value?: string;
  }

  export class BlogFileBO {
    /** fileName */
    fileName?: string;

    /** ossKey */
    ossKey?: string;

    /** owner */
    owner?: number;

    /** url */
    url?: string;
  }

  export class BlogUserBO {
    /** activated */
    activated?: number;

    /** avatar */
    avatar?: string;

    /** email */
    email?: string;

    /** groupName */
    groupName?: string;

    /** homeUrl */
    homeUrl?: string;

    /** logged */
    logged?: number;

    /** nickName */
    nickName?: string;

    /** uid */
    uid?: number;

    /** username */
    username?: string;
  }

  export class BlogUserLoginBO {
    /** password */
    password?: string;

    /** remeberMe */
    remeberMe?: boolean;

    /** userName */
    userName?: string;
  }

  export class ModelAndView {
    /** empty */
    empty?: boolean;

    /** model */
    model?: object;

    /** modelMap */
    modelMap?: ObjectMap<any, object>;

    /** reference */
    reference?: boolean;

    /** status */
    status?: any;

    /** view */
    view?: defs.View;

    /** viewName */
    viewName?: string;
  }

  export class PageBo {
    /** current */
    current?: number;

    /** pageSize */
    pageSize?: number;

    /** total */
    total?: number;
  }

  export class View {
    /** contentType */
    contentType?: string;
  }
}

declare namespace API {
  /**
   * 文章前端接口
   */
  export namespace article {
    /**
     * delete
     * /server/article/delete
     */
    export namespace remove {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.BaseResult;
      export const init: Response;
      export function request(params: Params): Promise<defs.BaseResult>;
    }

    /**
     * getById
     * /server/article/getById
     */
    export namespace getById {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.BaseResult;
      export const init: Response;
      export function request(params: Params): Promise<defs.BaseResult>;
    }

    /**
     * list
     * /server/article/list
     */
    export namespace list {
      export class Params {
        /** current */
        current?: number;
        /** pageSize */
        pageSize?: number;
        /** authorId */
        authorId?: number;
      }

      export type Response = defs.BasePages;
      export const init: Response;
      export function request(params: Params): Promise<defs.BasePages>;
    }

    /**
     * publish
     * /server/article/publish
     */
    export namespace publish {
      export class Params {}

      export type Response = defs.BaseResult;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.BlogArticleBO,
      ): Promise<defs.BaseResult>;
    }

    /**
     * update
     * /server/article/update
     */
    export namespace update {
      export class Params {}

      export type Response = defs.BaseResult;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.BlogArticleBO,
      ): Promise<defs.BaseResult>;
    }
  }

  /**
   * 登陆系统
   */
  export namespace auth {
    /**
     * getCaptcha
     * /server/auth/getCaptcha
     */
    export namespace getCode {
      export class Params {
        /** phone */
        phone: string;
      }

      export type Response = defs.BaseResult;
      export const init: Response;
      export function request(params: Params): Promise<defs.BaseResult>;
    }

    /**
     * login
     * /server/auth/login
     */
    export namespace login {
      export class Params {}

      export type Response = defs.BaseResult;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.BlogUserLoginBO,
      ): Promise<defs.BaseResult>;
    }

    /**
     * logout
     * /server/auth/logout
     */
    export namespace logout {
      export class Params {}

      export type Response = defs.BaseResult;
      export const init: Response;
      export function request(params: Params): Promise<defs.BaseResult>;
    }

    /**
     * register
     * /server/auth/register
     */
    export namespace register {
      export class Params {
        /** username */
        username?: string;
        /** password */
        password?: string;
        /** phone */
        phone?: string;
        /** code */
        code?: string;
      }

      export type Response = defs.BaseResult;
      export const init: Response;
      export function request(params: Params): Promise<defs.BaseResult>;
    }
  }

  /**
   * 类别标签管理
   */
  export namespace category {
    /**
     * 添加分类节点
     * /server/cate/create
     */
    export namespace create {
      export class Params {}

      export type Response = defs.BaseResult;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.BlogCategoryBO,
      ): Promise<defs.BaseResult>;
    }

    /**
     * 删除分类节点
     * /server/cate/delete
     */
    export namespace remove {
      export class Params {
        /** cateId */
        cateId: number;
      }

      export type Response = defs.BaseResult;
      export const init: Response;
      export function request(params: Params): Promise<defs.BaseResult>;
    }

    /**
     * 根据节点id获取子类
     * /server/cate/get
     */
    export namespace list {
      export class Params {
        /** parentId */
        parentId?: number;
      }

      export type Response = defs.BaseResult;
      export const init: Response;
      export function request(params: Params): Promise<defs.BaseResult>;
    }

    /**
     * 获取节点详情
     * /server/cate/getCateById
     */
    export namespace get {
      export class Params {
        /** cateId */
        cateId: number;
      }

      export type Response = defs.BaseResult;
      export const init: Response;
      export function request(params: Params): Promise<defs.BaseResult>;
    }

    /**
     * update cate
     * /server/cate/update
     */
    export namespace update {
      export class Params {}

      export type Response = defs.BaseResult;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.BlogCategoryBO,
      ): Promise<defs.BaseResult>;
    }
  }

  /**
   * 评论前端接口
   */
  export namespace comment {
    /**
     * delete
     * /server/comment/delete
     */
    export namespace remove {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.BaseResult;
      export const init: Response;
      export function request(params: Params): Promise<defs.BaseResult>;
    }

    /**
     * list by article
     * /server/comment/list
     */
    export namespace list {
      export class Params {
        /** current */
        current?: number;
        /** pageSize */
        pageSize?: number;
        /** articleId */
        articleId?: number;
        /** parentId */
        parentId?: number;
        /** status */
        status?: string;
      }

      export type Response = defs.BasePages;
      export const init: Response;
      export function request(params: Params): Promise<defs.BasePages>;
    }

    /**
     * publish comment
     * /server/comment/publish
     */
    export namespace publish {
      export class Params {}

      export type Response = defs.BaseResult;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.BlogCommentBO,
      ): Promise<defs.BaseResult>;
    }
  }

  /**
   * 文件管理
   */
  export namespace file {
    /**
     * async
     * /server/file/async
     */
    export namespace asyncFile {
      export class Params {}

      export type Response = defs.BaseResult;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.BlogFileBO,
      ): Promise<defs.BaseResult>;
    }

    /**
     * delete
     * /server/file/delete
     */
    export namespace deleteFile {
      export class Params {
        /** ossKey */
        ossKey: string;
      }

      export type Response = defs.BaseResult;
      export const init: Response;
      export function request(params: Params): Promise<defs.BaseResult>;
    }

    /**
     * list
     * /server/file/list
     */
    export namespace list {
      export class Params {
        /** current */
        current?: number;
        /** pageSize */
        pageSize?: number;
      }

      export type Response = defs.BaseResult;
      export const init: Response;
      export function request(params: Params): Promise<defs.BaseResult>;
    }

    /**
     * 获取aliyun OSS上传签名
     * /server/file/policy
     */
    export namespace policy {
      export class Params {}

      export type Response = defs.BaseResult;
      export const init: Response;
      export function request(params: Params): Promise<defs.BaseResult>;
    }

    /**
     * upload
     * /server/file/upload
     */
    export namespace uploadFile {
      export class Params {
        /** file */
        file: File;
      }

      export type Response = defs.BaseResult;
      export const init: Response;
      export function request(params: Params): Promise<defs.BaseResult>;
    }
  }

  /**
   * Main Controller
   */
  export namespace main {
    /**
     * index
     * /
     */
    export namespace index {
      export class Params {}

      export type Response = defs.ModelAndView;
      export const init: Response;
      export function request(params: Params): Promise<defs.ModelAndView>;
    }
  }

  /**
   * 系统配置
   */
  export namespace sysConf {
    /**
     * create
     * /server/sys/create
     */
    export namespace create {
      export class Params {}

      export type Response = defs.BaseResult;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.BlogConfigBO,
      ): Promise<defs.BaseResult>;
    }

    /**
     * getByKey
     * /server/sys/getByKey
     */
    export namespace getByKey {
      export class Params {
        /** key */
        key: string;
      }

      export type Response = defs.BaseResult;
      export const init: Response;
      export function request(params: Params): Promise<defs.BaseResult>;
    }

    /**
     * list
     * /server/sys/list
     */
    export namespace list {
      export class Params {
        /** current */
        current?: number;
        /** pageSize */
        pageSize?: number;
        /** key */
        key?: string;
      }

      export type Response = defs.BasePages;
      export const init: Response;
      export function request(params: Params): Promise<defs.BasePages>;
    }

    /**
     * update
     * /server/sys/update
     */
    export namespace update {
      export class Params {}

      export type Response = defs.BaseResult;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.BlogConfigBO,
      ): Promise<defs.BaseResult>;
    }
  }

  /**
   * 用户前端接口
   */
  export namespace user {
    /**
     * currentUser
     * /server/user/current
     */
    export namespace currentUser {
      export class Params {}

      export type Response = defs.BaseResult;
      export const init: Response;
      export function request(params: Params): Promise<defs.BaseResult>;
    }

    /**
     * notices
     * /server/user/notices
     */
    export namespace notices {
      export class Params {}

      export type Response = defs.BaseResult;
      export const init: Response;
      export function request(params: Params): Promise<defs.BaseResult>;
    }

    /**
     * update
     * /server/user/update
     */
    export namespace updateUser {
      export class Params {}

      export type Response = defs.BaseResult;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.BlogUserBO,
      ): Promise<defs.BaseResult>;
    }
  }
}
