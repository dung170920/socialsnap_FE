import { Logo, Menu } from "@/components";
import { ArrowLeft, LogoutCurve } from "iconsax-react";
import { CollapseButton, Sider } from "./Sidebar.styles";
import { useLocation, useNavigate } from "react-router-dom";
import { SIDEBAR_LINKS } from "@/constants";
import { useAppDispatch } from "@/store";
import { logout } from "@/store/slices/authSlice";

export interface Props {
  collapsed: boolean;
  setCollapsed: (isCollapsed: boolean) => void;
}

export const Sidebar = ({ collapsed = false, setCollapsed }: Props) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} width={260}>
      <Logo
        style={{
          overflow: "hidden",
          padding: "16px 18px",
        }}
      />
      <Menu
        selectedKeys={[pathname]}
        onClick={(e) => {
          if (e.key !== "logout") {
            navigate(e.key);
          } else {
            dispatch(logout());
          }
        }}
        items={[
          ...SIDEBAR_LINKS.map((e) => {
            return {
              key: e.key,
              label: e.title,
              title: e.title,
              icon: <e.icon size={24} variant={e.key === pathname ? "Bulk" : "TwoTone"} />,
            };
          }),
          {
            key: "logout",
            danger: true,
            label: "Logout",
            icon: <LogoutCurve variant="TwoTone" />,
          },
        ]}
      />
      <CollapseButton $collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}>
        <ArrowLeft size={16} />
      </CollapseButton>
    </Sider>
  );
};
