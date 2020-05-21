type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace blog {
    export class AliyunOssAntdPolicyBo {
      /** accessId */
      accessId?: string;

      /** dir */
      dir?: string;

      /** expire */
      expire?: number;

      /** host */
      host?: string;

      /** policy */
      policy?: string;

      /** signature */
      signature?: string;
    }

    export class BlogArticleDTO {
      /** cid */
      cid?: number;

      /** content */
      content?: string;

      /** cover */
      cover?: string;

      /** editor */
      editor?: string;

      /** editorContent */
      editorContent?: string;

      /** editorTheme */
      editorTheme?: string;

      /** id */
      id?: number;

      /** subtitle */
      subtitle?: string;

      /** title */
      title?: string;
    }

    export class BlogArticleQuery {
      /** current */
      current?: number;

      /** limit */
      limit?: number;

      /** offset */
      offset?: number;

      /** pageSize */
      pageSize?: number;
    }

    export class BlogArticleVO {
      /** articleId */
      articleId?: number;

      /** authorAvatar */
      authorAvatar?: string;

      /** authorId */
      authorId?: number;

      /** authorNickname */
      authorNickname?: string;

      /** cid */
      cid?: number;

      /** content */
      content?: string;

      /** cover */
      cover?: string;

      /** editor */
      editor?: string;

      /** editorTheme */
      editorTheme?: string;

      /** gmtCreate */
      gmtCreate?: string;

      /** gmtModified */
      gmtModified?: string;

      /** status */
      status?: number;

      /** subtitle */
      subtitle?: string;

      /** title */
      title?: string;

      /** userLike */
      userLike?: number;
    }

    export class CommonResult {
      /** code */
      code?: number;

      /** data */
      data?: object;

      /** msg */
      msg?: string;
    }

    export class CommonResultAliyunOssAntdPolicyBo {
      /** code */
      code?: number;

      /** data */
      data?: defs.blog.AliyunOssAntdPolicyBo;

      /** msg */
      msg?: string;
    }

    export class CommonResultBlogArticleVO {
      /** code */
      code?: number;

      /** data */
      data?: defs.blog.BlogArticleVO;

      /** msg */
      msg?: string;
    }

    export class CommonResultInteger {
      /** code */
      code?: number;

      /** data */
      data?: number;

      /** msg */
      msg?: string;
    }

    export class CommonResultListBlogArticleVO {
      /** code */
      code?: number;

      /** data */
      data?: Array<defs.blog.BlogArticleVO>;

      /** msg */
      msg?: string;
    }
  }
}

declare namespace API {
  export namespace blog {
    /**
     *
     */
    export namespace aliyunOss {
      /**
       * undefined
       * /api/aliyun/antdPolicy
       */
      export namespace antdPolicy {
        export class Params {}

        export type Response = defs.blog.CommonResultAliyunOssAntdPolicyBo;

        export const init: Response;

        export function request({}: { params?: Params }): Promise<Response>;
      }
    }

    /**
     *
     */
    export namespace blogArticle {
      /**
       * undefined
       * /api/article/getArticleById
       */
      export namespace getArticleById {
        export class Params {
          /** articleId */
          articleId: any;
        }

        export type Response = defs.blog.CommonResultBlogArticleVO;

        export const init: Response;

        export function request({
          params,
        }: {
          params: Params;
        }): Promise<Response>;
      }

      /**
       * undefined
       * /api/article/listArticleByQuery
       */
      export namespace listArticleByQuery {
        export class Params {
          /** query */
          query: defs.blog.BlogArticleQuery;
        }

        export type Response = defs.blog.CommonResultListBlogArticleVO;

        export const init: Response;

        export function request({
          params,
        }: {
          params: Params;
        }): Promise<Response>;
      }

      /**
       * undefined
       * /api/article/publishArticle
       */
      export namespace publishArticle {
        export class Params {}

        export type Response = defs.blog.CommonResultInteger;

        export const init: Response;

        export function request({}: { params?: Params }): Promise<Response>;
      }
    }

    /**
     *
     */
    export namespace user {
      /**
       * undefined
       * /api/currentUser
       */
      export namespace currentUser {
        export class Params {}

        export type Response = defs.blog.CommonResult;

        export const init: Response;

        export function request({}: { params?: Params }): Promise<Response>;
      }
    }
  }
}
