import { Menu as AntdMenu, MenuProps } from "antd";
import { useStyles } from "./Menu.styles";

export interface IMenuProps extends MenuProps {
  size?: "lg" | "sm";
}

export const Menu = ({ size = "lg", ...props }: IMenuProps) => {
  const { styles } = useStyles({ size });
  return <AntdMenu className={styles.menu} mode="inline" {...props} />;
};
