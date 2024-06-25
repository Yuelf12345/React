import { lazy, Suspense } from "react";
import {
  HomeOutlined,
  FileOutlined,
  FrownOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Navigate } from "react-router-dom";
// 懒加载
const lazyLoad = (comp: string) => {
  const LazyComponent = lazy(() => import(`../views/${comp}`));
  return (
    <Suspense fallback={<div>Loding...</div>}>
      <LazyComponent />
    </Suspense>
  );
};

const Layout = lazy(() => import("../layout/index"));

// 路由配置
export interface RouteItem {
  title: string;
  path: string;
  element: JSX.Element;
  icon?: any;
  hidden?: boolean;
  children?: RouteItem[];
}

const router: RouteItem[] = [
  {
    title: "",
    path: "/",
    element: <Layout />,
    children: [
      {
        title: "首页",
        path: "/home",
        icon: <HomeOutlined />,
        element: lazyLoad("home"),
      },
      {
        title: "页面1",
        path: "/page1",
        icon: <FileOutlined />,
        element: lazyLoad("page1"),
      },
      {
        title: "页面2",
        path: "/page2",
        icon: <FileOutlined />,
        element: <Navigate to="/page2_1" />,
        children: [
          {
            title: "页面2_1",
            path: "/page2_1",
            icon: <FileOutlined />,
            element: lazyLoad("page2_1"),
          },
          {
            title: "页面2_2",
            path: "/page2_2",
            icon: <FileOutlined />,
            element: lazyLoad("page2_2"),
          },
        ],
      },
      {
        title: "登录",
        path: "/login",
        icon: <LinkedinOutlined />,
        element: lazyLoad("login"),
      },
      {
        title: "404",
        path: "*",
        icon: <FrownOutlined />,
        element: lazyLoad("404"),
      },
    ],
  },
];

export default router;
