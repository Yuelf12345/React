import { lazy, Suspense } from "react";
import {
  HomeOutlined,
  FileOutlined,
  FrownOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Navigate } from "react-router-dom";

const modules = import.meta.glob('../views/**/*.{tsx,jsx,ts,js}');

// 懒加载
const lazyLoad = (comp: string) => {
  // 确保路径格式正确
  const modulePath = `../views/${comp}.tsx`;
  const modulePathAlt = `../views/${comp}/index.tsx`;

  let loader: () => Promise<{ default: React.ComponentType<any> }>;
  if (modules[modulePath]) {
    loader = modules[modulePath] as () => Promise<{ default: React.ComponentType<any> }>;
  } else if (modules[modulePathAlt]) {
    loader = modules[modulePathAlt] as () => Promise<{ default: React.ComponentType<any> }>;
  } else {
    // 默认加载 404 组件
    loader = modules['../views/404.tsx'] as () => Promise<{ default: React.ComponentType<any> }>;
  }
  const LazyComponent = lazy(loader);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};

const Layout = lazy(() => import("@/layout/index"));

// 路由配置
export interface RouteItem {
  title: string;
  path: string;
  element: JSX.Element;
  icon?: JSX.Element;
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
        title: "Store",
        path: "/store",
        icon: <FileOutlined />,
        element: <Navigate to="/Store/page1" />,
        children: [
          {
            title: "page1",
            path: "/store/page1",
            icon: <FileOutlined />,
            element: lazyLoad("Store/page1"),
          },
          {
            title: "page2",
            path: "/store/page2",
            icon: <FileOutlined />,
            element: lazyLoad("Store/page2"),
          },
        ],
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
            element: lazyLoad("Hooks/useState"),
          },
          {
            title: "useEffect",
            path: "/hooks/useEffect",
            icon: <FileOutlined />,
            element: lazyLoad("Hooks/useEffect"),
          },
          {
            title: "useContext",
            path: "/hooks/useContext",
            icon: <FileOutlined />,
            element: lazyLoad("Hooks/useContext"),
          },
          {
            title: "useReducter",
            path: "/hooks/useReducter",
            icon: <FileOutlined />,
            element: lazyLoad("Hooks/useReducter"),
          },
          {
            title: "useLayoutEffect",
            path: "/hooks/useLayoutEffect",
            icon: <FileOutlined />,
            element: lazyLoad("Hooks/useLayoutEffect"),
          },
          {
            title: "useCallback",
            path: "/hooks/useCallback",
            icon: <FileOutlined />,
            element: lazyLoad("Hooks/useCallback"),
          },
          {
            title: "useMemo",
            path: "/hooks/useMemo",
            icon: <FileOutlined />,
            element: lazyLoad("Hooks/useMemo"),
          },
          {
            title: "useImperativeHandle",
            path: "/hooks/useImperativeHandle",
            icon: <FileOutlined />,
            element: lazyLoad("Hooks/useImperativeHandle"),
          },
          {
            title: "useDeferredValue",
            path: "/hooks/useDeferredValue",
            icon: <FileOutlined />,
            element: lazyLoad("Hooks/useDeferredValue"),
          },
          {
            title: "useRef",
            path: "/hooks/useRef",
            icon: <FileOutlined />,
            element: lazyLoad("Hooks/useRef"),
          },
        ],
      },
      {
        title: "Router",
        path: "/router",
        icon: <FileOutlined />,
        element: <Navigate to="/learn/className" />,
        children: [
          {
            title: "useSearchParams",
            path: "/router/useSearchParams",
            icon: <FileOutlined />,
            element: lazyLoad("Router/useSearchParams"),
          }
        ]
      },
      {
        title: "Learn",
        path: "/learn",
        icon: <FileOutlined />,
        element: <Navigate to="/learn/className" />,
        children: [
          {
            title: "className",
            path: "/learn/className",
            icon: <FileOutlined />,
            element: lazyLoad("Learn/ClassName"),
          },
          {
            title: "CountDown",
            path: "/learn/CountDown",
            icon: <FileOutlined />,
            element: lazyLoad("Learn/CountDown"),
          },
          {
            title: "Game",
            path: "/learn/Game",
            icon: <FileOutlined />,
            element: lazyLoad("Learn/Game"),
          },
          {
            title: "LifeCycle",
            path: "/learn/LifeCycle",
            icon: <FileOutlined />,
            element: lazyLoad("Learn/LifeCycle"),
          },
          {
            title: "Parent",
            path: "/learn/Parent",
            icon: <FileOutlined />,
            element: lazyLoad("Learn/Parent"),
          },
          {
            title: "props",
            path: "/learn/Props",
            icon: <FileOutlined />,
            element: lazyLoad("Learn/Props"),
          }
        ]
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
