import { Logo, Menu } from "@/components";
import { ArrowLeft } from "iconsax-react";
import { useStyles } from "./Sidebar.styles";
import { useLocation, useNavigate } from "react-router-dom";
import { path, sidebarLinks } from "@/constants";
import { useAppDispatch } from "@/store";
import { logout } from "@/store/slices/authSlice";
import { Layout } from "antd";

export interface Props {
  collapsed: boolean;
  setCollapsed: (isCollapsed: boolean) => void;
}

export const Sidebar = ({ collapsed = false, setCollapsed }: Props) => {
  const { styles } = useStyles({ collapsed });
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const selected = pathname.substring(1);

  return (
    <Layout.Sider className={styles.sidebar} trigger={null} collapsible collapsed={collapsed} width={260}>
      <Logo
        style={{
          overflow: "hidden",
          padding: "16px 18px",
        }}
      />
      <Menu
        selectedKeys={[selected]}
        onClick={(e) => {
          if (e.key !== path.logout) {
            navigate(e.key);
          } else {
            dispatch(logout());
          }
        }}
        items={sidebarLinks.map((e) => {
          return {
            key: e.key,
            label: e.title,
            title: e.title,
            icon: <e.icon size={24} variant={e.key === selected ? "Bulk" : "TwoTone"} />,
          };
        })}
      />
      <button className={styles.collapseButton} onClick={() => setCollapsed(!collapsed)}>
        <ArrowLeft size={16} variant="TwoTone" />
      </button>
    </Layout.Sider>
  );
};
