import { Menu as AntdMenu, MenuProps } from "antd";
import { useStyles } from "./Menu.styles";

export interface IMenuProps extends MenuProps {}

export const Menu = ({ ...props }: IMenuProps) => {
  const { styles } = useStyles();
  return <AntdMenu className={styles.menu} mode="inline" {...props} />;
};
