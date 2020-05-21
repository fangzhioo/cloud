class AliyunOssAntdPolicyBo {
  /** accessId */
  accessId = '';

  /** dir */
  dir = '';

  /** expire */
  expire = undefined;

  /** host */
  host = '';

  /** policy */
  policy = '';

  /** signature */
  signature = '';
}

class BlogArticleDTO {
  /** cid */
  cid = undefined;

  /** content */
  content = '';

  /** cover */
  cover = '';

  /** editor */
  editor = '';

  /** editorContent */
  editorContent = '';

  /** editorTheme */
  editorTheme = '';

  /** id */
  id = undefined;

  /** subtitle */
  subtitle = '';

  /** title */
  title = '';
}

class BlogArticleQuery {
  /** current */
  current = undefined;

  /** limit */
  limit = undefined;

  /** offset */
  offset = undefined;

  /** pageSize */
  pageSize = undefined;
}

class BlogArticleVO {
  /** articleId */
  articleId = undefined;

  /** authorAvatar */
  authorAvatar = '';

  /** authorId */
  authorId = undefined;

  /** authorNickname */
  authorNickname = '';

  /** cid */
  cid = undefined;

  /** content */
  content = '';

  /** cover */
  cover = '';

  /** editor */
  editor = '';

  /** editorTheme */
  editorTheme = '';

  /** gmtCreate */
  gmtCreate = '';

  /** gmtModified */
  gmtModified = '';

  /** status */
  status = undefined;

  /** subtitle */
  subtitle = '';

  /** title */
  title = '';

  /** userLike */
  userLike = undefined;
}

class CommonResult {
  /** code */
  code = undefined;

  /** data */
  data = undefined;

  /** msg */
  msg = '';
}

class CommonResultAliyunOssAntdPolicyBo {
  /** code */
  code = undefined;

  /** data */
  data = new AliyunOssAntdPolicyBo();

  /** msg */
  msg = '';
}

class CommonResultBlogArticleVO {
  /** code */
  code = undefined;

  /** data */
  data = new BlogArticleVO();

  /** msg */
  msg = '';
}

class CommonResultInteger {
  /** code */
  code = undefined;

  /** data */
  data = undefined;

  /** msg */
  msg = '';
}

class CommonResultListBlogArticleVO {
  /** code */
  code = undefined;

  /** data */
  data = [];

  /** msg */
  msg = '';
}

export const blog = {
  AliyunOssAntdPolicyBo,
  BlogArticleDTO,
  BlogArticleQuery,
  BlogArticleVO,
  CommonResult,
  CommonResultAliyunOssAntdPolicyBo,
  CommonResultBlogArticleVO,
  CommonResultInteger,
  CommonResultListBlogArticleVO,
};
