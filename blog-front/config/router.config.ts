const router = [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        name: 'home',
        icon: 'home',
        component: './home',
      },
      {
        path: '/article',
        name: 'article',
        icon: 'book',
        component: './article/ArticleList',
      },
      {
        path: '/article/detail/:articleId',
        name: 'article-detail',
        hideInMenu: true,
        component: './article/ArticleDetail',
      },
      {
        path: '/article/publish',
        name: 'article-publish',
        hideInMenu: true,
        component: './article/ArticlePublish',
      },
      {
        // 用于测试的路由 ，发布时删除
        path: '/test',
        name: 'test',
        icon: 'pencil',
        component: './test',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/admin',
    component: '../layouts/SecurityLayout',
    authority: ['admin'],
    routes: [
      // {
      //   path: '/admin',
      //   name: 'admin',
      //   icon: 'crown',
      //   component: './Admin',
      //   authority: ['admin'],
      // },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
export default router;
