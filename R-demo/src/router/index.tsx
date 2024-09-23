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
  const LazyComponent = lazy(
    () => import(/* @vite-ignore */ `../views/${comp}`)
  );
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
    title: "Root Redirect",
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    title: "",
    path: "",
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
        title: "Hooks",
        path: "/hooks",
        icon: <FileOutlined />,
        element: <Navigate to="/hooks/useState" />,
        children: [
          {
            title: "useState",
            path: "/hooks/useState",
            icon: <FileOutlined />,
            element: lazyLoad("useState"),
          },
          {
            title: "useEffect",
            path: "/hooks/useEffect",
            icon: <FileOutlined />,
            element: lazyLoad("useEffect"),
          },
          {
            title: "useContext",
            path: "/hooks/useContext",
            icon: <FileOutlined />,
            element: lazyLoad("useContext"),
          },
          {
            title: "useReducter",
            path: "/hooks/useReducter",
            icon: <FileOutlined />,
            element: lazyLoad("useReducter"),
          },
          {
            title: "useLayoutEffect",
            path: "/hooks/useLayoutEffect",
            icon: <FileOutlined />,
            element: lazyLoad("useLayoutEffect"),
          },
          {
            title: "useCallback",
            path: "/hooks/useCallback",
            icon: <FileOutlined />,
            element: lazyLoad("useCallback"),
          },
          {
            title: "useMemo",
            path: "/hooks/useMemo",
            icon: <FileOutlined />,
            element: lazyLoad("useMemo"),
          },
          {
            title: "useImperativeHandle",
            path: "/hooks/useImperativeHandle",
            icon: <FileOutlined />,
            element: lazyLoad("useImperativeHandle"),
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
