import { IRoute } from 'umi';

const routers = [
  {
    path: '/',
    exact: true,
    component: '@/layouts/FullLayout',
    routes: [
      {
        path: '/',
        name: 'home',
        icon: 'home',
        component: './index',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/test',
    component: '@/layouts/TestLayout',
    routes: [
      {
        path: '/test',
        name: 'test',
        component: './test',
      },
      {
        path: '/test/mdnice',
        name: 'mdnice',
        exact: true,
        component: './test/mdnice',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      {
        path: '/article',
        name: 'article',
        exact: true,
        icon: 'book',
        component: './article/list',
      },
      {
        path: '/article/detail',
        exact: true,
        component: './article/detail',
      },
      {
        path: '/publish',
        name: 'publish',
        exact: true,
        icon: 'edit',
        component: './article/publish',
      },
      // {
      //   path: '/lib',
      //   name: 'lib',
      //   icon: 'book',
      //   component: './lib/fzmd',
      // },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
] as IRoute[];

export default routers;
