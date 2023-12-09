import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Content, MainWrapper } from "./MainLayout.styles";
import { Sidebar, Header } from "@/components";

export const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <MainWrapper>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <Header />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </MainWrapper>
  );
};
