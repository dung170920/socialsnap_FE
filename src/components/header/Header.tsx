import { useAppDispatch, useAppSelector } from "@/store";
import { useStyles } from "./Header.styles";
import { Avatar, Button, Layout } from "antd";
import { ArrowDown2 } from "iconsax-react";
import { setTheme } from "@/store/slices/settingSlice";

export const Header = () => {
  const { styles } = useStyles();
  const { user } = useAppSelector((state) => state.user);
  const { theme } = useAppSelector((state) => state.setting);
  const dispatch = useAppDispatch();

  return (
    <Layout.Header className={styles.header}>
      <Button onClick={() => dispatch(setTheme(theme === "light" ? "dark" : "light"))}>Theme: {theme}</Button>
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
    </Layout.Header>
  );
};
