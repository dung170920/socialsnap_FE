import { useAppDispatch, useAppSelector } from "@/store";
import { useStyles } from "./Header.styles";
import { Avatar, Dropdown, Layout, MenuProps } from "antd";
import { ArrowDown2, LogoutCurve, Moon } from "iconsax-react";
import { setTheme } from "@/store/slices/settingSlice";
import { profilePopoverLinks } from "@/constants";
import { logout } from "@/store/slices/authSlice";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { styles } = useStyles();
  const { user } = useAppSelector((state) => state.user);
  const { theme } = useAppSelector((state) => state.setting);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const items: MenuProps["items"] = [
    ...profilePopoverLinks.map((e) => {
      return {
        key: e.key,
        label: e.title,
        icon: <e.icon size={24} />,
        onClick: () => navigate(e.key),
      };
    }),
    { type: "divider" },
    {
      key: "theme",
      label: "Dark mode",
      icon: <Moon size={24} />,
      onClick: () => dispatch(setTheme(theme === "light" ? "dark" : "light")),
    },
    { type: "divider" },
    {
      key: "logout",
      danger: true,
      label: "Logout",
      icon: <LogoutCurve variant="TwoTone" />,
      onClick: () => dispatch(logout()),
    },
  ];

  return (
    <Layout.Header className={styles.header}>
      <Dropdown menu={{ items }} trigger={["click"]} className={styles.popoverContent}>
        <div className={styles.profile}>
          <Avatar className={styles.avatar} src={user?.avatar} size={40}>
            {user?.name.charAt(0)}
          </Avatar>
          <div className={styles.info}>
            <h4>{user?.name}</h4>
            <span>{user?.email}</span>
          </div>
          <ArrowDown2 size="20" />
        </div>
      </Dropdown>
    </Layout.Header>
  );
};
