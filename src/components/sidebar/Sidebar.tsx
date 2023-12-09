import { Logo } from "@/components";
import { ArrowLeft } from "iconsax-react";
import { CollapseButton, Info, Profile, Sider } from "./Sidebar.styles";
import { Avatar, Divider, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { SIDEBAR_LINKS } from "@/constants";
import { useAppSelector } from "@/store";

export interface Props {
  collapsed: boolean;
  setCollapsed: (isCollapsed: boolean) => void;
}

export const Sidebar = ({ collapsed = false, setCollapsed }: Props) => {
  const { user } = useAppSelector((state) => state.user);
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
      <Profile>
        <Avatar src={user?.avatar} size={48}>
          {user?.name.charAt(0)}
        </Avatar>
        <Info>
          <h4>{user?.name}</h4>
          <span>{user?.email}</span>
        </Info>
      </Profile>
      <Divider />
      <Menu
        mode="inline"
        selectedKeys={[pathname]}
        onClick={(e) => navigate(e.key)}
        items={SIDEBAR_LINKS.map((e) => {
          return {
            key: e.key,
            label: e.title,
            title: e.title,
            icon: <e.icon size={24} variant={e.key === pathname ? "Bold" : "Linear"} />,
          };
        })}
      />
      <CollapseButton $collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}>
        <ArrowLeft size={16} />
      </CollapseButton>
    </Sider>
  );
};
