import { useAppDispatch, useAppSelector } from "@/store";
import { useStyles } from "./Header.styles";
import { Avatar, Layout, MenuProps } from "antd";
import { ArrowDown2, LogoutCurve, Moon, Sun1, User } from "iconsax-react";
import { setTheme } from "@/store/slices/settingSlice";
import { path } from "@/constants";
import { logout } from "@/store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "@/components";

export const Header = () => {
  const { styles } = useStyles();
  const { user } = useAppSelector((state) => state.auth.data);
  const { theme } = useAppSelector((state) => state.setting);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const items: MenuProps["items"] = [
    {
      key: path.user,
      label: "Profile",
      icon: <User variant="TwoTone" />,
      onClick: () => navigate(`/user/${user?.id}`),
    },
    { type: "divider" },
    {
      ...(theme === "light"
        ? {
            key: "theme",
            label: "Dark mode",
            icon: <Moon variant="TwoTone" />,
            onClick: () => dispatch(setTheme("dark")),
          }
        : {
            key: "theme",
            label: "Light mode",
            icon: <Sun1 variant="TwoTone" />,
            onClick: () => dispatch(setTheme("light")),
          }),
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
      <Dropdown menu={{ items }} trigger={["click"]}>
        <div className={styles.profile}>
          <Avatar className={styles.avatar} src={user?.avatar} size={40}>
            {user?.name.charAt(0)}
          </Avatar>
          <div className={styles.info}>
            <h4>{user?.name}</h4>
            <span>{user?.email}</span>
          </div>
          <ArrowDown2 size="20" variant="TwoTone" />
        </div>
      </Dropdown>
    </Layout.Header>
  );
};
