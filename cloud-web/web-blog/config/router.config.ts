import { IRoute } from 'umi';

const routers = [
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
        component: './404',
      },
    ]
  },
  {
    path: '/',
    component: '@/layouts/BlankLayout',
    routes: [
      {
        path: '/',
        component: '@/layouts/BasicLayout',
        routes: [
          {
            path: '/',
            redirect: '/welcome',
          },
          {
            path: '/welcome',
            name: 'welcome',
            icon: 'smile',
            component: './Welcome',
          },
          {
            component: './404',
          },
        ],
      },

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