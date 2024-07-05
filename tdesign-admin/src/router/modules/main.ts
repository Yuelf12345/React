import { lazy } from 'react';
import { HelpIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const main: IRouter[] = [
  {
    path: '/test',
    meta: {
      title: '测试',
      Icon: HelpIcon,
    },
    children: [
      {
        path: 'page',
        Component: lazy(() => import('pages/Test/Page')),
        meta: {
          title: '测试页',
        },
      }
    ],
  },
];

export default main;
