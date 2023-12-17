import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useStyles } from "./MainLayout.styles";
import { Sidebar, Header } from "@/components";

export const MainLayout = () => {
  const { styles } = useStyles();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className={styles.wrapper}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <Header />
        <Layout.Content className={styles.content}>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
