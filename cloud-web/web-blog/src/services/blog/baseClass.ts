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
  data = new AliyunOssAntdPolicyBo();

  /** msg */
  msg = '';
}

export const blog = {
  AliyunOssAntdPolicyBo,
  BlogArticleDTO,
  BlogArticleVO,
  CommonResult,
};
