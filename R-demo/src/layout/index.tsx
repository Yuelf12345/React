import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import router from "@/router"; // 引入路由配置
import { Routes, Route, useNavigate } from "react-router-dom";
import style from "./index.module.scss";
const { Header, Sider, Content } = Layout;
export interface RouteItem {
  title: string;
  path: string;
  element: JSX.Element;
  icon?: any;
  hidden?: boolean;
  children?: RouteItem[];
}
function renderNestedRoutes(routes: RouteItem[]): JSX.Element[] {
  return routes.flatMap((route) => {
    const routeElement = (
      <Route key={route.path} path={route.path} element={route.element} />
    );
    if (route.children) {
      return [routeElement, ...renderNestedRoutes(route.children)];
    }
    return [routeElement];
  });
}

function generateMenuItems(routes: RouteItem[]): any[] {
  // 注意这里的any类型可以根据实际情况细化
  return routes.map((route) => {
    const { path, icon, title } = route;
    let children = null;

    if (route.children && route.children.length > 0) {
      children = generateMenuItems(route.children);
    }

    return {
      key: path,
      icon: icon || undefined, // 如果没有指定图标，则留空
      label: title,
      children,
    };
  });
}

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  const handleMenuClick = (e: any) => {
    navigate(e.key);
  };

  return (
    <Layout className={style.layout}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={handleMenuClick}
          items={generateMenuItems(router[1]?.children || [])}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>{renderNestedRoutes(router[1]?.children || [])}</Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
