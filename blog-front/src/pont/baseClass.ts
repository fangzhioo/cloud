export class BasePages {
  /** code */
  code = undefined;

  /** data */
  data = undefined;

  /** message */
  message = '';

  /** page */
  page = new PageBo();
}

export class BaseResult {
  /** code */
  code = undefined;

  /** data */
  data = undefined;

  /** message */
  message = '';
}

export class BlogArticleBo {
  /** allowComment */
  allowComment = false;

  /** allowFeed */
  allowFeed = false;

  /** allowPing */
  allowPing = false;

  /** authorId */
  authorId = undefined;

  /** authorName */
  authorName = '';

  /** categories */
  categories = '';

  /** commentsNum */
  commentsNum = undefined;

  /** content */
  content = '';

  /** createdTime */
  createdTime = '';

  /** hits */
  hits = undefined;

  /** htmlContent */
  htmlContent = '';

  /** id */
  id = undefined;

  /** status */
  status = '';

  /** subTitle */
  subTitle = '';

  /** tags */
  tags = '';

  /** title */
  title = '';

  /** type */
  type = '';

  /** updateTime */
  updateTime = '';
}

export class BlogCommentBo {
  /** agree */
  agree = undefined;

  /** articleId */
  articleId = undefined;

  /** author */
  author = '';

  /** authorAvatar */
  authorAvatar = '';

  /** authorId */
  authorId = undefined;

  /** content */
  content = '';

  /** createdTime */
  createdTime = '';

  /** id */
  id = undefined;

  /** ip */
  ip = '';

  /** mail */
  mail = '';

  /** ownerId */
  ownerId = undefined;

  /** parentId */
  parentId = undefined;

  /** status */
  status = '';
}

export class BlogConfigBo {
  /** createdEmp */
  createdEmp = '';

  /** id */
  id = undefined;

  /** key */
  key = '';

  /** lastEmp */
  lastEmp = '';

  /** value */
  value = '';
}

export class BlogFileBo {
  /** fileName */
  fileName = '';

  /** ossKey */
  ossKey = '';

  /** owner */
  owner = undefined;

  /** url */
  url = '';
}

export class BlogUserBo {
  /** activated */
  activated = undefined;

  /** avatar */
  avatar = '';

  /** email */
  email = '';

  /** groupName */
  groupName = '';

  /** homeUrl */
  homeUrl = '';

  /** logged */
  logged = undefined;

  /** nickName */
  nickName = '';

  /** uid */
  uid = undefined;

  /** username */
  username = '';
}

export class BlogUserLoginBo {
  /** password */
  password = '';

  /** remeberMe */
  remeberMe = false;

  /** userName */
  userName = '';
}

export class ModelAndView {
  /** empty */
  empty = false;

  /** model */
  model = undefined;

  /** modelMap */
  modelMap = undefined;

  /** reference */
  reference = false;

  /** status */
  status = undefined;

  /** view */
  view = new View();

  /** viewName */
  viewName = '';
}

export class PageBo {
  /** current */
  current = undefined;

  /** pageSize */
  pageSize = undefined;

  /** total */
  total = undefined;
}

export class View {
  /** contentType */
  contentType = '';
}
